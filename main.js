const systems = {
  sol: {
    number: "01 / 26",
    name: "Sistema<br>Solare<span>.</span>",
    shortName: "VICINATO SOLARE",
    description:
      "La nostra casa. Una stella, otto pianeti e il solo mondo finora conosciuto a ospitare la vita.",
    distance: "0,00",
    star: "G2V",
    starType: "gialla",
    count: "08",
    planets: [
      {
        name: "Mercurio",
        color: "#a9a39b",
        type: "Pianeta terrestre",
        diameter: "4.879 km",
        year: "88 giorni",
        distance: "0,39 UA",
        description:
          "Il pianeta più piccolo e veloce: un mondo roccioso, segnato da crateri, con temperature estreme.",
      },
      {
        name: "Venere",
        color: "#e7bd80",
        type: "Pianeta terrestre",
        diameter: "12.104 km",
        year: "225 giorni",
        distance: "0,72 UA",
        description:
          "Avvolto da nubi dense di acido solforico, ha la superficie più calda fra i pianeti del Sistema Solare.",
      },
      {
        name: "Terra",
        color: "#4ca6c4",
        type: "Pianeta terrestre",
        diameter: "12.742 km",
        year: "365 giorni",
        distance: "1,00 UA",
        description:
          "Un mondo oceanico nella zona abitabile del Sole. È l’unico pianeta conosciuto con vita in superficie.",
      },
      {
        name: "Marte",
        color: "#d77655",
        type: "Pianeta terrestre",
        diameter: "6.779 km",
        year: "687 giorni",
        distance: "1,52 UA",
        description:
          "Un deserto freddo con vulcani giganti, antichi letti fluviali e due minuscole lune.",
      },
      {
        name: "Giove",
        color: "#d4aa87",
        type: "Gigante gassoso",
        diameter: "139.820 km",
        year: "11,86 anni",
        distance: "5,20 UA",
        description:
          "Il gigante gassoso del sistema: la Grande Macchia Rossa è una tempesta osservata da secoli.",
      },
      {
        name: "Saturno",
        color: "#d5c29a",
        type: "Gigante gassoso",
        diameter: "116.460 km",
        year: "29,45 anni",
        distance: "9,58 UA",
        description:
          "Celebre per il suo vasto sistema di anelli, composto soprattutto da frammenti di ghiaccio e roccia.",
      },
      {
        name: "Urano",
        color: "#8fcdd0",
        type: "Gigante ghiacciato",
        diameter: "50.724 km",
        year: "84 anni",
        distance: "19,2 UA",
        description:
          "Un gigante ghiacciato con asse di rotazione fortemente inclinato e atmosfera ricca di idrogeno ed elio.",
      },
      {
        name: "Nettuno",
        color: "#5479d4",
        type: "Gigante ghiacciato",
        diameter: "49.244 km",
        year: "164,8 anni",
        distance: "30,1 UA",
        description:
          "Il pianeta maggiore più lontano dal Sole: venti supersonici attraversano la sua atmosfera blu.",
      },
    ],
  },
  alpha: {
    number: "02 / 26",
    name: "Alpha<br>Centauri<span>.</span>",
    shortName: "ALPHA CENTAURI",
    description:
      "Il sistema stellare più vicino al Sole. Tre stelle danzano insieme: una coppia simile al Sole e la nana rossa Proxima.",
    distance: "4,24",
    star: "G2V",
    starType: "tripla · A/B a 4,37 A.L.",
    count: "01",
    planets: [
      {
        name: "Proxima b",
        color: "#aa735f",
        type: "Esopianeta · zona temperata",
        diameter: "≈ 1,1 M⊕",
        year: "11,2 giorni",
        distance: "0,0485 UA",
        description:
          "Un pianeta di massa terrestre nella zona temperata di Proxima Centauri. La sua atmosfera e la sua capacità di ospitare acqua liquida non sono ancora note.",
      },
    ],
  },
  barnard: {
    number: "03 / 26",
    name: "Stella di<br>Barnard<span>.</span>",
    shortName: "STELLA DI BARNARD",
    description:
      "Una nana rossa antica e tranquilla, la stella singola più vicina al Sole. La sua luce impiega quasi sei anni per raggiungerci.",
    distance: "5,96",
    star: "M4V",
    starType: "nana rossa",
    count: "04",
    planets: [
      {
        name: "Barnard b",
        color: "#bd7259",
        type: "Esopianeta · sub-terrestre",
        diameter: "≥ 0,37 M⊕",
        year: "3,15 giorni",
        distance: "0,0229 UA",
        description:
          "Il più interno dei quattro piccoli pianeti annunciati nel 2024. Orbita molto vicino alla stella e ha una temperatura superficiale stimata intorno a 125 °C.",
      },
      {
        name: "Barnard c",
        color: "#bb876c",
        type: "Esopianeta · candidato",
        diameter: "≈ 0,4 M⊕",
        year: "4,1 giorni",
        distance: "0,03 UA",
        description:
          "Uno dei segnali planetari rilevati attorno alla nana rossa. I piccoli mondi del sistema restano oggetto di osservazioni e conferme.",
      },
      {
        name: "Barnard d",
        color: "#c3a275",
        type: "Esopianeta · candidato",
        diameter: "≈ 0,3 M⊕",
        year: "2,34 giorni",
        distance: "0,02 UA",
        description:
          "Un pianeta candidato di massa inferiore a quella terrestre, individuato nelle misure di velocità radiale.",
      },
      {
        name: "Barnard e",
        color: "#947d6e",
        type: "Esopianeta · candidato",
        diameter: "≈ 0,3 M⊕",
        year: "6,7 giorni",
        distance: "0,04 UA",
        description:
          "Il candidato più esterno del sistema segnalato nel 2024. Le caratteristiche orbitali sono ancora oggetto di studio.",
      },
    ],
  },
  wolf: {
    number: "04 / 26",
    name: "Wolf 359<span>.</span>",
    shortName: "WOLF 359",
    description:
      "Una delle stelle più piccole e deboli del vicinato. Questa nana rossa è appena visibile dalla Terra senza strumenti.",
    distance: "7,86",
    star: "M6V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  lalande: {
    number: "05 / 26",
    name: "Lalande<br>21185<span>.</span>",
    shortName: "LALANDE 21185",
    description:
      "Una nana rossa relativamente vicina nella costellazione dell’Orsa Maggiore, osservata e studiata fin dall’Ottocento.",
    distance: "8,31",
    star: "M2V",
    starType: "nana rossa",
    count: "02",
    planets: [
      {
        name: "Lalande 21185 b",
        color: "#c38c62",
        type: "Esopianeta · super-Terra",
        diameter: "≈ 2,7 M⊕",
        year: "12,95 giorni",
        distance: "0,079 UA",
        description:
          "Una super-Terra calda, confermata con il metodo della velocità radiale. Completa un’orbita in meno di due settimane.",
      },
      {
        name: "Lalande 21185 c",
        color: "#d3aa82",
        type: "Esopianeta · candidato",
        diameter: "≈ 14 M⊕",
        year: "8,6 anni",
        distance: "≈ 2,9 UA",
        description:
          "Un pianeta candidato più distante dalla sua stella, la cui conferma e i parametri orbitali sono ancora in discussione.",
      },
    ],
  },
  sirius: {
    number: "06 / 26",
    name: "Sirio<span>.</span>",
    shortName: "SIRIO",
    description:
      "La stella più brillante del cielo notturno. Sirio A e la nana bianca Sirio B orbitano l’una attorno all’altra.",
    distance: "8,60",
    star: "A1V",
    starType: "bianca",
    count: "00",
    planets: [],
  },
  luyten726: {
    number: "07 / 26",
    name: "Luyten 726-8<span>.</span>",
    shortName: "LUYTEN 726-8",
    description:
      "Una coppia stretta di nane rosse, note anche come UV Ceti. Le due stelle sono soggette a brillamenti intensi.",
    distance: "8,73",
    star: "M5.5V",
    starType: "nane rosse",
    count: "00",
    planets: [],
  },
  ross154: {
    number: "08 / 26",
    name: "Ross 154<span>.</span>",
    shortName: "ROSS 154",
    description:
      "Una nana rossa di piccola massa nella costellazione del Sagittario, nota per la sua attività e i brillamenti.",
    distance: "9,69",
    star: "M3.5V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  ross248: {
    number: "09 / 26",
    name: "Ross 248<span>.</span>",
    shortName: "ROSS 248",
    description:
      "Una nana rossa fioca in Andromeda. In un lontano futuro passerà temporaneamente più vicino al Sole di Proxima Centauri.",
    distance: "10,32",
    star: "M6V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  epsilonEri: {
    number: "10 / 26",
    name: "Epsilon<br>Eridani<span>.</span>",
    shortName: "EPSILON ERIDANI",
    description:
      "Una giovane stella arancione, circondata da una struttura di polveri e detriti che ricorda una versione giovane del nostro sistema.",
    distance: "10,48",
    star: "K2V",
    starType: "arancione",
    count: "01",
    planets: [
      {
        name: "Epsilon Eridani b",
        color: "#d5ac7d",
        type: "Gigante gassoso",
        diameter: "≈ 1,2 R♃",
        year: "7,3 anni",
        distance: "3,53 UA",
        description:
          "Gigante gassoso confermato, con orbita ampia attorno alla stella arancione. Massa e orbita sono state raffinate da osservazioni successive.",
      },
    ],
  },
  lacaille: {
    number: "11 / 26",
    name: "Lacaille 9352<span>.</span>",
    shortName: "LACAILLE 9352",
    description:
      "Nana rossa vicina e relativamente brillante nel cielo australe. Il catalogo NASA registra pianeti confermati attorno alla stella.",
    distance: "10,72",
    star: "M2V",
    starType: "nana rossa",
    count: "02",
    planets: [
      {
        name: "GJ 887 b",
        color: "#bc8766",
        type: "Esopianeta · super-Terra",
        diameter: "≈ 4,2 M⊕",
        year: "9,26 giorni",
        distance: "0,068 UA",
        description:
          "Un pianeta caldo e massiccio in orbita ravvicinata alla nana rossa GJ 887.",
      },
      {
        name: "GJ 887 c",
        color: "#cfaa84",
        type: "Esopianeta · super-Terra",
        diameter: "≈ 7,6 M⊕",
        year: "21,8 giorni",
        distance: "0,12 UA",
        description:
          "Una super-Terra su un’orbita interna; la sua atmosfera non è stata caratterizzata.",
      },
    ],
  },
  ross128: {
    number: "12 / 26",
    name: "Ross 128<span>.</span>",
    shortName: "ROSS 128",
    description:
      "Una nana rossa relativamente calma nella Vergine. Il suo pianeta noto è vicino e riceve una quantità di energia paragonabile a quella terrestre.",
    distance: "11,01",
    star: "M4V",
    starType: "nana rossa",
    count: "01",
    planets: [
      {
        name: "Ross 128 b",
        color: "#b7785f",
        type: "Esopianeta · terrestre",
        diameter: "≥ 1,4 M⊕",
        year: "9,9 giorni",
        distance: "0,0496 UA",
        description:
          "Un pianeta di massa minima terrestre in orbita ravvicinata. La sua stella è meno attiva di molte altre nane rosse.",
      },
    ],
  },
  ezAqr: {
    number: "13 / 26",
    name: "EZ Aquarii<span>.</span>",
    shortName: "EZ AQUARII",
    description:
      "Sistema triplo di nane rosse. Le tre componenti orbitano in una configurazione compatta nella costellazione dell’Acquario.",
    distance: "11,10",
    star: "M5V",
    starType: "sistema triplo",
    count: "00",
    planets: [],
  },
  cygni61: {
    number: "14 / 26",
    name: "61 Cygni<span>.</span>",
    shortName: "61 CYGNI",
    description:
      "Una coppia larga di stelle arancioni, tra le prime stelle la cui distanza fu misurata con la parallasse.",
    distance: "11,40",
    star: "K5V",
    starType: "coppia arancione",
    count: "00",
    planets: [],
  },
  procyon: {
    number: "15 / 26",
    name: "Procione<span>.</span>",
    shortName: "PROCIONE",
    description:
      "Sistema binario formato da una stella bianco-gialla brillante e una nana bianca compatta, compagna di Procione A.",
    distance: "11,46",
    star: "F5IV-V",
    starType: "bianco-gialla",
    count: "00",
    planets: [],
  },
  struve2398: {
    number: "16 / 26",
    name: "Struve 2398<span>.</span>",
    shortName: "STRUVE 2398",
    description:
      "Coppia binaria di nane rosse nella costellazione del Drago. Le due componenti orbitano l’una attorno all’altra.",
    distance: "11,50",
    star: "M3V",
    starType: "nane rosse",
    count: "00",
    planets: [],
  },
  groombridge34: {
    number: "17 / 26",
    name: "Groombridge 34<span>.</span>",
    shortName: "GROOMBRIDGE 34",
    description:
      "Sistema binario vicino formato da due nane rosse, noto anche come GX Andromedae e GQ Andromedae.",
    distance: "11,60",
    star: "M1V",
    starType: "nane rosse",
    count: "00",
    planets: [],
  },
  dxCancri: {
    number: "18 / 26",
    name: "DX Cancri<span>.</span>",
    shortName: "DX CANCRI",
    description:
      "Una nana rossa molto piccola e fioca nel Cancro, tra le stelle singole più vicine al Sole.",
    distance: "11,70",
    star: "M6.5V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  epsilonIndi: {
    number: "19 / 26",
    name: "Epsilon Indi<span>.</span>",
    shortName: "EPSILON INDI",
    description:
      "Stella arancione relativamente antica accompagnata da due nane brune, oggetti a metà tra pianeti giganti e stelle.",
    distance: "11,90",
    star: "K5V",
    starType: "arancione",
    count: "01",
    planets: [
      {
        name: "Epsilon Indi A b",
        color: "#c99a70",
        type: "Gigante gassoso",
        diameter: "≈ 1,1 R♃",
        year: "≈ 45 anni",
        distance: "≈ 11,55 UA",
        description:
          "Gigante gassoso ripreso direttamente dal telescopio James Webb. Massa e orbita hanno stime che variano a seconda del modello osservativo.",
      },
    ],
  },
  tauCeti: {
    number: "20 / 26",
    name: "Tau Ceti<span>.</span>",
    shortName: "TAU CETI",
    description:
      "Stella simile al Sole con un esteso disco di detriti. Le segnalazioni planetarie attorno a Tau Ceti restano controverse.",
    distance: "11,90",
    star: "G8V",
    starType: "gialla",
    count: "00",
    planets: [],
  },
  gj1061: {
    number: "21 / 26",
    name: "Gliese 1061<span>.</span>",
    shortName: "GLIESE 1061",
    description:
      "Nana rossa molto fredda e poco luminosa. Le misure indicano tre piccoli pianeti su orbite ravvicinate.",
    distance: "11,98",
    star: "M5.5V",
    starType: "nana rossa",
    count: "03",
    planets: [
      {
        name: "GJ 1061 b",
        color: "#b47a5f",
        type: "Esopianeta · terrestre",
        diameter: "≥ 1,4 M⊕",
        year: "3,20 giorni",
        distance: "0,021 UA",
        description:
          "Pianeta di massa minima terrestre, su un’orbita molto vicina alla nana rossa.",
      },
      {
        name: "GJ 1061 c",
        color: "#c68c6a",
        type: "Esopianeta · terrestre",
        diameter: "≥ 1,8 M⊕",
        year: "6,69 giorni",
        distance: "0,035 UA",
        description:
          "Un piccolo pianeta che riceve dalla stella un flusso energetico compatibile con la fascia interna della zona temperata.",
      },
      {
        name: "GJ 1061 d",
        color: "#a98d74",
        type: "Esopianeta · terrestre",
        diameter: "≥ 1,7 M⊕",
        year: "13,0 giorni",
        distance: "0,054 UA",
        description:
          "Il pianeta più esterno del terzetto noto; la sua atmosfera e le condizioni superficiali non sono conosciute.",
      },
    ],
  },
  yzCeti: {
    number: "22 / 26",
    name: "YZ Ceti<span>.</span>",
    shortName: "YZ CETI",
    description:
      "Nana rossa magneticamente attiva. I segnali di più pianeti piccoli sono in studio e alcune interpretazioni restano incerte.",
    distance: "12,10",
    star: "M4.5V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  luytenStar: {
    number: "23 / 26",
    name: "Stella di Luyten<span>.</span>",
    shortName: "STELLA DI LUYTEN",
    description:
      "Nana rossa relativamente tranquilla, nota anche come GJ 273. Sono stati rilevati due pianeti di piccola massa.",
    distance: "12,36",
    star: "M3.5V",
    starType: "nana rossa",
    count: "02",
    planets: [
      {
        name: "GJ 273 b",
        color: "#c17d5f",
        type: "Esopianeta · super-Terra",
        diameter: "≈ 2,9 M⊕",
        year: "18,6 giorni",
        distance: "0,091 UA",
        description:
          "Super-Terra che riceve un flusso stellare moderato; l’atmosfera non è stata misurata.",
      },
      {
        name: "GJ 273 c",
        color: "#bb9879",
        type: "Esopianeta · terrestre",
        diameter: "≈ 1,2 M⊕",
        year: "4,7 giorni",
        distance: "0,037 UA",
        description:
          "Piccolo pianeta interno del sistema, con orbita molto ravvicinata alla sua stella.",
      },
    ],
  },
  teegarden: {
    number: "24 / 26",
    name: "Stella di Teegarden<span>.</span>",
    shortName: "STELLA DI TEEGARDEN",
    description:
      "Una nana rossa ultrafredda scoperta nei dati di rilevamenti del cielo. Due pianeti di massa terrestre orbitano nella sua zona temperata.",
    distance: "12,50",
    star: "M7V",
    starType: "nana ultrafredda",
    count: "02",
    planets: [
      {
        name: "Teegarden b",
        color: "#b77c62",
        type: "Esopianeta · terrestre",
        diameter: "≈ 1,1 M⊕",
        year: "4,9 giorni",
        distance: "0,025 UA",
        description:
          "Pianeta di massa terrestre nella zona temperata orbitale. Non abbiamo dati diretti sulla sua atmosfera.",
      },
      {
        name: "Teegarden c",
        color: "#b9a17c",
        type: "Esopianeta · terrestre",
        diameter: "≈ 1,1 M⊕",
        year: "11,4 giorni",
        distance: "0,044 UA",
        description:
          "Secondo pianeta di massa terrestre noto nel sistema, più lontano dalla stella rispetto a Teegarden b.",
      },
    ],
  },
  kapteyn: {
    number: "25 / 26",
    name: "Stella di Kapteyn<span>.</span>",
    shortName: "STELLA DI KAPTEYN",
    description:
      "Nana rossa molto antica e ad alto moto proprio. I pianeti inizialmente proposti non sono considerati confermati.",
    distance: "12,80",
    star: "M1V",
    starType: "nana rossa",
    count: "00",
    planets: [],
  },
  ross614: {
    number: "26 / 26",
    name: "Ross 614<span>.</span>",
    shortName: "ROSS 614",
    description:
      "Sistema binario ravvicinato di due nane rosse. La compagna più debole è stata individuata attraverso il moto della primaria.",
    distance: "13,36",
    star: "M4.5V",
    starType: "sistema binario",
    count: "00",
    planets: [],
  },
};

const planetProfiles = {
  Mercurio: {
    class: "Roccioso",
    composition: "Silicati e nucleo ferroso",
    atmosphere: "Esosfera tenue",
    temperature: "−180 / 430 °C",
    gravity: "3,7 m/s²",
    moons: "0",
    habitability: "Non abitabile: assenza di acqua liquida stabile.",
  },
  Venere: {
    class: "Roccioso",
    composition: "Silicati e nucleo metallico",
    atmosphere: "CO₂, nubi di acido solforico",
    temperature: "≈ 465 °C",
    gravity: "8,87 m/s²",
    moons: "0",
    habitability:
      "Superficie estrema; possibile interesse per le nubi, ancora da verificare.",
  },
  Terra: {
    class: "Roccioso",
    composition: "Rocce, ferro e acqua liquida",
    atmosphere: "Azoto e ossigeno",
    temperature: "Media ≈ 15 °C",
    gravity: "9,81 m/s²",
    moons: "1",
    habitability: "Abitabile: acqua liquida e vita conosciuta.",
  },
  Marte: {
    class: "Roccioso",
    composition: "Silicati e nucleo ferroso",
    atmosphere: "CO₂ rarefatta",
    temperature: "Media ≈ −65 °C",
    gravity: "3,71 m/s²",
    moons: "2",
    habitability: "Possibile acqua salata nel sottosuolo; vita non rilevata.",
  },
  Giove: {
    class: "Gigante gassoso",
    composition: "Idrogeno ed elio",
    atmosphere: "H₂, He, nubi di ammoniaca",
    temperature: "Nubi ≈ −110 °C",
    gravity: "24,79 m/s²",
    moons: "95 note",
    habitability:
      "Nessuna superficie solida; alcune lune sono di forte interesse.",
  },
  Saturno: {
    class: "Gigante gassoso",
    composition: "Idrogeno ed elio",
    atmosphere: "H₂, He, metano",
    temperature: "Nubi ≈ −140 °C",
    gravity: "10,44 m/s²",
    moons: "293 confermate (ago 2026)",
    habitability:
      "Nessuna superficie solida; Encelado e Titano sono interessanti.",
  },
  Urano: {
    class: "Gigante ghiacciato",
    composition: "Acqua, ammoniaca e metano",
    atmosphere: "H₂, He, metano",
    temperature: "Minima ≈ −224 °C",
    gravity: "8,69 m/s²",
    moons: "28 note",
    habitability: "Ambiente atmosferico estremo; nessuna vita conosciuta.",
  },
  Nettuno: {
    class: "Gigante ghiacciato",
    composition: "Volatili, roccia e ghiacci",
    atmosphere: "H₂, He, metano",
    temperature: "Nubi ≈ −214 °C",
    gravity: "11,15 m/s²",
    moons: "16 note",
    habitability: "Ambiente atmosferico estremo; nessuna vita conosciuta.",
  },
  "Proxima b": {
    class: "Probabilmente roccioso",
    composition: "Massa minima ≈ 1,1 Terre",
    atmosphere: "Sconosciuta",
    temperature: "Non misurata",
    gravity: "Non nota",
    moons: "Non note",
    habitability:
      "Zona temperata orbitale; atmosfera e acqua liquida non confermate.",
  },
  "Barnard b": {
    class: "Sub-terrestre",
    composition: "Composizione non nota",
    atmosphere: "Sconosciuta",
    temperature: "Stima ≈ 125 °C",
    gravity: "Non nota",
    moons: "Non note",
    habitability:
      "Orbita molto vicina alla stella; condizioni sfavorevoli attese.",
  },
  "Barnard c": {
    class: "Candidato sub-terrestre",
    composition: "Non determinata",
    atmosphere: "Sconosciuta",
    temperature: "Non determinata",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Natura e parametri da confermare.",
  },
  "Barnard d": {
    class: "Candidato sub-terrestre",
    composition: "Non determinata",
    atmosphere: "Sconosciuta",
    temperature: "Non determinata",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Natura e parametri da confermare.",
  },
  "Barnard e": {
    class: "Candidato sub-terrestre",
    composition: "Non determinata",
    atmosphere: "Sconosciuta",
    temperature: "Non determinata",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Natura e parametri da confermare.",
  },
  "Lalande 21185 b": {
    class: "Super-Terra",
    composition: "Massa minima ≈ 2,7 Terre",
    atmosphere: "Sconosciuta",
    temperature: "Stima elevata",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Orbita interna e calda; atmosfera non caratterizzata.",
  },
  "Lalande 21185 c": {
    class: "Candidato gigante",
    composition: "Stima ≈ 14 masse terrestri",
    atmosphere: "Sconosciuta",
    temperature: "Non determinata",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Segnale candidato: esistenza e parametri da confermare.",
  },
};

const missionsByPlanet = {
  Mercurio: [
    {
      mission: "Mariner 10",
      date: "29 marzo 1974 · sorvolo",
      telemetry: "Prime immagini ravvicinate; mappata parte della superficie.",
    },
    {
      mission: "MESSENGER",
      date: "18 marzo 2011 – 30 aprile 2015 · orbita",
      telemetry:
        "Composizione, campo magnetico e ghiaccio d’acqua nei crateri polari.",
    },
  ],
  Venere: [
    {
      mission: "Mariner 2",
      date: "14 dicembre 1962 · sorvolo",
      telemetry:
        "Prima sonda a completare un incontro ravvicinato con un altro pianeta.",
    },
    {
      mission: "Magellan",
      date: "1990–1994 · orbita",
      telemetry:
        "Mappatura radar globale della superficie sotto la copertura nuvolosa.",
    },
    {
      mission: "Akatsuki",
      date: "2015 · orbita",
      telemetry:
        "Osservazioni meteorologiche e delle nubi nell’atmosfera venusiana.",
    },
  ],
  Terra: [
    {
      mission: "Costellazione Landsat",
      date: "dal 1972 · osservazione orbitale",
      telemetry:
        "Immagini multispettrali di terre emerse, acque e cambiamenti ambientali.",
    },
    {
      mission: "Sentinel-1",
      date: "dal 2014 · osservazione orbitale",
      telemetry:
        "Radar ad apertura sintetica per osservare la superficie giorno e notte.",
    },
  ],
  Marte: [
    {
      mission: "Mariner 4",
      date: "15 luglio 1965 · sorvolo",
      telemetry: "Prime immagini ravvicinate della superficie marziana.",
    },
    {
      mission: "Viking 1",
      date: "20 luglio 1976 · lander",
      telemetry:
        "Primo atterraggio riuscito su Marte; immagini e analisi del suolo.",
    },
    {
      mission: "Curiosity",
      date: "6 agosto 2012 · rover",
      telemetry:
        "Laboratorio mobile nel cratere Gale; analisi di rocce e ambiente antico.",
    },
    {
      mission: "Perseverance",
      date: "18 febbraio 2021 · rover",
      telemetry:
        "Esplorazione del cratere Jezero e raccolta di campioni per una possibile missione di rientro.",
    },
  ],
  Giove: [
    {
      mission: "Pioneer 10",
      date: "3 dicembre 1973 · sorvolo",
      telemetry: "Primo passaggio ravvicinato di una sonda presso Giove.",
    },
    {
      mission: "Galileo",
      date: "7 dicembre 1995 – 21 settembre 2003 · orbita",
      telemetry:
        "Atmosfera, magnetosfera e lune galileiane; sonda atmosferica rilasciata nel 1995.",
    },
    {
      mission: "Juno",
      date: "5 luglio 2016 · inserimento orbitale",
      telemetry:
        "Gravità, campo magnetico e struttura interna del gigante gassoso.",
    },
  ],
  Saturno: [
    {
      mission: "Pioneer 11",
      date: "1 settembre 1979 · sorvolo",
      telemetry: "Primo incontro ravvicinato con Saturno.",
    },
    {
      mission: "Voyager 1",
      date: "12 novembre 1980 · sorvolo",
      telemetry: "Immagini ravvicinate degli anelli e delle lune.",
    },
    {
      mission: "Cassini–Huygens",
      date: "1 luglio 2004 – 15 settembre 2017 · orbita",
      telemetry:
        "Studio prolungato del sistema; Huygens è atterrato su Titano il 14 gennaio 2005.",
    },
  ],
  Urano: [
    {
      mission: "Voyager 2",
      date: "24 gennaio 1986 · sorvolo",
      telemetry:
        "Unico incontro ravvicinato: atmosfera, anelli e lune osservati da vicino.",
    },
  ],
  Nettuno: [
    {
      mission: "Voyager 2",
      date: "25 agosto 1989 · sorvolo",
      telemetry:
        "Unico incontro ravvicinato; osservati Nettuno, Tritone e il sistema di anelli.",
    },
  ],
};

const els = {
  name: document.getElementById("systemName"),
  description: document.getElementById("systemDescription"),
  number: document.getElementById("systemNumber"),
  distance: document.getElementById("systemDistance"),
  star: document.getElementById("systemStar"),
  count: document.getElementById("systemPlanetCount"),
  countLabel: document.getElementById("planetCountLabel"),
  list: document.getElementById("planetList"),
  detail: document.getElementById("planetDetail"),
  topSystem: document.getElementById("topSystem"),
  ship: document.getElementById("ship"),
  route: document.querySelector(".route-progress"),
};
let activeSystem = "sol";
let activePlanet = null;
let activeMapFilter = null;
let warpTimer = 0,
  warpEndTimer = 0;

function renderSystemNodes() {
  const ids = Object.keys(systems),
    map = document.querySelector(".map-panel"),
    width = map.clientWidth,
    height = map.clientHeight;
  const positions = createOrganicPositions(ids, width, height);
  const container = document.getElementById("systemNodes");
  container.innerHTML = "";
  ids.forEach((id, index) => {
    const data = systems[id],
      node = document.createElement("div"),
      point = positions[index];
    node.className = "system-node";
    node.dataset.system = id;
    node.style.setProperty("--x", `${point.x}%`);
    node.style.setProperty("--y", `${point.y}%`);
    const colorClass =
      id === "sol" || /G[0-9]/.test(data.star)
        ? "sun"
        : /A1|F[0-9]|A[0-9]/.test(data.star)
          ? "blue-star"
          : /K[0-9]/.test(data.star)
            ? "orange-star"
            : "red-star";
    node.innerHTML = `<button class="node-orbit" type="button" aria-label="Esplora ${data.shortName}" title="${data.shortName} — ${data.distance} anni luce"><span class="node-star ${colorClass}"></span><span class="node-ring ring-one"></span>${["sol", "alpha", "wolf", "lalande"].includes(id) ? '<span class="node-ring ring-two"></span>' : ""}</button><span class="node-caption"><b>${data.shortName}</b><small>${data.distance} A.L.</small></span>`;
    node
      .querySelector("button")
      .addEventListener("click", () => navigateToSystem(id));
    container.appendChild(node);
  });
  const index = document.getElementById("mapIndex");
  if (index) index.textContent = `01 — ${String(ids.length).padStart(2, "0")}`;
  drawConstellations(positions, width, height);
  if (activeMapFilter) applyMapFilterClasses();
}

function navigateToSystem(id) {
  if (id === activeSystem) {
    renderSystem(id);
    return;
  }
  map.classList.remove("warp");
  void map.offsetWidth;
  map.classList.add("warp");
  clearTimeout(warpTimer);
  clearTimeout(warpEndTimer);
  warpTimer = window.setTimeout(() => renderSystem(id), 360);
  warpEndTimer = window.setTimeout(() => map.classList.remove("warp"), 1050);
}

function createOrganicPositions(ids, width, height) {
  const mobile = window.matchMedia("(max-width: 760px)").matches,
    minDistance = mobile ? 65 : Math.max(82, Math.min(118, width * 0.12));
  let seed = 20261110;
  for (const id of ids)
    for (const char of id) seed = (seed * 31 + char.charCodeAt(0)) >>> 0;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const placed = [];
  ids.forEach((id, index) => {
    if (id === "sol") {
      placed.push({ id, x: 51, y: 62 });
      return;
    }
    let best = null,
      bestGap = -1;
    for (let attempt = 0; attempt < 900; attempt++) {
      const candidate = { id, x: 7 + random() * 86, y: 35 + random() * 49 };
      let gap = Infinity;
      for (const other of placed) {
        const dx = ((candidate.x - other.x) * width) / 100,
          dy = ((candidate.y - other.y) * height) / 100;
        gap = Math.min(gap, Math.hypot(dx, dy));
      }
      if (gap > bestGap) {
        best = candidate;
        bestGap = gap;
      }
      if (gap >= minDistance) break;
    }
    if (best) placed.push(best);
  });
  return placed;
}

function drawConstellations(points, width, height) {
  const svg = document.getElementById("constellationSvg");
  svg.innerHTML = "";
  svg.setAttribute("viewBox", "0 0 1000 1000");
  const connected = new Set([0]);
  while (connected.size < points.length) {
    let shortest = Infinity,
      from = -1,
      to = -1;
    for (const i of connected)
      for (let j = 0; j < points.length; j++)
        if (!connected.has(j)) {
          const dx = ((points[i].x - points[j].x) * width) / 100,
            dy = ((points[i].y - points[j].y) * height) / 100,
            distance = Math.hypot(dx, dy);
          if (distance < shortest) {
            shortest = distance;
            from = i;
            to = j;
          }
        }
    if (to < 0) break;
    const link = document.createElementNS("http://www.w3.org/2000/svg", "line");
    link.setAttribute("x1", points[from].x * 10);
    link.setAttribute("y1", points[from].y * 10);
    link.setAttribute("x2", points[to].x * 10);
    link.setAttribute("y2", points[to].y * 10);
    svg.appendChild(link);
    connected.add(to);
  }
}

function applyMapFilterClasses() {
  document.querySelectorAll(".system-node").forEach((node) => {
    const matches = activeMapFilter?.matches.has(node.dataset.system);
    node.classList.toggle("filter-match", Boolean(matches));
    node.classList.toggle("filtered-out", Boolean(activeMapFilter && !matches));
  });
}

function clearMapFilter() {
  activeMapFilter = null;
  document
    .querySelectorAll(".system-node")
    .forEach((node) => node.classList.remove("filter-match", "filtered-out"));
  document.getElementById("mapFilterNotice").hidden = true;
}

function filterSystemsFromQuestion(question) {
  const normalized = question
    .toLocaleLowerCase("it")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const distanceMatch = normalized.match(
    /(?:entro|raggio(?: di)?|meno di|sotto i)\s*(\d+(?:[.,]\d+)?)\s*(?:anni luce|a\.?l\.?)/,
  );
  const asksMap = /mostram|filtra|cerca|trova|evidenzia|quali sistem/.test(
      normalized,
    ),
    asksSystems = /sistem|stelle vicin|pianet/.test(normalized);
  if (
    !asksMap ||
    !asksSystems ||
    (!distanceMatch &&
      !/roccios|gassos|ghiacci|abitabil|terrestr/.test(normalized))
  )
    return null;
  const maxDistance = distanceMatch
    ? Number(distanceMatch[1].replace(",", "."))
    : Infinity;
  let kind = null;
  if (/roccios|terrestr/.test(normalized)) kind = "rocky";
  else if (/gassos/.test(normalized)) kind = "gas";
  else if (/ghiacci/.test(normalized)) kind = "ice";
  else if (/abitabil/.test(normalized)) kind = "habitable";
  const matches = new Set();
  for (const [id, system] of Object.entries(systems)) {
    const distance = Number(system.distance.replace(",", "."));
    if (distance > maxDistance) continue;
    if (!kind) {
      matches.add(id);
      continue;
    }
    const hasMatch = system.planets.some((planet) => {
      const profile = planetProfiles[planet.name] || {},
        type = `${profile.class || ""} ${planet.type}`.toLocaleLowerCase("it");
      if (kind === "rocky")
        return /roccios|terrestr|super-terra|sub-terrestr/.test(type);
      if (kind === "gas") return /gassos|gigante/.test(type);
      if (kind === "ice") return /ghiacci/.test(type);
      return /abitabile|zona temperata/.test(
        `${profile.habitability || ""} ${planet.type}`.toLocaleLowerCase("it"),
      );
    });
    if (hasMatch) matches.add(id);
  }
  activeMapFilter = { matches, maxDistance, kind };
  applyMapFilterClasses();
  const labels = {
    rocky: "pianeti rocciosi",
    gas: "giganti gassosi",
    ice: "giganti ghiacciati",
    habitable: "mondi in zona temperata",
  };
  const description = `${matches.size} sistemi ${maxDistance < Infinity ? `entro ${maxDistance} a.l.` : "nel catalogo"}${kind ? ` con ${labels[kind]}` : ""}`;
  document.getElementById("mapFilterText").textContent = description;
  document.getElementById("mapFilterNotice").hidden = false;
  return matches.size
    ? `Filtro applicato: ${description}. Ho evidenziato i sistemi corrispondenti sulla mappa.`
    : `Filtro applicato: ${description}. Nessun sistema del catalogo soddisfa tutti i criteri.`;
}

document
  .getElementById("clearMapFilter")
  .addEventListener("click", clearMapFilter);

function showPlanet(planet, button) {
  activePlanet = planet;
  document
    .querySelectorAll(".planet-card")
    .forEach((card) => card.classList.toggle("selected", card === button));
  const profile = planetProfiles[planet.name] || {
    class: planet.type,
    composition: "Non determinata",
    atmosphere: "Non caratterizzata",
    temperature: "Non nota",
    gravity: "Non nota",
    moons: "Non note",
    habitability: "Dati insufficienti per stimare l’abitabilità.",
  };
  const earthDistance = calculateEarthDistance(planet, systems[activeSystem]);
  els.detail.innerHTML = `<article class="detail-content"><div class="detail-title"><span class="planet-orb" style="--planet-color:${planet.color}"></span><div><h3>${planet.name}</h3><small>${profile.class.toLocaleUpperCase("it-IT")} · ${planet.type.toLocaleUpperCase("it-IT")}</small></div></div><div class="planet-viewer"><span class="viewer-label">MODELLO 3D SCHEMATICO · ${profile.class.toLocaleUpperCase("it-IT")}</span><canvas class="planet-canvas" id="planetCanvas" aria-label="Modello 3D interattivo schematico di ${planet.name}"></canvas><span class="viewer-hint">TRASCINA PER RUOTARE · ROTELLA PER ZOOM</span></div><p class="detail-copy">${planet.description}</p><div class="detail-metrics"><div><small>DIAMETRO / MASSA</small><strong>${planet.diameter}</strong></div><div><small>ANNO / DISTANZA STELLA</small><strong>${planet.year} · ${planet.distance}</strong></div><div><small>DISTANZA DALLA TERRA</small><strong>${earthDistance}</strong></div><div><small>COMPOSIZIONE</small><strong>${profile.composition}</strong></div><div><small>ATMOSFERA</small><strong>${profile.atmosphere}</strong></div><div><small>TEMPERATURA</small><strong>${profile.temperature}</strong></div><div><small>GRAVITÀ / LUNE</small><strong>${profile.gravity} · ${profile.moons}</strong></div></div><p class="detail-habitability"><b>ABITABILITÀ</b> ${profile.habitability}</p>${renderMissionTimeline(planet)}</article>`;
  initPlanetViewer(document.getElementById("planetCanvas"), planet);
  updateChatContext();
}

function renderMissionTimeline(planet) {
  const missions = missionsByPlanet[planet.name] || [];
  if (!missions.length)
    return `<details class="mission-timeline"><summary>MISSIONI E OSSERVAZIONI <span>ARCHIVIO</span></summary><div class="mission-empty">Nessuna sonda umana ha raggiunto ${planet.name}. Le osservazioni disponibili provengono da telescopi e strumenti remoti.</div></details>`;
  const items = missions
    .map(
      (mission) =>
        `<div class="mission-item"><strong>${mission.mission}</strong><small>${mission.date}<br>${mission.telemetry}</small></div>`,
    )
    .join("");
  return `<details class="mission-timeline"><summary>MISSIONI E TELEMETRIA <span>${missions.length} RECORD</span></summary><div class="mission-list">${items}<div class="mission-live-note">ARCHIVIO STORICO · I DATI NON SONO IN STREAMING</div></div></details>`;
}

let planetFrame = 0;
function initPlanetViewer(canvas, planet) {
  if (planetFrame) cancelAnimationFrame(planetFrame);
  const context = canvas.getContext("2d", { alpha: true }),
    baseColor = planet.color;
  const textureCanvas = document.createElement("canvas");
  let rotation = 0,
    tilt = -0.12,
    zoom = 1,
    dragging = false,
    lastX = 0,
    lastY = 0,
    lastDraw = 0;
  const hex = baseColor.replace("#", "");
  const base = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const isGiant = /gassoso|ghiacciato|gigante/i.test(planet.type),
    isIce = /ghiacciato|ghiacci/i.test(planet.type);
  function render(time = 0) {
    if (!canvas.isConnected) return;
    if (time - lastDraw > 35) {
      lastDraw = time;
      const rect = canvas.getBoundingClientRect(),
        dpr = Math.min(devicePixelRatio || 1, 1.5),
        w = Math.max(1, Math.round(rect.width * dpr)),
        h = Math.max(1, Math.round(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      context.clearRect(0, 0, w, h);
      const scale = dpr,
        cx = w / 2,
        cy = h / 2,
        r = Math.min(w * 0.31, h * 0.42) * zoom,
        diam = Math.ceil(r * 2);
      const pixels = context.createImageData(diam, diam),
        sun = [-0.55, -0.45, 0.72],
        sl = Math.hypot(...sun);
      sun.forEach((v, i) => (sun[i] = v / sl));
      for (let py = 0; py < diam; py++)
        for (let px = 0; px < diam; px++) {
          const nx = (px / Math.max(1, diam - 1)) * 2 - 1,
            ny = (py / Math.max(1, diam - 1)) * 2 - 1,
            rr = nx * nx + ny * ny,
            index = (py * diam + px) * 4;
          if (rr > 1) {
            pixels.data[index + 3] = 0;
            continue;
          }
          const nz = Math.sqrt(1 - rr),
            lon = Math.atan2(
              nx * Math.cos(rotation) + nz * Math.sin(rotation),
              nz * Math.cos(rotation) - nx * Math.sin(rotation),
            ),
            lat = Math.asin(-ny * Math.cos(tilt) + nz * Math.sin(tilt));
          const band = Math.sin(
              lat * (isGiant ? 26 : 10) + Math.sin(lon * 3) * 0.75,
            ),
            continent =
              Math.sin(lon * 4.2 + Math.sin(lat * 7)) *
              Math.cos(lat * 5 + Math.cos(lon * 2));
          const craterField =
            Math.sin(lon * 19 + Math.sin(lat * 13)) *
            Math.cos(lat * 21 + Math.cos(lon * 11));
          const texture = isGiant
            ? band > 0.1
              ? 1.32
              : 0.72
            : isIce
              ? continent > 0.35
                ? 1.2
                : 0.84
              : craterField > 0.91
                ? 0.48
                : continent > 0.18
                  ? 1.42
                  : 0.74;
          const light = Math.max(
              0.12,
              nx * sun[0] + -ny * sun[1] + nz * sun[2],
            ),
            shade = 0.26 + 0.84 * light;
          pixels.data[index] = Math.min(255, base[0] * texture * shade);
          pixels.data[index + 1] = Math.min(255, base[1] * texture * shade);
          pixels.data[index + 2] = Math.min(255, base[2] * texture * shade);
          pixels.data[index + 3] = 255;
        }
      textureCanvas.width = diam;
      textureCanvas.height = diam;
      textureCanvas.getContext("2d").putImageData(pixels, 0, 0);
      context.save();
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.clip();
      context.drawImage(textureCanvas, cx - r, cy - r, r * 2, r * 2);
      context.restore();
      const glow = context.createRadialGradient(
        cx - r * 0.2,
        cy - r * 0.3,
        r * 0.68,
        cx,
        cy,
        r * 1.12,
      );
      glow.addColorStop(0, "rgba(0,0,0,0)");
      glow.addColorStop(0.83, "rgba(0,0,0,.08)");
      glow.addColorStop(1, "rgba(80,190,210,.28)");
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.fillStyle = glow;
      context.fill();
      context.beginPath();
      context.arc(cx, cy, r, 0, Math.PI * 2);
      context.strokeStyle = "rgba(153,225,220,.46)";
      context.lineWidth = 1.2 * scale;
      context.stroke();
    }
    rotation += dragging ? 0 : 0.0035;
    planetFrame = requestAnimationFrame(render);
  }
  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    rotation += (event.clientX - lastX) * 0.012;
    tilt = Math.max(
      -0.8,
      Math.min(0.8, tilt + (event.clientY - lastY) * 0.008),
    );
    lastX = event.clientX;
    lastY = event.clientY;
  });
  canvas.addEventListener("pointerup", () => {
    dragging = false;
  });
  canvas.addEventListener("pointercancel", () => {
    dragging = false;
  });
  canvas.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      zoom = Math.max(
        0.75,
        Math.min(1.45, zoom + (event.deltaY < 0 ? 0.08 : -0.08)),
      );
    },
    { passive: false },
  );
  planetFrame = requestAnimationFrame(render);
}

function calculateEarthDistance(planet, system) {
  const match = String(planet.distance)
    .replace(",", ".")
    .match(/[0-9]+(?:\.[0-9]+)?/);
  const orbit = match ? Number(match[0]) : NaN;
  if (!Number.isFinite(orbit)) return `≈ ${system.distance} A.L. (sistema)`;
  if (activeSystem === "sol") {
    const min = Math.max(0, Math.abs(orbit - 1)),
      max = orbit + 1;
    return `${min.toFixed(2)}–${max.toFixed(2)} UA (stima)`;
  }
  const delta = orbit / 63241.1;
  return `≈ ${system.distance} A.L. (±${delta.toFixed(4)})`;
}

function renderSystem(id) {
  const data = systems[id];
  if (!data) return;
  activeSystem = id;
  activePlanet = null;
  document
    .querySelectorAll(".system-node")
    .forEach((node) =>
      node.classList.toggle("active", node.dataset.system === id),
    );
  els.name.innerHTML = data.name;
  els.description.textContent = data.description;
  els.number.textContent = data.number;
  els.distance.innerHTML = `${data.distance} <em>AL</em>`;
  els.star.innerHTML = `${data.star} <em>${data.starType}</em>`;
  els.count.innerHTML = `${data.count.padStart(2, "0")} <em>catalogati</em>`;
  els.countLabel.textContent = `${data.count.padStart(2, "0")} ${data.planets.length === 1 ? "CORPO" : "CORPI"}`;
  els.topSystem.textContent = data.shortName;
  els.list.innerHTML = "";
  if (data.planets.length) {
    data.planets.forEach((planet, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "planet-card";
      button.setAttribute("aria-label", `Apri la scheda di ${planet.name}`);
      button.innerHTML = `<span class="planet-orb" style="--planet-color:${planet.color}"></span><span class="planet-card-name">${planet.name}</span>`;
      button.addEventListener("click", () => showPlanet(planet, button));
      els.list.appendChild(button);
      if (index === 0) showPlanet(planet, button);
    });
  } else {
    els.list.innerHTML =
      '<div class="no-planets">Nessun pianeta confermato nel catalogo attuale.</div>';
    els.detail.innerHTML =
      '<div class="detail-empty"><span>✳</span> Archivio in aggiornamento<br>Nuove osservazioni in arrivo</div>';
  }
  updateChatContext();
  positionShip(id);
}

function positionShip(id) {
  const node = document.querySelector(`.system-node[data-system="${id}"]`);
  if (!node) return;
  const panelRect = map.getBoundingClientRect(),
    rect = node.querySelector(".node-orbit").getBoundingClientRect(),
    x = rect.left + rect.width / 2 - panelRect.left,
    y = rect.top + rect.height / 2 - panelRect.top;
  if (id === "sol") {
    els.ship.style.opacity = "0";
    els.route.style.width = "0";
  } else {
    const home = document.querySelector('.system-node[data-system="sol"]'),
      homeRect = home.querySelector(".node-orbit").getBoundingClientRect();
    const hx = homeRect.left + homeRect.width / 2 - panelRect.left,
      hy = homeRect.top + homeRect.height / 2 - panelRect.top,
      dx = x - hx,
      dy = y - hy;
    els.ship.style.opacity = "1";
    els.ship.style.left = `${x - 16}px`;
    els.ship.style.top = `${y - 16}px`;
    els.route.style.left = `${hx}px`;
    els.route.style.top = `${hy}px`;
    els.route.style.width = `${Math.hypot(dx, dy)}px`;
    els.route.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  }
  els.ship.style.transform =
    window.matchMedia("(max-width: 760px)").matches && id !== "sol"
      ? "scale(.82)"
      : "";
}

let zoom = 1;
const zoomLabel = document.querySelector(".map-controls span");
const map = document.querySelector(".map-panel");
function setZoom(next) {
  zoom = Math.max(0.8, Math.min(1.5, +next.toFixed(1)));
  document.querySelector(".system-nodes").style.setProperty("--map-zoom", zoom);
  document
    .querySelector(".constellation-lines")
    .style.setProperty("--map-zoom", zoom);
  zoomLabel.textContent = `${zoom.toFixed(1)}×`;
  window.setTimeout(() => positionShip(activeSystem), 260);
}
document
  .getElementById("zoomIn")
  .addEventListener("click", () => setZoom(zoom + 0.1));
document
  .getElementById("zoomOut")
  .addEventListener("click", () => setZoom(zoom - 0.1));
document.getElementById("resetMap").addEventListener("click", () => {
  setZoom(1);
  renderSystem("sol");
});
window.addEventListener("resize", () => {
  renderSystemNodes();
  renderSystem(activeSystem);
});

const chat = document.getElementById("dataChat");
const launcher = document.getElementById("dataLauncher");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
let apiConfigured = false;
const conversation = [];
fetch("/api/status")
  .then((response) => (response.ok ? response.json() : null))
  .then((status) => {
    apiConfigured = Boolean(status?.configured);
    const label = document.getElementById("aiStatus");
    label.textContent = apiConfigured
      ? `IA online · ${status.model}`
      : "archivio locale";
    label.classList.toggle("ready", apiConfigured);
  })
  .catch(() => {
    apiConfigured = false;
  });
function updateChatContext() {
  const system = systems[activeSystem];
  document.getElementById("chatContext").textContent =
    `CONTESTO: ${system.shortName}${activePlanet ? ` · ${activePlanet.name.toUpperCase()}` : ""}`;
}
function toggleChat(open) {
  chat.classList.toggle("open", open);
  chat.setAttribute("aria-hidden", String(!open));
  launcher.setAttribute("aria-expanded", String(open));
  if (open) chatInput.focus();
}
launcher.addEventListener("click", () =>
  toggleChat(!chat.classList.contains("open")),
);
document
  .getElementById("chatClose")
  .addEventListener("click", () => toggleChat(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chat.classList.contains("open"))
    toggleChat(false);
});
function addMessage(text, who) {
  const row = document.createElement("div");
  row.className = `chat-message ${who === "user" ? "user-message" : "bot-message"}`;
  if (who !== "user") {
    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    const image = document.createElement("img");
    image.src = "data.jpg";
    image.alt = "";
    avatar.appendChild(image);
    row.appendChild(avatar);
  }
  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  const sender = document.createElement("span");
  sender.className = "message-sender";
  sender.textContent = who === "user" ? "TU" : "DATA";
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  bubble.append(sender, paragraph);
  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addThinking() {
  const row = document.createElement("div");
  row.className = "data-thinking";
  row.textContent = "Data sta consultando l’archivio…";
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return row;
}
function normalizeItalian(value) {
  return value
    .toLocaleLowerCase("it")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
function findSystemInQuestion(question) {
  const text = normalizeItalian(question);
  const aliases = {
    sol: ["sistema solare", "sol", "terra", "dalla terra"],
    alpha: ["alpha centauri", "proxima centauri", "proxima"],
    barnard: ["barnard"],
    wolf: ["wolf 359"],
    lalande: ["lalande 21185"],
    sirius: ["sirio", "sirius"],
    luyten726: ["luyten 726", "uv ceti"],
    epsilonEri: ["epsilon eridani"],
    lacaille: ["lacaille 9352", "gj 887"],
    ross128: ["ross 128"],
    gj1061: ["gj 1061", "gliese 1061"],
    luytenStar: ["stella di luyten", "luyten b", "gj 273"],
    teegarden: ["teegarden"],
  };
  const matches = Object.entries(systems)
    .filter(([id, system]) =>
      [normalizeItalian(system.shortName), ...(aliases[id] || [])].some(
        (alias) => text.includes(normalizeItalian(alias)),
      ),
    )
    .map(([id]) => id);
  return matches.find((id) => id !== "sol") || matches[0] || null;
}
function questionMentionsSystem(question, id) {
  const aliases = {
    sol: ["sistema solare", "sol", "terra", "dalla terra"],
    alpha: ["alpha centauri", "proxima centauri", "proxima"],
    barnard: ["barnard"],
    wolf: ["wolf 359"],
    lalande: ["lalande 21185"],
    sirius: ["sirio", "sirius"],
    luyten726: ["luyten 726", "uv ceti"],
    epsilonEri: ["epsilon eridani"],
    lacaille: ["lacaille 9352", "gj 887"],
    ross128: ["ross 128"],
    gj1061: ["gj 1061", "gliese 1061"],
    luytenStar: ["stella di luyten", "luyten b", "gj 273"],
    teegarden: ["teegarden"],
  };
  const text = normalizeItalian(question),
    system = systems[id];
  return [normalizeItalian(system.shortName), ...(aliases[id] || [])].some(
    (alias) => text.includes(normalizeItalian(alias)),
  );
}
function calculateTravel(question) {
  const text = normalizeItalian(question);
  if (!/viagg|tempo.*luce|luce.*tempo/.test(text)) return null;
  const named = Object.keys(systems).filter((id) =>
    questionMentionsSystem(question, id),
  );
  const destination = findSystemInQuestion(question);
  if (!destination || destination === "sol") return null;
  if (named.filter((id) => id !== "sol").length > 1)
    return {
      text: "La distanza fra due stelle diverse da Sol richiede le loro coordinate tridimensionali; le posizioni di questa mappa sono schematiche. Posso invece calcolare il tempo da Sol verso un sistema nominato.",
      calculation: "",
    };
  if (
    activeSystem !== "sol" &&
    !/(?:da|dal|dalla|partendo da)\s*(?:sol|terra|sistema solare)/.test(text)
  )
    return {
      text: "Per calcolare la distanza fra due sistemi diversi da Sol servono coordinate tridimensionali precise. La mappa è schematica, quindi non uso le sue posizioni grafiche per stimarla.",
      calculation: "",
    };
  let speed = 1;
  const percent = text.match(
    /(\d+(?:[.,]\d+)?)\s*(?:%|per cento)\s*(?:della )?(?:velocita della luce|di c)?/,
  );
  const fraction = text.match(/(\d+(?:[.,]\d+)?)\s*c\b/);
  if (percent) speed = Number(percent[1].replace(",", ".")) / 100;
  else if (fraction) speed = Number(fraction[1].replace(",", "."));
  if (speed <= 0 || speed > 1)
    return {
      text: "Per questo calcolo uso velocità comprese fra 0 e c. Indica una frazione valida, per esempio 0,1c.",
      calculation: "",
    };
  const distance = Number(systems[destination].distance.replace(",", "."));
  const years = distance / speed;
  const result = `${distance.toFixed(2)} anni luce ÷ ${speed === 1 ? "c" : `${speed}c`} = ${years.toLocaleString("it-IT", { maximumFractionDigits: 2 })} anni nel sistema di riferimento della Terra. Il calcolo trascura accelerazione, frenata e relatività dell’orologio a bordo.`;
  return {
    text: `Per una rotta ideale da Sol a ${systems[destination].shortName}, il tempo alla velocità della luce è circa ${years.toLocaleString("it-IT", { maximumFractionDigits: 2 })} anni. ${result}`,
    calculation: result,
  };
}
function calculateWhatIf(question) {
  const text = normalizeItalian(question);
  if (
    /terra/.test(text) &&
    /proxima(?: centauri)? b/.test(text) &&
    /orbit/.test(text)
  ) {
    const luminosity = 0.00155,
      orbit = 0.0485,
      flux = luminosity / (orbit * orbit),
      effective = 255 * Math.pow(flux, 0.25);
    return `Stima semplificata per l’orbita di Proxima b: flusso stellare ≈ ${flux.toFixed(2)} volte quello ricevuto dalla Terra; temperatura di equilibrio ≈ ${Math.round(effective)} K (circa ${Math.round(effective - 273.15)} °C), senza effetto serra. Formula: flusso relativo = luminosità stellare / distanza orbitale². Il risultato non è una temperatura superficiale: atmosfera, albedo, rotazione e attività della nana rossa possono cambiarla molto.`;
  }
  return "Uno scenario controfattuale richiede almeno il corpo di destinazione e l’ipotesi da cambiare. Specifica, per esempio, “Terra all’orbita di Proxima b” o “viaggio verso Sirio a 0,1c”.";
}
function makeLocalLogbook(question) {
  const context = contextForQuestion(question),
    planet = context.selectedPlanet,
    system = context.selectedSystem;
  if (!planet)
    return `DIARIO DI BORDO · ${system.name}\nDATI: distanza dalla Terra ${system.distanceFromEarthLightYears} anni luce; stella ${system.stellarClass}, ${system.starType}.\nSCENA IPOTETICA: la nave entra nel sistema e avvia la ricognizione. Nessuna sonda umana ha raggiunto questo sistema.`;
  return `DIARIO DI BORDO · ${planet.name}\nDATI: ${planet.classification}; massa/dimensioni ${planet.diameterOrMass}; orbita ${planet.orbitFromStar}; periodo ${planet.orbitalPeriod}. Atmosfera: ${planet.atmosphere || "non caratterizzata"}.\nSCENA IPOTETICA: la U.S.S. Enterprise mantiene una distanza prudente mentre i sensori raccolgono dati. Questa sequenza è narrativa; la descrizione fisica si limita ai dati elencati.`;
}
function inferMode(question) {
  const text = normalizeItalian(question);
  if (/diario di bordo|genera.*diario|rapporto di esplorazione/.test(text))
    return "diary";
  if (
    /cosa succederebbe|cosa accadrebbe|what.?if|scenario|se la terra|se la luna|se .* si trovasse/.test(
      text,
    )
  )
    return "whatif";
  return "chat";
}
function contextForQuestion(question) {
  const text = normalizeItalian(question),
    targetId = findSystemInQuestion(question) || activeSystem,
    system = systems[targetId];
  const namedPlanet = Object.values(systems)
    .flatMap((item) => item.planets)
    .find(
      (item) =>
        text.includes(normalizeItalian(item.name)) ||
        (item.name === "Proxima b" && /proxima(?: centauri)? b/.test(text)),
    );
  const planet =
    namedPlanet || (targetId === activeSystem ? activePlanet : null);
  const profile = planet ? planetProfiles[planet.name] || null : null;
  return {
    selectedSystem: {
      name: system.shortName,
      distanceFromEarthLightYears: system.distance,
      stellarClass: system.star,
      starType: system.starType,
      description: system.description,
    },
    selectedPlanet: planet
      ? {
          name: planet.name,
          classification: profile?.class || planet.type,
          description: planet.description,
          diameterOrMass: planet.diameter,
          orbitalPeriod: planet.year,
          orbitFromStar: planet.distance,
          composition: profile?.composition,
          atmosphere: profile?.atmosphere,
          temperature: profile?.temperature,
          gravity: profile?.gravity,
          moons: profile?.moons,
          habitability: profile?.habitability,
        }
      : null,
    systemPlanets: system.planets.map((item) => ({
      name: item.name,
      type: item.type,
      massOrDiameter: item.diameter,
      orbit: item.distance,
    })),
  };
}
async function askOpenAI(question, mode, calculation, contextOverride = null) {
  const response = await fetch("/api/assistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question,
      mode,
      context: contextOverride || contextForQuestion(question),
      calculation,
      history: conversation.slice(-9, -1),
    }),
  });
  const result = await response.json();
  if (!response.ok)
    throw new Error(
      result.error || "Data non è riuscito a consultare il servizio IA.",
    );
  return result.text;
}
function isMapSearch(question) {
  return (
    /mostra|trova|elenca|cerca|filtra|evidenzia|quali|which|find|show|list/i.test(
      question,
    ) && /sistem|stell|planet|pianet|mond/i.test(question)
  );
}
function compactMapCatalog() {
  return Object.entries(systems).map(([id, system]) => ({
    id,
    name: system.shortName,
    distanceLy: Number(system.distance.replace(",", ".")),
    planets: system.planets.map((planet) => ({
      name: planet.name,
      type: planet.type,
      class: planetProfiles[planet.name]?.class || planet.type,
    })),
  }));
}
async function applyAiMapFilter(question) {
  const specification = await askOpenAI(question, "filter", "", {
    catalog: compactMapCatalog(),
  });
  const match = specification.match(
    /FILTER\s*\|\s*(rocky|gas|ice|habitable|all)\s*\|\s*(all|\d+(?:[.,]\d+)?)/i,
  );
  if (!match)
    throw new Error(
      "Non ho capito i criteri del filtro. Riformula la ricerca con categoria e distanza.",
    );
  const distance =
    match[2].toLowerCase() === "all"
      ? 1000
      : Number(match[2].replace(",", "."));
  const terms = {
    rocky: "pianeti rocciosi",
    gas: "giganti gassosi",
    ice: "giganti ghiacciati",
    habitable: "mondi abitabili",
    all: "",
  };
  const result = filterSystemsFromQuestion(
    `Mostrami i sistemi entro ${distance} anni luce ${terms[match[1].toLowerCase()] || ""}`,
  );
  return result || "Filtro applicato alla mappa.";
}
function answerData(question) {
  const normalized = question
    .toLocaleLowerCase("it")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const system = systems[activeSystem];
  const namedPlanet = Object.values(systems)
    .flatMap((item) => item.planets)
    .find(
      (planet) =>
        normalized.includes(
          planet.name
            .toLocaleLowerCase("it")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""),
        ) ||
        (planet.name === "Proxima b" &&
          /proxima(?: centauri)? b/.test(normalized)),
    );
  const planet = namedPlanet || activePlanet;
  if (/ciao|salve|buongiorno|chi sei/.test(normalized))
    return "Sono il tenente comandante Data, ufficiale scientifico della U.S.S. Enterprise. Posso consultare con lei i dati del sistema selezionato.";
  if (/abitabil|vita|vivere/.test(normalized))
    return "La Terra è l’unico mondo in cui la vita sia stata confermata. Proxima b orbita nella zona temperata della sua stella, ma non conosciamo la sua atmosfera né se possa mantenere acqua liquida. La posizione orbitale, da sola, non dimostra l’abitabilità.";
  if (
    /quali pianet|quali mond|tipi di pianet|differenza tra.*(roccios|gassos|ghiacci)|sono roccios|sono gassos|sono ghiacci/.test(
      normalized,
    )
  )
    return "Nel Sistema Solare i pianeti rocciosi sono Mercurio, Venere, Terra e Marte; i giganti gassosi sono Giove e Saturno; Urano e Nettuno sono giganti ghiacciati, ricchi di composti volatili come acqua, ammoniaca e metano. Per gli esopianeti, composizione e struttura sono spesso stime: non ne abbiamo osservato direttamente la superficie.";
  if (/lune|satellit/.test(normalized) && planet) {
    const p = planetProfiles[planet.name];
    return `${planet.name}: ${p?.moons || "numero non noto"} lune note nel catalogo. Il numero può cambiare con nuove scoperte.`;
  }
  if (/atmosfer/.test(normalized) && planet) {
    const p = planetProfiles[planet.name];
    return `Per ${planet.name}, l’archivio riporta: ${p?.atmosphere || "atmosfera non caratterizzata"}. Per molti esopianeti questi dati non sono ancora misurabili.`;
  }
  if (/temperatur|cald|fredd/.test(normalized) && planet) {
    const p = planetProfiles[planet.name];
    return `La temperatura indicata per ${planet.name} è ${p?.temperature || "non nota"}. ${p?.habitability || ""} Le temperature degli esopianeti sono spesso stime, non misure dirette.`;
  }
  if (/sistema|stella|distanza|quanto lontan/.test(normalized) && !planet)
    return `${system.shortName}: ${system.distance} anni luce dalla Terra. Stella catalogata: ${system.star}, ${system.starType}. Nel nostro archivio risultano ${system.count} pianeti; i candidati sono distinti dalle conferme nelle rispettive schede.`;
  if (planet) {
    const p = planetProfiles[planet.name] || {};
    return `${planet.name} è classificato come ${p.class || planet.type.toLowerCase()}. ${planet.description} Composizione: ${p.composition || "non determinata"}. Atmosfera: ${p.atmosphere || "non caratterizzata"}. Temperatura: ${p.temperature || "non nota"}; gravità: ${p.gravity || "non nota"}; lune: ${p.moons || "non note"}. Distanza dalla Terra: ${calculateEarthDistance(planet, system)}. Abitabilità: ${p.habitability || "dati insufficienti"}`;
  }
  return `Sto consultando l’archivio di ${system.shortName}. ${system.description} Può chiedermi della stella, della distanza, dei pianeti o della loro abitabilità.`;
}
async function sendToData(text) {
  const question = text.trim();
  if (!question) return;
  chatInput.value = "";
  addMessage(question, "user");
  conversation.push({ role: "user", content: question });
  const filtered = filterSystemsFromQuestion(question);
  if (filtered) {
    addMessage(filtered, "bot");
    conversation.push({ role: "assistant", content: filtered });
    return;
  }
  if (apiConfigured && isMapSearch(question)) {
    const thinking = addThinking();
    try {
      const answer = await applyAiMapFilter(question);
      thinking.remove();
      addMessage(answer, "bot");
      conversation.push({ role: "assistant", content: answer });
    } catch (error) {
      thinking.remove();
      addMessage(error.message, "bot");
      conversation.push({ role: "assistant", content: error.message });
    }
    return;
  }
  const mode = inferMode(question),
    travel = calculateTravel(question),
    thinking = addThinking();
  try {
    let answer;
    if (apiConfigured)
      answer = await askOpenAI(question, mode, travel?.calculation || "");
    else if (travel) answer = travel.text;
    else if (mode === "whatif") answer = calculateWhatIf(question);
    else if (mode === "diary") answer = makeLocalLogbook(question);
    else answer = answerData(question);
    thinking.remove();
    addMessage(answer, "bot");
    conversation.push({ role: "assistant", content: answer });
  } catch (error) {
    thinking.remove();
    const fallback = travel?.text || answerData(question);
    addMessage(`${fallback}\n\nNota: ${error.message}`, "bot");
    conversation.push({ role: "assistant", content: fallback });
  }
}
document.getElementById("dataChatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  sendToData(chatInput.value);
});
document
  .querySelectorAll(".chat-suggestions button")
  .forEach((button) =>
    button.addEventListener("click", () => sendToData(button.dataset.prompt)),
  );
renderSystemNodes();
renderSystem("sol");
