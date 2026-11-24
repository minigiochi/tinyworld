/* Client MQTT 3.1.1 minimale su WebSocket (QoS 0, retain, will). Nessuna dipendenza.
 * Serve solo per elenco stanze pubbliche e scambio dei codici di connessione. */
(function (g) {
  'use strict';
  var TE = new TextEncoder(), TD = new TextDecoder();
  function utf(s) { var b = TE.encode(s); return [b.length >> 8, b.length & 255].concat(Array.from(b)); }
  function varlen(n) { var o = []; do { var d = n % 128; n = Math.floor(n / 128); if (n > 0) d |= 128; o.push(d); } while (n > 0); return o; }
  function pkt(type, flags, body) { return new Uint8Array([(type << 4) | flags].concat(varlen(body.length), body)); }

  function MQ(urls, opts) {
    this.urls = [].concat(urls); this.opts = opts || {}; this.ws = null; this.buf = new Uint8Array(0); this.pid = 1; this.up = false; this.closed = false; this.timer = null;
    this.onmessage = null; this.onup = null; this.ondown = null; this.url = null;
    this.cid = 'dba' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  }
  MQ.prototype.connect = function () {
    var self = this, i = 0;
    return new Promise(function (resolve, reject) {
      function next() {
        if (self.closed) return reject(new Error('chiuso'));
        if (i >= self.urls.length) return reject(new Error('Nessun server disponibile'));
        var url = self.urls[i++], done = false, ws;
        var to = setTimeout(function () { if (!done) { done = true; try { ws.close(); } catch (e) {} next(); } }, 6000);
        try { ws = new WebSocket(url, 'mqtt'); } catch (e) { clearTimeout(to); return next(); }
        ws.binaryType = 'arraybuffer';
        ws.onopen = function () {
          var flags = 0x02, w = self.opts.will, body;
          if (w) { var wp = Array.from(TE.encode(w.payload)); flags |= 0x04 | (w.retain ? 0x20 : 0); body = utf('MQTT').concat([4], [flags], [0, 30], utf(self.cid), utf(w.topic), [wp.length >> 8, wp.length & 255], wp); }
          else body = utf('MQTT').concat([4], [flags], [0, 30], utf(self.cid));
          ws.send(pkt(1, 0, body));
        };
        ws.onmessage = function (e) {
          var d = new Uint8Array(e.data), nb = new Uint8Array(self.buf.length + d.length); nb.set(self.buf); nb.set(d, self.buf.length); self.buf = nb;
          while (self.buf.length >= 2) {
            var m = 1, len = 0, mul = 1, b;
            do { if (m >= self.buf.length) return; b = self.buf[m++]; len += (b & 127) * mul; mul *= 128; } while (b & 128 && m < 5);
            if (self.buf.length < m + len) return;
            var type = self.buf[0] >> 4, flags = self.buf[0] & 15, body = self.buf.slice(m, m + len); self.buf = self.buf.slice(m + len);
            if (type === 2) { if (body[1] === 0) { if (!done) { done = true; clearTimeout(to); self.ws = ws; self.url = url; self.up = true; self._keep(); resolve(self); self.onup && self.onup(); } } else { if (!done) { done = true; clearTimeout(to); next(); } } }
            else if (type === 3) { var tl = (body[0] << 8) | body[1], topic = TD.decode(body.slice(2, 2 + tl)), p = 2 + tl; if ((flags >> 1) & 3) p += 2; try { self.onmessage && self.onmessage(topic, TD.decode(body.slice(p)), !!(flags & 1)); } catch (x) { console.error('mqtt msg', x); } }
          }
        };
        ws.onclose = function () { clearTimeout(to); if (!done) { done = true; return next(); } if (self.ws === ws) { self.up = false; clearInterval(self.timer); self.ondown && self.ondown(); } };
        ws.onerror = function () {};
      }
      next();
    });
  };
  MQ.prototype._keep = function () { var s = this; clearInterval(this.timer); this.timer = setInterval(function () { if (s.up) try { s.ws.send(new Uint8Array([0xC0, 0])); } catch (e) {} }, 20000); };
  MQ.prototype.sub = function (topic) { if (!this.up) return; var id = this.pid++ & 0xffff || 1; this.ws.send(pkt(8, 2, [id >> 8, id & 255].concat(utf(topic), [0]))); };
  MQ.prototype.unsub = function (topic) { if (!this.up) return; var id = this.pid++ & 0xffff || 1; this.ws.send(pkt(10, 2, [id >> 8, id & 255].concat(utf(topic)))); };
  MQ.prototype.pub = function (topic, payload, retain) {
    if (!this.up) return; var pb = Array.from(TE.encode(payload == null ? '' : payload));
    var body = utf(topic).concat(pb); this.ws.send(pkt(3, retain ? 1 : 0, body));
  };
  MQ.prototype.close = function () { this.closed = true; clearInterval(this.timer); try { if (this.up) this.ws.send(new Uint8Array([0xE0, 0])); this.ws && this.ws.close(); } catch (e) {} this.up = false; };
  g.MQLite = MQ;
})(window);
