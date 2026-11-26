#!/usr/bin/env python3
# Genera src/data/skillTree.json: per ogni classe 10 abilità imparate ogni 3 livelli (3..30) + 1 ultimate (liv. 10).
# Ogni abilità è un'abilità "dual" (danno + effetti) con nome, icona, vfx e parametri propri.
import json, sys

PW = lambda i: 1 + 0.05 * i   # potenza crescente con il livello di apprendimento

# ---------- modelli (template) ----------
# ritorna dict con: dmg, fx, parametri, cd, ic
def T(code, i, vfx):
    p = PW(i)
    r = {}
    if code == 'BU': r = dict(cd=9, dmg=round(1.3 * p, 2), fx=[], ic='💥')
    elif code == 'NK': r = dict(cd=18, dmg=round(2.0 * p, 2), fx=[], ic='☄️')
    elif code == 'EX': r = dict(cd=14, dmg=round(0.8 * p, 2), exec=1.8, fx=[], ic='🎯')
    elif code == 'DT': r = dict(cd=12, dmg=round(0.35 * p, 2), fx=['dot'], dm=round(0.5 * p, 2), dt=7, ic='☠️')
    elif code == 'LS': r = dict(cd=11, dmg=round(0.9 * p, 2), fx=['lifesteal'], ls=0.45, ic='🩸')
    elif code == 'HS': r = dict(cd=15, dmg=round(0.4 * p, 2), fx=['haste'], ic='⚡')
    elif code == 'WK': r = dict(cd=13, dmg=round(0.6 * p, 2), fx=['weaken'], wk=0.25, ic='🕸️')
    elif code == 'RL': r = dict(cd=17, dmg=round(0.3 * p, 2), fx=['atkAll'], ap=0.22, ic='📣')
    elif code == 'MU': r = dict(cd=8, dmg=round(1.1 * p, 2), fx=[], hits=4, ic='⚔️')
    elif code == 'MN': r = dict(cd=16, dmg=round(0.4 * p, 2), fx=['manaSelf'], mp=26, ic='💧')
    elif code == 'GD': r = dict(cd=12, dmg=round(0.5 * p, 2), fx=['self'], red=0.45, ic='🛡️')
    elif code == 'BR': r = dict(cd=10, dmg=round(0.7 * p, 2), fx=['dot'], dm=0.4, dt=4, ic='🌪️')
    # --- tank ---
    elif code == 'SL': r = dict(cd=8, dmg=round(1.0 * p, 2), fx=['taunt'], tt=5, ic='🔨')
    elif code == 'BW': r = dict(cd=19, fx=['bubbleAll', 'taunt'], tt=3, ic='🏰')
    elif code == 'MD': r = dict(cd=16, fx=['selfHeal', 'self'], sh=0.25, red=0.3, ic='💚')
    elif code == 'TN': r = dict(cd=10, dmg=round(0.8 * p, 2), fx=['self', 'taunt'], red=0.5, tt=4, ic='🌵')
    elif code == 'RY': r = dict(cd=22, fx=['atkAll', 'bubbleAll'], ap=0.2, ic='🚩')
    elif code == 'TW': r = dict(cd=12, dmg=round(0.6 * p, 2), fx=['weaken', 'taunt'], wk=0.25, tt=4, ic='😠')
    elif code == 'GR': r = dict(cd=11, fx=['allyShield', 'self'], red=0.4, ic='🤝')
    elif code == 'LC': r = dict(cd=13, dmg=round(0.9 * p, 2), fx=['lifesteal', 'taunt'], ls=0.5, tt=3, ic='🧛')
    elif code == 'QK': r = dict(cd=15, dmg=round(1.6 * p, 2), fx=['taunt'], tt=3, ic='🌋')
    elif code == 'HT': r = dict(cd=14, fx=['haste', 'taunt'], tt=3, ic='💨')
    elif code == 'FT': r = dict(cd=20, fx=['self', 'taunt'], red=0.8, tt=4, ic='🗿')
    elif code == 'AB': r = dict(cd=18, fx=['self', 'selfHeal'], red=0.6, sh=0.15, ic='🧱')
    elif code == 'DW': r = dict(cd=17, dmg=round(1.3 * p, 2), fx=['weaken'], wk=0.3, ic='⛓️')
    # --- curatori ---
    elif code == 'HB': r = dict(cd=9, fx=['heal'], hp=3.0 * p, ic='💖')
    elif code == 'HA': r = dict(cd=14, fx=['healAll'], hp=1.5 * p, ic='✨')
    elif code == 'HG': r = dict(cd=13, fx=['regenAll'], rg=0.55 * p, ic='🌱')
    elif code == 'HW': r = dict(cd=19, fx=['bubbleAll'], ic='🔰')
    elif code == 'HM': r = dict(cd=8, dmg=round(0.9 * p, 2), fx=['heal'], hp=1.4 * p, ic='☀️')
    elif code == 'HN': r = dict(cd=20, fx=['manaAll'], mp=20, ic='🔮')
    elif code == 'HT2': r = dict(cd=16, fx=['heal', 'atkAll'], hp=1.4 * p, ap=0.25, ic='🎺')
    elif code == 'HK': r = dict(cd=17, dmg=round(0.5 * p, 2), fx=['weaken', 'healAll'], wk=0.25, hp=0.9 * p, ic='🌘')
    elif code == 'HH': r = dict(cd=18, fx=['heal', 'hasteAll'], hp=1.4 * p, ic='🕊️')
    elif code == 'HC': r = dict(cd=12, fx=['heal', 'bubble'], hp=1.6 * p, ic='💫')
    elif code == 'HX': r = dict(cd=14, fx=['heal', 'regenAll'], hp=2.2 * p, rg=0.4, ic='🌿')
    elif code == 'HP': r = dict(cd=24, fx=['healAll', 'bubbleAll'], hp=1.8 * p, ic='🙏')
    elif code == 'HR': r = dict(cd=21, fx=['healAll', 'manaAll'], hp=1.1 * p, mp=12, ic='🌊')
    else: raise SystemExit('template ignoto ' + code)
    r['vfx'] = vfx
    if not r.get('dmg') and not r.get('exec'):
        r['vfx'] = 'aura'
    return r

# ---------- ultimate ----------
def U(code, vfx):
    r = {}
    if code == 'UN': r = dict(cd=30, dmg=3.0, fx=['dot'], dm=0.6, dt=8, ic='🌟')            # devastazione + danno nel tempo
    elif code == 'UE': r = dict(cd=30, dmg=2.0, exec=2.5, fx=['weaken'], wk=0.3, ic='💀')    # esecuzione + indebolimento
    elif code == 'UL': r = dict(cd=30, dmg=2.4, fx=['lifesteal', 'self'], ls=0.7, red=0.5, ic='🩸')
    elif code == 'UR': r = dict(cd=30, dmg=1.8, fx=['atkAll', 'hasteAll'], ap=0.4, ic='🏆')
    elif code == 'UM': r = dict(cd=30, dmg=2.6, fx=['manaAll', 'haste'], mp=30, ic='🌌')
    elif code == 'UW': r = dict(cd=30, dmg=2.4, fx=['weaken', 'dot'], wk=0.35, dm=0.5, dt=8, ic='🌑')
    elif code == 'UT': r = dict(cd=30, dmg=1.8, fx=['bubbleAll', 'taunt', 'atkAll'], tt=6, ap=0.2, ic='👑')
    elif code == 'UF': r = dict(cd=30, dmg=1.6, fx=['self', 'selfHeal', 'taunt', 'weaken'], red=0.8, sh=0.4, tt=6, wk=0.3, ic='🛡️')
    elif code == 'UH': r = dict(cd=30, fx=['healAll', 'regenAll', 'bubbleAll'], hp=2.4, rg=0.6, ic='🌈')
    elif code == 'UA': r = dict(cd=30, fx=['healAll', 'atkAll', 'hasteAll'], hp=1.9, ap=0.35, ic='🌅')
    elif code == 'UP': r = dict(cd=30, fx=['healAll', 'manaAll', 'bubbleAll'], hp=2.0, mp=30, ic='💠')
    else: raise SystemExit('ult ignota ' + code)
    r['vfx'] = vfx if r.get('dmg') else 'aura'
    r['ult'] = 1
    return r

# ---------- classi ----------
# classe: (vfx, [(modello, nome) x10], (ult, nome))
C = {}
# CURATORI -------------------------------------------------------------------
C['druido'] = ('aura', [('HG', 'Linfa Vitale'), ('HB', 'Abbraccio della Foresta'), ('HC', 'Corteccia Protettiva'), ('HX', 'Fioritura Improvvisa'), ('HM', 'Spina di Rovo'), ('HW', 'Muro di Edera'), ('HA', 'Pioggia di Primavera'), ('HN', 'Rugiada Lunare'), ('HH', 'Vento tra le Foglie'), ('HP', 'Ciclo delle Stagioni')], ('UH', 'Risveglio dell\'Albero Antico'))
C['monaco'] = ('aura', [('HB', 'Palmo Sereno'), ('HC', 'Respiro Interiore'), ('HG', 'Flusso del Chi'), ('HM', 'Pugno Luminoso'), ('HW', 'Postura della Gru'), ('HH', 'Passo del Vento'), ('HA', 'Onda di Armonia'), ('HN', 'Meditazione Profonda'), ('HK', 'Colpo del Silenzio'), ('HP', 'Mille Mani Gentili')], ('UA', 'Illuminazione Suprema'))
C['chierico'] = ('aura', [('HM', 'Fiamma Consacrata'), ('HB', 'Mano Divina'), ('HC', 'Veste Benedetta'), ('HT2', 'Salmo di Battaglia'), ('HA', 'Luce dell\'Alba'), ('HW', 'Cupola Sacra'), ('HX', 'Grazia Duratura'), ('HK', 'Castigo Divino'), ('HN', 'Calice Sacro'), ('HP', 'Coro Celeste')], ('UH', 'Miracolo di Luce'))
C['mago_sangue'] = ('curse', [('HM', 'Salasso'), ('HB', 'Trasfusione'), ('HC', 'Patto di Sangue'), ('HG', 'Vena Rigenerante'), ('HK', 'Macchia Cremisi'), ('HT2', 'Frenesia di Sangue'), ('HA', 'Marea Scarlatta'), ('HW', 'Crosta Cremisi'), ('HH', 'Battito Accelerato'), ('HP', 'Calice del Sangue')], ('UA', 'Eclissi Cremisi'))
C['sciamano'] = ('aura', [('HG', 'Canto degli Avi'), ('HM', 'Colpo di Totem'), ('HB', 'Spirito Lupo'), ('HC', 'Amuleto Tribale'), ('HT2', 'Tamburi di Guerra'), ('HA', 'Fuoco dello Spirito'), ('HW', 'Totem della Pietra'), ('HH', 'Danza della Pioggia'), ('HN', 'Visione Ancestrale'), ('HP', 'Grande Spirito')], ('UP', 'Tempesta degli Spiriti'))
C['alchimista'] = ('explosion', [('HM', 'Fiala Corrosiva'), ('HB', 'Tonico Rapido'), ('HC', 'Elisir di Pelle'), ('HG', 'Distillato Vitale'), ('HK', 'Gas Soporifero'), ('HN', 'Essenza di Mana'), ('HT2', 'Pozione Furente'), ('HH', 'Infuso Veloce'), ('HX', 'Panacea Lenta'), ('HR', 'Pietra Filosofale')], ('UP', 'Grande Opera'))

# TANK -----------------------------------------------------------------------
C['cavaliere'] = ('slash_big', [('SL', 'Carica del Destriero'), ('GR', 'Guardia del Fratello'), ('BW', 'Formazione a Testuggine'), ('TW', 'Sguardo Severo'), ('TN', 'Contrattacco'), ('MD', 'Respiro del Guerriero'), ('RY', 'Stendardo Reale'), ('QK', 'Calata di Spada'), ('HT', 'Galoppo'), ('FT', 'Baluardo del Regno')], ('UT', 'Giuramento del Re'))
C['barbaro'] = ('slash_big', [('SL', 'Colpo d\'Ascia Selvaggio'), ('LC', 'Sete di Sangue'), ('TN', 'Pelle di Orso'), ('TW', 'Ringhio Minaccioso'), ('QK', 'Calpestio'), ('AB', 'Ira Incassatrice'), ('HT', 'Corsa Furiosa'), ('RY', 'Grido di Guerra Tribale'), ('MD', 'Rigenerazione Selvaggia'), ('FT', 'Furia della Montagna')], ('UF', 'Furia Immortale'))
C['guardiano'] = ('ring', [('SL', 'Pugno di Roccia'), ('FT', 'Pelle di Macigno'), ('GR', 'Scudo Montano'), ('BW', 'Cerchio di Pietre'), ('AB', 'Radice Profonda'), ('QK', 'Frana'), ('DW', 'Catene di Radici'), ('MD', 'Linfa della Roccia'), ('TN', 'Spine di Granito'), ('RY', 'Risveglio del Monte')], ('UF', 'Colosso Eterno'))
C['paladino'] = ('ring', [('SL', 'Martello Sacro'), ('GR', 'Mano della Protezione'), ('MD', 'Imposizione delle Mani'), ('TW', 'Anatema'), ('BW', 'Aura di Devozione'), ('LC', 'Punizione Luminosa'), ('RY', 'Vessillo Sacro'), ('QK', 'Ira Divina'), ('AB', 'Bolla di Fede'), ('FT', 'Fortezza della Fede')], ('UT', 'Crociata Eterna'))
C['sentinella_gelo'] = ('frost', [('SL', 'Sbarra di Ghiaccio'), ('DW', 'Brina Paralizzante'), ('FT', 'Armatura di Cristallo'), ('GR', 'Riparo Nevoso'), ('TW', 'Respiro Gelido'), ('BW', 'Bufera Protettiva'), ('MD', 'Rigenerazione Glaciale'), ('QK', 'Valanga'), ('AB', 'Iceberg'), ('RY', 'Marcia Polare')], ('UF', 'Era Glaciale'))
C['vindice'] = ('slash_big', [('SL', 'Colpo di Vendetta'), ('TN', 'Spine del Rancore'), ('LC', 'Ripresa del Maltolto'), ('TW', 'Sentenza'), ('GR', 'Scudo del Debole'), ('AB', 'Resistenza Ostinata'), ('QK', 'Giustizia Rovente'), ('BW', 'Catena Protettiva'), ('RY', 'Appello alla Rivalsa'), ('FT', 'Voto Inflessibile')], ('UT', 'Giorno del Giudizio'))

# MISCHIA (melee) ------------------------------------------------------------
C['guerriero'] = ('slash', [('MU', 'Triplo Fendente'), ('GD', 'Parata e Risposta'), ('BU', 'Colpo Poderoso'), ('EX', 'Finale di Spada'), ('RL', 'Urlo di Battaglia'), ('LS', 'Lama Vorace'), ('HS', 'Impeto'), ('WK', 'Colpo alle Gambe'), ('NK', 'Fendente Spaccaossa'), ('DT', 'Taglio Profondo')], ('UN', 'Tempesta d\'Acciaio'))
C['assassino'] = ('multislash', [('EX', 'Colpo alle Spalle'), ('DT', 'Lama Avvelenata'), ('HS', 'Passo d\'Ombra'), ('MU', 'Mille Ferite'), ('WK', 'Polvere Accecante'), ('LS', 'Assorbi Vita'), ('GD', 'Velo di Fumo'), ('BU', 'Pugnale Gemello'), ('NK', 'Esecuzione Silenziosa'), ('MN', 'Concentrazione Mortale')], ('UE', 'Notte Senza Luna'))
C['gladiatore'] = ('ring', [('MU', 'Colpi dell\'Arena'), ('GD', 'Scudo del Colosseo'), ('RL', 'Ruggito della Folla'), ('BU', 'Lancia Trafiggente'), ('HS', 'Danza della Rete'), ('LS', 'Sangue sulla Sabbia'), ('EX', 'Pollice Verso'), ('WK', 'Rete Intrappolante'), ('NK', 'Tridente Spaccaossa'), ('DT', 'Ferita Aperta')], ('UR', 'Gloria dell\'Arena'))
C['berserker'] = ('slash_big', [('LS', 'Fame di Sangue'), ('BU', 'Colpo Folle'), ('HS', 'Ira Cieca'), ('MU', 'Mulinello d\'Ascia'), ('GD', 'Pelle Indurita'), ('DT', 'Ferita Sanguinante'), ('EX', 'Colpo Disperato'), ('RL', 'Ululato di Furia'), ('NK', 'Frattura'), ('WK', 'Urlo Terrificante')], ('UL', 'Furia Senza Fine'))
C['spadaccino'] = ('multislash', [('MU', 'Fioretto Veloce'), ('EX', 'Stoccata Mortale'), ('GD', 'Parata Perfetta'), ('HS', 'Passo Schermitore'), ('WK', 'Finta Ingannevole'), ('BU', 'Affondo Lungo'), ('DT', 'Punta Avvelenata'), ('LS', 'Riposta Vampirica'), ('RL', 'Saluto d\'Onore'), ('NK', 'Cento Lame')], ('UN', 'Danza delle Mille Lame'))
C['cavaliere_oscuro'] = ('curse', [('DT', 'Marchio d\'Ombra'), ('LS', 'Drenaggio Oscuro'), ('BU', 'Lama d\'Abisso'), ('WK', 'Aura di Terrore'), ('GD', 'Armatura Spettrale'), ('EX', 'Colpo della Rovina'), ('MU', 'Fendenti Neri'), ('HS', 'Cavalcata Oscura'), ('NK', 'Frantumazione Anima'), ('RL', 'Richiamo dei Dannati')], ('UW', 'Calata delle Tenebre'))
C['ninjia'] = ('multislash', [('MU', 'Shuriken Multipli'), ('HS', 'Passo Silente'), ('DT', 'Kunai Avvelenato'), ('EX', 'Colpo Vitale'), ('GD', 'Sostituzione'), ('WK', 'Bomba Fumogena'), ('BU', 'Taglio Lampo'), ('MN', 'Respiro Zen'), ('LS', 'Lama Assetata'), ('NK', 'Tecnica Segreta')], ('UE', 'Dieci Mila Ombre'))
C['boia'] = ('slash_big', [('EX', 'Colpo di Grazia'), ('DT', 'Ferro Rovente'), ('WK', 'Sguardo Spietato'), ('BU', 'Colpo di Mannaia'), ('LS', 'Tributo di Sangue'), ('GD', 'Cappuccio Nero'), ('HS', 'Passo Funebre'), ('NK', 'Taglio della Testa'), ('MU', 'Lame del Patibolo'), ('RL', 'Rullo di Tamburi')], ('UE', 'Ultima Sentenza'))

# DISTANZA ---------------------------------------------------------------------
C['arciere'] = ('projectile', [('MU', 'Triplice Freccia'), ('EX', 'Freccia Mortale'), ('HS', 'Occhio d\'Aquila'), ('DT', 'Freccia Avvelenata'), ('BR', 'Raffica di Frecce'), ('WK', 'Freccia Rallentante'), ('GD', 'Salto Indietro'), ('BU', 'Colpo Perforante'), ('MN', 'Respiro Profondo'), ('NK', 'Freccia del Cacciatore')], ('UN', 'Pioggia Infuocata'))
C['mago'] = ('explosion', [('BU', 'Dardo Arcano'), ('DT', 'Fiamma Persistente'), ('MN', 'Concentrazione Arcana'), ('GD', 'Barriera Magica'), ('BR', 'Pioggia di Meteoriti'), ('WK', 'Sfera Rallentante'), ('EX', 'Esecuzione Arcana'), ('HS', 'Magia Accelerata'), ('NK', 'Meteora'), ('RL', 'Risonanza Arcana')], ('UN', 'Apocalisse di Fuoco'))
C['stregone'] = ('curse', [('DT', 'Fiamma Infernale'), ('LS', 'Furto d\'Anima'), ('WK', 'Occhio Maledetto'), ('BU', 'Dardo del Caos'), ('GD', 'Patto Oscuro'), ('MN', 'Banchetto di Anime'), ('BR', 'Pioggia di Cenere'), ('EX', 'Condanna'), ('HS', 'Frenesia Demoniaca'), ('NK', 'Sigillo del Vuoto')], ('UW', 'Portale dell\'Abisso'))
C['necromante'] = ('curse', [('LS', 'Sussurro di Morte'), ('DT', 'Peste Strisciante'), ('WK', 'Tocco Marcescente'), ('BU', 'Lancia d\'Ossa'), ('MN', 'Banchetto di Cadaveri'), ('GD', 'Armatura d\'Ossa'), ('BR', 'Nube Sepolcrale'), ('EX', 'Falce Spettrale'), ('RL', 'Lamento dei Defunti'), ('NK', 'Esplosione di Cadavere')], ('UW', 'Danza Macabra'))
C['crio_mago'] = ('frost', [('BU', 'Freccia Gelida'), ('WK', 'Gelo Rallentante'), ('DT', 'Congelamento Lento'), ('GD', 'Corazza di Brina'), ('BR', 'Grandine'), ('MN', 'Cristallo di Mana'), ('EX', 'Frantumazione'), ('HS', 'Scivolata sul Ghiaccio'), ('NK', 'Iceberg Cadente'), ('RL', 'Vento del Nord')], ('UW', 'Inverno Eterno'))
C['fulmine_mago'] = ('lightning', [('MU', 'Scarica Multipla'), ('HS', 'Sovraccarico'), ('BU', 'Fulmine Sferzante'), ('BR', 'Pioggia Elettrica'), ('MN', 'Condensatore'), ('GD', 'Gabbia di Faraday'), ('WK', 'Scossa Paralizzante'), ('EX', 'Colpo di Tuono'), ('RL', 'Campo Magnetico'), ('NK', 'Fulmine Globulare')], ('UM', 'Occhio del Ciclone'))
C['cacciatore'] = ('projectile', [('DT', 'Dardo Velenoso'), ('MU', 'Doppia Balestra'), ('WK', 'Trappola Rallentante'), ('EX', 'Marchio del Cacciatore'), ('HS', 'Istinto Predatore'), ('GD', 'Mimetismo'), ('BU', 'Quadrello Perforante'), ('BR', 'Raffica del Branco'), ('MN', 'Pazienza'), ('NK', 'Colpo da Cecchino')], ('UE', 'Caccia Grossa'))
C['bardo'] = ('aura', [('BU', 'Nota Stridente'), ('RL', 'Canto di Guerra'), ('HS', 'Ritmo Incalzante'), ('MN', 'Pausa Musicale'), ('WK', 'Dissonanza'), ('GD', 'Melodia Protettiva'), ('BR', 'Crescendo'), ('EX', 'Nota Finale'), ('LS', 'Canzone Vampirica'), ('NK', 'Assolo Epico')], ('UR', 'Sinfonia Immortale'))
C['artefice'] = ('explosion', [('BU', 'Runa del Fulmine'), ('GD', 'Runa Scudo'), ('RL', 'Runa della Forza'), ('DT', 'Runa Ardente'), ('MN', 'Runa del Mana'), ('WK', 'Runa del Gelo'), ('HS', 'Runa della Velocità'), ('EX', 'Runa della Rovina'), ('BR', 'Runa a Catena'), ('NK', 'Runa Maestra')], ('UM', 'Forgia del Mondo'))
C['araldo'] = ('ring', [('RL', 'Squillo di Tromba'), ('BU', 'Lancia Sonora'), ('GD', 'Vessillo Difensivo'), ('HS', 'Marcia Veloce'), ('MN', 'Proclama Ispirante'), ('WK', 'Editto Spaventoso'), ('DT', 'Bandiera Infuocata'), ('EX', 'Annuncio di Rovina'), ('LS', 'Stendardo di Sangue'), ('NK', 'Grande Fanfara')], ('UR', 'Proclama della Vittoria'))
C['mistico'] = ('aura', [('BU', 'Raggio Stellare'), ('MN', 'Contemplazione'), ('GD', 'Velo Lunare'), ('DT', 'Fuoco Fatuo'), ('WK', 'Ombra Opprimente'), ('RL', 'Alba Benedicente'), ('HS', 'Equilibrio Perfetto'), ('EX', 'Zenit'), ('LS', 'Luce Vampira'), ('NK', 'Nova Cosmica')], ('UM', 'Eclissi Totale'))

ALL = ['druido', 'monaco', 'chierico', 'mago_sangue', 'cavaliere', 'barbaro', 'guardiano', 'paladino', 'guerriero', 'assassino', 'gladiatore', 'berserker', 'spadaccino', 'cavaliere_oscuro', 'ninjia', 'boia', 'arciere', 'mago', 'stregone', 'necromante', 'crio_mago', 'fulmine_mago', 'cacciatore', 'sciamano', 'alchimista', 'sentinella_gelo', 'vindice', 'bardo', 'artefice', 'araldo', 'mistico']

def desc(r):
    p = []
    if r.get('dmg'): p.append('Danno ×%s' % ('%.1f' % (r['dmg'])).replace('.', ','))
    if r.get('hits'): p.append('%d colpi' % r['hits'])
    if r.get('exec'): p.append('+%d%% se il boss è sotto il 35%%' % round(r['exec'] * 100))
    names = {
        'dot': 'danno nel tempo %ds' % r.get('dt', 6), 'lifesteal': 'ruba %d%% del danno' % round(r.get('ls', 0) * 100),
        'weaken': 'boss −%d%% danni 6s' % round(r.get('wk', .25) * 100), 'atkAll': 'attacco party +%d%% 6s' % round(r.get('ap', .25) * 100),
        'regenAll': 'rigenera il party 6s', 'manaAll': '+%d mana al party' % r.get('mp', 15), 'manaSelf': '+%d mana a te' % r.get('mp', 20),
        'selfHeal': 'curi %d%% della tua vita' % round(r.get('sh', .2) * 100), 'haste': 'velocità +50%% 6s' if False else 'tua velocità +50% 6s',
        'hasteAll': 'velocità party +35% 6s', 'taunt': 'provoca %ds' % r.get('tt', 4), 'self': 'danni −%d%% per 5s' % round(r.get('red', .5) * 100),
        'bubbleAll': 'scudo a tutto il party', 'bubble': 'scudo al ferito', 'allyShield': 'scudo al ferito', 'heal': 'cura il più ferito', 'healAll': 'cura il party'}
    for f in r.get('fx', []): p.append(names[f])
    s = ' · '.join(p)
    return s[0].upper() + s[1:] if s else ''

def build():
    out = {}
    for k in ALL:
        vfx, lst, ult = C[k]
        assert len(lst) == 10, k
        assert len(set(c for c, _ in lst)) == 10, k + ' modelli doppi'
        learn = []
        for i, (code, name) in enumerate(lst):
            r = T(code, i, vfx)
            r['name'] = name; r['kind'] = 'dual'
            r['cost'] = max(5, round(4 + r['cd'] * 0.75))
            if r.get('hp') is not None: r['hp'] = round(r['hp'], 2)
            if r.get('rg') is not None: r['rg'] = round(r['rg'], 2)
            if not r.get('dmg') and not r.get('exec') and set(r['fx']) <= {'heal', 'healAll', 'bubble', 'allyShield', 'regenAll', 'selfHeal'}: r['hurt'] = 1
            r['desc'] = desc(r)
            learn.append(r)
        u = U(ult[0], vfx); u['name'] = ult[1]; u['kind'] = 'dual'; u['cost'] = 24; u['desc'] = desc(u)
        out[k] = {'learn': learn, 'ult': u}
    return out

if __name__ == '__main__':
    d = build()
    names = [a['name'] for v in d.values() for a in v['learn'] + [v['ult']]]
    dup = {n for n in names if names.count(n) > 1}
    cls = json.load(open('src/data/classes.json'))
    base = {a['name'] for c in cls.values() for a in c['abilities']}
    ar = json.load(open('src/data/unlockByArch.json'))
    base |= {a['name'] for v in ar.values() for a in v}
    clash = set(names) & base
    assert set(d) == set(cls), set(cls) ^ set(d)
    print('classi', len(d), 'abilità', len(names), 'doppioni', dup, 'collisioni', clash)
    if dup or clash: sys.exit(1)
    json.dump(d, open('src/data/skillTree.json', 'w'), ensure_ascii=False, indent=1)
