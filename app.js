"use strict";

const APP_KEY = "epso-sprint-profile-v1";
const APP_VERSION = "2026.11.10-1";

const CATEGORY = {
  verbal: { name: "Szövegértési logika", short: "Verbális", icon: "Aa", seconds: 105 },
  numeric: { name: "Numerikus logika", short: "Numerikus", icon: "%", seconds: 120 },
  abstract: { name: "Absztrakt logika", short: "Absztrakt", icon: "◇", seconds: 60 }
};

const verbalQuestions = [
  {
    id: "v01", category: "verbal", difficulty: "Közepes",
    passage: "Egy intézmény hat hónapos távmunka-pilotot indított három részlegen. A résztvevő részlegeken a lezárt ügyek száma átlagosan 8%-kal nőtt, miközben a hibaarány nem változott érdemben. A felmérésben a résztvevők többsége jobb koncentrációról számolt be. A pilotban nem részt vevő részlegekről nem gyűjtöttek összehasonlítható adatokat.",
    prompt: "Melyik állítás következik biztosan a szövegből?",
    options: [
      "A távmunka minden intézményi részlegen 8%-kal növeli a teljesítményt.",
      "A pilot részlegein nőtt a lezárt ügyek átlagos száma, miközben a hibaarány lényegében stabil maradt.",
      "A jobb koncentráció okozta a lezárt ügyek számának növekedését.",
      "A piloton kívüli részlegek teljesítménye csökkent."
    ], answer: 1,
    explanation: "Csak a pilotban részt vevő részlegekről és az ott megfigyelt együttjárásról van adat. Oksági kapcsolat vagy intézményi szintű általánosítás nem állapítható meg.",
    tip: "Válaszd szét a megfigyelést, az okságot és az általánosítást."
  },
  {
    id: "v02", category: "verbal", difficulty: "Könnyű",
    passage: "A város tavaly 2 000 fát ültetett. Az első nyári felméréskor a fák 92%-a volt egészséges állapotban. A parkokba ültetett fák túlélési aránya magasabb volt, mint az út mentieké, de az út menti fák tették ki az összes ültetés nagyobb részét.",
    prompt: "Melyik állítás igaz a szöveg alapján?",
    options: [
      "Pontosan 160 fa pusztult el.",
      "A fák többségét parkokba ültették.",
      "Az út menti fák túlélési aránya alacsonyabb volt a parkokba ültetettekénél.",
      "Minden egészségtelen fa út mellett állt."
    ], answer: 2,
    explanation: "A szöveg közvetlenül összehasonlítja a két túlélési arányt. A 8% nem feltétlenül elpusztult fát jelent, csak nem egészséges állapotot.",
    tip: "Ne cseréld fel a szövegben használt kategóriákat rokon értelműnek tűnő fogalmakkal."
  },
  {
    id: "v03", category: "verbal", difficulty: "Nehéz",
    passage: "A támogatási pályázatok formai ellenőrzését a benyújtás sorrendjében végzik. A hiánypótlásra visszaküldött pályázat az új dokumentumok beérkezésekor nem kerül a sor végére, hanem megtartja eredeti helyét. Tartalmi értékelés csak sikeres formai ellenőrzés után kezdődhet.",
    prompt: "Melyik következtetés szükségszerű?",
    options: [
      "A korábban benyújtott pályázat tartalmi értékelése mindig korábban fejeződik be.",
      "A hiánypótlásra küldött pályázatot automatikusan elutasítják.",
      "Formailag még el nem fogadott pályázat tartalmi értékelése nem kezdődhetett el.",
      "A hiánypótlás nem okozhat késedelmet."
    ], answer: 2,
    explanation: "A tartalmi értékelés szükséges előfeltétele a sikeres formai ellenőrzés. A befejezés sorrendjéről és a késedelem mértékéről nincs elég információ.",
    tip: "Keresd a szükséges és elégséges feltételeket jelző szavakat: „csak … után”."
  },
  {
    id: "v04", category: "verbal", difficulty: "Közepes",
    passage: "A vasúttársaság az időben érkező járatok arányát havi átlagban közli. Júniusban ez az arány 88% volt, ami magasabb a májusi 84%-nál. Júniusban azonban kevesebb járat közlekedett, ezért az időben érkező járatok darabszáma akár alacsonyabb is lehetett, mint májusban.",
    prompt: "Melyik állítás áll összhangban a szöveggel?",
    options: [
      "Júniusban biztosan több járat érkezett időben, mint májusban.",
      "A júniusi pontossági arány romlott májushoz képest.",
      "Az időben érkező járatok aránya nőtt, de a darabszám változása nem dönthető el a megadott adatokból.",
      "Júniusban pontosan 4%-kal több járat közlekedett."
    ], answer: 2,
    explanation: "Az arány 4 százalékponttal nőtt, de az eltérő járatszám miatt az abszolút darabszám nem ismert.",
    tip: "Az arány és a darabszám két külön mennyiség."
  },
  {
    id: "v05", category: "verbal", difficulty: "Könnyű",
    passage: "A nyelvi képzésre minden olyan új munkatárs jelentkezhet, aki még nem vett részt intézményi nyelvtanfolyamon. A haladó csoporthoz ezen felül sikeres szintfelmérő szükséges. Mira új munkatárs, és korábban nem vett részt intézményi nyelvtanfolyamon.",
    prompt: "Mi állapítható meg biztosan Miráról?",
    options: [
      "Jelentkezhet a nyelvi képzésre.",
      "Bekerül a haladó csoportba.",
      "Sikeres lesz a szintfelmérője.",
      "Csak kezdő csoportba kerülhet."
    ], answer: 0,
    explanation: "Mira teljesíti a képzésre jelentkezés két megadott feltételét. A haladó csoportról szintfelmérő nélkül nem lehet dönteni.",
    tip: "Ne téveszd össze a jelentkezés lehetőségét a felvétel eredményével."
  },
  {
    id: "v06", category: "verbal", difficulty: "Nehéz",
    passage: "A halászati kvótát csak akkor emelik, ha az állományfelmérés tartós növekedést mutat és a tudományos bizottság ezt támogatja. Idén a felmérés növekedést jelzett, de a bizottság további adatokat kért. A kvóta változatlan maradt.",
    prompt: "Melyik állítás következik logikusan?",
    options: [
      "A bizottság elutasította a kvóta emelését.",
      "A kvótaemelés összes szükséges feltétele nem teljesült bizonyíthatóan.",
      "Az állomány növekedése biztosan átmeneti.",
      "Ha a bizottság támogatja az emelést, a kvótát minden esetben megemelik."
    ], answer: 1,
    explanation: "A kvótaemeléshez két feltétel együttes teljesülése szükséges. A bizottsági támogatás nem történt meg, és a „csak akkor” nem jelent automatikus emelést a feltételek teljesülésekor.",
    tip: "A „csak akkor, ha” szükséges feltételt jelöl, nem garanciát."
  },
  {
    id: "v07", category: "verbal", difficulty: "Közepes",
    passage: "Az épületszigetelési program első évében 120 középületből 30-at korszerűsítettek. Ezek átlagos hőenergia-fogyasztása a korszerűsítés előtti értékhez képest 18%-kal csökkent. A többi épület fogyasztásáról a jelentés nem közöl változást.",
    prompt: "Melyik kijelentés megalapozott?",
    options: [
      "A 120 épület összesített fogyasztása 18%-kal csökkent.",
      "A korszerűsített épületek mindegyikében pontosan 18% volt a csökkenés.",
      "A korszerűsített épületek csoportjának átlagos fogyasztása 18%-kal csökkent.",
      "A nem korszerűsített épületek fogyasztása nem változott."
    ], answer: 2,
    explanation: "Az adat a 30 korszerűsített épület átlagára vonatkozik. Nem állít sem egyedi 18%-os értéket, sem a teljes állományra vonatkozó változást.",
    tip: "Figyeld pontosan, melyik csoportra és milyen statisztikára vonatkozik az állítás."
  },
  {
    id: "v08", category: "verbal", difficulty: "Könnyű",
    passage: "A könyvtár hétköznapokon 20 óráig tart nyitva. Vizsgaidőszakban kedden és csütörtökön 22 óráig meghosszabbítja a nyitvatartást. Ma csütörtök van, de a vizsgaidőszak csak jövő héten kezdődik.",
    prompt: "Meddig van ma nyitva a könyvtár?",
    options: ["18 óráig", "20 óráig", "21 óráig", "22 óráig"], answer: 1,
    explanation: "A hosszabb csütörtöki nyitvatartás csak a vizsgaidőszakban érvényes, amely még nem kezdődött el.",
    tip: "Ellenőrizd minden szabály időbeli feltételét."
  },
  {
    id: "v09", category: "verbal", difficulty: "Nehéz",
    passage: "A beszerzési szabályzat szerint három ajánlat szükséges, kivéve ha az áru kizárólagos forrásból szerezhető be. A kizárólagos forrást írásban kell igazolni. Írásos igazolás hiányában egyetlen ajánlat alapján nem köthető szerződés.",
    prompt: "Melyik állítás igaz?",
    options: [
      "Írásos kizárólagossági igazolással minden esetben szerződést kell kötni.",
      "Három ajánlat esetén az áruk biztosan nem kizárólagos forrásból származnak.",
      "Egyetlen ajánlat és írásos igazolás hiánya kizárja a szerződéskötést.",
      "Két ajánlat minden esetben elegendő."
    ], answer: 2,
    explanation: "Ez a szöveg utolsó mondatának közvetlen következménye. Az igazolás felmenthet a három ajánlat alól, de önmagában nem kötelez szerződéskötésre.",
    tip: "A kivétel feloldhat egy követelményt, de nem feltétlenül hoz létre kötelezettséget."
  },
  {
    id: "v10", category: "verbal", difficulty: "Közepes",
    passage: "Az online időpontfoglalás bevezetése után a várakozási idő mediánja 24 percről 16 percre csökkent. Ugyanebben az időszakban két új ügyfélpult is megnyílt. A jelentés ezért nem tulajdonítja a teljes javulást kizárólag az online rendszernek.",
    prompt: "Miért óvatos a jelentés az oksági következtetéssel?",
    options: [
      "Mert a medián nem mérhető percben.",
      "Mert a várakozási idő valójában nőtt.",
      "Mert a rendszer bevezetésével egy időben más, a várakozást befolyásoló változás is történt.",
      "Mert az online rendszernek nem volt egyetlen felhasználója sem."
    ], answer: 2,
    explanation: "A két új ügyfélpult zavaró tényező: a javulás egy része abból is származhatott.",
    tip: "Keresd az egyidejű változásokat, amelyek alternatív magyarázatot adhatnak."
  },
  {
    id: "v11", category: "verbal", difficulty: "Könnyű",
    passage: "A víztakarékossági kampányban részt vevő háztartások havi fogyasztása átlagosan 6%-kal csökkent. A résztvevők önként jelentkeztek, ezért a csoport eleve környezettudatosabb lehetett a lakosság egészénél.",
    prompt: "Melyik állítás tükrözi legjobban a szöveget?",
    options: [
      "A kampány bizonyítottan minden háztartás fogyasztását 6%-kal csökkenti.",
      "A résztvevők fogyasztása átlagosan csökkent, de az önkéntes részvétel korlátozza az eredmény általánosíthatóságát.",
      "A résztvevők a kampány előtt biztosan kevesebb vizet használtak.",
      "Az önkéntes programok soha nem hatékonyak."
    ], answer: 1,
    explanation: "A megfigyelt csökkenés valós, de az önkéntes kiválasztódás miatt nem biztos, hogy a teljes lakosságra is ugyanígy érvényes.",
    tip: "A minta kiválasztásának módja befolyásolja az általánosíthatóságot."
  },
  {
    id: "v12", category: "verbal", difficulty: "Közepes",
    passage: "Az újrahasznosítási központ minden papír- és fémhulladékot fogad, de veszélyes hulladékot nem. Az elektronikai eszközök közül csak a kisméretű háztartási készülékeket veszi át. Egy régi vízforraló kisméretű háztartási készülék.",
    prompt: "Mi következik a leírásból?",
    options: [
      "A központ átveszi a régi vízforralót.",
      "A központ minden elektronikai eszközt átvesz.",
      "A vízforraló veszélyes hulladék.",
      "Fémhulladékot csak akkor fogadnak, ha kisméretű."
    ], answer: 0,
    explanation: "A vízforraló a kifejezetten elfogadott elektronikai alcsoportba tartozik.",
    tip: "Az „összes”, „csak” és „közül” szavak pontos halmazkapcsolatokat jelölnek."
  },
  {
    id: "v13", category: "verbal", difficulty: "Nehéz",
    passage: "A múzeumi belépés 18 év alatt ingyenes. A diákigazolvánnyal rendelkező 18–25 évesek kedvezményes jegyet válthatnak. Az ingyenességhez életkort igazoló okmány szükséges, a diákkedvezményhez pedig érvényes diákigazolvány.",
    prompt: "Melyik esetben biztos az ingyenes belépés?",
    options: [
      "Egy 20 éves látogató érvényes diákigazolvánnyal érkezik.",
      "Egy 17 éves látogató hitelt érdemlően igazolja az életkorát.",
      "Egy 25 éves látogató igazolja az életkorát, de nincs diákigazolványa.",
      "Egy látogató azt mondja, hogy 16 éves, de nincs nála okmány."
    ], answer: 1,
    explanation: "A 17 éves látogató megfelel az életkori feltételnek és rendelkezik az előírt igazolással. A diákigazolvány csak kedvezményre jogosít.",
    tip: "A jogosultsági feltételt és annak igazolási módját együtt ellenőrizd."
  },
  {
    id: "v14", category: "verbal", difficulty: "Közepes",
    passage: "Az elektromos buszok tesztüzemében a járművek energiafogyasztása télen magasabb volt, mint ősszel. A téli útvonalak átlagosan hosszabbak is voltak, és gyakrabban használták a fűtést. A mérés nem különítette el e két tényező hatását.",
    prompt: "Melyik következtetés nem vonható le biztosan?",
    options: [
      "Télen magasabb volt a mért energiafogyasztás.",
      "A téli útvonalak átlagosan hosszabbak voltak.",
      "A fűtés használata önmagában magyarázza a teljes fogyasztásnövekedést.",
      "A két lehetséges tényező hatását nem választották szét."
    ], answer: 2,
    explanation: "A hosszabb útvonal és a gyakoribb fűtés egyaránt magyarázhatja a növekedést; külön mérés nélkül egyik kizárólagos hatása sem bizonyítható.",
    tip: "A kérdés tagadó: azt keresd, amit a szöveg nem támaszt alá."
  },
  {
    id: "v15", category: "verbal", difficulty: "Közepes",
    passage: "A kutatási alap legalább két ország intézményeinek együttműködését támogatja. Egy pályázat csak akkor jogosult, ha a partnerek között van egyetem és kisvállalkozás is. Három ország részvétele önmagában nem jelent automatikus jogosultságot.",
    prompt: "Melyik pályázat felel meg biztosan a felsorolt szerkezeti feltételeknek?",
    options: [
      "Két ország három egyeteme pályázik.",
      "Egy ország egyeteme és kisvállalkozása pályázik.",
      "Két ország partnerei között egyetem és kisvállalkozás is szerepel.",
      "Három ország közigazgatási szervei pályáznak."
    ], answer: 2,
    explanation: "Két ország részvétele mellett mindkét előírt partnertípus jelen van. A többi lehetőségből legalább egy szükséges feltétel hiányzik.",
    tip: "Összetett feltételeknél készíts mentális ellenőrzőlistát."
  },
  {
    id: "v16", category: "verbal", difficulty: "Könnyű",
    passage: "A kiberbiztonsági képzés teljesítéséhez mind az öt modult el kell végezni, és a záróteszten legalább 70%-ot kell elérni. Dániel mind az öt modult elvégezte, a záróteszten pedig 68%-ot ért el.",
    prompt: "Mi igaz Dánielre?",
    options: [
      "Teljesítette a képzést, mert minden modult elvégzett.",
      "Nem teljesítette a képzést, mert a záróteszt minimumát nem érte el.",
      "A képzést csak akkor teljesíti, ha újra elvégzi az összes modult.",
      "A záróteszt eredménye nem számít."
    ], answer: 1,
    explanation: "A két feltétel együttesen szükséges. A modulokat teljesítette, de a 70%-os minimumot nem.",
    tip: "Az „és” kapcsolatnál minden feltételnek teljesülnie kell."
  },
  {
    id: "v17", category: "verbal", difficulty: "Nehéz",
    passage: "A rugalmas munkaidőt igénybe vevő dolgozók korábban vagy később kezdhetnek, feltéve hogy 10 és 15 óra között elérhetők. Az ügyfélszolgálati beosztásban dolgozókra ez a szabály nem vonatkozik; az ő kezdési idejüket a heti beosztás rögzíti.",
    prompt: "Melyik állítás szükségszerű?",
    options: [
      "Minden dolgozó maga választja meg a kezdési idejét.",
      "A rugalmas munkaidős dolgozóknak 10 és 15 óra között elérhetőnek kell lenniük.",
      "Az ügyfélszolgálati dolgozók soha nem dolgoznak 10 és 15 óra között.",
      "A heti beosztás csak a munka befejezését rögzíti."
    ], answer: 1,
    explanation: "Ez a rugalmas munkaidő kifejezett feltétele. Az ügyfélszolgálati kivétel nem mond semmit a tényleges jelenléti időről.",
    tip: "A kivétel hatályát ne terjeszd túl azon, amit a szöveg kimond."
  },
  {
    id: "v18", category: "verbal", difficulty: "Közepes",
    passage: "A vidéki szélessávú program első szakasza azokat a településeket célozza, ahol a háztartások kevesebb mint 60%-a fér hozzá nagy sebességű internethez. A programba bevont Fenyőligeten ez az arány a beruházás előtt 54% volt.",
    prompt: "Melyik állítás biztosan igaz?",
    options: [
      "Fenyőligeten a beruházás után minden háztartásnak lett internet-hozzáférése.",
      "Fenyőliget a beruházás előtt megfelelt az első szakasz hozzáférési kritériumának.",
      "A program csak egyetlen települést érintett.",
      "Fenyőligeten volt a legalacsonyabb hozzáférési arány."
    ], answer: 1,
    explanation: "Az 54% kevesebb mint 60%, így a település teljesítette a megadott célzási feltételt.",
    tip: "Egyszerű számszerű küszöbnél figyelj a szigorú és nem szigorú egyenlőtlenségre."
  },
  {
    id: "v19", category: "verbal", difficulty: "Nehéz",
    passage: "Bírósági iratot csak az a fordító hitelesíthet, aki szerepel a hivatalos névjegyzékben. A névjegyzékbe kerüléshez szakmai vizsga szükséges, de a sikeres vizsga után külön regisztrációt is kérni kell. Leila sikeres szakmai vizsgát tett, de még nem kérte a regisztrációját.",
    prompt: "Mi következik Leila helyzetéből?",
    options: [
      "Már szerepel a névjegyzékben.",
      "Hitelesíthet bírósági iratot, mert levizsgázott.",
      "A sikeres vizsga önmagában nem elegendő ahhoz, hogy szerepeljen a névjegyzékben.",
      "Soha nem kerülhet be a névjegyzékbe."
    ], answer: 2,
    explanation: "A regisztráció külön szükséges lépés. Leila vizsgája sikeres, de a névjegyzéki tagság még nem állapítható meg.",
    tip: "Egy folyamat több szükséges lépésből is állhat; az egyik teljesítése nem helyettesíti a többit."
  },
  {
    id: "v20", category: "verbal", difficulty: "Közepes",
    passage: "A talajnedvesség-érzékelőket használó gazdaságok átlagosan kevesebb öntözővizet használtak, mint a szenzor nélküli gazdaságok. A szenzoros gazdaságok ugyanakkor átlagosan nagyobbak és modernebb öntözőrendszerrel felszereltek voltak. A vizsgálat nem véletlenszerűen osztotta ki az érzékelőket.",
    prompt: "Melyik értelmezés a legpontosabb?",
    options: [
      "Az érzékelők bizonyítottan önmagukban okozták az összes vízmegtakarítást.",
      "A két csoport vízhasználata nem különbözött.",
      "A kisebb vízhasználat együtt járt a szenzorhasználattal, de más csoportkülönbségek is magyarázhatják az eredményt.",
      "A nagyobb gazdaságok minden esetben kevesebb vizet használnak."
    ], answer: 2,
    explanation: "A nem véletlenszerű csoportképzés és a gazdaságok közötti egyéb eltérések miatt a szenzor önálló oksági hatása nem különíthető el.",
    tip: "Összehasonlító vizsgálatnál keresd, hogy a csoportok más fontos jellemzőkben is eltérnek-e."
  }
];

const numericQuestions = [
  {
    id: "n01", category: "numeric", difficulty: "Könnyű", contextTitle: "Képzési keret országonként (ezer euró)",
    table: [["Ország", "2025", "2026"], ["Svédország", "240", "276"], ["Olaszország", "310", "325"], ["Németország", "180", "207"]],
    prompt: "Hány százalékkal nőtt Svédország képzési kerete 2025-ről 2026-ra?",
    options: ["12%", "15%", "18%", "36%"], answer: 1,
    explanation: "A növekedés 276 − 240 = 36. A százalékos növekedés: 36 ÷ 240 × 100 = 15%.",
    tip: "A változást mindig a kiinduló értékhez viszonyítsd."
  },
  {
    id: "n02", category: "numeric", difficulty: "Közepes", contextTitle: "Képzési részvétel országonként",
    table: [["Ország", "Regisztrált", "Megjelent"], ["Belgium", "160", "85%"], ["Hollandia", "140", "90%"]],
    prompt: "Összesen hányan jelentek meg Belgiumból és Hollandiából?",
    options: ["252", "256", "262", "270"], answer: 2,
    explanation: "Belgium: 160 × 0,85 = 136. Hollandia: 140 × 0,90 = 126. Összesen 262 fő.",
    tip: "Számítsd ki külön a részeredményeket, majd add össze őket."
  },
  {
    id: "n03", category: "numeric", difficulty: "Könnyű", contextTitle: "Átváltási árfolyam",
    table: [["Pénznem", "1 EUR értéke"], ["PLN", "4,10"], ["SEK", "11,20"], ["CZK", "25,00"]],
    prompt: "Hány eurónak felel meg 20 500 PLN?",
    options: ["4 100 EUR", "5 000 EUR", "5 125 EUR", "8 405 EUR"], answer: 1,
    explanation: "Ha 1 EUR = 4,10 PLN, akkor 20 500 ÷ 4,10 = 5 000 EUR.",
    tip: "Átváltás előtt becsüld meg, szorozni vagy osztani kell-e."
  },
  {
    id: "n04", category: "numeric", difficulty: "Könnyű", contextTitle: "Feldolgozott kérelmek",
    table: [["Hónap", "Kérelmek"], ["Január", "480"], ["Február", "600"], ["Március", "570"]],
    prompt: "Mekkora volt a januárról februárra mért növekedés?",
    options: ["20%", "25%", "30%", "120%"], answer: 1,
    explanation: "A növekedés 120 kérelem. 120 ÷ 480 × 100 = 25%.",
    tip: "A százalék alapja január, nem február."
  },
  {
    id: "n05", category: "numeric", difficulty: "Nehéz", contextTitle: "Éves energiafogyasztás (MWh)",
    table: [["Részleg", "Korábban", "Most"], ["A", "120", "96"], ["B", "150", "120"]],
    prompt: "Hány százalékkal csökkent a két részleg együttes fogyasztása?",
    options: ["18%", "20%", "22%", "24%"], answer: 1,
    explanation: "Korábban összesen 270 MWh, most 216 MWh. A csökkenés 54 MWh; 54 ÷ 270 = 20%.",
    tip: "Összesített változásnál előbb összegezd az alapértékeket."
  },
  {
    id: "n06", category: "numeric", difficulty: "Közepes", contextTitle: "Konferenciajegyek",
    table: [["Jegytípus", "Darab", "Egységár"], ["Normál", "800", "15 EUR"], ["Kedvezményes", "300", "9 EUR"]],
    prompt: "Mekkora a teljes jegybevétel, ha minden jegy elkelt?",
    options: ["12 700 EUR", "14 100 EUR", "14 700 EUR", "16 500 EUR"], answer: 2,
    explanation: "800 × 15 = 12 000 EUR, 300 × 9 = 2 700 EUR; együtt 14 700 EUR.",
    tip: "A különböző egységárú tételeket külön számold."
  },
  {
    id: "n07", category: "numeric", difficulty: "Közepes", contextTitle: "Munkaerő-kapacitás",
    table: [["Státusz", "Létszám", "Munkaidő"], ["Teljes állás", "20", "100%"], ["Részmunkaidő", "12", "50%"]],
    prompt: "Hány teljes munkaidős egyenértéknek (FTE) felel meg a teljes csapat?",
    options: ["22", "24", "26", "32"], answer: 2,
    explanation: "A 20 teljes állás 20 FTE, a 12 félállás 6 FTE. Összesen 26 FTE.",
    tip: "A részmunkaidős létszámot szorozd meg a munkaidő arányával."
  },
  {
    id: "n08", category: "numeric", difficulty: "Nehéz", contextTitle: "Éves kibocsátás (ezer tonna)",
    table: [["Ágazat", "Kiinduló érték", "Csökkentés"], ["Közlekedés", "420", "15%"], ["Épületek", "250", "10%"], ["Ipar", "330", "0%"]],
    prompt: "Hány százalékkal csökken a három ágazat együttes kibocsátása?",
    options: ["8,0%", "8,8%", "10,0%", "25,0%"], answer: 1,
    explanation: "Csökkenés: 420 × 15% = 63 és 250 × 10% = 25, összesen 88. A teljes alap 1 000; 88 ÷ 1 000 = 8,8%.",
    tip: "Eltérő méretű csoportok százalékait nem szabad egyszerűen átlagolni."
  },
  {
    id: "n09", category: "numeric", difficulty: "Nehéz", contextTitle: "Ügymegoldási idő",
    table: [["Csapat", "Ügyek száma", "Átlagos idő"], ["A", "40", "3 nap"], ["B", "60", "5 nap"]],
    prompt: "Mennyi a 100 ügy súlyozott átlagos megoldási ideje?",
    options: ["3,8 nap", "4,0 nap", "4,2 nap", "4,5 nap"], answer: 2,
    explanation: "Összes ügy-nap: 40 × 3 + 60 × 5 = 420. 420 ÷ 100 = 4,2 nap.",
    tip: "Súlyozott átlagnál az elemszámokkal súlyozz."
  },
  {
    id: "n10", category: "numeric", difficulty: "Könnyű", contextTitle: "Szkennelési kapacitás",
    table: [["Gépek", "Oldal/gép/óra", "Műszak"], ["4", "35", "6 óra"]],
    prompt: "Hány oldalt szkennelnek be egy műszak alatt, ha minden gép teljes kapacitással működik?",
    options: ["210", "560", "840", "1 400"], answer: 2,
    explanation: "4 gép × 35 oldal × 6 óra = 840 oldal.",
    tip: "Írd fel a mértékegységeket; a gép és az óra kiesik a szorzásban."
  },
  {
    id: "n11", category: "numeric", difficulty: "Közepes", contextTitle: "Lakossági felmérés",
    table: [["Összes válaszadó", "Online válasz", "Online válaszadók 35 év alatt"], ["1 200", "45%", "60%"]],
    prompt: "Hány 35 év alatti online válaszadó volt?",
    options: ["270", "324", "540", "720"], answer: 1,
    explanation: "Online: 1 200 × 45% = 540. Ezek 60%-a: 540 × 60% = 324.",
    tip: "Egymásba ágyazott százalékoknál lépésenként haladj."
  },
  {
    id: "n12", category: "numeric", difficulty: "Közepes", contextTitle: "Projektköltségvetés",
    table: [["Teljes keret", "Személyzet", "Eszközök"], ["2,4 M EUR", "35%", "25%"]],
    prompt: "Mennyi marad az összes többi kiadásra?",
    options: ["0,84 M EUR", "0,96 M EUR", "1,20 M EUR", "1,44 M EUR"], answer: 1,
    explanation: "A két megadott tétel 60%, így 40% marad. 2,4 × 0,40 = 0,96 millió EUR.",
    tip: "A maradék arányt gyakran gyorsabb 100%-ból kiszámítani."
  },
  {
    id: "n13", category: "numeric", difficulty: "Könnyű", contextTitle: "Települési népesség",
    table: [["Kiinduló népesség", "Éves növekedés"], ["80 000 fő", "2,5%"]],
    prompt: "Mekkora lesz a népesség egy év múlva, ha a növekedési ütem teljesül?",
    options: ["80 200", "81 250", "82 000", "82 500"], answer: 2,
    explanation: "80 000 × 2,5% = 2 000; az új népesség 82 000 fő.",
    tip: "A növekedés összegét add hozzá a kiinduló értékhez."
  },
  {
    id: "n14", category: "numeric", difficulty: "Közepes", contextTitle: "Programrésztvevők",
    table: [["Nők : férfiak", "Összes résztvevő"], ["5 : 3", "320"]],
    prompt: "Hány nő vett részt a programban?",
    options: ["120", "160", "192", "200"], answer: 3,
    explanation: "Az arány összesen 8 rész. Egy rész 320 ÷ 8 = 40, a nők száma 5 × 40 = 200.",
    tip: "Aránynál először add össze az arányszámokat."
  },
  {
    id: "n15", category: "numeric", difficulty: "Nehéz", contextTitle: "Beszerzett egységek",
    table: [["Tétel", "Darab", "Egységár"], ["Első", "120", "8 EUR"], ["Második", "80", "11 EUR"]],
    prompt: "Mennyi volt az összes egység átlagos beszerzési ára?",
    options: ["9,0 EUR", "9,2 EUR", "9,5 EUR", "10,0 EUR"], answer: 1,
    explanation: "Teljes költség: 120 × 8 + 80 × 11 = 1 840 EUR. Összesen 200 egység, így az átlag 9,2 EUR.",
    tip: "Az egységárakat a darabszámokkal kell súlyozni."
  },
  {
    id: "n16", category: "numeric", difficulty: "Nehéz", contextTitle: "Tolmácskapacitás",
    table: [["Tolmács", "Óra/nap", "Napok"], ["A csoport (6 fő)", "5", "4"], ["B csoport (4 fő)", "6", "3"]],
    prompt: "Hány tolmácsórát biztosít a két csoport összesen?",
    options: ["144", "168", "180", "192"], answer: 3,
    explanation: "A csoport: 6 × 5 × 4 = 120 óra. B csoport: 4 × 6 × 3 = 72 óra. Összesen 192 óra.",
    tip: "Mindhárom tényezőt — létszám, napi óra, napok — vedd figyelembe."
  }
];

function item(shape, x = 50, y = 50, options = {}) {
  return { shape, x, y, size: 23, rotation: 0, filled: false, color: "blue", ...options };
}

function frame(...items) { return { items }; }

function dots(count, options = {}) {
  const layouts = {
    1: [[50, 50]],
    2: [[35, 50], [65, 50]],
    3: [[50, 28], [31, 67], [69, 67]],
    4: [[32, 32], [68, 32], [32, 68], [68, 68]],
    5: [[30, 30], [70, 30], [50, 50], [30, 70], [70, 70]],
    6: [[30, 27], [70, 27], [30, 50], [70, 50], [30, 73], [70, 73]]
  };
  return frame(...layouts[count].map(([x, y]) => item("circle", x, y, { size: 9, filled: true, ...options })));
}

function bars(count) {
  const xs = count === 1 ? [50] : count === 2 ? [38, 62] : [28, 50, 72];
  return frame(...xs.map((x, index) => item("bar", x, 50, { size: 20 + index * 4, filled: true })));
}

const abstractQuestions = [
  {
    id: "a01", category: "abstract", difficulty: "Könnyű",
    prompt: "Melyik ábra folytatja a sorozatot?",
    sequence: [0, 90, 180, 270, 0].map(rotation => frame(item("triangle", 50, 50, { rotation, filled: true }))),
    options: [45, 90, 180, 270].map(rotation => frame(item("triangle", 50, 50, { rotation, filled: true }))), answer: 1,
    explanation: "A háromszög minden lépésben 90°-kal jobbra fordul, ezért a következő helyzet 90°.",
    tip: "Először csak az irányváltozást figyeld, a többi tulajdonságot hagyd figyelmen kívül."
  },
  {
    id: "a02", category: "abstract", difficulty: "Könnyű",
    prompt: "Melyik ábra kerül a kérdőjel helyére?",
    sequence: [[28,28],[72,28],[72,72],[28,72],[28,28]].map(([x,y]) => frame(item("circle", x, y, { size: 10, filled: true }))),
    options: [[50,28],[72,28],[72,72],[28,72]].map(([x,y]) => frame(item("circle", x, y, { size: 10, filled: true }))), answer: 1,
    explanation: "A pont az óramutató járásával megegyezően halad a négy sarok között. A bal felső után a jobb felső következik.",
    tip: "Jelöld meg fejben a pozíciók ciklusát."
  },
  {
    id: "a03", category: "abstract", difficulty: "Közepes",
    prompt: "Melyik ábra folytatja a mintát?",
    sequence: [1,2,3,4].map(count => dots(count)),
    options: [3,5,4,6].map(count => dots(count)), answer: 1,
    explanation: "Minden lépésben eggyel nő a pontok száma: 1, 2, 3, 4, ezért 5 következik.",
    tip: "Számold meg az elemeket, mielőtt bonyolultabb szabályt keresnél."
  },
  {
    id: "a04", category: "abstract", difficulty: "Közepes",
    prompt: "Melyik ábra illik a sorozat végére?",
    sequence: [
      frame(item("square",50,50,{filled:true})),
      frame(item("circle",50,50,{filled:false})),
      frame(item("triangle",50,50,{filled:true})),
      frame(item("square",50,50,{filled:false})),
      frame(item("circle",50,50,{filled:true}))
    ],
    options: [
      frame(item("triangle",50,50,{filled:false})), frame(item("square",50,50,{filled:true})),
      frame(item("circle",50,50,{filled:false})), frame(item("triangle",50,50,{filled:true}))
    ], answer: 0,
    explanation: "Az alakzatok négyzet–kör–háromszög ciklusban váltakoznak, a kitöltés pedig minden lépésben fordul. Ezért üres háromszög jön.",
    tip: "Külön kövesd az alakzat és a kitöltés szabályát."
  },
  {
    id: "a05", category: "abstract", difficulty: "Közepes",
    prompt: "Válaszd ki a következő ábrát.",
    sequence: [1,2,3,1,2].map(count => bars(count)),
    options: [2,1,3,4].map(count => count === 4 ? frame(...[25,42,59,76].map(x => item("bar",x,50,{size:18,filled:true}))) : bars(count)), answer: 2,
    explanation: "A vonalak száma 1–2–3 ciklusban ismétlődik. Kettő után három következik.",
    tip: "Ha egy érték visszatér, ellenőrizd, nem rövid ciklusról van-e szó."
  },
  {
    id: "a06", category: "abstract", difficulty: "Nehéz",
    prompt: "Melyik összetett ábra következik?",
    sequence: [
      [0,28,28], [90,72,28], [180,72,72], [270,28,72]
    ].map(([rotation,x,y]) => frame(item("triangle",50,50,{rotation,filled:false,size:25}), item("circle",x,y,{size:7,filled:true,color:"yellow"}))),
    options: [
      frame(item("triangle",50,50,{rotation:0,filled:false,size:25}),item("circle",28,28,{size:7,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{rotation:90,filled:false,size:25}),item("circle",28,28,{size:7,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{rotation:0,filled:false,size:25}),item("circle",72,28,{size:7,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{rotation:180,filled:false,size:25}),item("circle",72,72,{size:7,filled:true,color:"yellow"}))
    ], answer: 0,
    explanation: "A háromszög 90°-ot fordul, a pont pedig körbejárja a sarkokat. Mindkét ciklus visszatér a kezdőállapotba.",
    tip: "Összetett ábránál minden mozgó elemet külön sorozatként kezelj."
  },
  {
    id: "a07", category: "abstract", difficulty: "Közepes",
    prompt: "Mi kerül a sorozat végére?",
    sequence: [
      frame(item("diamond",50,50,{size:15,filled:true})), frame(item("diamond",50,50,{size:27,filled:false})),
      frame(item("diamond",50,50,{size:15,filled:true})), frame(item("diamond",50,50,{size:27,filled:false}))
    ],
    options: [
      frame(item("diamond",50,50,{size:15,filled:true})), frame(item("diamond",50,50,{size:27,filled:true})),
      frame(item("diamond",50,50,{size:15,filled:false})), frame(item("circle",50,50,{size:15,filled:true}))
    ], answer: 0,
    explanation: "A kicsi kitöltött és a nagy üres rombusz felváltva követi egymást.",
    tip: "Az alternálás gyakran két teljes állapot váltakozása."
  },
  {
    id: "a08", category: "abstract", difficulty: "Nehéz",
    prompt: "Melyik sokszög folytatja a sort?",
    sequence: [3,4,5,6].map(sides => frame(item("polygon",50,50,{sides,size:27,filled:false}))),
    options: [5,7,8,6].map(sides => frame(item("polygon",50,50,{sides,size:27,filled:false}))), answer: 1,
    explanation: "Az oldalak száma lépésenként eggyel nő: 3, 4, 5, 6, így 7 oldalú sokszög következik.",
    tip: "Sokszögnél számold az oldalakat vagy a csúcsokat."
  },
  {
    id: "a09", category: "abstract", difficulty: "Nehéz",
    prompt: "Válaszd ki a helyes folytatást.",
    sequence: [
      frame(item("arrow",50,50,{rotation:0,filled:true})), frame(item("arrow",50,50,{rotation:45,filled:false})),
      frame(item("arrow",50,50,{rotation:90,filled:true})), frame(item("arrow",50,50,{rotation:135,filled:false}))
    ],
    options: [
      frame(item("arrow",50,50,{rotation:180,filled:true})), frame(item("arrow",50,50,{rotation:180,filled:false})),
      frame(item("arrow",50,50,{rotation:225,filled:true})), frame(item("arrow",50,50,{rotation:135,filled:true}))
    ], answer: 0,
    explanation: "A nyíl minden lépésben 45°-kal fordul, a kitöltés pedig váltakozik. A következő 180°-os, kitöltött nyíl.",
    tip: "Két szabály esetén ellenőrizd, hogy ugyanabban a ritmusban változnak-e."
  },
  {
    id: "a10", category: "abstract", difficulty: "Nehéz",
    prompt: "Hol lesz a pont a következő ábrán?",
    sequence: [18,34,50,66,50].map(x => frame(item("circle",x,50,{size:9,filled:true}))),
    options: [18,34,66,82].map(x => frame(item("circle",x,50,{size:9,filled:true}))), answer: 1,
    explanation: "A pont jobbra halad 16 egységenként, majd a 66-os helyzetnél visszafordul: 18–34–50–66–50–34.",
    tip: "Lineáris mozgásnál keresd a visszapattanást a szélső helyzetnél."
  },
  {
    id: "a11", category: "abstract", difficulty: "Könnyű",
    prompt: "Melyik ábra következik?",
    sequence: [5,4,3,2].map(count => dots(count,{color:"yellow"})),
    options: [1,2,3,6].map(count => dots(count,{color:"yellow"})), answer: 0,
    explanation: "A pontok száma minden lépésben eggyel csökken: 5, 4, 3, 2, 1.",
    tip: "Vizsgáld meg a változás irányát és állandó lépésközét."
  },
  {
    id: "a12", category: "abstract", difficulty: "Nehéz",
    prompt: "Melyik ábra fejezi be a sorozatot?",
    sequence: [
      frame(item("square",30,50,{filled:true,size:16}),item("circle",70,50,{filled:false,size:14})),
      frame(item("circle",30,50,{filled:true,size:14}),item("square",70,50,{filled:false,size:16})),
      frame(item("square",30,50,{filled:false,size:16}),item("circle",70,50,{filled:true,size:14})),
      frame(item("circle",30,50,{filled:false,size:14}),item("square",70,50,{filled:true,size:16}))
    ],
    options: [
      frame(item("square",30,50,{filled:true,size:16}),item("circle",70,50,{filled:false,size:14})),
      frame(item("circle",30,50,{filled:true,size:14}),item("square",70,50,{filled:false,size:16})),
      frame(item("square",30,50,{filled:false,size:16}),item("circle",70,50,{filled:true,size:14})),
      frame(item("square",70,50,{filled:true,size:16}),item("circle",30,50,{filled:false,size:14}))
    ], answer: 0,
    explanation: "Az alakzatok minden lépésben helyet cserélnek, a kitöltött állapot pedig két lépésenként vált oldalról oldalra. A négyállapotú ciklus újraindul.",
    tip: "Keresd meg, hány képkocka után tér vissza pontosan ugyanaz az állapot."
  }
];

const expandedVerbalPassages = {
  v01: "Egy uniós ügynökség hat hónapos távmunka-pilotot indított három, önként jelentkező részlegen. A résztvevő részlegeken a lezárt ügyek havi átlagos száma 8%-kal nőtt, miközben a minőségellenőrzés által feltárt hibák aránya nem változott érdemben. A munkatársi felmérés válaszadóinak többsége jobb koncentrációról számolt be, de a vezetők megjegyezték, hogy ugyanekkor egy új ügykezelő rendszer is elindult. A pilotban nem részt vevő részlegekről nem gyűjtöttek azonos módszerrel összehasonlítható adatokat. A jelentés ezért a kedvező eredmények ellenére nem állítja, hogy kizárólag a távmunka okozta a teljesítmény változását, és nem javasol automatikus kiterjesztést minden szervezeti egységre.",
  v02: "A város tavaly 2 000 facsemetét ültetett közparkokban, lakóutcákban és nagy forgalmú utak mentén. Az első nyári állapotfelméréskor az összes fa 92%-át minősítették egészségesnek; a fennmaradó csoportba az elpusztult és az átmenetileg stresszes példányok egyaránt bekerültek. A parkokba ültetett fák túlélési aránya magasabb volt, mint az út mentieké, noha az út menti ültetések tették ki a teljes program nagyobb részét. A szakértők szerint a különbséghez hozzájárulhatott az árnyék, az öntözés gyakorisága és a talaj tömörsége, de ezek önálló hatását nem vizsgálták. A következő felmérést a második tél után végzik el.",
  v03: "A támogatási pályázatok formai ellenőrzését alapvetően a benyújtás időpontjának sorrendjében végzik. Ha egy pályázatból kötelező dokumentum hiányzik, a pályázó egyszeri hiánypótlási felszólítást kap. Az új dokumentumok beérkezésekor a pályázat nem kerül a sor végére, hanem megtartja eredeti helyét, de az ellenőrzés csak a hiány pótlása után folytatódhat. Tartalmi értékelés kizárólag sikeres formai ellenőrzést követően kezdhető. A korábbi benyújtás ugyanakkor nem garantálja a tartalmi értékelés korábbi befejezését, mert az egyes projektek összetettsége és a szakértői összeférhetetlenség vizsgálata eltérő időt igényelhet. A hiánypótlás ténye önmagában nem jár pontlevonással.",
  v04: "A vasúttársaság az időben, vagyis legfeljebb öt perc késéssel érkező járatok arányát havi összesítésben közli. Júniusban ez az arány 88% volt, szemben a májusi 84%-kal. A júniusi pályafelújítások miatt azonban kevesebb járat közlekedett, ezért az időben érkező vonatok tényleges darabszáma akár alacsonyabb is lehetett, mint májusban. A közlemény nem tartalmazza egyik hónap teljes járatszámát sem, és nem különíti el a törölt járatokat a menetrend szerint el sem indított járatoktól. A társaság hangsúlyozza, hogy a százalékos pontossági mutató javult, de az utasok által összesen elszenvedett késési percek változásáról az adatból nem lehet következtetést levonni.",
  v05: "Az intézményi nyelvi képzésre minden olyan új munkatárs jelentkezhet, aki korábban még nem vett részt a szervezet által finanszírozott nyelvtanfolyamon. A kezdő és középhaladó csoportba a jelentkezési feltételek teljesítése után, a rendelkezésre álló helyek függvényében lehet bekerülni. A haladó csoporthoz ezen felül legalább 75%-os szintfelmérő szükséges; a sikeres eredmény azonban önmagában nem garantál helyet, ha a csoport betelt. Mira új munkatárs, és korábban sem jelenlegi, sem más szervezeti egységben nem vett részt intézményi nyelvtanfolyamon. Arról nincs adat, hogy kitöltötte-e a szintfelmérőt, illetve melyik csoportot részesítené előnyben.",
  v06: "A többéves halászati terv szerint a kifogható mennyiség felső határát csak akkor lehet emelni, ha két feltétel egyidejűleg teljesül: az egymást követő állományfelmérések tartós növekedést mutatnak, és a független tudományos bizottság támogatja az emelést. Idén a legutóbbi felmérés a felnőtt halállomány növekedését jelezte, de a fiatal példányokra vonatkozó adatsor hiányos volt. A bizottság ezért nem adott támogató véleményt, hanem további mintavételt kért. A döntéshozók változatlanul hagyták a kvótát. Ez nem jelenti azt, hogy a bizottság végleg elutasította az emelést, és azt sem, hogy a következő teljes adatsor alapján ne születhetne más döntés.",
  v07: "Az épületszigetelési program első évében a 120 érintett középület közül 30-at korszerűsítettek. A munkálatok az ablakok cseréjét, a tetőszigetelést vagy ezek kombinációját jelentették, ezért az egyes épületek eredményei eltértek. A korszerűsített épületek csoportjának időjárással korrigált átlagos hőenergia-fogyasztása 18%-kal csökkent a saját, korszerűsítés előtti értékéhez képest. A jelentés nem közli a többi 90 épület fogyasztásának változását, és nem állítja, hogy minden felújított épületben pontosan ugyanekkora megtakarítás következett be. A program második szakaszáról csak a beruházási költségek és a hosszabb távú mérési eredmények ismeretében döntenek.",
  v08: "A központi könyvtár hétköznapokon rendszerint reggel nyolctól este nyolcig tart nyitva, hétvégén pedig rövidebb nyitvatartást alkalmaz. A hivatalosan kihirdetett vizsgaidőszakban kedden és csütörtökön két órával meghosszabbítják az esti nyitvatartást, de ez nem vonatkozik az ünnepnapokra és a rendkívüli karbantartási napokra. Ma csütörtök van, nincs ünnepnap, és a könyvtár honlapja nem jelez karbantartást. A vizsgaidőszak azonban csak a jövő hét hétfőjén kezdődik. Egy külön olvasóterem ma 22 óráig használható, de az csak előzetesen regisztrált kutatók számára hozzáférhető, és nem módosítja a könyvtár általános nyitvatartását.",
  v09: "A beszerzési szabályzat szerint a szerződés odaítélése előtt legalább három, egymástól független ajánlatot kell bekérni. Kivétel tehető, ha az áru vagy szolgáltatás műszaki vagy jogi okból bizonyíthatóan kizárólagos forrásból szerezhető be. A kizárólagosságot a megrendelő egységnek még a szerződéskötés előtt írásban kell indokolnia, és az indokolást a pénzügyi ellenőr jóváhagyja. Írásos igazolás hiányában egyetlen ajánlat alapján nem köthető szerződés, még akkor sem, ha az ajánlott ár a becsült keret alatt marad. A jóváhagyott kivétel felment a három ajánlat követelménye alól, de nem teszi kötelezővé az ajánlat elfogadását, ha annak egyéb feltételei kedvezőtlenek.",
  v10: "Az online időpontfoglalás bevezetését követő három hónapban az ügyfélszolgálati várakozási idő mediánja 24 percről 16 percre csökkent. Ugyanebben az időszakban két új ügyfélpult nyílt, és a hosszabb ügytípusok egy részét külön időablakokba szervezték. Az ügyfelek összetétele és az összes látogatás száma csak kis mértékben változott. A jelentés szerint az új rendszer valószínűleg hozzájárult a javuláshoz, de a teljes nyolcperces csökkenés nem tulajdonítható kizárólag neki, mert a többi szervezési változás hatását nem mérték külön. A medián csökkenése továbbá nem bizonyítja, hogy minden egyes ügyfél kevesebbet várakozott.",
  v11: "A víztakarékossági kampányra 600 háztartás jelentkezett önként, és közülük 520 adott teljes fogyasztási adatokat a program előtti és utáni három hónapról. E háztartások időjárással korrigált havi vízfogyasztása átlagosan 6%-kal csökkent. A résztvevők ingyenes víztakarékos eszközöket és heti fogyasztási visszajelzést kaptak, ezért az egyes beavatkozások hatását nem lehet különválasztani. A kutatók arra is figyelmeztettek, hogy az önként jelentkező háztartások eleve környezettudatosabbak lehettek a lakosság egészénél. A kampány eredménye így biztató, de nem bizonyítja, hogy azonos program a város minden háztartásában pontosan ugyanekkora megtakarítást okozna.",
  v12: "Az újrahasznosítási központ minden tiszta papír- és fémhulladékot fogad, de vegyszert, festéket és más veszélyes hulladékot nem vesz át. Az elektronikai eszközök közül kizárólag a kisméretű háztartási készülékeket, például kenyérpirítót, vízforralót és hajszárítót lehet leadni; nagyméretű hűtőgépet és mosógépet külön gyűjtőpontra kell vinni. A készülékeknek nem kell működőképesnek lenniük, de az eltávolítható elemeket és akkumulátorokat külön dobozba kell helyezni. Egy régi, nem működő vízforraló kisméretű háztartási készülék, és a tulajdonosa már kivette belőle az elemet. A központ a tárgy fém alkatrészeitől függetlenül elektronikai hulladékként kezeli.",
  v13: "A múzeumi állandó kiállítás 18 év alatt ingyenesen látogatható, amennyiben a látogató az életkorát fényképes okmánnyal igazolja. A 18 és 25 év közötti, érvényes diákigazolvánnyal rendelkező látogatók kedvezményes jegyet válthatnak, de ez nem jelent díjmentességet. A kedvezmény a 25. életév betöltésének napjáig érvényes. Az ideiglenes különkiállításra minden látogatónak külön jegyet kell váltania, kivéve az éves bérlettel rendelkezőket. Egy 17 éves látogató hitelt érdemlően igazolja az életkorát, és csak az állandó kiállítást szeretné megtekinteni. Egy 20 éves egyetemista szintén az állandó kiállításra érkezik, érvényes diákigazolvánnyal.",
  v14: "Az elektromos buszok tesztüzemében a járművek egy teljes szolgálati napra jutó energiafogyasztása télen magasabb volt, mint ősszel. A téli menetrendben az útvonalak átlagosan hosszabbak voltak, a külső hőmérséklet pedig gyakrabban tette szükségessé az utastér fűtését. A forgalmi torlódások időtartama ugyanakkor nem változott számottevően. A mérőrendszer a teljes akkumulátorfelhasználást rögzítette, de nem választotta külön a hajtás, a fűtés és a többi fedélzeti berendezés fogyasztását. Emiatt a vizsgálat megállapíthatja a téli többletfogyasztást, de nem tudja számszerűsíteni, hogy abból pontosan mennyit okozott a hosszabb útvonal, illetve a fűtés.",
  v15: "A kutatási alap olyan nemzetközi együttműködéseket támogat, amelyekben legalább két különböző ország jogi személyiséggel rendelkező intézménye vesz részt. A jogosultsághoz a konzorciumban legalább egy felsőoktatási intézménynek és legalább egy kis- vagy középvállalkozásnak is szerepelnie kell; ugyanaz a szervezet nem töltheti be mindkét szerepet. Három vagy több ország részvétele többletpontot jelenthet, de önmagában nem pótolja a kötelező partnertípusokat. A pályázat vezetője lehet egyetem vagy vállalkozás is. Két ország négy partnere közösen pályázik, és a partnerek között egy akkreditált egyetem, valamint egy, a kiírás szerint kisvállalkozásnak minősülő cég is található.",
  v16: "A kiberbiztonsági alapképzés teljesítéséhez mind az öt online modult el kell végezni, és a felügyelt záróteszten legalább 70%-os eredményt kell elérni. A modulok közötti rövid ellenőrző kérdések pontszáma nem számít bele a záróeredménybe, de minden modul végignézése kötelező. Aki a záróteszten nem éri el a minimumot, hét nap elteltével egyszer újrapróbálkozhat anélkül, hogy a modulokat ismét elvégezné. Dániel mind az öt modult befejezte, első zárótesztjén azonban 68%-ot ért el. Még nem használta fel a második próbálkozását. A rendszer ezért a képzést egyelőre nem teljesítettként, de javíthatóként jelzi a profiljában.",
  v17: "A rugalmas munkaidőben dolgozók a meghatározott napi óraszám teljesítése mellett maguk választhatják meg a munkakezdés időpontját, feltéve, hogy 10 és 15 óra között elérhetők. Az elérhetőség jelenthet irodai vagy engedélyezett távoli jelenlétet is. Az ügyfélszolgálati heti beosztásban dolgozókra ez a választási szabály nem vonatkozik: kezdési és befejezési idejüket a közzétett beosztás rögzíti. Ettől még a beosztásuk tartalmazhatja a 10 és 15 óra közötti időszakot. A részmunkaidősök külön engedéllyel rövidebb törzsidőt kaphatnak. A szabályzat nem állítja, hogy minden dolgozó azonos időpontban kezd vagy fejezi be a munkát.",
  v18: "A vidéki szélessávú program első szakasza azokat a településeket célozza, ahol a háztartások kevesebb mint 60%-a fér hozzá legalább 100 Mbps sebességű vezetékes internethez. A mobilinternet lefedettsége nem számít bele ebbe a mutatóba. A programba bevont Fenyőligeten a beruházás előtti hitelesített vezetékes hozzáférési arány 54% volt. A projekt célja 85% elérése, de a kivitelezés még nem fejeződött be, ezért a tényleges utólagos arány nem ismert. Több más település is részt vesz a programban, eltérő kiinduló értékekkel. A kiválasztás nem azon alapult, hogy melyik településen volt országosan a legalacsonyabb hozzáférés.",
  v19: "Bírósági irat hiteles fordítását csak olyan fordító készítheti, aki az adott nyelvpárra szerepel a hivatalos névjegyzékben. A névjegyzékbe kerüléshez sikeres szakmai vizsga, erkölcsi bizonyítvány és külön elektronikus regisztrációs kérelem szükséges. A vizsgaeredmény önmagában nem hoz létre névjegyzéki tagságot; a hatóság a benyújtott dokumentumok ellenőrzése után dönt. Leila sikeresen letette a szakmai vizsgát, és rendelkezik érvényes erkölcsi bizonyítvánnyal, de a regisztrációs kérelmét még nem küldte be. Magáncélú fordításokat továbbra is vállalhat, a bírósági hitelesítésre vonatkozó jogosultsága azonban csak a névjegyzékbe való felvétel után keletkezhet.",
  v20: "Egy mezőgazdasági vizsgálatban a talajnedvesség-érzékelőket használó gazdaságok hektáronként átlagosan kevesebb öntözővizet használtak, mint a szenzor nélküli gazdaságok. A szenzoros csoport gazdaságai ugyanakkor átlagosan nagyobbak voltak, gyakrabban rendelkeztek csepegtető rendszerrel, és több szakmai tanácsadást vettek igénybe. A kutatók nem véletlenszerűen osztották ki az érzékelőket: a gazdák maguk döntöttek a beszerzésről. A terméshozam mindkét csoportban hasonló tartományban mozgott. Az eredmény ezért kapcsolatot mutat a szenzorhasználat és az alacsonyabb vízfogyasztás között, de nem bizonyítja, hogy a teljes különbséget kizárólag az érzékelők okozták.",
};

verbalQuestions.forEach(question => {
  if (expandedVerbalPassages[question.id]) question.passage = expandedVerbalPassages[question.id];
});

const digitalSkillsSupportTable = [
  ["Ország","Támogatás 2024 (millió EUR)","Támogatás 2025 (millió EUR)","Projektek 2025 (db)","Lezárt projektek 2025 (%)","Nemzeti forrás a támogatásból, 2025 (%)"],
  ["Svédország","18,4","21,2","48","87,5%","35%"],
  ["Olaszország","24,6","23,1","55","80,0%","42%"],
  ["Románia","15,8","19,6","40","92,5%","30%"],
  ["Írország","20,2","22,7","52","75,0%","38%"],
  ["Csehország","17,0","18,9","45","88,9%","33%"]
];

const researchDevelopmentTable = [
  ["Ország","K+F / GDP 2022 (%)","K+F / GDP 2025 (%)","Állami rész a K+F-kiadásból, 2022 (%)","Állami rész a K+F-kiadásból, 2025 (%)","Szabadalom / millió fő, 2025","Népesség 2025 (millió fő)","GDP 2025 (milliárd EUR)"],
  ["Belgium","2,1%","2,4%","30%","28%","180","12,5","280"],
  ["Finnország","3,4%","3,6%","24%","22%","325","8,0","190"],
  ["Franciaország","1,8%","2,0%","42%","40%","115","18,0","340"],
  ["Németország","2,7%","2,9%","35%","31%","260","10,0","250"],
  ["Hollandia","2,3%","2,5%","27%","29%","205","15,0","310"]
];

const publicTransportTable = [
  ["Ország","Utazások 2024 (millió)","Utazások 2025 (millió)","Átlagos jegybevétel 2025 (EUR/utazás)","Költség 2025 (millió EUR)","Pontos utazások 2025 (%)"],
  ["Ausztria","82","88","14,5","980","91%"],
  ["Belgium","64","69","6,8","430","86%"],
  ["Csehország","120","128","3,2","310","94%"],
  ["Dánia","18","17","11,0","155","89%"],
  ["Finnország","75","81","2,9","205","92%"]
];

const energySupplyTable = [
  ["Ország","Igény 2024 (GWh)","Igényváltozás 2025 (%)","Megújulók az igény %-ában, 2024","Megújulók az igény %-ában, 2025","Import az igény %-ában, 2025","Átlagár 2025 (EUR/MWh)"],
  ["Dánia","4 200","+3,5%","38%","44%","12%","86"],
  ["Spanyolország","5 100","−1,0%","52%","55%","8%","79"],
  ["Lengyelország","3 600","+6,0%","29%","37%","18%","92"],
  ["Ausztria","4 700","+2,0%","46%","49%","10%","83"],
  ["Portugália","2 900","+4,5%","61%","64%","5%","76"]
];

const digitalSkillsSupportContext = {
  contextTitle: "Digitális készségfejlesztési támogatások, 2024–2025",
};

const researchDevelopmentContext = {
  contextTitle: "Kutatás-fejlesztési kiadások, finanszírozás és szabadalmak",
};

const publicTransportContext = {
  contextTitle: "Regionális vasúti szolgáltatások öt EU-országban, 2024–2025",
};

const energySupplyContext = {
  contextTitle: "Országos villamosenergia-felhasználás és ellátás, 2024–2025",
};

const advancedNumericQuestions = [
  {
    id:"n01", category:"numeric", difficulty:"Közepes", ...digitalSkillsSupportContext,
    table: digitalSkillsSupportTable,
    prompt:"Összesen hány támogatott digitális képzési projektet zártak le 2025 végéig Svédországban és Romániában?", options:["75","77","79","81","83"], answer:2,
    explanation:"Svédország: 48 × 87,5% = 42 projekt. Románia: 40 × 92,5% = 37 projekt. Együtt 79.", tip:"A százalékot mindig a megfelelő ország projektszámára alkalmazd."
  },
  {
    id:"n02", category:"numeric", difficulty:"Nehéz", ...digitalSkillsSupportContext,
    table: digitalSkillsSupportTable,
    prompt:"Olaszország 2025-ös digitális képzési támogatásából körülbelül mennyit finanszíroztak a nemzeti költségvetésen kívüli forrásból?", options:["9,7 M EUR","11,2 M EUR","13,4 M EUR","14,8 M EUR","16,1 M EUR"], answer:2,
    explanation:"A nemzeti forrás 42%, ezért a többi forrás része 100% − 42% = 58%. 23,1 × 0,58 = 13,398, vagyis körülbelül 13,4 millió EUR.", tip:"Előbb vond ki a megadott százalékot 100%-ból."
  },
  {
    id:"n03", category:"numeric", difficulty:"Közepes", ...digitalSkillsSupportContext,
    table: digitalSkillsSupportTable,
    prompt:"Hány százalékkal nőtt Románia megítélt digitális képzési támogatása 2024-ről 2025-re?", options:["19,4%","21,6%","24,1%","26,8%","31,6%"], answer:2,
    explanation:"A növekedés 19,6 − 15,8 = 3,8. 3,8 ÷ 15,8 × 100 ≈ 24,1%.", tip:"A növekedést a 2024-es kiinduló értékhez viszonyítsd."
  },
  {
    id:"n04", category:"numeric", difficulty:"Nehéz", ...digitalSkillsSupportContext,
    table: digitalSkillsSupportTable,
    prompt:"Melyik országban jutott a legtöbb megítélt 2025-ös digitális képzési támogatás egy lezárt projektre?", options:["Svédország","Olaszország","Románia","Írország","Csehország"], answer:3,
    explanation:"A lezárt projektek száma sorrendben 42; 44; 37; 39; körülbelül 40. A megítélt támogatás és a lezárt projektek hányadosa Írországban a legnagyobb: 22,7 ÷ 39 ≈ 0,582 millió EUR.", tip:"Előbb számítsd ki minden ország lezárt projektjeinek számát."
  },
  {
    id:"n05", category:"numeric", difficulty:"Közepes", ...researchDevelopmentContext,
    table: researchDevelopmentTable,
    prompt:"Körülbelül hány szabadalmi bejelentés jutott összesen Finnországra és Németországra?", options:["4 600","4 900","5 200","5 525","5 850"], answer:2,
    explanation:"Finnország: 325 × 8,0 = 2 600. Németország: 260 × 10,0 = 2 600. Együtt 5 200 bejelentés.", tip:"A millió lakosra jutó mutatót a millió főben megadott népességgel szorozd."
  },
  {
    id:"n06", category:"numeric", difficulty:"Nehéz", ...researchDevelopmentContext,
    table: researchDevelopmentTable,
    prompt:"Mekkora volt Franciaország állam által finanszírozott kutatás-fejlesztési kiadása 2025-ben?", options:["2,04 Md EUR","2,38 Md EUR","2,72 Md EUR","3,40 Md EUR","6,80 Md EUR"], answer:2,
    explanation:"A teljes kutatás-fejlesztési kiadás: 340 × 2,0% = 6,8 milliárd EUR. Ennek 40%-át az állam finanszírozta: 6,8 × 0,40 = 2,72 milliárd EUR.", tip:"Előbb számítsd ki a GDP 2%-át, majd az eredmény 40%-át."
  },
  {
    id:"n07", category:"numeric", difficulty:"Nehéz", ...researchDevelopmentContext,
    table: researchDevelopmentTable,
    prompt:"Belgium teljes szabadalomszáma körülbelül milyen arányban áll Hollandia teljes szabadalomszámához?", options:["1 : 2","2 : 3","3 : 4","4 : 3","5 : 4"], answer:2,
    explanation:"Belgium: 180 × 12,5 = 2 250. Hollandia: 205 × 15 = 3 075. 2 250 : 3 075 ≈ 0,73 : 1, ami legközelebb a 3 : 4 arányhoz áll.", tip:"A millió lakosra megadott számot szorozd meg a millió főben megadott népességgel."
  },
  {
    id:"n08", category:"numeric", difficulty:"Nehéz", ...researchDevelopmentContext,
    table: researchDevelopmentTable,
    prompt:"Finnország és Hollandia kutatás-fejlesztési kiadása együtt az együttes GDP-jük hány százaléka volt 2025-ben?", options:["2,74%","2,86%","2,92%","3,05%","3,18%"], answer:2,
    explanation:"Finnország kiadása: 190 × 3,6% = 6,84 milliárd EUR. Hollandiáé: 310 × 2,5% = 7,75 milliárd EUR. A két kiadás összege 14,59, a két GDP összege 500 milliárd EUR. 14,59 ÷ 500 × 100 = 2,918%, vagyis 2,92%.", tip:"Add össze a két ország kiadását és a két ország GDP-jét, majd oszd el a két összeget."
  },
  {
    id:"n09", category:"numeric", difficulty:"Közepes", ...publicTransportContext,
    table: publicTransportTable,
    prompt:"Hány százalékkal nőtt az ausztriai, belgiumi és finnországi szolgáltatók együttes utazásszáma 2024-ről 2025-re?", options:["5,9%","6,8%","7,7%","8,4%","9,1%"], answer:2,
    explanation:"2024: 82 + 64 + 75 = 221. 2025: 88 + 69 + 81 = 238. Növekedés: 17 ÷ 221 × 100 ≈ 7,7%.", tip:"Az együttes növekedéshez előbb mindkét év összegét képezd."
  },
  {
    id:"n10", category:"numeric", difficulty:"Közepes", ...publicTransportContext,
    table: publicTransportTable,
    prompt:"Mekkora volt a csehországi és finnországi szolgáltatók becsült együttes jegybevétele 2025-ben?", options:["604,1 M EUR","622,8 M EUR","644,5 M EUR","669,3 M EUR","701,2 M EUR"], answer:2,
    explanation:"Csehország: 128 × 3,2 = 409,6 millió EUR. Finnország: 81 × 2,9 = 234,9 millió EUR. Együtt 644,5 millió EUR.", tip:"A millió utas és az euró/utas szorzata millió eurót ad."
  },
  {
    id:"n11", category:"numeric", difficulty:"Közepes", ...publicTransportContext,
    table: publicTransportTable,
    prompt:"Melyik ország szolgáltatójánál volt a legmagasabb az egy utazásra jutó üzemeltetési költség 2025-ben?", options:["Ausztria","Belgium","Csehország","Dánia","Finnország"], answer:0,
    explanation:"Költség/utazás: Ausztria ≈ 11,14 EUR; Belgium ≈ 6,23; Csehország ≈ 2,42; Dánia ≈ 9,12; Finnország ≈ 2,53. A legmagasabb az ausztriai szolgáltatóé.", tip:"Azonos mértékegységeknél elég minden sorban költség ÷ utas értéket számítani."
  },
  {
    id:"n12", category:"numeric", difficulty:"Nehéz", ...publicTransportContext,
    table: publicTransportTable,
    prompt:"Körülbelül hány millióval több pontos utazást teljesített az ausztriai szolgáltató, mint a belgiumi 2025-ben?", options:["17,6 M","18,9 M","20,7 M","22,4 M","24,1 M"], answer:2,
    explanation:"Ausztria: 88 × 91% = 80,08 millió utazás. Belgium: 69 × 86% = 59,34 millió. Különbség: 20,74 millió, azaz körülbelül 20,7 millió.", tip:"Mindkét kategória pontos részét számítsd ki, és csak utána vond ki őket."
  },
  {
    id:"n13", category:"numeric", difficulty:"Nehéz", ...energySupplyContext,
    table: energySupplyTable,
    prompt:"Körülbelül hány GWh megújuló forrásból származó villamos energiát használt fel Lengyelország 2025-ben?", options:["1 248 GWh","1 332 GWh","1 412 GWh","1 526 GWh","1 637 GWh"], answer:2,
    explanation:"2025-ös igény: 3 600 × 1,06 = 3 816 GWh. Ennek 37%-a: 3 816 × 0,37 = 1 411,92, azaz körülbelül 1 412 GWh.", tip:"Előbb az új teljes igényt, majd annak megújuló részét számítsd ki."
  },
  {
    id:"n14", category:"numeric", difficulty:"Közepes", ...energySupplyContext,
    table: energySupplyTable,
    prompt:"Körülbelül hány GWh importált villamos energia fedezte Dánia 2025-ös villamosenergia-igényét?", options:["478 GWh","500 GWh","522 GWh","548 GWh","576 GWh"], answer:2,
    explanation:"Dánia 2025-ös igénye: 4 200 × 1,035 = 4 347 GWh. Ennek 12%-a 521,64 GWh, azaz körülbelül 522 GWh.", tip:"Az importarányt már a növekedéssel módosított 2025-ös igényre alkalmazd."
  },
  {
    id:"n15", category:"numeric", difficulty:"Nehéz", ...energySupplyContext,
    table: energySupplyTable,
    prompt:"Mekkora volt Spanyolország és Portugália 2025-ös villamosenergia-igényének becsült együttes értéke a megadott nagykereskedelmi átlagáron?", options:["598,4 M EUR","613,7 M EUR","629,2 M EUR","646,8 M EUR","671,5 M EUR"], answer:2,
    explanation:"Spanyolország: 5 100 × 0,99 = 5 049 GWh; értéke 5 049 000 × 79 EUR = 398,871 M EUR. Portugália: 2 900 × 1,045 = 3 030,5 GWh; értéke 230,318 M EUR. Együtt ≈ 629,2 M EUR.", tip:"A GWh-t 1 000-rel szorozva kapod meg MWh-ban; az eredmény millió euróban adódik."
  },
  {
    id:"n16", category:"numeric", difficulty:"Nehéz", ...energySupplyContext,
    table: energySupplyTable,
    prompt:"Hány százalékkal nőtt Dánia és Lengyelország együttes, megújuló forrásból származó villamosenergia-felhasználása 2024-ről 2025-re?", options:["21,6%","23,4%","25,9%","28,2%","31,7%"], answer:2,
    explanation:"2024: 4 200 × 38% + 3 600 × 29% = 2 640 GWh. 2025: 4 347 × 44% + 3 816 × 37% = 3 324,6 GWh. Növekedés: 684,6 ÷ 2 640 × 100 ≈ 25,9%.", tip:"Az arányváltozás és az igényváltozás együttes hatását kell figyelembe venni."
  }
];

function polygonWithDots(sides, count, filled) {
  return frame(
    item("polygon", 50, 50, { sides, size: 31, filled }),
    ...dots(count, { size: 4, color: "yellow" }).items
  );
}

function dualShapeFrame(config) {
  return frame(
    item("square", config.squareX, 50, { size: 14, rotation: config.squareRot, filled: config.squareFill }),
    item("triangle", config.triangleX, 50, { size: 15, rotation: config.triangleRot, filled: !config.squareFill }),
    item("circle", 50, config.dotY, { size: 4, filled: true, color: "yellow" })
  );
}

function movingArrowFrame(rotation, dotX, dotY, filled) {
  return frame(
    item("arrow", 50, 50, { size: 22, rotation, filled }),
    item("circle", dotX, dotY, { size: 5, filled: true, color: "yellow" })
  );
}

function gridFrame(squarePos, circlePos, rotation, filled) {
  return frame(
    item("square", squarePos[0], squarePos[1], { size: 10, rotation, filled }),
    item("circle", circlePos[0], circlePos[1], { size: 9, filled: !filled }),
    item("triangle", 50, 50, { size: 13, rotation: rotation * 2, filled: false })
  );
}

const advancedAbstractQuestions = [
  {
    id:"a01", category:"abstract", difficulty:"Nehéz", prompt:"Melyik ábra folytatja a három párhuzamos szabályt?",
    sequence:[
      frame(item("triangle",50,50,{size:28,rotation:0,filled:false}),item("circle",50,50,{size:9,filled:true}),item("circle",24,24,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:90,filled:false}),item("circle",50,50,{size:9,filled:false}),item("circle",76,24,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:180,filled:false}),item("circle",50,50,{size:9,filled:true}),item("circle",76,76,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:270,filled:false}),item("circle",50,50,{size:9,filled:false}),item("circle",24,76,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:0,filled:false}),item("circle",50,50,{size:9,filled:true}),item("circle",24,24,{size:5,filled:true,color:"yellow"}))
    ],
    options:[
      frame(item("triangle",50,50,{size:28,rotation:90,filled:false}),item("circle",50,50,{size:9,filled:false}),item("circle",76,24,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:90,filled:false}),item("circle",50,50,{size:9,filled:true}),item("circle",76,24,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:180,filled:false}),item("circle",50,50,{size:9,filled:false}),item("circle",76,24,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:90,filled:false}),item("circle",50,50,{size:9,filled:false}),item("circle",76,76,{size:5,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:28,rotation:0,filled:false}),item("circle",50,50,{size:9,filled:true}),item("circle",24,76,{size:5,filled:true,color:"yellow"}))
    ], answer:0,
    explanation:"A külső háromszög 90°-ot fordul, a sárga pont az óramutató irányában járja a sarkokat, a középső kör pedig felváltva kitöltött és üres. A következő állapot: 90°, jobb felső pont, üres középső kör.",
    tip:"Takard le fejben az ábra két részét, és külön-külön kövesd a három változót."
  },
  {
    id:"a02", category:"abstract", difficulty:"Nehéz", prompt:"Melyik összetett állapot következik?",
    sequence:[
      dualShapeFrame({squareX:30,squareRot:0,squareFill:true,triangleX:70,triangleRot:0,dotY:18}),
      dualShapeFrame({squareX:70,squareRot:45,squareFill:false,triangleX:30,triangleRot:90,dotY:82}),
      dualShapeFrame({squareX:30,squareRot:90,squareFill:true,triangleX:70,triangleRot:180,dotY:18}),
      dualShapeFrame({squareX:70,squareRot:135,squareFill:false,triangleX:30,triangleRot:270,dotY:82}),
      dualShapeFrame({squareX:30,squareRot:180,squareFill:true,triangleX:70,triangleRot:0,dotY:18})
    ],
    options:[
      dualShapeFrame({squareX:70,squareRot:225,squareFill:false,triangleX:30,triangleRot:90,dotY:82}),
      dualShapeFrame({squareX:70,squareRot:225,squareFill:true,triangleX:30,triangleRot:90,dotY:82}),
      dualShapeFrame({squareX:30,squareRot:225,squareFill:false,triangleX:70,triangleRot:90,dotY:82}),
      dualShapeFrame({squareX:70,squareRot:180,squareFill:false,triangleX:30,triangleRot:90,dotY:82}),
      dualShapeFrame({squareX:70,squareRot:225,squareFill:false,triangleX:30,triangleRot:180,dotY:18})
    ], answer:0,
    explanation:"A két nagy alakzat minden lépésben helyet cserél. A négyzet 45°-kal, a háromszög 90°-kal fordul; a kitöltés és a kis pont felső/alsó helyzete váltakozik.",
    tip:"Az azonos képkockában látható tulajdonságokat táblázatszerűen kövesd: hely, forgás, kitöltés, pont."
  },
  {
    id:"a03", category:"abstract", difficulty:"Nehéz", prompt:"Melyik sokszög–pont kombináció folytatja a sorozatot?",
    sequence:[polygonWithDots(3,1,true),polygonWithDots(4,2,false),polygonWithDots(5,3,true),polygonWithDots(6,1,false),polygonWithDots(3,2,true)],
    options:[polygonWithDots(4,3,false),polygonWithDots(4,2,false),polygonWithDots(5,3,false),polygonWithDots(4,3,true),polygonWithDots(6,1,true)], answer:0,
    explanation:"Az oldalszám 3–4–5–6 ciklusban, a belső pontok száma 1–2–3 ciklusban halad, a külső alakzat kitöltése pedig váltakozik. Ezért üres négyzet három ponttal következik.",
    tip:"A különböző hosszúságú ciklusok csak több képkocka után kerülnek ismét ugyanabba az együttállásba."
  },
  {
    id:"a04", category:"abstract", difficulty:"Nehéz", prompt:"Melyik nyíl és pont kerül a következő képkockára?",
    sequence:[
      movingArrowFrame(0,24,24,true),movingArrowFrame(45,24,76,false),movingArrowFrame(90,76,76,true),movingArrowFrame(135,76,24,false),movingArrowFrame(180,24,24,true)
    ],
    options:[
      movingArrowFrame(225,24,76,false),movingArrowFrame(225,76,24,false),movingArrowFrame(180,24,76,false),movingArrowFrame(225,24,76,true),movingArrowFrame(270,76,76,true)
    ], answer:0,
    explanation:"A nyíl 45°-kal fordul, és a kitöltése minden lépésben változik. A pont a sarkokat az óramutató járásával ellentétesen járja be. A helyes folytatás 225°-os üres nyíl, bal alsó ponttal.",
    tip:"Az irányváltozás és a pont mozgása ellentétes lehet; ne keresd köztük mesterségesen ugyanazt a forgásirányt."
  },
  {
    id:"a05", category:"abstract", difficulty:"Közepes", prompt:"Melyik ábrában találkozik helyesen a három ismétlődő minta?",
    sequence:[
      frame(item("circle",50,50,{size:31,filled:false}),...bars(1).items,item("diamond",30,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:true,color:"yellow"}),...bars(2).items,item("diamond",50,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:false}),...bars(3).items,item("diamond",70,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:true,color:"yellow"}),...bars(1).items,item("diamond",50,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:false}),...bars(2).items,item("diamond",30,76,{size:7,filled:true,color:"blue"}))
    ],
    options:[
      frame(item("circle",50,50,{size:31,filled:true,color:"yellow"}),...bars(3).items,item("diamond",50,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:true,color:"yellow"}),...bars(3).items,item("diamond",70,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:true,color:"yellow"}),...bars(2).items,item("diamond",50,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:false}),...bars(3).items,item("diamond",50,76,{size:7,filled:true,color:"blue"})),
      frame(item("circle",50,50,{size:31,filled:false}),...bars(1).items,item("diamond",30,76,{size:7,filled:true,color:"blue"}))
    ], answer:0,
    explanation:"A rudak száma 1–2–3 ciklusban halad, a rombusz vízszintes helyzete 30–50–70–50 ciklust követ, a nagy kör kitöltése pedig váltakozik. Következő: három rúd, középső rombusz, kitöltött kör.",
    tip:"Ha egy mozgó elem visszafordul, keresd a „pattogó” helyzetsort."
  },
  {
    id:"a06", category:"abstract", difficulty:"Nehéz", prompt:"Melyik képkocka tartja fenn az alakzatok és a középső jel mozgását?",
    sequence:[
      frame(item("square",50,24,{size:10,filled:true}),item("circle",74,68,{size:9,filled:false}),item("triangle",26,68,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:0,filled:true,color:"yellow"})),
      frame(item("square",74,68,{size:10,filled:false}),item("circle",26,68,{size:9,filled:true}),item("triangle",50,24,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:45,filled:true,color:"yellow"})),
      frame(item("square",26,68,{size:10,filled:false}),item("circle",50,24,{size:9,filled:false}),item("triangle",74,68,{size:11,filled:true}),item("diamond",50,50,{size:7,rotation:90,filled:true,color:"yellow"})),
      frame(item("square",50,24,{size:10,filled:true}),item("circle",74,68,{size:9,filled:false}),item("triangle",26,68,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:135,filled:true,color:"yellow"})),
      frame(item("square",74,68,{size:10,filled:false}),item("circle",26,68,{size:9,filled:true}),item("triangle",50,24,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:180,filled:true,color:"yellow"}))
    ],
    options:[
      frame(item("square",26,68,{size:10,filled:false}),item("circle",50,24,{size:9,filled:false}),item("triangle",74,68,{size:11,filled:true}),item("diamond",50,50,{size:7,rotation:225,filled:true,color:"yellow"})),
      frame(item("square",26,68,{size:10,filled:true}),item("circle",50,24,{size:9,filled:false}),item("triangle",74,68,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:225,filled:true,color:"yellow"})),
      frame(item("square",50,24,{size:10,filled:false}),item("circle",74,68,{size:9,filled:false}),item("triangle",26,68,{size:11,filled:true}),item("diamond",50,50,{size:7,rotation:225,filled:true,color:"yellow"})),
      frame(item("square",26,68,{size:10,filled:false}),item("circle",50,24,{size:9,filled:false}),item("triangle",74,68,{size:11,filled:true}),item("diamond",50,50,{size:7,rotation:180,filled:true,color:"yellow"})),
      frame(item("square",74,68,{size:10,filled:false}),item("circle",26,68,{size:9,filled:true}),item("triangle",50,24,{size:11,filled:false}),item("diamond",50,50,{size:7,rotation:270,filled:true,color:"yellow"}))
    ], answer:0,
    explanation:"A három külső alakzat az óramutató irányában lép tovább; mindig másik alakzat kitöltött, négyzet–kör–háromszög sorrendben. A középső rombusz 45°-kal fordul. A hatodik állapot a harmadik elrendezés, 225°-os rombusszal.",
    tip:"Körpályás feladatnál az alakzat identitását és a kitöltött jel identitását külön kövesd."
  },
  {
    id:"a07", category:"abstract", difficulty:"Nehéz", prompt:"Melyik ábra folytatja mindhárom ciklust?",
    sequence:[
      frame(item("polygon",50,50,{sides:4,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:0,filled:false}),...dots(2,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:5,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:90,filled:false}),...dots(3,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:6,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:180,filled:false}),...dots(1,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:3,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:270,filled:false}),...dots(2,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:4,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:0,filled:false}),...dots(3,{size:3,color:"yellow"}).items)
    ],
    options:[
      frame(item("polygon",50,50,{sides:5,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:90,filled:false}),...dots(1,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:5,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:90,filled:false}),...dots(2,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:6,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:90,filled:false}),...dots(1,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:5,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:180,filled:false}),...dots(1,{size:3,color:"yellow"}).items),
      frame(item("polygon",50,50,{sides:3,size:31,filled:false}),item("triangle",50,50,{size:13,rotation:270,filled:false}),...dots(3,{size:3,color:"yellow"}).items)
    ], answer:0,
    explanation:"A külső oldalszám 4–5–6–3, a belső háromszög 90°-os forgást, a pontok száma pedig 2–3–1 ciklust követ. Így ötszög, 90°-os háromszög és egy pont következik.",
    tip:"Az eltérő ciklushossz miatt ne csak az első és az utolsó ábrát hasonlítsd össze."
  },
  {
    id:"a08", category:"abstract", difficulty:"Nehéz", prompt:"Melyik központi alakzat és sarokpont következik?",
    sequence:[
      frame(item("square",50,50,{size:14,filled:true}),item("circle",24,24,{size:4,filled:true,color:"yellow"})),
      frame(item("circle",50,50,{size:24,filled:true}),item("circle",76,24,{size:4,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:14,filled:false}),item("circle",76,76,{size:4,filled:true,color:"yellow"})),
      frame(item("square",50,50,{size:24,filled:false}),item("circle",24,76,{size:4,filled:true,color:"yellow"})),
      frame(item("circle",50,50,{size:14,filled:true}),item("circle",24,24,{size:4,filled:true,color:"yellow"}))
    ],
    options:[
      frame(item("triangle",50,50,{size:24,filled:true}),item("circle",76,24,{size:4,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:14,filled:true}),item("circle",76,24,{size:4,filled:true,color:"yellow"})),
      frame(item("square",50,50,{size:24,filled:true}),item("circle",76,24,{size:4,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:24,filled:false}),item("circle",76,24,{size:4,filled:true,color:"yellow"})),
      frame(item("triangle",50,50,{size:24,filled:true}),item("circle",76,76,{size:4,filled:true,color:"yellow"}))
    ], answer:0,
    explanation:"Az alakzat négyzet–kör–háromszög, a méret kicsi–nagy, a kitöltés két kitöltött–két üres ciklusban halad. A sarokpont körbejár. A hatodik nagy, kitöltött háromszög jobb felső ponttal.",
    tip:"A két-két képkockán át tartó kitöltési szabály könnyen elrejti a rövidebb alakzatciklust."
  },
  {
    id:"a09", category:"abstract", difficulty:"Nehéz", prompt:"Melyik tükrözött nyílpár a helyes folytatás?",
    sequence:[0,45,90,135,180].map((rotation,index)=>frame(
      item("arrow",30,50,{size:15,rotation,filled:index%2===0}),
      item("arrow",70,50,{size:15,rotation:rotation+180,filled:index%2!==0}),
      item("circle",50,index%2===0?24:76,{size:4,filled:true,color:"yellow"})
    )),
    options:[
      frame(item("arrow",30,50,{size:15,rotation:225,filled:false}),item("arrow",70,50,{size:15,rotation:405,filled:true}),item("circle",50,76,{size:4,filled:true,color:"yellow"})),
      frame(item("arrow",30,50,{size:15,rotation:225,filled:true}),item("arrow",70,50,{size:15,rotation:405,filled:false}),item("circle",50,76,{size:4,filled:true,color:"yellow"})),
      frame(item("arrow",30,50,{size:15,rotation:180,filled:false}),item("arrow",70,50,{size:15,rotation:360,filled:true}),item("circle",50,76,{size:4,filled:true,color:"yellow"})),
      frame(item("arrow",30,50,{size:15,rotation:225,filled:false}),item("arrow",70,50,{size:15,rotation:225,filled:true}),item("circle",50,76,{size:4,filled:true,color:"yellow"})),
      frame(item("arrow",30,50,{size:15,rotation:270,filled:false}),item("arrow",70,50,{size:15,rotation:450,filled:true}),item("circle",50,24,{size:4,filled:true,color:"yellow"}))
    ], answer:0,
    explanation:"Mindkét nyíl 45°-ot fordul, és végig ellentétes irányba mutatnak. A kitöltés átkerül egyik nyílról a másikra, a pont pedig felül és alul váltakozik.",
    tip:"Tükrözött pároknál először ellenőrizd, hogy a két elem közötti kapcsolat állandó-e."
  },
  {
    id:"a10", category:"abstract", difficulty:"Nehéz", prompt:"Melyik ábra következik a váltakozó forgáslépések után?",
    sequence:[
      frame(item("diamond",50,50,{size:28,rotation:0,filled:false}),...dots(1,{size:4,color:"yellow"}).items),
      frame(item("square",50,50,{size:28,rotation:45,filled:false}),...dots(2,{size:4,color:"yellow"}).items),
      frame(item("diamond",50,50,{size:28,rotation:135,filled:false}),...dots(3,{size:4,color:"yellow"}).items),
      frame(item("square",50,50,{size:28,rotation:180,filled:false}),...dots(1,{size:4,color:"yellow"}).items),
      frame(item("diamond",50,50,{size:28,rotation:270,filled:false}),...dots(2,{size:4,color:"yellow"}).items)
    ],
    options:[
      frame(item("square",50,50,{size:28,rotation:315,filled:false}),...dots(3,{size:4,color:"yellow"}).items),
      frame(item("diamond",50,50,{size:28,rotation:315,filled:false}),...dots(3,{size:4,color:"yellow"}).items),
      frame(item("square",50,50,{size:28,rotation:360,filled:false}),...dots(3,{size:4,color:"yellow"}).items),
      frame(item("square",50,50,{size:28,rotation:315,filled:false}),...dots(1,{size:4,color:"yellow"}).items),
      frame(item("diamond",50,50,{size:28,rotation:270,filled:false}),...dots(2,{size:4,color:"yellow"}).items)
    ], answer:0,
    explanation:"A forgási lépés felváltva +45° és +90°: 0, 45, 135, 180, 270, 315. Az alakzat rombusz–négyzet, a pontszám 1–2–3 ciklust követ. Következő: 315°-os négyzet három ponttal.",
    tip:"Ne csak az abszolút irányokat, hanem az egymást követő irányok különbségét is írd fel."
  },
  {
    id:"a11", category:"abstract", difficulty:"Nehéz", prompt:"Melyik rácsállapot következik?",
    sequence:[
      gridFrame([25,25],[75,75],0,true),gridFrame([75,25],[25,75],45,false),gridFrame([75,75],[25,25],90,true),gridFrame([25,75],[75,25],135,false),gridFrame([25,25],[75,75],180,true)
    ],
    options:[
      gridFrame([75,25],[25,75],225,false),gridFrame([75,25],[25,75],225,true),gridFrame([75,75],[25,25],225,false),gridFrame([75,25],[25,75],180,false),gridFrame([25,75],[75,25],270,true)
    ], answer:0,
    explanation:"A négyzet a sarkokat az óramutató irányában, a kör az ellenkező irányban járja. A kitöltés lépésenként felcserélődik, a központi háromszög pedig 90°-ot fordul, miközben a négyzet 45°-ot.",
    tip:"A két sarokpályát külön iránnyal rajzold fel a digitális jegyzettömbben."
  },
  {
    id:"a12", category:"abstract", difficulty:"Nehéz", prompt:"Melyik csoport folytatja a darabszám, alak és kitöltés mintáját?",
    sequence:[
      frame(...dots(2,{size:8,filled:false}).items),
      frame(...[30,50,70].map(x=>item("square",x,50,{size:8,filled:true}))),
      frame(...[[32,32],[68,32],[32,68],[68,68]].map(([x,y])=>item("circle",x,y,{size:8,filled:false}))),
      frame(...[38,62].map(x=>item("square",x,50,{size:8,filled:true}))),
      frame(...dots(3,{size:8,filled:false}).items)
    ],
    options:[
      frame(...[[32,32],[68,32],[32,68],[68,68]].map(([x,y])=>item("square",x,y,{size:8,filled:true}))),
      frame(...[[32,32],[68,32],[32,68],[68,68]].map(([x,y])=>item("circle",x,y,{size:8,filled:false}))),
      frame(...[30,50,70].map(x=>item("square",x,50,{size:8,filled:true}))),
      frame(...[[32,32],[68,32],[32,68],[68,68]].map(([x,y])=>item("square",x,y,{size:8,filled:false}))),
      frame(...dots(2,{size:8,filled:false}).items)
    ], answer:0,
    explanation:"A darabszám 2–3–4 ciklusban halad, az alakzat kör–négyzet váltakozik, és a kör mindig üres, a négyzet mindig kitöltött. Három üres kör után négy kitöltött négyzet következik.",
    tip:"A kitöltés itt nem önálló ciklus: az alakzat típusához kötött állandó tulajdonság."
  }
];

function lineItem(x1, y1, x2, y2, options = {}) {
  return item("line", x1, y1, { x2, y2, ...options });
}

function roundedCoordinate(value) {
  return Math.round(value * 10) / 10;
}

function networkFrame(config = {}) {
  const arms = config.arms || 3;
  const items = [];
  const rotation = config.rotation || 0;
  const bendPhase = config.bendPhase || 0;
  for (let index = 0; index < arms; index += 1) {
    const angle = -90 + rotation + (360 / arms) * index;
    const radians = angle * Math.PI / 180;
    const tangent = (angle + 90) * Math.PI / 180;
    const sign = (index + bendPhase) % 2 === 0 ? 1 : -1;
    const start = [50 + Math.cos(radians) * 12, 50 + Math.sin(radians) * 12];
    const bend = [50 + Math.cos(radians) * 27, 50 + Math.sin(radians) * 27];
    const end = [
      bend[0] + Math.cos(radians) * 3 + Math.cos(tangent) * 10 * sign,
      bend[1] + Math.sin(radians) * 3 + Math.sin(tangent) * 10 * sign
    ];
    const width = index === config.heavy ? 5.4 : 2.5;
    const dashed = index === config.dashed;
    items.push(lineItem(roundedCoordinate(start[0]), roundedCoordinate(start[1]), roundedCoordinate(bend[0]), roundedCoordinate(bend[1]), { width, dashed }));
    items.push(lineItem(roundedCoordinate(bend[0]), roundedCoordinate(bend[1]), roundedCoordinate(end[0]), roundedCoordinate(end[1]), { width, dashed }));
    items.push(item("circle", roundedCoordinate(end[0]), roundedCoordinate(end[1]), {
      size: 3.3,
      filled: Boolean((config.endMask || 0) & (1 << index))
    }));
    if (index === config.marker) {
      items.push(item("diamond", roundedCoordinate(bend[0]), roundedCoordinate(bend[1]), {
        size: 3.6,
        filled: true,
        color: "yellow",
        rotation: 45
      }));
    }
  }
  items.push(item("polygon", 50, 50, {
    sides: config.sides || 6,
    size: 12,
    rotation: rotation / 2,
    filled: Boolean(config.centerFill),
    color: config.centerFill ? "yellow" : "blue"
  }));
  items.push(item("triangle", 50, 50, {
    size: 4.8,
    rotation: config.innerRotation || 0,
    filled: false
  }));
  return frame(...items);
}

function pairedHubFrame(config = {}) {
  const items = [];
  const hubs = [[33, 50], [67, 50]];
  const bends = [[21, 38], [21, 62], [79, 38], [79, 62]];
  const ends = [[11, 25], [11, 75], [89, 25], [89, 75]];
  const starts = [[26, 44], [26, 56], [74, 44], [74, 56]];
  items.push(lineItem(43, 50, 57, 50, {
    width: config.connectorHeavy ? 5.4 : 2.5,
    dashed: Boolean(config.connectorDashed)
  }));
  for (let index = 0; index < 4; index += 1) {
    const width = index === config.heavy ? 5.4 : 2.5;
    const dashed = index === config.dashed;
    items.push(lineItem(starts[index][0], starts[index][1], bends[index][0], bends[index][1], { width, dashed }));
    items.push(lineItem(bends[index][0], bends[index][1], ends[index][0], ends[index][1], { width, dashed }));
    items.push(item("circle", ends[index][0], ends[index][1], {
      size: 3.2,
      filled: Boolean((config.endMask || 0) & (1 << index))
    }));
  }
  items.push(item("polygon", hubs[0][0], hubs[0][1], {
    sides: config.leftSides || 5,
    size: 10,
    filled: Boolean(config.leftFill),
    color: config.leftFill ? "yellow" : "blue"
  }));
  items.push(item("polygon", hubs[1][0], hubs[1][1], {
    sides: config.rightSides || 6,
    size: 10,
    filled: Boolean(config.rightFill),
    color: config.rightFill ? "yellow" : "blue"
  }));
  items.push(item("triangle", hubs[0][0], hubs[0][1], {
    size: 4,
    rotation: config.arrowRotation || 0,
    filled: false
  }));
  items.push(item("triangle", hubs[1][0], hubs[1][1], {
    size: 4,
    rotation: -(config.arrowRotation || 0),
    filled: false
  }));
  items.push(item(config.marker ? "diamond" : "circle", 50, 50, {
    size: 3.5,
    rotation: 45,
    filled: true,
    color: "yellow"
  }));
  return frame(...items);
}

function gridNetworkFrame(config = {}) {
  const points = [[24, 24], [76, 24], [76, 76], [24, 76]];
  const shapes = ["square", "circle", "triangle", "diamond"];
  const items = [];
  for (let index = 0; index < 4; index += 1) {
    const next = (index + 1) % 4;
    items.push(lineItem(points[index][0], points[index][1], points[next][0], points[next][1], {
      width: index === config.thickEdge ? 5.1 : 2.2,
      dashed: index === config.dashedEdge
    }));
  }
  const diagonal = config.diagonal ? [points[1], points[3]] : [points[0], points[2]];
  items.push(lineItem(diagonal[0][0], diagonal[0][1], diagonal[1][0], diagonal[1][1], { width: 2.2 }));
  for (let index = 0; index < 4; index += 1) {
    const shape = shapes[(index + (config.shapeShift || 0)) % 4];
    items.push(item(shape, points[index][0], points[index][1], {
      size: shape === "circle" ? 6 : 6.5,
      rotation: (config.rotation || 0) + index * 45,
      filled: index === config.filledIndex,
      color: index === config.filledIndex ? "yellow" : "blue"
    }));
    if ((config.dotMask || 0) & (1 << index)) {
      const x = points[index][0] < 50 ? points[index][0] - 9 : points[index][0] + 9;
      const y = points[index][1] < 50 ? points[index][1] - 9 : points[index][1] + 9;
      items.push(item("circle", x, y, { size: 2.5, filled: true, color: "yellow" }));
    }
  }
  items.push(item("polygon", 50, 50, {
    sides: config.centerSides || 5,
    size: 10,
    rotation: config.rotation || 0,
    filled: Boolean(config.centerFill),
    color: config.centerFill ? "yellow" : "blue"
  }));
  items.push(item("triangle", 50, 50, {
    size: 4,
    rotation: config.arrowRotation || 0,
    filled: false
  }));
  return frame(...items);
}

function orbitNetworkFrame(config = {}) {
  const shapes = ["square", "circle", "triangle"];
  const items = [];
  for (let index = 0; index < 3; index += 1) {
    const angle = -90 + (config.offset || 0) + index * 120;
    const radians = angle * Math.PI / 180;
    const start = [50 + Math.cos(radians) * 11, 50 + Math.sin(radians) * 11];
    const node = [50 + Math.cos(radians) * 31, 50 + Math.sin(radians) * 31];
    const outer = [50 + Math.cos(radians) * 41, 50 + Math.sin(radians) * 41];
    items.push(lineItem(
      roundedCoordinate(start[0]),
      roundedCoordinate(start[1]),
      roundedCoordinate(node[0]),
      roundedCoordinate(node[1]),
      { width: index === config.heavy ? 5.2 : 2.4, dashed: index === config.dashed }
    ));
    const shape = shapes[(index + (config.shapeShift || 0)) % 3];
    items.push(item(shape, roundedCoordinate(node[0]), roundedCoordinate(node[1]), {
      size: shape === "circle" ? 6 : 6.5,
      rotation: angle + (config.rotation || 0),
      filled: index === config.filledIndex,
      color: index === config.filledIndex ? "yellow" : "blue"
    }));
    items.push(item("circle", roundedCoordinate(outer[0]), roundedCoordinate(outer[1]), {
      size: 2.7,
      filled: index === config.dotIndex,
      color: index === config.dotIndex ? "yellow" : "blue"
    }));
  }
  items.push(item("polygon", 50, 50, {
    sides: config.centerSides || 6,
    size: 11,
    rotation: config.rotation || 0,
    filled: Boolean(config.centerFill),
    color: config.centerFill ? "yellow" : "blue"
  }));
  items.push(item("triangle", 50, 50, {
    size: 4.4,
    rotation: config.arrowRotation || 0,
    filled: false
  }));
  return frame(...items);
}

function buildExpertAbstractQuestion({
  id,
  render,
  step,
  answer,
  changes,
  prompt,
  explanation,
  tip
}) {
  const correctConfig = step(5);
  const correct = render(correctConfig);
  const distractors = changes.map(change => render({ ...correctConfig, ...change })).slice(0, 4);
  const options = [...distractors];
  options.splice(answer, 0, correct);
  return {
    id,
    category: "abstract",
    difficulty: "Nehéz",
    prompt,
    sequence: [0, 1, 2, 3, 4].map(index => render(step(index))),
    options,
    answer,
    explanation,
    tip
  };
}

const abstractSteps = {
  branchClockwise: index => ({
    arms: 3,
    rotation: index * 60,
    sides: [5, 6, 4][index % 3],
    heavy: index % 3,
    dashed: (index + 2) % 3,
    endMask: 1 << (index % 3),
    bendPhase: index % 2,
    marker: (index + 2) % 3,
    innerRotation: index * 45,
    centerFill: index % 2 === 1
  }),
  fourArmCounter: index => ({
    arms: 4,
    rotation: index * 45,
    sides: [4, 5, 6][index % 3],
    heavy: (4 - index % 4) % 4,
    dashed: (index + 2) % 4,
    endMask: [3, 6, 12, 9][index % 4],
    bendPhase: index % 2,
    marker: (index + 1) % 4,
    innerRotation: index * 90,
    centerFill: Math.floor(index / 2) % 2 === 1
  }),
  pairedCycle: index => ({
    leftSides: [4, 5, 6, 3][index % 4],
    rightSides: [5, 6, 3, 4][index % 4],
    leftFill: index % 2 === 0,
    rightFill: index % 2 === 1,
    endMask: 1 << (index % 4),
    heavy: index % 4,
    dashed: (index + 2) % 4,
    marker: index % 2,
    arrowRotation: index * 45,
    connectorDashed: index % 2 === 1,
    connectorHeavy: index % 3 === 2
  }),
  gridClockwise: index => ({
    shapeShift: index % 4,
    filledIndex: index % 4,
    diagonal: index % 2,
    thickEdge: index % 4,
    dashedEdge: (index + 2) % 4,
    centerSides: [4, 5, 6, 3][index % 4],
    rotation: index * 45,
    dotMask: [5, 10][index % 2],
    centerFill: index % 2 === 1,
    arrowRotation: index * 90
  }),
  orbitClockwise: index => ({
    offset: index * 30,
    shapeShift: index % 3,
    filledIndex: (index + 2) % 3,
    dotIndex: [0, 2, 1][index % 3],
    heavy: index % 3,
    dashed: (index + 1) % 3,
    centerSides: [5, 6, 4][index % 3],
    rotation: index * 30,
    centerFill: index % 2 === 1,
    arrowRotation: index * 90
  }),
  branchCount: index => ({
    arms: 3,
    rotation: index * 120,
    sides: [6, 5, 4][index % 3],
    heavy: (2 - index % 3 + 3) % 3,
    dashed: index % 3,
    endMask: [1, 3, 7][index % 3],
    bendPhase: index % 2,
    marker: index % 3,
    innerRotation: index * 90,
    centerFill: [false, true, true][index % 3]
  }),
  pairedOpposite: index => ({
    leftSides: [6, 4, 5][index % 3],
    rightSides: [3, 5, 4][index % 3],
    leftFill: index % 2 === 1,
    rightFill: index % 2 === 0,
    endMask: [3, 6, 12, 9][index % 4],
    heavy: (index + 2) % 4,
    dashed: index % 4,
    marker: (index + 1) % 2,
    arrowRotation: index * 90,
    connectorDashed: index % 2 === 0,
    connectorHeavy: index % 3 === 1
  }),
  gridSkip: index => ({
    shapeShift: (index * 2) % 4,
    filledIndex: (3 - index % 4 + 4) % 4,
    diagonal: Math.floor(index / 2) % 2,
    thickEdge: (index + 2) % 4,
    dashedEdge: index % 4,
    centerSides: [6, 4, 5][index % 3],
    rotation: index * 90,
    dotMask: [3, 6, 12, 9][index % 4],
    centerFill: index % 2 === 0,
    arrowRotation: index * 45
  }),
  fourArmOpposite: index => ({
    arms: 4,
    rotation: index * 90,
    sides: [6, 4, 5][index % 3],
    heavy: (index + 1) % 4,
    dashed: (index + 3) % 4,
    endMask: [5, 10][index % 2],
    bendPhase: Math.floor(index / 2) % 2,
    marker: (index + 2) % 4,
    innerRotation: index * 45,
    centerFill: index % 2 === 0
  }),
  orbitCounter: index => ({
    offset: index * 60,
    shapeShift: (index * 2) % 3,
    filledIndex: index % 3,
    dotIndex: (index + 1) % 3,
    heavy: (2 - index % 3 + 3) % 3,
    dashed: index % 3,
    centerSides: [4, 6, 5][index % 3],
    rotation: index * 45,
    centerFill: index % 2 === 0,
    arrowRotation: index * 45
  }),
  pairedDouble: index => ({
    leftSides: [3, 6, 4, 5][index % 4],
    rightSides: [6, 4, 5, 3][index % 4],
    leftFill: Math.floor(index / 2) % 2 === 0,
    rightFill: Math.floor(index / 2) % 2 === 1,
    endMask: [5, 10][index % 2],
    heavy: (3 - index % 4 + 4) % 4,
    dashed: (index + 1) % 4,
    marker: index % 2,
    arrowRotation: index * 135,
    connectorDashed: index % 2 === 1,
    connectorHeavy: index % 3 === 0
  }),
  fourArmCombined: index => ({
    arms: 4,
    rotation: index * 45,
    sides: [5, 6, 4][index % 3],
    heavy: index % 4,
    dashed: (index + 2) % 4,
    endMask: [1, 3, 7, 15][index % 4],
    bendPhase: index % 2,
    marker: (3 - index % 4 + 4) % 4,
    innerRotation: index * 135,
    centerFill: index % 2 === 1
  })
};

const expertAbstractQuestions = [
  buildExpertAbstractQuestion({
    id: "ax01", render: networkFrame, step: abstractSteps.branchClockwise, answer: 2,
    changes: [{ rotation: 240 }, { heavy: 1 }, { endMask: 2 }, { sides: 6 }],
    prompt: "Melyik hálózat folytatja helyesen az ágak forgását, a vastag és szaggatott vonal, a végpont és a középső jel mintáját?",
    explanation: "Az egész hálózat 60°-kal fordul. A vastag ág, a szaggatott ág és a kitöltött végpont külön-külön lép tovább a három ágon; a középső sokszög oldalszáma 5–6–4 ciklusú, kitöltése váltakozik.",
    tip: "A hálózat teljes forgását válaszd külön az egyes ágakhoz kötött tulajdonságoktól."
  }),
  buildExpertAbstractQuestion({
    id: "ax02", render: networkFrame, step: abstractSteps.fourArmCounter, answer: 4,
    changes: [{ heavy: 0 }, { endMask: 12 }, { innerRotation: 0 }, { sides: 5 }],
    prompt: "Melyik négylábú ábra őrzi meg egyszerre az ellenkező irányú ágmozgást és a középső alakzat ciklusát?",
    explanation: "A hálózat 45°-kal fordul, miközben a vastag ág az ellenkező irányban halad. A két szomszédos kitöltött végpont körbefordul, a belső háromszög 90°-ot lép, a középső oldalszám pedig 4–5–6.",
    tip: "A két kitöltött végpontot egyetlen, forgó párként érdemes követni."
  }),
  buildExpertAbstractQuestion({
    id: "ax03", render: pairedHubFrame, step: abstractSteps.pairedCycle, answer: 1,
    changes: [{ leftSides: 4 }, { leftFill: true, rightFill: false }, { endMask: 1 }, { heavy: 0 }],
    prompt: "Melyik kétközpontú rendszer következik a sorban?",
    explanation: "A két középső sokszög oldalszáma egy-egy lépéssel nő a 4–5–6–3 ciklusban. A kitöltés oldalt vált, a kitöltött végpont és a vastag ág körbejár, a belső háromszögek ellentétes irányban fordulnak.",
    tip: "A bal és jobb központot két külön sorozatként jegyezd fel."
  }),
  buildExpertAbstractQuestion({
    id: "ax04", render: gridNetworkFrame, step: abstractSteps.gridClockwise, answer: 3,
    changes: [{ shapeShift: 0 }, { filledIndex: 0 }, { diagonal: 0 }, { arrowRotation: 0 }],
    prompt: "Melyik összekötött rács folytatja valamennyi látható szabályt?",
    explanation: "A négy sarokalakzat egy pozícióval továbbcsúszik, és a kitöltött sarok ugyanígy körbejár. A vastag él lép, az átló váltakozik, a középső alakzat oldalszáma 4–5–6–3, a belső jel 90°-kal fordul.",
    tip: "Az összekötő vonalak mintáját csak az alakzatok után ellenőrizd."
  }),
  buildExpertAbstractQuestion({
    id: "ax05", render: orbitNetworkFrame, step: abstractSteps.orbitClockwise, answer: 0,
    changes: [{ offset: 120 }, { filledIndex: 0 }, { dotIndex: 2 }, { centerSides: 6 }],
    prompt: "Melyik ábra következik a három pályán mozgó jelek és a középső alakzat után?",
    explanation: "A teljes rendszer 30°-kal fordul. A három külső alakzat helyet cserél, a kitöltés és a külső sárga pont eltérő irányban lép, a vastag küllő továbbhalad. A középső oldalszám 5–6–4 ciklusú.",
    tip: "A külső alakzat nevét, kitöltését és pontját három külön sorban vezesd."
  }),
  buildExpertAbstractQuestion({
    id: "ax06", render: networkFrame, step: abstractSteps.branchCount, answer: 2,
    changes: [{ endMask: 3 }, { centerFill: false }, { heavy: 2 }, { sides: 5 }],
    prompt: "Melyik elágazó ábra folytatja a végpontok számának és a középső jelnek az összetett ciklusát?",
    explanation: "A kitöltött végpontok száma 1–2–3, a középső oldalszám 6–5–4, a vastag ág visszafelé jár. Az egész hálózat 120°-ot, a belső jel 90°-ot fordul; a középső kitöltés az utolsó két lépésben azonos.",
    tip: "Itt a kitöltött végpontok darabszáma fontosabb, mint az első pillantásra látott helyük."
  }),
  buildExpertAbstractQuestion({
    id: "ax07", render: pairedHubFrame, step: abstractSteps.pairedOpposite, answer: 4,
    changes: [{ endMask: 9 }, { arrowRotation: 0 }, { heavy: 2 }, { rightSides: 3 }],
    prompt: "Melyik kétközpontú hálózat felel meg a páronként ellentétes változásoknak?",
    explanation: "A két kitöltött végpontból álló pár egy oldallal továbbfordul. A két központ kitöltése felcserélődik, a sokszögek külön háromlépéses ciklust követnek, a vastag és szaggatott ág más ütemben jár, a belső jelek 90°-ot fordulnak.",
    tip: "Először az állandóan egymással szemben álló tulajdonságokat keresd."
  }),
  buildExpertAbstractQuestion({
    id: "ax08", render: gridNetworkFrame, step: abstractSteps.gridSkip, answer: 1,
    changes: [{ shapeShift: 0 }, { filledIndex: 3 }, { dotMask: 3 }, { centerSides: 4 }],
    prompt: "Melyik rács követi a sarkok átugrásos mozgását, az élmintát és a középső ciklust?",
    explanation: "Az alakzatok két sarkot ugranak, a kitöltött sarok ellenkező irányban halad. A sárga pontpár egy oldallal fordul, a vastag és szaggatott él tovább lép, az átló két képkockánként vált. A középső oldalszám 6–4–5.",
    tip: "A kétlépéses és a négylépéses mozgásokat ne vond össze egyetlen szabállyá."
  }),
  buildExpertAbstractQuestion({
    id: "ax09", render: networkFrame, step: abstractSteps.fourArmOpposite, answer: 3,
    changes: [{ endMask: 5 }, { rotation: 360 }, { marker: 2 }, { centerFill: true }],
    prompt: "Melyik négyágú hálózatban folytatódik helyesen az egymással szemben lévő végpontok mintája?",
    explanation: "A teljes ábra 90°-ot fordul. A két, egymással szembeni kitöltött végpont lépésenként átvált a másik átlóra. A vastag és a szaggatott ág külön halad, a középső sokszög 6–4–5 ciklust követ, kitöltése váltakozik.",
    tip: "A szemközti végpontpárt átlóként, ne két külön pontként kezeld."
  }),
  buildExpertAbstractQuestion({
    id: "ax10", render: orbitNetworkFrame, step: abstractSteps.orbitCounter, answer: 0,
    changes: [{ shapeShift: 0 }, { dotIndex: 0 }, { heavy: 2 }, { arrowRotation: 180 }],
    prompt: "Melyik pályarendszer folytatja az egymással ellentétes alakzat-, pont- és küllőmozgást?",
    explanation: "A rendszer 60°-kal fordul, az alakzatok két helyet ugranak. A kitöltött alakzat, a sárga külső pont és a vastag küllő három külön irányban jár. A középső sokszög 4–6–5 ciklust, a belső jel 45°-os lépést követ.",
    tip: "Az azonos sebesség nem feltétlenül jelent azonos haladási irányt."
  }),
  buildExpertAbstractQuestion({
    id: "ax11", render: pairedHubFrame, step: abstractSteps.pairedDouble, answer: 2,
    changes: [{ endMask: 5 }, { leftFill: false, rightFill: true }, { arrowRotation: 180 }, { heavy: 3 }],
    prompt: "Melyik kétközpontú rendszer tartja fenn a két-két képkockás és a négylépéses szabályokat?",
    explanation: "A központok kitöltése két képkockánként cserél oldalt. A két végpont átlója minden lépésben vált, a vastag ág visszafelé, a szaggatott előrefelé halad. A két oldalszám külön négylépéses sor, a belső jelek 135°-ot fordulnak.",
    tip: "Jelöld meg külön azokat a tulajdonságokat, amelyek csak minden második képnél változnak."
  }),
  buildExpertAbstractQuestion({
    id: "ax12", render: networkFrame, step: abstractSteps.fourArmCombined, answer: 4,
    changes: [{ endMask: 1 }, { innerRotation: 180 }, { heavy: 0 }, { sides: 6 }],
    prompt: "Melyik összetett hálózat a helyes folytatás, ha valamennyi ág- és középszabályt figyelembe vesszük?",
    explanation: "A kitöltött végpontok száma 1–2–3–4 ciklusú. A hálózat 45°-kal, a belső jel 135°-kal fordul. A vastag és szaggatott ág két hellyel eltérő pályán halad, a sárga csomópont visszafelé jár, az oldalszám 5–6–4, a középső kitöltés váltakozik.",
    tip: "A válaszokat először a végpontok száma, majd az ágak és végül a középső alakzat alapján szűrd."
  })
];

function thinArrowItems(cx, cy, angle, length = 34, width = 2.1) {
  const radians = angle * Math.PI / 180;
  const startX = cx - Math.cos(radians) * length / 2;
  const startY = cy - Math.sin(radians) * length / 2;
  const endX = cx + Math.cos(radians) * length / 2;
  const endY = cy + Math.sin(radians) * length / 2;
  const headLength = Math.max(5, length * .22);
  const left = (angle + 150) * Math.PI / 180;
  const right = (angle - 150) * Math.PI / 180;
  return [
    lineItem(roundedCoordinate(startX), roundedCoordinate(startY), roundedCoordinate(endX), roundedCoordinate(endY), { width }),
    lineItem(roundedCoordinate(endX), roundedCoordinate(endY), roundedCoordinate(endX + Math.cos(left) * headLength), roundedCoordinate(endY + Math.sin(left) * headLength), { width }),
    lineItem(roundedCoordinate(endX), roundedCoordinate(endY), roundedCoordinate(endX + Math.cos(right) * headLength), roundedCoordinate(endY + Math.sin(right) * headLength), { width })
  ];
}

function plusMarkItems(cx, cy, size = 5.5, width = 2) {
  return [
    lineItem(cx - size, cy, cx + size, cy, { width }),
    lineItem(cx, cy - size, cx, cy + size, { width })
  ];
}

function chevronMarkItems(cx, cy, angle, size = 7, width = 3.6) {
  const radians = angle * Math.PI / 180;
  const perpendicular = radians + Math.PI / 2;
  const tipX = cx + Math.cos(radians) * size * .75;
  const tipY = cy + Math.sin(radians) * size * .75;
  const baseX = cx - Math.cos(radians) * size * .65;
  const baseY = cy - Math.sin(radians) * size * .65;
  return [
    lineItem(roundedCoordinate(baseX + Math.cos(perpendicular) * size * .72), roundedCoordinate(baseY + Math.sin(perpendicular) * size * .72), roundedCoordinate(tipX), roundedCoordinate(tipY), { width }),
    lineItem(roundedCoordinate(baseX - Math.cos(perpendicular) * size * .72), roundedCoordinate(baseY - Math.sin(perpendicular) * size * .72), roundedCoordinate(tipX), roundedCoordinate(tipY), { width })
  ];
}

function hatchedSquareItems(cx, cy, size = 8) {
  return [
    item("square", cx, cy, { size, filled: false, strokeWidth: 1.7 }),
    lineItem(cx - size + 1, cy + 2, cx + 2, cy - size + 1, { width: 1.3 }),
    lineItem(cx - size + 1, cy + size - 2, cx + size - 2, cy - size + 1, { width: 1.3 }),
    lineItem(cx - 2, cy + size - 1, cx + size - 1, cy - 2, { width: 1.3 })
  ];
}

function arrowSequenceFrame(step, options = {}) {
  const positions = [[28, 25], [75, 28], [72, 75], [25, 72]];
  const index = (step + (options.positionOffset || 0) + 8) % 4;
  const angle = 180 + step * 90 + (options.angleOffset || 0);
  return frame(...thinArrowItems(positions[index][0], positions[index][1], angle, 25));
}

function stripedSymbolsFrame(step, options = {}) {
  const positions = [[27, 27], [73, 27], [73, 73], [27, 73]];
  const plusIndex = (step + (options.plusOffset || 0) + 8) % 4;
  const circleIndex = (step + 2 + (options.circleOffset || 0) + 8) % 4;
  const stripeItems = [
    lineItem(10, 37, 63, 90, { width: 1.2 }),
    lineItem(10, 17, 83, 90, { width: 1.2 }),
    lineItem(27, 10, 90, 73, { width: 1.2 }),
    lineItem(49, 10, 90, 51, { width: 1.2 })
  ];
  return frame(
    ...stripeItems,
    ...plusMarkItems(positions[plusIndex][0], positions[plusIndex][1], 5),
    item("circle", positions[circleIndex][0], positions[circleIndex][1], { size: 5, filled: false, strokeWidth: 1.8 })
  );
}

const perimeterPositions = [[25, 14], [50, 14], [75, 14], [86, 50], [75, 86], [50, 86], [25, 86], [14, 50]];

function perimeterDotFrame(positionIndex) {
  const position = perimeterPositions[(positionIndex + 16) % 8];
  return frame(item("circle", position[0], position[1], { size: 5.2, filled: true, strokeWidth: 1.5 }));
}

const quadrantPositions = [[31, 31], [69, 31], [69, 69], [31, 69]];

function quadrantSymbolFrame(step, options = {}) {
  const offset = options.offset || 0;
  const triangleIndex = (options.triangleBase ?? 0) + step + offset;
  const hollowIndex = (options.hollowBase ?? 1) + step + offset;
  const filledIndex = (options.filledBase ?? 3) + step + offset;
  const grid = [
    lineItem(50, 8, 50, 92, { width: 1.4 }),
    lineItem(8, 50, 92, 50, { width: 1.4 })
  ];
  const trianglePosition = quadrantPositions[((triangleIndex % 4) + 4) % 4];
  const hollowPosition = quadrantPositions[((hollowIndex % 4) + 4) % 4];
  const filledPosition = quadrantPositions[((filledIndex % 4) + 4) % 4];
  return frame(
    ...grid,
    item("triangle", trianglePosition[0], trianglePosition[1], { size: 6.5, filled: false, strokeWidth: 1.7 }),
    item("circle", hollowPosition[0], hollowPosition[1], { size: 5.8, filled: false, strokeWidth: 1.7 }),
    item("circle", filledPosition[0], filledPosition[1], { size: 5.2, filled: true, strokeWidth: 1.5 })
  );
}

function arrowCircleFrame(step, options = {}) {
  const corners = [[23, 23], [77, 23], [77, 77], [23, 77]];
  const circleIndex = ((step * 3 + (options.circleOffset || 0)) % 4 + 4) % 4;
  const angle = step * 45 + (options.angleOffset || 0);
  return frame(
    ...thinArrowItems(50, 50, angle, 43, 2),
    item("circle", corners[circleIndex][0], corners[circleIndex][1], { size: 5.5, filled: false, strokeWidth: 1.7 })
  );
}

function chevronMatrixFrame(step, options = {}) {
  const positions = [[25, 31], [50, 31], [75, 31], [25, 69], [50, 69], [75, 69]];
  const base = [0, 90, 180, 270, 0, 180];
  const items = [];
  positions.forEach((position, index) => {
    let angle = base[(index + step) % 6] + (step % 2) * 90;
    if (index === options.changeIndex) angle += options.changeBy || 90;
    items.push(...chevronMarkItems(position[0], position[1], angle));
  });
  return frame(...items);
}

function notchLineFrame(step, options = {}) {
  const base = [1, -1, 1];
  const directions = [0, 1, 2].map(index => base[(index + step) % 3]);
  if (Number.isInteger(options.flipTick)) directions[options.flipTick] *= -1;
  const leftDirection = (step % 2 === 0 ? -1 : 1) * (options.flipEnds ? -1 : 1);
  const rightDirection = -leftDirection;
  const items = [lineItem(20, 50, 80, 50, { width: 1.8 })];
  [34, 50, 66].forEach((x, index) => items.push(lineItem(x, 50, x, 50 + directions[index] * 12, { width: 1.8 })));
  items.push(lineItem(20, 50, 20, 50 + leftDirection * 10, { width: 1.8 }));
  items.push(lineItem(80, 50, 80, 50 + rightDirection * 10, { width: 1.8 }));
  return frame(...items);
}

const gridPerimeter = [0, 1, 2, 5, 8, 7, 6, 3];

function gridCellCenter(index) {
  return [31 + (index % 3) * 19, 31 + Math.floor(index / 3) * 19];
}

function blockGridFrame(step, options = {}) {
  const items = [
    lineItem(21.5, 21.5, 78.5, 21.5, { width: 1.4 }),
    lineItem(78.5, 21.5, 78.5, 78.5, { width: 1.4 }),
    lineItem(78.5, 78.5, 21.5, 78.5, { width: 1.4 }),
    lineItem(21.5, 78.5, 21.5, 21.5, { width: 1.4 }),
    lineItem(40.5, 21.5, 40.5, 78.5, { width: 1.2 }),
    lineItem(59.5, 21.5, 59.5, 78.5, { width: 1.2 }),
    lineItem(21.5, 40.5, 78.5, 40.5, { width: 1.2 }),
    lineItem(21.5, 59.5, 78.5, 59.5, { width: 1.2 })
  ];
  const blackIndex = gridPerimeter[(step + (options.blackShift || 0) + 16) % 8];
  const hatchIndex = gridPerimeter[(3 - step + (options.hatchShift || 0) + 16) % 8];
  const black = gridCellCenter(blackIndex);
  const hatch = gridCellCenter(hatchIndex);
  items.push(item("square", black[0], black[1], { size: 8.7, filled: true, strokeWidth: 1 }));
  items.push(...hatchedSquareItems(hatch[0], hatch[1], 8.2));
  return frame(...items);
}

function diagonalBandFrame(step, options = {}) {
  const positions = [[30, 70], [50, 50], [70, 30]];
  const shapeNames = ["circle", "square", "triangle"];
  const items = [
    lineItem(10, 31, 69, 90, { width: 1.4 }),
    lineItem(31, 10, 90, 69, { width: 1.4 })
  ];
  positions.forEach((position, index) => {
    const shape = shapeNames[(index + step + (options.shapeShift || 0)) % 3];
    const filled = index === (step + (options.fillShift || 0)) % 3 || index === (step + 1 + (options.fillShift || 0)) % 3;
    items.push(item(shape, position[0], position[1], {
      size: shape === "circle" ? 6 : 6.5,
      filled,
      strokeWidth: 1.7
    }));
  });
  return frame(...items);
}

function lineDialItems(cx, cy, angle, arrow = false) {
  return arrow ? thinArrowItems(cx, cy, angle, 16, 1.7) : (() => {
    const radians = angle * Math.PI / 180;
    return [lineItem(
      roundedCoordinate(cx - Math.cos(radians) * 8),
      roundedCoordinate(cy - Math.sin(radians) * 8),
      roundedCoordinate(cx + Math.cos(radians) * 8),
      roundedCoordinate(cy + Math.sin(radians) * 8),
      { width: 1.7 }
    )];
  })();
}

function dualDialFrame(step, options = {}) {
  const topAngle = step * 45 + (options.topOffset || 0);
  const bottomAngle = 45 + step * 90 + (options.bottomOffset || 0);
  return frame(
    item("circle", 50, 31, { size: 13, filled: false, strokeWidth: 1.6 }),
    item("circle", 50, 69, { size: 13, filled: false, strokeWidth: 1.6 }),
    ...lineDialItems(50, 31, topAngle, true),
    ...lineDialItems(50, 69, bottomAngle, false)
  );
}

function cornerPairFrame(step, options = {}) {
  const corners = [[25, 25], [75, 25], [75, 75], [25, 75]];
  const squareIndex = (step + (options.squareOffset || 0) + 8) % 4;
  const circleIndex = (2 - step + (options.circleOffset || 0) + 8) % 4;
  return frame(
    item("square", corners[squareIndex][0], corners[squareIndex][1], { size: 6, filled: false, strokeWidth: 1.7 }),
    item("circle", corners[circleIndex][0], corners[circleIndex][1], { size: 5.5, filled: true, strokeWidth: 1.5 }),
    ...lineDialItems(50, 50, step * 45 + (options.lineOffset || 0), false)
  );
}

function nestedShapeFrame(step, options = {}) {
  const dotIndex = (step * 2 + (options.dotOffset || 0) + 16) % 8;
  const dot = perimeterPositions[dotIndex];
  const innerIsTriangle = (step + (options.innerSwap ? 1 : 0)) % 2 === 1;
  const innerFilled = [false, true, true][step % 3];
  return frame(
    item("square", 50, 50, { size: 24, rotation: step % 2 === 0 ? 0 : 45, filled: false, strokeWidth: 1.7 }),
    item(innerIsTriangle ? "triangle" : "circle", 50, 50, { size: 7.5, rotation: step * 90, filled: innerFilled, strokeWidth: 1.7 }),
    item("circle", dot[0], dot[1], { size: 3.8, filled: true, strokeWidth: 1.3 })
  );
}

function placeAbstractAnswer(correct, distractors, answerIndex) {
  const options = distractors.slice(0, 4);
  options.splice(answerIndex, 0, correct);
  return options;
}

function officialAbstractQuestion({ id, difficulty, sequence, correct, distractors, answer, explanation, tip }) {
  return {
    id,
    category: "abstract",
    difficulty,
    prompt: "",
    sequence,
    options: placeAbstractAnswer(correct, distractors, answer),
    answer,
    explanation,
    tip
  };
}

const epsoStyleAbstractQuestions = [
  officialAbstractQuestion({
    id: "ar01", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => arrowSequenceFrame(step)),
    correct: arrowSequenceFrame(5),
    distractors: [arrowSequenceFrame(4), arrowSequenceFrame(5, { angleOffset: 90 }), arrowSequenceFrame(5, { positionOffset: 1 }), arrowSequenceFrame(6)],
    answer: 1,
    explanation: "A nyíl minden lépésben a következő sarokhoz kerül, és 90°-kal elfordul. Az ötödik ábra az első helyzetet ismétli, ezért a következő a második helyzet megfelelője.",
    tip: "A nyíl helyét és irányát külön sorozatként kövesd."
  }),
  officialAbstractQuestion({
    id: "ar02", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => stripedSymbolsFrame(step)),
    correct: stripedSymbolsFrame(5),
    distractors: [stripedSymbolsFrame(4), stripedSymbolsFrame(5, { plusOffset: 1 }), stripedSymbolsFrame(5, { circleOffset: 1 }), stripedSymbolsFrame(6)],
    answer: 3,
    explanation: "A pluszjel és a kör egyaránt az óramutató járásával megegyezően halad a négy sarok között, miközben végig két saroknyi távolság van közöttük.",
    tip: "Az állandó háttérvonalakat ne kezeld mozgó elemként."
  }),
  officialAbstractQuestion({
    id: "ar03", difficulty: "Nehéz",
    sequence: [0, 1, 3, 6, 2].map(position => perimeterDotFrame(position)),
    correct: perimeterDotFrame(7),
    distractors: [perimeterDotFrame(3), perimeterDotFrame(4), perimeterDotFrame(5), perimeterDotFrame(6)],
    answer: 4,
    explanation: "A pont az első lépésben egy, majd kettő, három és négy peremhelyet halad. A következő ugrás öt hely, ezért a 2. helyről a 7. helyre kerül.",
    tip: "Jelöld meg a keret nyolc lehetséges peremhelyét, majd írd fel az ugrások hosszát."
  }),
  officialAbstractQuestion({
    id: "ar04", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => quadrantSymbolFrame(step)),
    correct: quadrantSymbolFrame(5),
    distractors: [quadrantSymbolFrame(4), quadrantSymbolFrame(6), quadrantSymbolFrame(5, { triangleBase: 1, hollowBase: 0 }), quadrantSymbolFrame(5, { filledBase: 2 })],
    answer: 2,
    explanation: "A három jel minden lépésben egy mezővel az óramutató járásával megegyezően fordul tovább. Az üres mező ugyanennek megfelelően körbejár.",
    tip: "Az alakzatok azonosságát kövesd, ne csak azt, hogy hány mező foglalt."
  }),
  officialAbstractQuestion({
    id: "ar05", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => arrowCircleFrame(step)),
    correct: arrowCircleFrame(5),
    distractors: [arrowCircleFrame(5, { angleOffset: 45 }), arrowCircleFrame(5, { circleOffset: 1 }), arrowCircleFrame(4), arrowCircleFrame(6)],
    answer: 0,
    explanation: "A nyíl 45°-kal fordul, a kör pedig minden lépésben az ellenkező irányú következő sarokba kerül. Mindkét szabályt egyszerre kell folytatni.",
    tip: "A 45°-os forgást ne téveszd össze a kör 90°-os sarokváltásával."
  }),
  officialAbstractQuestion({
    id: "ar06", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => chevronMatrixFrame(step)),
    correct: chevronMatrixFrame(5),
    distractors: [chevronMatrixFrame(4), chevronMatrixFrame(6), chevronMatrixFrame(5, { changeIndex: 2, changeBy: 180 }), chevronMatrixFrame(5, { changeIndex: 5, changeBy: 90 })],
    answer: 3,
    explanation: "A hat jel minden lépésben egy mezővel balra tolódik; minden második képkockán valamennyi jel további 90°-ot fordul. A helyes válasz mindkét változást megtartja.",
    tip: "Előbb a jelek helycseréjét, utána az irányukat ellenőrizd."
  }),
  officialAbstractQuestion({
    id: "ar07", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => notchLineFrame(step)),
    correct: notchLineFrame(5),
    distractors: [notchLineFrame(4), notchLineFrame(6), notchLineFrame(5, { flipTick: 1 }), notchLineFrame(5, { flipEnds: true })],
    answer: 1,
    explanation: "A három belső rövid vonal iránymintája egy hellyel balra tolódik. A két szélső vonal minden lépésben felcseréli a felfelé és lefelé mutató helyzetét.",
    tip: "A középső három jelet és a két végjelet két külön mintaként kezeld."
  }),
  officialAbstractQuestion({
    id: "ar08", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => blockGridFrame(step)),
    correct: blockGridFrame(5),
    distractors: [blockGridFrame(4), blockGridFrame(6), blockGridFrame(5, { blackShift: 1 }), blockGridFrame(5, { hatchShift: 1 })],
    answer: 4,
    explanation: "A fekete mező a külső nyolc mezőn az óramutató járásával megegyezően, a sávozott mező pedig az ellenkező irányban halad.",
    tip: "A középső mező nem része egyik útvonalnak sem."
  }),
  officialAbstractQuestion({
    id: "ar09", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => diagonalBandFrame(step)),
    correct: diagonalBandFrame(5),
    distractors: [diagonalBandFrame(4), diagonalBandFrame(6), diagonalBandFrame(5, { shapeShift: 1 }), diagonalBandFrame(5, { fillShift: 1 })],
    answer: 2,
    explanation: "A kör, a négyzet és a háromszög egy hellyel továbbcsúszik a sávban. A két kitöltött hely szintén egy pozícióval halad, de az alakzattípustól függetlenül.",
    tip: "Az alakzat sorrendjét és a kitöltött helyeket külön jegyezd fel."
  }),
  officialAbstractQuestion({
    id: "ar10", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => dualDialFrame(step)),
    correct: dualDialFrame(5),
    distractors: [dualDialFrame(5, { topOffset: 45 }), dualDialFrame(5, { bottomOffset: 90 }), dualDialFrame(4), dualDialFrame(6)],
    answer: 0,
    explanation: "A felső kör mutatója 45°-kal, az alsó kör vonala 90°-kal fordul minden lépésben. A két eltérő forgási sebesség adja a következő állapotot.",
    tip: "A két kör irányait ne egyetlen közös forgásként kezeld."
  }),
  officialAbstractQuestion({
    id: "ar11", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => cornerPairFrame(step)),
    correct: cornerPairFrame(5),
    distractors: [cornerPairFrame(4), cornerPairFrame(6), cornerPairFrame(5, { squareOffset: 1 }), cornerPairFrame(5, { lineOffset: 45 })],
    answer: 3,
    explanation: "Az üres négyzet az óramutató járásával megegyezően, a fekete kör az ellenkező irányban járja a sarkokat. A középső vonal 45°-kal fordul.",
    tip: "A három elem mozgásirányát külön-külön ellenőrizd."
  }),
  officialAbstractQuestion({
    id: "ar12", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => nestedShapeFrame(step)),
    correct: nestedShapeFrame(5),
    distractors: [nestedShapeFrame(4), nestedShapeFrame(6), nestedShapeFrame(5, { dotOffset: 1 }), nestedShapeFrame(5, { innerSwap: true })],
    answer: 1,
    explanation: "A külső négyzet felváltva áll oldalán és csúcsán, a belső jel kör–háromszög váltást és háromlépéses kitöltési ciklust követ. A kis pont két peremhelyet ugrik.",
    tip: "A váltakozó és a háromlépéses ciklus csak minden hatodik képnél kerül ismét azonos helyzetbe."
  })
];

function cycleValue(values, step, offset = 0) {
  return values[((step + offset) % values.length + values.length) % values.length];
}

function advancedArrowFrame(step, changes = {}) {
  const positions = [[27, 25], [73, 27], [75, 73], [25, 75]];
  const positionIndex = cycleValue([0, 1, 3, 0, 2, 3], step) + (changes.positionShift || 0);
  const angle = cycleValue([0, 90, 270, 0, 180, 270], step) + (changes.angleShift || 0);
  const length = cycleValue([23, 31, 27], step) + (changes.lengthShift || 0);
  const position = positions[((positionIndex % 4) + 4) % 4];
  const markerFilled = changes.markerFlip ? step % 2 === 1 : step % 2 === 0;
  return frame(
    ...thinArrowItems(position[0], position[1], angle, length, 1.9),
    item("circle", 50, 50, { size: 3.8, filled: markerFilled, strokeWidth: 1.5 })
  );
}

function advancedStripedFrame(step, changes = {}) {
  const plusIndex = cycleValue([0, 1, 2, 3, 4, 5], step) + (changes.plusShift || 0);
  const circleIndex = cycleValue([5, 3, 1, 7, 5, 3], step) + (changes.circleShift || 0);
  const plus = perimeterPositions[((plusIndex % 8) + 8) % 8];
  const circle = perimeterPositions[((circleIndex % 8) + 8) % 8];
  const reverseStripe = Boolean(Math.floor(step / 2) % 2) !== Boolean(changes.stripeFlip);
  const stripeItems = reverseStripe
    ? [lineItem(10, 63, 63, 10, { width: 1.15 }), lineItem(10, 83, 83, 10, { width: 1.15 }), lineItem(27, 90, 90, 27, { width: 1.15 }), lineItem(49, 90, 90, 49, { width: 1.15 })]
    : [lineItem(10, 37, 63, 90, { width: 1.15 }), lineItem(10, 17, 83, 90, { width: 1.15 }), lineItem(27, 10, 90, 73, { width: 1.15 }), lineItem(49, 10, 90, 51, { width: 1.15 })];
  return frame(
    ...stripeItems,
    ...plusMarkItems(plus[0], plus[1], cycleValue([4.5, 6.5, 5.5], step) + (changes.plusSize || 0), 1.8),
    item("circle", circle[0], circle[1], { size: 5.2, filled: Boolean(step % 2) !== Boolean(changes.circleFillFlip), strokeWidth: 1.7 })
  );
}

function advancedPerimeterFrame(step, changes = {}) {
  const fastIndex = cycleValue([0, 1, 3, 6, 2, 7], step) + (changes.fastShift || 0);
  const slowIndex = cycleValue([5, 3, 1, 7, 5, 3], step) + (changes.slowShift || 0);
  const fast = perimeterPositions[((fastIndex % 8) + 8) % 8];
  const slow = perimeterPositions[((slowIndex % 8) + 8) % 8];
  const fillSwap = Boolean(step % 2) !== Boolean(changes.fillFlip);
  const dialAngle = cycleValue([0, 45, 135, 180, 270, 315], step) + (changes.dialShift || 0);
  return frame(
    item("circle", fast[0], fast[1], { size: 4.6, filled: !fillSwap, strokeWidth: 1.6 }),
    item("circle", slow[0], slow[1], { size: 4.6, filled: fillSwap, strokeWidth: 1.6 }),
    ...lineDialItems(50, 50, dialAngle, false)
  );
}

function advancedQuadrantFrame(step, changes = {}) {
  const emptyIndex = (2 + step + (changes.emptyShift || 0) + 8) % 4;
  const available = [0, 1, 2, 3].filter(index => index !== emptyIndex);
  const shapeNames = ["circle", "square", "triangle"];
  const shapeShift = (step + (changes.shapeShift || 0) + 6) % 3;
  const filledShape = (step + (changes.fillShift || 0) + 6) % 3;
  const items = [lineItem(50, 8, 50, 92, { width: 1.35 }), lineItem(8, 50, 92, 50, { width: 1.35 })];
  available.forEach((positionIndex, slot) => {
    const shapeIndex = (slot + shapeShift) % 3;
    const position = quadrantPositions[positionIndex];
    items.push(item(shapeNames[shapeIndex], position[0], position[1], {
      size: shapeNames[shapeIndex] === "circle" ? 5.7 : 6.2,
      filled: shapeIndex === filledShape,
      rotation: shapeNames[shapeIndex] === "triangle" ? step * 90 + (changes.triangleTurn || 0) : 0,
      strokeWidth: 1.65
    }));
  });
  return frame(...items);
}

function advancedArrowCircleFrame(step, changes = {}) {
  const circleIndex = cycleValue([0, 6, 5, 3, 2, 0], step) + (changes.circleShift || 0);
  const circle = perimeterPositions[((circleIndex % 8) + 8) % 8];
  const filled = Boolean(Math.floor(step / 2) % 2) !== Boolean(changes.fillFlip);
  return frame(
    ...thinArrowItems(50, 50, cycleValue([0, 45, 135, 180, 270, 315], step) + (changes.angleShift || 0), cycleValue([38, 46, 42], step) + (changes.lengthShift || 0), 1.9),
    item("circle", circle[0], circle[1], { size: 5.1, filled, strokeWidth: 1.65 })
  );
}

function advancedChevronFrame(step, changes = {}) {
  const positions = [[25, 29], [50, 29], [75, 29], [25, 68], [50, 68], [75, 68]];
  const base = [0, 90, 180, 270, 0, 180];
  const patternShift = step * 2 + (changes.patternShift || 0);
  const globalTurn = Math.floor(step / 2) * 90 + (changes.globalTurn || 0);
  const items = [];
  positions.forEach((position, index) => {
    const angle = base[((index + patternShift) % 6 + 6) % 6] + globalTurn;
    items.push(...chevronMarkItems(position[0], position[1], angle, 6.2, 3.1));
  });
  const markerIndex = (step * 2 + (changes.markerShift || 0) + 12) % 6;
  items.push(item("circle", positions[markerIndex][0], positions[markerIndex][1] + 14, {
    size: 2.8,
    filled: Boolean(step % 2) !== Boolean(changes.markerFillFlip),
    strokeWidth: 1.35
  }));
  return frame(...items);
}

function advancedNotchFrame(step, changes = {}) {
  const directionPattern = [1, -1, 1];
  const lengthPattern = [8, 12, 16];
  const directions = [0, 1, 2].map(index => directionPattern[(index + step + (changes.directionShift || 0) + 6) % 3]);
  const lengths = [0, 1, 2].map(index => lengthPattern[(index - step + (changes.lengthShift || 0) + 6) % 3]);
  if (Number.isInteger(changes.flipTick)) directions[changes.flipTick] *= -1;
  const endSign = (step % 2 === 0 ? 1 : -1) * (changes.endFlip ? -1 : 1);
  const items = [lineItem(19, 50, 81, 50, { width: 1.75 })];
  [34, 50, 66].forEach((x, index) => items.push(lineItem(x, 50, x, 50 - directions[index] * lengths[index], { width: 1.75 })));
  items.push(lineItem(19, 50, 19, 50 - endSign * 10, { width: 1.75 }));
  items.push(lineItem(81, 50, 81, 50 + endSign * 10, { width: 1.75 }));
  return frame(...items);
}

function advancedBlockGridFrame(step, changes = {}) {
  const items = [
    lineItem(21.5, 21.5, 78.5, 21.5, { width: 1.3 }), lineItem(78.5, 21.5, 78.5, 78.5, { width: 1.3 }),
    lineItem(78.5, 78.5, 21.5, 78.5, { width: 1.3 }), lineItem(21.5, 78.5, 21.5, 21.5, { width: 1.3 }),
    lineItem(40.5, 21.5, 40.5, 78.5, { width: 1.1 }), lineItem(59.5, 21.5, 59.5, 78.5, { width: 1.1 }),
    lineItem(21.5, 40.5, 78.5, 40.5, { width: 1.1 }), lineItem(21.5, 59.5, 78.5, 59.5, { width: 1.1 })
  ];
  const blackCell = gridCellCenter(gridPerimeter[(step + (changes.blackShift || 0) + 16) % 8]);
  const hatchCell = gridCellCenter(gridPerimeter[(6 - step * 2 + (changes.hatchShift || 0) + 32) % 8]);
  items.push(item("square", blackCell[0], blackCell[1], { size: 8.5, filled: true, strokeWidth: 1 }));
  items.push(...hatchedSquareItems(hatchCell[0], hatchCell[1], 8));
  items.push(item("triangle", 50, 50, {
    size: 4.5,
    rotation: step * 90 + (changes.centerTurn || 0),
    filled: Boolean(Math.floor(step / 2) % 2) !== Boolean(changes.centerFillFlip),
    strokeWidth: 1.4
  }));
  return frame(...items);
}

function advancedBandFrame(step, changes = {}) {
  const reverse = Boolean(step % 2) !== Boolean(changes.bandFlip);
  const positions = reverse ? [[30, 30], [50, 50], [70, 70]] : [[30, 70], [50, 50], [70, 30]];
  const shapeNames = ["circle", "square", "triangle"];
  const items = reverse
    ? [lineItem(10, 69, 69, 10, { width: 1.3 }), lineItem(31, 90, 90, 31, { width: 1.3 })]
    : [lineItem(10, 31, 69, 90, { width: 1.3 }), lineItem(31, 10, 90, 69, { width: 1.3 })];
  positions.forEach((position, index) => {
    const shapeIndex = (index + step + (changes.shapeShift || 0) + 6) % 3;
    const fillIndex = (2 - step + (changes.fillShift || 0) + 6) % 3;
    items.push(item(shapeNames[shapeIndex], position[0], position[1], {
      size: shapeNames[shapeIndex] === "circle" ? 5.7 : 6.2,
      filled: index === fillIndex || index === (fillIndex + 1) % 3,
      rotation: shapeNames[shapeIndex] === "triangle" ? step * 90 + (changes.triangleTurn || 0) : 0,
      strokeWidth: 1.65
    }));
  });
  return frame(...items);
}

function advancedDualDialFrame(step, changes = {}) {
  const topAngle = cycleValue([0, 45, 135, 180, 270, 315], step) + (changes.topTurn || 0);
  const bottomAngle = 45 - step * 90 + (changes.bottomTurn || 0);
  const swapArrows = Boolean(step % 2) !== Boolean(changes.arrowSwap);
  const side = (Math.floor(step / 2) % 2 === 0 ? -1 : 1) * (changes.dotSideFlip ? -1 : 1);
  return frame(
    item("circle", 50, 31, { size: 13, filled: false, strokeWidth: 1.55 }),
    item("circle", 50, 69, { size: 13, filled: false, strokeWidth: 1.55 }),
    ...lineDialItems(50, 31, topAngle, !swapArrows),
    ...lineDialItems(50, 69, bottomAngle, swapArrows),
    item("circle", 50 + side * 20, step % 2 === 0 ? 31 : 69, { size: 2.9, filled: true, strokeWidth: 1.2 })
  );
}

function advancedCornerPairFrame(step, changes = {}) {
  const corners = [[25, 25], [75, 25], [75, 75], [25, 75]];
  const squareIndex = (step + (changes.squareShift || 0) + 8) % 4;
  const circleIndex = (cycleValue([2, 3, 0, 2, 3, 0], step) + (changes.circleShift || 0) + 8) % 4;
  const square = corners[squareIndex];
  const circle = corners[circleIndex];
  return frame(
    item("square", square[0], square[1], { size: cycleValue([5, 8, 6.5], step) + (changes.squareSize || 0), filled: false, strokeWidth: 1.65 }),
    item("circle", circle[0], circle[1], { size: 5.2, filled: true, strokeWidth: 1.45 }),
    ...lineDialItems(50, 50, cycleValue([0, 45, 135, 180, 270, 315], step) + (changes.lineTurn || 0), false)
  );
}

function advancedNestedFrame(step, changes = {}) {
  const outerRotation = (step % 2) * 45 + (changes.outerTurn || 0);
  const shapeNames = ["circle", "triangle", "square"];
  const innerIndex = (step + (changes.innerShift || 0) + 6) % 3;
  const innerFilled = cycleValue([false, true, true], step + (changes.fillShift || 0));
  const fastDot = perimeterPositions[(step * 3 + (changes.fastDotShift || 0) + 24) % 8];
  const slowDot = perimeterPositions[(6 - step + (changes.slowDotShift || 0) + 24) % 8];
  return frame(
    item("square", 50, 50, { size: 23, rotation: outerRotation, filled: false, strokeWidth: 1.65 }),
    item(shapeNames[innerIndex], 50, 50, { size: 7.1, rotation: step * 90 + (changes.innerTurn || 0), filled: innerFilled, strokeWidth: 1.6 }),
    item("circle", fastDot[0], fastDot[1], { size: 3.5, filled: true, strokeWidth: 1.25 }),
    item("circle", slowDot[0], slowDot[1], { size: 3.5, filled: false, strokeWidth: 1.35 })
  );
}

const epsoAdvancedAbstractQuestions = [
  officialAbstractQuestion({
    id: "ar21", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => advancedArrowFrame(step)),
    correct: advancedArrowFrame(5),
    distractors: [advancedArrowFrame(5, { positionShift: 1 }), advancedArrowFrame(5, { angleShift: 90 }), advancedArrowFrame(5, { lengthShift: -4 }), advancedArrowFrame(5, { markerFlip: true })],
    answer: 2,
    explanation: "A sarokváltás felváltva egy- és kétlépéses, a nyíl 90°-ot, majd 180°-ot fordul. A hossza háromlépéses ciklust, a középső kör kitöltése váltakozást követ.",
    tip: "Négy sort írj fel: hely, irány, hossz és kitöltés. Egyetlen egyezés még nem elég."
  }),
  officialAbstractQuestion({
    id: "ar22", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => advancedStripedFrame(step)),
    correct: advancedStripedFrame(5),
    distractors: [advancedStripedFrame(5, { plusShift: 1 }), advancedStripedFrame(5, { circleShift: 2 }), advancedStripedFrame(5, { stripeFlip: true }), advancedStripedFrame(5, { circleFillFlip: true })],
    answer: 4,
    explanation: "A plusz egy peremhelyet halad, a kör kettőt az ellenkező irányban. A kör kitöltése képenként vált, a sáv iránya két-két képkockánként fordul meg, a plusz mérete háromlépéses ciklusú.",
    tip: "A háttér sem állandó: a két azonos irányú sáv után tükrözés következik."
  }),
  officialAbstractQuestion({
    id: "ar23", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedPerimeterFrame(step)),
    correct: advancedPerimeterFrame(5),
    distractors: [advancedPerimeterFrame(5, { fastShift: 1 }), advancedPerimeterFrame(5, { slowShift: 2 }), advancedPerimeterFrame(5, { fillFlip: true }), advancedPerimeterFrame(5, { dialShift: 45 })],
    answer: 1,
    explanation: "Az egyik pont növekvő, 1–2–3–4–5 hosszú ugrásokat tesz, a másik mindig két helyet lép vissza. A kitöltés képenként gazdát cserél, a középső vonal pedig felváltva 45°-ot és 90°-ot fordul.",
    tip: "A két pontot a kitöltéstől független pályaként kövesd, mert a fekete és az üres jel felcserélődik."
  }),
  officialAbstractQuestion({
    id: "ar24", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => advancedQuadrantFrame(step)),
    correct: advancedQuadrantFrame(5),
    distractors: [advancedQuadrantFrame(5, { emptyShift: 1 }), advancedQuadrantFrame(5, { shapeShift: 1 }), advancedQuadrantFrame(5, { fillShift: 1 }), advancedQuadrantFrame(5, { triangleTurn: 90 })],
    answer: 3,
    explanation: "Az üres mező egy helyet halad, a három alakzat az üres mező körül ciklikusan szerepet cserél. A kitöltött alakzat szintén háromlépéses sorban változik, a háromszög 90°-kal fordul.",
    tip: "Először keresd meg az üres mezőt; csak ezután rendeld hozzá a három alakzatot és a kitöltést."
  }),
  officialAbstractQuestion({
    id: "ar25", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedArrowCircleFrame(step)),
    correct: advancedArrowCircleFrame(5),
    distractors: [advancedArrowCircleFrame(5, { angleShift: 45 }), advancedArrowCircleFrame(5, { circleShift: 1 }), advancedArrowCircleFrame(5, { fillFlip: true }), advancedArrowCircleFrame(5, { lengthShift: -4 })],
    answer: 0,
    explanation: "A nyíl felváltva 45°-ot és 90°-ot fordul, a kör pedig kettő, majd egy peremhelyet lép vissza. A kör kitöltése két képenként, a nyíl hossza három képenként ismétlődik.",
    tip: "A forgás és a peremmozgás ritmusa is váltakozó; a legutóbbi lépést nem szabad egyszerűen megismételni."
  }),
  officialAbstractQuestion({
    id: "ar26", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedChevronFrame(step)),
    correct: advancedChevronFrame(5),
    distractors: [advancedChevronFrame(5, { patternShift: 1 }), advancedChevronFrame(5, { globalTurn: 90 }), advancedChevronFrame(5, { markerShift: 2 }), advancedChevronFrame(5, { markerFillFlip: true })],
    answer: 2,
    explanation: "A hat ékjelsor két hellyel tolódik, és minden második lépés után az összes jel 90°-ot fordul. A kis jelölő két mezőt ugrik, kitöltése pedig képenként vált.",
    tip: "A hat nagy jelet egy körbefutó sorként kezeld, a kis pontot pedig külön ellenőrző szabályként."
  }),
  officialAbstractQuestion({
    id: "ar27", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedNotchFrame(step)),
    correct: advancedNotchFrame(5),
    distractors: [advancedNotchFrame(5, { directionShift: 1 }), advancedNotchFrame(5, { lengthShift: 1 }), advancedNotchFrame(5, { endFlip: true }), advancedNotchFrame(5, { flipTick: 1 })],
    answer: 4,
    explanation: "A három belső vonal iránymintája balra, a 8–12–16 hosszúságú minta jobbra tolódik. A két szélső vonal minden képen felcseréli a fel-le helyzetét.",
    tip: "Az irány és a hossz ugyanazon három vonalon ellentétes irányban mozog; külön-külön jegyezd fel őket."
  }),
  officialAbstractQuestion({
    id: "ar28", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedBlockGridFrame(step)),
    correct: advancedBlockGridFrame(5),
    distractors: [advancedBlockGridFrame(5, { blackShift: 1 }), advancedBlockGridFrame(5, { hatchShift: 2 }), advancedBlockGridFrame(5, { centerTurn: 90 }), advancedBlockGridFrame(5, { centerFillFlip: true })],
    answer: 1,
    explanation: "A fekete mező egyet halad előre, a sávozott kettőt vissza a külső nyolc mezőn. A középső háromszög 90°-ot fordul, kitöltése pedig két-két képkockánként változik.",
    tip: "A két négyzet a kereten mozog, a középső jel nem része ennek az útvonalnak."
  }),
  officialAbstractQuestion({
    id: "ar29", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedBandFrame(step)),
    correct: advancedBandFrame(5),
    distractors: [advancedBandFrame(5, { bandFlip: true }), advancedBandFrame(5, { shapeShift: 1 }), advancedBandFrame(5, { fillShift: 1 }), advancedBandFrame(5, { triangleTurn: 90 })],
    answer: 3,
    explanation: "A sáv képenként tükröződik. Az alakzatok egy helyet előre, a két kitöltött hely egyet vissza halad, miközben a háromszög 90°-kal fordul.",
    tip: "A sáv tükrözése után is a bal–középső–jobb sorrendben írd fel az alakzatokat."
  }),
  officialAbstractQuestion({
    id: "ar30", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedDualDialFrame(step)),
    correct: advancedDualDialFrame(5),
    distractors: [advancedDualDialFrame(5, { topTurn: 45 }), advancedDualDialFrame(5, { bottomTurn: 90 }), advancedDualDialFrame(5, { arrowSwap: true }), advancedDualDialFrame(5, { dotSideFlip: true })],
    answer: 0,
    explanation: "A felső mutató felváltva 45°-ot és 90°-ot fordul, az alsó mindig 90°-ot visszafelé. A nyílhegy képenként kört vált, a külső pont pedig két-két képenként vált oldalt és felváltva tartozik a felső, illetve alsó körhöz.",
    tip: "Négy külön kérdést tegyél fel: merre áll a két mutató, melyiken van nyílhegy, és hol van a pont?"
  }),
  officialAbstractQuestion({
    id: "ar31", difficulty: "Közepes",
    sequence: [0, 1, 2, 3, 4].map(step => advancedCornerPairFrame(step)),
    correct: advancedCornerPairFrame(5),
    distractors: [advancedCornerPairFrame(5, { squareShift: 1 }), advancedCornerPairFrame(5, { circleShift: 1 }), advancedCornerPairFrame(5, { squareSize: -2 }), advancedCornerPairFrame(5, { lineTurn: 45 })],
    answer: 2,
    explanation: "Az üres négyzet egy sarkot halad előre, a fekete kör pedig egyet, egyet, majd kettőt. A négyzet mérete háromlépéses ciklust követ, a középső vonal felváltva 45°-ot és 90°-ot fordul.",
    tip: "A fekete kör változó lépéshosszát és a négyzet méretét is külön sorban kövesd."
  }),
  officialAbstractQuestion({
    id: "ar32", difficulty: "Nehéz",
    sequence: [0, 1, 2, 3, 4].map(step => advancedNestedFrame(step)),
    correct: advancedNestedFrame(5),
    distractors: [advancedNestedFrame(5, { outerTurn: 45 }), advancedNestedFrame(5, { innerShift: 1 }), advancedNestedFrame(5, { fillShift: 1 }), advancedNestedFrame(5, { fastDotShift: 1 })],
    answer: 4,
    explanation: "A külső négyzet álló és csúcsára fordított helyzete váltakozik. A belső alakzat és kitöltése külön háromlépéses ciklus, miközben 90°-ot fordul. A fekete pont hármat előre, az üres pont egyet vissza lép a peremen.",
    tip: "Az öt szabályból először a két pont útját ellenőrizd; ezután marad a külső és a belső alakzat."
  })
];

// Original practice questions added 2026-11-02.
const newVerbalSpecs = [
  ["Egy könyvtári hálózat hat fiókjában meghosszabbították a szombati nyitvatartást. A következő negyedévben ezekben a fiókokban nőtt a látogatások száma, de a kölcsönzéseké nem változott. A látogatói kérdőívet kizárólag a helyszínen, szombaton lehetett kitölteni. A válaszadók többsége hasznosnak tartotta az új időrendet. A többi fiókban nem történt változtatás, látogatási adataikat azonban nem vonták be az értékelésbe. A hálózat vezetése további adatgyűjtés után dönt a program kiterjesztéséről.", "Melyik következtetést támasztja alá a beszámoló?", ["A hosszabb nyitvatartás növelte a kölcsönzéseket.","Az összes könyvtárhasználó többsége támogatja az új időrendet.","A vizsgált fiókok látogatásszáma nőtt, de a kölcsönzésszámuk nem.","A többi fiók látogatottsága csökkent."], 2, "Csak a hat fiók látogatásairól és kölcsönzéseiről áll rendelkezésre összehasonlítás. A helyszíni kérdőív nem képviseli az összes használót."],
  ["Egy ösztöndíjprogramban csak azok jelentkezése értékelhető, akik a határidőig benyújtják diplomájuk másolatát és a fogadó intézmény nyilatkozatát. A hiánypótlás kizárólag a már benyújtott iratok olvashatatlan oldalaira vonatkozhat; teljesen hiányzó dokumentum utólag nem fogadható el. A megfelelő iratokkal rendelkezők közül szakmai pontszám alapján választanak. Anna mindkét dokumentumot időben feltöltötte, de diplomájának egyik oldala olvashatatlan. A fogadó nyilatkozat érvényes. Anna még nem kapott szakmai pontszámot, és az ösztöndíjkeret korlátozott.", "Mi állapítható meg Anna pályázatáról?", ["A hiányzó olvasható oldal pótlására van lehetőség, de a támogatás nem biztos.","A dokumentum javításával automatikusan ösztöndíjat kap.","Pályázatát hiánypótlás nélkül végleg el kell utasítani.","Új fogadó nyilatkozatot kell benyújtania."], 0, "Az olvashatatlan oldal javítható. Az értékelhetőség azonban nem azonos a szakmai kiválasztással."],
  ["Egy kikötőben az új időpontfoglalási rendszer bevezetése után a teherautók átlagos várakozási ideje csökkent. Ugyanakkor a forgalom is visszaesett, mert az egyik nagy ügyfél átmenetileg másik kikötőt használt. A jelentés a két változást együtt rögzíti, és nem tartalmaz olyan időszakot, amikor csak az egyik tényező módosult. A rendszer üzemeltetője gyorsabb adminisztrációról számolt be, de ezt külön nem mérték. A várakozási adatok minden belépő teherautóra kiterjednek, az érkezés és a rakodás megkezdése közötti időt mérik.", "Melyik állítás indokolt?", ["A rendszer önmagában okozta a teljes javulást.","A kisebb forgalomnak biztosan nem volt hatása.","Minden teherautó rövidebb ideig várakozott.","A két változás külön hatása a bemutatott adatokból nem határozható meg."], 3, "A forgalom és a foglalási rendszer egyszerre változott, külön hatásukat nem mérték."],
  ["Egy irattár digitalizált anyagai szabadon kereshetők, de a személyes adatot tartalmazó dokumentumok teljes szövegéhez külön engedély szükséges. Az engedély iránti kérelmet kutatók és magánszemélyek is benyújthatják. Az engedély mindig meghatározott dokumentumokra és időtartamra szól. Az irattár katalógusa olyan anyagokat is felsorol, amelyeket még nem digitalizáltak. Ezekről a keresés csak leíró adatokat ad. Márton talál egy katalógusbejegyzést, de abból nem derül ki, hogy a dokumentum digitalizált-e vagy tartalmaz-e személyes adatot.", "Mit tudunk Márton találatáról?", ["A dokumentum teljes szövege azonnal letölthető.","A katalógustalálat önmagában nem bizonyítja a teljes szöveg hozzáférhetőségét.","Mártonnak biztosan engedélyt kell kérnie.","A dokumentumot még nem digitalizálták."], 1, "A katalógus nem digitalizált anyagokat is tartalmaz; a hozzáférés további feltételei sem ismertek."],
  ["Egy regionális jelentés szerint a települések többségében nőtt az óvodai férőhelyek száma. A régió összes férőhelye mégis csökkent, mert két nagyvárosban több intézmény bezárt. A jelentés a férőhelyeket, nem pedig a beiratkozott gyermekeket számolja. A kihasználtságról nincs teljes körű adat, és a régió gyermeklétszámának változását sem vizsgálták. A kisebb településeken megnyílt új csoportok többnyire alacsony létszámúak. A következő évben újabb intézmények megnyitását tervezik, de ezek kapacitása még nem része a kimutatásnak.", "Melyik állítás következik biztosan?", ["Minden településen csökkent a férőhelyek száma.","A beiratkozott gyermekek száma csökkent.","A települések többségének növekedése mellett a regionális összeg csökkent.","A régióban nincs elegendő óvodai férőhely."], 2, "A települések száma szerinti többség és a férőhelyek összesített változása eltérő mutató."],
  ["Egy beszerzési keretmegállapodásból csak a mellékletben felsorolt intézmények rendelhetnek. A mellékletben való szereplés nem kötelezi az intézményt vásárlásra, és a szerződés nem zárja ki más jogszerű beszerzési eljárás alkalmazását. Új intézmény a futamidő alatt nem csatlakozhat ehhez a megállapodáshoz. Az Északi Központ a mellékletben szerepel, de eddig nem rendelt. A Déli Központ nincs felsorolva, bár ugyanazon fenntartóhoz tartozik. Mindkettőnek eszközbeszerzésre van szüksége a következő hónapban.", "Melyik állítás igaz a szabályok alapján?", ["Az Északi Központ rendelhet a megállapodásból, de nem köteles rá.","A Déli Központ a közös fenntartó miatt rendelhet.","Az Északi Központ kizárólag ebből a megállapodásból vásárolhat.","A Déli Központ egy egyszerű kérelemmel csatlakozhat."], 0, "A melléklet jogosultságot ad, nem vásárlási kötelezettséget. A közös fenntartó nem helyettesíti a felsorolást."],
  ["Egy nyelvtanfolyam eredményét a kezdő és záróteszt különbségével értékelték. A jelentésben csak a mindkét tesztet kitöltő hallgatók szerepelnek. Ebben a csoportban az átlagos pontszám emelkedett. A kurzust abbahagyók és a zárótesztről hiányzók eredményét nem ismerik. A résztvevők egy része a tanfolyam mellett más nyelvi képzésre is járt. Az értékelés nem vizsgálta külön ezeket a hallgatókat, és nem alkalmazott kontrollcsoportot. A szervezők a következő kurzusnál részletesebb követést terveznek.", "Melyik megállapítás bizonyított?", ["Minden jelentkező nyelvtudása javult.","A teljes javulást ez a tanfolyam okozta.","A kimaradók eredménye rosszabb lett.","A két tesztet kitöltők átlagos pontszáma emelkedett."], 3, "A jelentés kizárólag a mindkét tesztet kitöltő csoport átlagáról tesz megállapítást."],
  ["Egy múzeum az összes időszaki kiállításához készít online katalógust, ha a képek közlési jogait sikerül megszereznie. Az állandó gyűjteményekhez is készülhet online katalógus, de erre nincs általános kötelezettség. A jogok megszerzése nem jelenti azt, hogy a katalógus ingyenesen elérhető lesz. Egy új kiállításhoz már megjelent az online katalógus. A közlemény azonban nem jelöli meg a kiállítás típusát és a hozzáférés díját, csupán a megjelenés tényét és a szerkesztők nevét ismerteti.", "Mi következik a katalógus megjelenéséből?", ["A kiállítás biztosan időszaki.","A kiállítás típusa és a katalógus díja ebből nem határozható meg.","A katalógus biztosan ingyenes.","Minden állandó kiállításhoz készült katalógus."], 1, "Katalógus mindkét kiállítástípushoz készülhet, a díjról pedig nincs adat."],
  ["Egy városi felmérésben a kerékpárral munkába járók átlagos utazási ideje rövidebb volt az autóval járókénál. A kerékpárosok ugyanakkor átlagosan közelebb laktak munkahelyükhöz. A felmérés egyetlen tavaszi hétre terjedt ki, önkéntes internetes adatfelvétellel. Nem vizsgálták, mennyi idő alatt tenné meg ugyanazt az útvonalat ugyanaz a személy más közlekedési eszközzel. A válaszadók által megadott időket nem ellenőrizték műszeres méréssel. A jelentés az adatokat a felmérés résztvevőinek jellemzőiként közli.", "Melyik állítás támasztható alá?", ["Minden útvonalon gyorsabb a kerékpár.","Az autósok kerékpárra váltva biztosan időt nyernének.","A válaszadó kerékpárosok átlagosan rövidebb utazási időről számoltak be.","Télen is ugyanekkora az időkülönbség."], 2, "Az eredmény önbevalláson és eltérő útvonalakat használó csoportok összevetésén alapul."],
  ["Egy alap pályázatainak szakmai értékeléséhez legalább hetven pont kell, de a támogatást a keret erejéig, pontszám szerinti sorrendben ítélik oda. Azonos pontszám esetén az alacsonyabb igényelt támogatás élvez elsőbbséget. Minden pályázó legfeljebb egy projektet nyújthat be. Két jogosult projekt egyaránt nyolcvankét pontot szerzett. Az egyik százezer, a másik kilencvenezer eurót kér. A még rendelkezésre álló keret nagysága nem ismert, és a többi pályázat pontszámát még nem tették közzé.", "Melyik állítás biztos?", ["A kilencvenezer eurót kérő projekt a másik elé kerül a rangsorban.","Mindkét projekt támogatást kap.","A százezer eurót kérő projektet elutasítják.","A hetven pont minden esetben biztos támogatást jelent."], 0, "A holtversenyszabály egyértelmű sorrendet ad, de a finanszírozást a teljes rangsor és a keret dönti el."],
  ["Egy laboratórium sürgősségi vizsgálatai egy munkanapon belül elkészülnek, ha a minta délelőtt tízig megérkezik és megfelel a minőségi követelményeknek. A később érkező mintáknál ezt a határidőt nem garantálják, de egyes esetekben teljesítik. Az elégtelen minőségű mintákhoz új mintavételt kérnek. Egy megfelelő minőségű minta tizenegy órakor érkezett, és még aznap elkészült a vizsgálata. A laboratórium aznap a szokásos létszámmal dolgozott. Az esethez külön határidő-vállalás nem kapcsolódott.", "Hogyan értékelhető ez az eset?", ["A laboratórium megsértette a szabályzatot.","Mostantól minden tizenegykor érkező minta aznap elkészül.","A minőségi követelmények nem voltak érvényesek.","A gyors teljesítés összeegyeztethető a szabályzattal, de nem volt garantált."], 3, "A garancia hiánya nem jelenti a gyors teljesítés tilalmát vagy lehetetlenségét."],
  ["Egy vállalat kétféle hibamutatót közöl: a hibás termékek számát és azok arányát az összes gyártott terméken belül. Az új üzemben az idei első negyedévben kevesebb hibás darab készült, mint tavaly ugyanebben az időszakban. A teljes termelés azonban ennél nagyobb arányban esett vissza. A hibás termékek meghatározása és ellenőrzési módja nem változott. A jelentés nem tartalmaz adatot a hibák súlyosságáról, és a javítás költségét sem hasonlítja össze. A vezetőség mindkét mutatót figyeli.", "Melyik következtetés helyes?", ["A hibás darabok aránya csökkent.","A hibás darabok aránya nőtt, bár a számuk csökkent.","A hibák javítása olcsóbb lett.","A hibaarány biztosan változatlan maradt."], 1, "Ha a nevező nagyobb arányban csökken, mint a számláló, akkor a hányados nő."],
  ["Egy természetvédelmi területen a kijelölt útvonalakon egész évben lehet sétálni. Az útvonalakon kívül a költési időszakban csak kutatási engedéllyel lehet közlekedni. Más időszakban a kijelölt útvonalakon kívül is szabad a gyalogos közlekedés, kivéve az állandóan lezárt zónát. A kutatási engedély sem jogosít az állandóan lezárt zónába való belépésre. Egy kutató érvényes engedéllyel rendelkezik, és költési időszakban az útvonalakon kívül dolgozna. Tervezett munkaterülete nem tartozik az állandóan lezárt zónához.", "Mit engednek a leírt szabályok?", ["A kutató csak a kijelölt útvonalakon járhat.","Az engedély minden lezárt területre érvényes.","A kutató a megjelölt munkaterületre beléphet.","A költési időszakban sehol nem lehet sétálni."], 2, "A kutató rendelkezik a szükséges engedéllyel, és a területre nem vonatkozik az állandó tilalom."],
  ["Egy távhőszolgáltató a számlákat becsült fogyasztás alapján állítja ki, majd az éves leolvasás után elszámol. A havi előleg csökkenhet akkor is, ha a fogyasztó éves energiafelhasználása változatlan, amennyiben a tarifa mérséklődik. Az előleg emellett a korábbi túlfizetés beszámítása miatt is csökkenhet. Egy háztartás havi előlege idén alacsonyabb lett. Nem áll rendelkezésre információ a tarifa változásáról, a túlfizetésről vagy az éves leolvasás eredményéről. A háztartás lakóinak száma nem változott.", "Melyik állítás indokolt?", ["Az alacsonyabb előleg önmagában nem bizonyít fogyasztáscsökkenést.","A háztartás biztosan kevesebb energiát használt.","A tarifa biztosan csökkent.","A háztartásnak biztosan túlfizetése volt."], 0, "A csökkenésnek több lehetséges oka van; a közölt információ nem választ közülük."],
  ["Egy szakmai hálózat tagsága önkéntes. Minden tag kapja a havi hírlevelet, de a hírlevélre nem tagok is feliratkozhatnak. A szakmai fórumhoz viszont kizárólag az aktív tagsággal rendelkezők férnek hozzá. A tagság megszűnésekor a fórumhozzáférést letiltják, a hírlevél-küldést azonban csak külön leiratkozásra szüntetik meg. Júlia továbbra is kapja a hírlevelet, de a fórumhoz jelenleg nincs hozzáférése. Nem tudjuk, volt-e korábban tag, és azt sem, történt-e technikai hiba a belépés során.", "Mit bizonyít a hírlevél kézhezvétele?", ["Júlia aktív tag.","Júlia korábban biztosan tag volt.","Júlia tagsága megszűnt.","Önmagában nem bizonyít sem jelenlegi, sem korábbi tagságot."], 3, "A hírlevél a tagságtól függetlenül is igényelhető, és megszűnt tagság után is megmaradhat."],
  ["Egy városban a közösségi kertek száma megkétszereződött, miközben összes területük változatlan maradt. A nyilvántartás minden kertet egy egységként számol, függetlenül méretétől. A régi kertek közül néhányat felosztottak, és kisebb új helyszíneket is bevontak. A beszámoló nem közöl adatot a kertészkedők létszámáról vagy a megtermelt zöldség mennyiségéről. Az összes terület mindkét évben ugyanazzal a mérési módszerrel készült. A kertek egy része iskolákhoz, más része lakóközösségekhez tartozik.", "Melyik változás következik biztosan?", ["Minden egyes kert területe megfeleződött.","Az egy kertre jutó átlagos terület megfeleződött.","A kertészkedők száma megkétszereződött.","A termelés változatlan maradt."], 1, "Változatlan összterület és kétszeres darabszám mellett az átlagos terület feleződik; az egyedi méretekből ez nem következik."],
  ["Egy informatikai szolgáltatás tesztverzióját három önként jelentkező osztály próbálta ki. A jelentett hibák száma hetente csökkent. Közben a tesztelők száma is fogyott, mert két osztály más feladatra állt át. A rendszer nem rögzítette a tényleges használati időt vagy a végrehajtott műveletek számát. A fejlesztők több javítást kiadtak, de azok hatását külön nem mérték. A csökkenő hibajegyszámot a projektjelentés rögzítette, a szolgáltatás stabilitásának számszerű változására azonban nem adott becslést.", "Melyik értelmezés a leginkább megalapozott?", ["A hibajegyek csökkenése biztosan arányos a stabilitás javulásával.","A fejlesztéseknek nem volt semmilyen hatásuk.","A kevesebb hibajegy önmagában nem mutatja meg az egységnyi használatra jutó hibák változását.","A rendszer minden hibája megszűnt."], 2, "A használat mennyiségének ismerete nélkül a hibák gyakorisága nem számítható ki."],
  ["Egy képzési központ a jelentkezéseket beérkezési sorrendben fogadja, de a helyeket csak a részvételi díj határidőn belüli befizetése véglegesíti. A határidő után a ki nem fizetett helyet a várólista első jelentkezőjének ajánlják fel. A várólistás jelentkezés önmagában nem keletkeztet fizetési kötelezettséget. Péter időben jelentkezett és helyet kapott, de nem fizetett határidőre. A várólista első helyén Zita áll. A központ még nem küldte el neki az ajánlatot, és elfogadó nyilatkozata sincs.", "Mi következik az eljárásból?", ["Péter ki nem fizetett helyét Zitának kell felajánlani.","Zita már végleges résztvevő.","Péter helye a korai jelentkezés miatt megmarad.","Zita köteles befizetni a díjat."], 0, "A szabály felajánlást ír elő; a hely véglegesítése és a fizetés további lépésekhez kötött."],
  ["Egy útkarbantartási jelentésben az ellenőrzött útszakaszok nyolcvan százaléka megfelelő állapotú volt. Az ellenőrzésbe elsősorban az előző évben felújított szakaszok kerültek, a többi útról csak bejelentés esetén gyűjtöttek adatot. Az útszakaszokat darabszám szerint értékelték, hosszukat nem súlyozták. A jelentés nem állítja, hogy a vizsgált szakaszok a teljes hálózat reprezentatív mintáját alkotják. A hosszabb és rövidebb utak ugyanannyit számítottak a megadott arányban. A következő évre szélesebb felmérést terveznek.", "Melyik állítás helyes?", ["A teljes úthálózat hosszának nyolcvan százaléka megfelelő.","Minden felújítatlan út rossz állapotú.","A vizsgált utak mind egyforma hosszúak.","A nyolcvan százalék az ellenőrzött szakaszok darabszámára vonatkozik."], 3, "A mutató nem hossz szerinti és nem feltétlenül reprezentatív a teljes hálózatra."],
  ["Egy intézmény három hónapra korlátozta a nyomtatók alapértelmezett színes használatát. A papírfogyasztás nem változott, a festékkazetták beszerzési költsége viszont csökkent. Ugyanekkor új beszállítói szerződés lépett életbe alacsonyabb egységárakkal. A beszerzési adatok nem tartalmazzák, mennyi kazettát használtak fel ténylegesen, és mennyi került raktárra. A jelentés csak a negyedéves kiadásokat hasonlítja össze az előző negyedévvel. A dolgozók külön engedéllyel továbbra is nyomtathattak színesben, de az engedélyek számát nem közölték.", "Melyik állítás következik?", ["A színes nyomtatás teljesen megszűnt.","A kazettákra fordított kiadás csökkent, de ebből a felhasználás változása nem állapítható meg.","A felhasznált kazetták száma biztosan csökkent.","A papírfogyasztás csökkenése okozta a megtakarítást."], 1, "Az ár és a raktárkészlet is befolyásolhatja a kiadást; a tényleges felhasználás nem ismert."]
];
const additionalVerbalQuestions = newVerbalSpecs.map(([passage,prompt,options,answer,explanation],i)=>({id:`v${i+21}`,category:"verbal",difficulty:i%3===0?"Nehéz":"Közepes",passage,prompt,options,answer,explanation,tip:"Csak a szövegben szereplő információkra támaszkodj; különítsd el a biztos tényt a lehetséges magyarázattól."}));
const newNumericTables = [
 {contextTitle:"Épületfelújítási programok, 2024–2025",table:[
 ["Ország","Keret 2024 (M EUR)","Keret 2025 (M EUR)","Épületek 2025 (db)","EU-forrás a 2025-ös keretből (%)","Kifizetés a 2025-ös keretből (%)"],
 ["Belgium","40","50","200","60%","80%"],["Ausztria","30","36","120","50%","75%"],["Portugália","20","30","150","70%","60%"],["Finnország","25","30","100","40%","90%"],["Horvátország","16","24","160","75%","50%"]]},
 {contextTitle:"Regionális áruszállítás, 2025",table:[
 ["Ország","Tömeg (ezer t)","Vasúton szállított tömeg (%)","Átlagos út (km)","Bevétel (M EUR)","Költség (M EUR)"],
 ["Németország","600","40%","250","90","72"],["Lengyelország","500","30%","300","75","60"],["Csehország","400","45%","200","56","49"],["Szlovákia","250","60%","240","40","30"],["Magyarország","300","35%","280","48","42"]]},
 {contextTitle:"Vízellátó hálózatok mérlege, 2024–2025",table:[
 ["Ország","Betáplálás 2024 (M m³)","Betáplálás 2025 (M m³)","Veszteség (el nem adott víz), 2024 (% a betáplálásból)","Veszteség (el nem adott víz), 2025 (% a betáplálásból)","Eladási ár 2025 (EUR/m³)"],
 ["Spanyolország","100","110","20%","15%","1,8"],["Olaszország","120","125","25%","20%","2,0"],["Görögország","80","84","30%","25%","1,5"],["Málta","20","22","15%","10%","2,5"],["Ciprus","30","32","20%","15%","2,2"]]},
 {contextTitle:"Szakmai mobilitási program, 2025",table:[
 ["Ország","Résztvevők (fő)","Átlagos támogatott idő (hó/fő)","Havi támogatás (EUR/fő)","Sikeres befejezők (%)","Koordinációs költség (ezer EUR)"],
 ["Írország","400","5","800","90%","80"],["Franciaország","600","4","750","85%","120"],["Svédország","300","6","900","80%","90"],["Litvánia","500","4","600","92%","60"],["Szlovénia","200","5","700","95%","50"]]}
];
// Options are explicit, original distractors; all are shuffled at session creation.
const newNumericSpecs = [
 [0,"Belgium és Ausztria 2025-ös megítélt keretéből együtt mennyi származik az uniós költségvetésen kívüli forrásból?",["32 M EUR","38 M EUR","43 M EUR","48 M EUR","52 M EUR"],1,"Belgium: 50 × 40% = 20. Ausztria: 36 × 50% = 18. Együtt 38 millió EUR."],
 [0,"Hány százalékkal nőtt Portugália és Horvátország együttes kerete 2024-ről 2025-re?",["33,3%","40,0%","45,0%","50,0%","60,0%"],3,"2024: 20 + 16 = 36. 2025: 30 + 24 = 54. (54 − 36) / 36 × 100 = 50%."],
 [0,"Mennyi 2025-ös kifizetés jutott átlagosan egy bevont épületre Finnországban?",["120 000 EUR","240 000 EUR","270 000 EUR","300 000 EUR","333 333 EUR"],2,"Kifizetés: 30 millió × 90% = 27 millió EUR. 27 millió / 100 = 270 000 EUR épületenként."],
 [0,"Az öt ország teljes 2025-ös keretének hány százalékát fizették ki összesen?",["72,9%","68,0%","73,5%","75,0%","80,0%"],0,"Keret: 50 + 36 + 30 + 30 + 24 = 170 millió. Kifizetés: 40 + 27 + 18 + 27 + 12 = 124 millió. 124 / 170 × 100 ≈ 72,9%."],
 [1,"Németország és Lengyelország együttes szállított tömegének hány százalékát vitték vasúton?",["30,0%","35,0%","35,5%","40,0%","45,0%"],2,"Vasúton: 600 × 40% + 500 × 30% = 390 ezer tonna. Összesen 1 100 ezer tonna. 390 / 1 100 × 100 ≈ 35,5%."],
 [1,"Mennyi volt a csehországi szolgáltató árbevétel-arányos nyeresége?",["7,0%","10,0%","14,3%","12,5%","87,5%"],3,"Nyereség: 56 − 49 = 7 millió. Árbevétel-arányosan: 7 / 56 × 100 = 12,5%."],
 [1,"Mennyi volt a szlovákiai szolgáltató tonnakilométerre jutó költsége, ha minden tonna a táblázat szerinti átlagos utat tette meg?",["0,50 EUR","0,12 EUR","0,24 EUR","0,67 EUR","2,00 EUR"],0,"250 000 tonna × 240 km = 60 millió tonnakilométer. 30 millió EUR / 60 millió = 0,50 EUR/tonnakilométer."],
 [1,"Ha Magyarország szolgáltatójának bevétele 10%-kal, költsége 5%-kal nő, hány százalékkal nő a nyeresége?",["5%","10%","35%","40%","45%"],4,"Régi nyereség: 48 − 42 = 6. Új: 52,8 − 44,1 = 8,7. (8,7 − 6) / 6 × 100 = 45%."],
 [2,"Hány százalékkal nőtt az értékesített víz mennyisége a spanyolországi hálózatban?",["10,0%","15,0%","16,9%","18,2%","20,0%"],2,"2024: 100 × 80% = 80 millió m³. 2025: 110 × 85% = 93,5. Növekedés: 13,5 / 80 × 100 = 16,875%, azaz 16,9%."],
 [2,"Mennyi az olaszországi és görögországi hálózat együttes 2025-ös bevétele?",["263,0 M EUR","294,5 M EUR","326,0 M EUR","344,5 M EUR","376,0 M EUR"],1,"Olaszország: 125 × 80% × 2 = 200 millió EUR. Görögország: 84 × 75% × 1,5 = 94,5 millió. Összesen 294,5 millió."],
 [2,"Mekkora volt Málta és Ciprus együttes veszteségi aránya 2025-ben?",["12,5%","10,0%","15,0%","13,0%","14,1%"],3,"Veszteség: 22 × 10% + 32 × 15% = 7 millió m³. Betáplálás: 54 millió m³. 7 / 54 × 100 ≈ 13,0%."],
 [2,"Mennyivel nőne a görögországi hálózat bevétele, ha azonos betáplálás és ár mellett a veszteség 25%-ról 20%-ra csökkenne?",["6,3 M EUR","4,2 M EUR","5,0 M EUR","12,6 M EUR","21,0 M EUR"],0,"Többletként értékesíthető: 84 × (25% − 20%) = 4,2 millió m³. Bevétel: 4,2 × 1,5 = 6,3 millió EUR."],
 [3,"Mekkora Írország és Svédország teljes támogatási és koordinációs költsége együtt?",["3,22 M EUR","3,30 M EUR","3,39 M EUR","3,48 M EUR","3,60 M EUR"],2,"Írország: 400 × 5 × 800 + 80 000 = 1 680 000 EUR. Svédország: 300 × 6 × 900 + 90 000 = 1 710 000 EUR. Együtt 3,39 millió EUR."],
 [3,"Mekkora a résztvevők számával súlyozott átlagos időtartam Franciaország és Svédország esetében?",["4,00 hó","4,50 hó","5,00 hó","4,67 hó","5,33 hó"],3,"(600 × 4 + 300 × 6) / (600 + 300) = 4 200 / 900 ≈ 4,67 hónap."],
 [3,"Mekkora a sikeres befejezők együttes aránya Litvániában és Szlovéniában?",["92,0%","92,9%","93,5%","94,0%","95,0%"],1,"Sikeres résztvevők: 500 × 92% + 200 × 95% = 650. Összesen 700 résztvevő; 650 / 700 × 100 ≈ 92,9%."],
 [3,"Mennyi a franciaországi program teljes költsége egy sikeres befejezőre vetítve, egész euróra kerekítve?",["3 000 EUR","3 200 EUR","3 529 EUR","3 600 EUR","3 765 EUR"],4,"Teljes költség: 600 × 4 × 750 + 120 000 = 1 920 000 EUR. Sikeres befejező: 600 × 85% = 510. 1 920 000 / 510 ≈ 3 765 EUR."]
];

const additionalNumericQuestions = newNumericSpecs.map(([tableIndex,prompt,options,answer,explanation],i)=>({id:`n${i+17}`,category:"numeric",difficulty:i%4===0?"Közepes":"Nehéz",...newNumericTables[tableIndex],prompt,options,answer,explanation,tip:"Először válaszd ki a megfelelő sorokat és mértékegységeket. Az arányokat a hozzájuk tartozó alapra alkalmazd; csak a végén kerekíts."}));

// Twelve new sequences: each has three independent visible rules.
// Each distractor violates exactly one rule; a fifth option violates two.
const newAbstractRules = [
 {kind:0,pos:s=>s,turn:s=>s*90,count:s=>1+s%3,explanation:"A háromszög egy sarokkal halad az óramutató járásával megegyezően és 90°-ot fordul. A középső pontok száma 1–2–3 ciklust követ."},
 {kind:0,pos:s=>-s,turn:s=>s*45,count:s=>3-s%3,explanation:"A háromszög sarkonként az óramutató járásával ellentétesen mozog, miközben 45°-ot fordul előre. A pontok száma 3–2–1 ciklusú."},
 {kind:0,pos:s=>Math.floor(s/2),turn:s=>s*90,count:s=>1+s%2,explanation:"A háromszög két képen át ugyanabban a sarokban marad, majd egy sarokkal továbblép. Képenként 90°-ot fordul, a pontok száma 1 és 2 között váltakozik."},
 {kind:0,pos:s=>s*(s+1)/2,turn:s=>-s*90,count:s=>1+(s+1)%3,explanation:"A háromszög 1, 2, 3, 4, majd 5 sarkot lép előre, négy sarok után körbeérve. Képenként 90°-ot fordul visszafelé; a pontok száma 2–3–1 ciklusú."},
 {kind:1,pos:s=>s,turn:s=>s*45,count:s=>1+s%3,explanation:"A fekete négyzet egy mezőt halad a nyolc peremmezőn, a középső nyíl 45°-ot fordul, a felső jelölők száma 1–2–3 ciklusú."},
 {kind:1,pos:s=>-2*s,turn:s=>-s*90,count:s=>3-s%3,explanation:"A fekete négyzet két peremmezőt lép vissza. A középső nyíl 90°-ot fordul visszafelé, a felső pontok száma 3–2–1 ciklusú."},
 {kind:1,pos:s=>s+Math.floor(s/2),turn:s=>s*90,count:s=>1+Math.floor(s/2)%3,explanation:"A négyzet felváltva 1 és 2 peremmezőt lép előre. A nyíl mindig 90°-ot fordul. A pontok száma két-két képenként nő: 1, 1, 2, 2, 3, 3."},
 {kind:1,pos:s=>3*s,turn:s=>45*(s+Math.floor(s/2)),count:s=>1+s%2,explanation:"A négyzet három peremmezőt lép előre. A nyíl felváltva 45°-ot és 90°-ot fordul, a felső pontok száma 1 és 2 között váltakozik."},
 {kind:2,pos:s=>s,turn:s=>s*90,count:s=>1+s%3,explanation:"A felső három alakzat egy hellyel balra tolódik, körbeérve. A középső nyíl 90°-ot fordul. Az alsó fekete pontok száma 1–2–3 ciklusú."},
 {kind:2,pos:s=>-s,turn:s=>-s*45,count:s=>3-s%3,explanation:"A felső alakzatok egy hellyel jobbra tolódnak, körbeérve. A nyíl 45°-ot fordul visszafelé, az alsó pontok száma 3–2–1 ciklusú."},
 {kind:2,pos:s=>Math.floor(s/2),turn:s=>s*90,count:s=>1+s%2,explanation:"A felső alakzatsorrend két képen át változatlan, majd egy hellyel balra tolódik. A nyíl képenként 90°-ot fordul, az alsó pontok száma 1 és 2 között váltakozik."},
 {kind:2,pos:s=>s,turn:s=>45*(s+Math.floor(s/2)),count:s=>1+Math.floor(s/2)%3,explanation:"A felső alakzatok egy hellyel balra tolódnak. A nyíl felváltva 45°-ot és 90°-ot fordul. Az alsó pontok száma két képenként nő: 1, 1, 2, 2, 3, 3."}
];
function newAbstractFrame(rule, step, change={}) {
 const mod=(n,m)=>(n%m+m)%m;
 const pos=rule.pos(step)+(change.pos||0), angle=rule.turn(step)+(change.turn||0);
 const count=1+mod(rule.count(step)-1+(change.count||0),3);
 const marks=Array.from({length:count},(_,i)=>item("circle",40+i*10,rule.kind===1?14:rule.kind===2?79:50,{size:2.7,filled:true,strokeWidth:1}));
 if(rule.kind===0){const p=[[24,24],[76,24],[76,76],[24,76]][mod(pos,4)];return frame(item("triangle",...p,{size:8,rotation:angle,strokeWidth:1.6}),...marks);}
 if(rule.kind===1){const p=[[28,28],[50,28],[72,28],[72,50],[72,72],[50,72],[28,72],[28,50]][mod(pos,8)];return frame(lineItem(20,20,80,20,{width:1}),lineItem(80,20,80,80,{width:1}),lineItem(80,80,20,80,{width:1}),lineItem(20,80,20,20,{width:1}),item("square",...p,{size:5,filled:true}),...thinArrowItems(50,50,angle,19,1.5),...marks);}
 const shapes=["circle","square","triangle"];
 return frame(...[0,1,2].map(i=>item(shapes[mod(i+pos,3)],27+i*23,24,{size:5,strokeWidth:1.5})),...thinArrowItems(50,52,angle,25,1.6),...marks);
}
const additionalAbstractQuestions = newAbstractRules.map((rule,i)=>officialAbstractQuestion({id:`ar${i+33}`,difficulty:i%4<2?"Közepes":"Nehéz",sequence:[0,1,2,3,4].map(s=>newAbstractFrame(rule,s)),correct:newAbstractFrame(rule,5),distractors:[newAbstractFrame(rule,5,{pos:1}),newAbstractFrame(rule,5,{turn:90}),newAbstractFrame(rule,5,{count:1}),newAbstractFrame(rule,5,{pos:1,count:1})],answer:i%5,explanation:rule.explanation,tip:"Külön kövesd a helyet, az irányt és az elemszámot. A helyes ábrának mindhárom szabályt teljesítenie kell."}));

// Additional original questions, expansion from 96 to 144.
const round3VerbalSpecs = [
 ["Egy ügyfélszolgálat három nehézségi csoportba sorolja a megkereséseket. Az új rendszer bevezetése után mindhárom csoportban rövidebb lett az átlagos megoldási idő. A beérkező ügyek között azonban jelentősen megnőtt a legbonyolultabb esetek aránya, ezért az összes ügyre számított átlagos megoldási idő emelkedett. A csoportok meghatározása nem változott, és mindkét időszakban minden lezárt ügyet figyelembe vettek. A jelentés nem tartalmaz adatot a még folyamatban lévő ügyekről. A vezetőség a csoportonkénti és az összesített mutatókat egyaránt közölte.","Melyik állítás egyeztethető össze a jelentéssel?",["A csoportonkénti gyorsulás mellett az összesített átlag az ügyösszetétel változása miatt emelkedett.","Legalább az egyik csoportban biztosan nőtt az átlagos idő.","Az összesített átlag emelkedése számítási hibát bizonyít.","A még folyamatban lévő ügyek száma csökkent."],0,"A csoportok eltérő súlyának változása felülírhatja a csoportonkénti javulást az összesített átlagban."],
 ["Egy fordítási szolgálat csak akkor küldhet ki ellenőrzött jelölésű dokumentumot, ha azt a fordítón kívül egy másik munkatárs is átnézte. A második ellenőrzés a tartalmi pontosságra irányul, de nem igazolja a dokumentumban szereplő eredeti tényállításokat. Sürgős esetben ellenőrzés nélkül is továbbítható szöveg, kizárólag előzetes változatként megjelölve. Egy kiküldött dokumentum ellenőrzött jelölést kapott, és a szolgálat a szabályokat betartotta. Az eredeti anyag adatait külső szervezet szolgáltatta, a fordítási megbízás nem terjedt ki azok hitelességének vizsgálatára.","Mit bizonyít az ellenőrzött jelölés?",["Az eredeti szöveg minden ténye igaz.","A dokumentumot a fordítón kívül másik munkatárs is átnézte.","A fordítás biztosan nem volt sürgős.","A külső szervezet ellenőrizte a kész fordítást."],1,"A jelölés a második nyelvi-tartalmi ellenőrzést igazolja, nem az eredeti tényállítások hitelességét."],
 ["Egy városi épületfelmérésben a korszerűsített házak energiaigénye átlagosan alacsonyabb volt a nem korszerűsítettekénél. A korszerűsített csoportban ugyanakkor több kisebb lakás és több újabb építésű épület szerepelt. A kutatók az energiaigényt lakásonként, nem négyzetméterenként hasonlították össze. Nem rendelkeztek a korszerűsítés előtti fogyasztási adatokkal. A felmérés egy teljes évet fedett le, és az adatokat a szolgáltatók számláiból vették át. A jelentés további, az épületméretet és az építés idejét is figyelembe vevő vizsgálatot javasolt.","Melyik következtetés megalapozott?",["Minden korszerűsített lakás kevesebbet fogyaszt, mint korábban.","A korszerűsítésnek nem volt hatása az energiaigényre.","A csoportok közötti eltérésből a korszerűsítés önálló hatása nem különíthető el.","A nem korszerűsített épületek mind régebbiek."],2,"A méret és a kor is eltér, a felújítás előtti adatok pedig hiányoznak; az önálló hatás nem állapítható meg."],
 ["Egy kutatási támogatásban az eszközbeszerzés költsége elszámolható, ha az eszközt a projekt időszakában rendelik meg és helyezik üzembe. A számla kifizetése a projekt végét követő harminc napon belül is megtörténhet. A szállítóval kötött szerződés önmagában nem elegendő az üzembe helyezés igazolására. Egy berendezést a projekt vége előtt megrendeltek és leszállítottak, de csak tíz nappal a projekt lezárása után helyezték üzembe. A kifizetés a lezárás utáni huszadik napon történt. Minden egyéb elszámolási feltétel teljesült.","Elszámolható-e a berendezés a megadott szabály szerint?",["Igen, mert a kifizetés harminc napon belül történt.","Igen, mert a megrendelés időben megtörtént.","Nem, mert a kifizetésnek a projekt végéig meg kellett volna történnie.","Nem, mert az üzembe helyezés a projekt időszakán kívül történt."],3,"A megengedett későbbi fizetés nem hosszabbítja meg az üzembe helyezésre előírt időszakot."],
 ["Egy közlekedési vállalat csökkentette az utaspanaszok számát az előző évhez képest. Ugyanebben az időszakban a járatok és az utazások száma is csökkent, de a jelentés ezek mértékét nem közli. A panaszok rögzítésének szabályai és a bejelentési csatornák változatlanok maradtak. A panaszügyek lezárási idejét külön mérik, erről az összehasonlításban nincs adat. A vállalat a csökkenő darabszámot közzétette, de az egy utazásra jutó panaszarányt nem számolta ki. Egy panasz több utazással kapcsolatos kifogást is tartalmazhat.","Melyik állítás igazolható?",["Kevesebb panaszt rögzítettek, de az egy utazásra jutó panaszarány változása nem ismert.","Az egy utazásra jutó panaszarány biztosan javult.","Az ügyintézés gyorsabb lett.","Minden utas elégedettebb lett."],0,"A darabszám ismert, a viszonyítási alap változásának mértéke nem; az arány ebből nem következik."],
 ["Egy konferencia minden előadójának be kell nyújtania az előadás kivonatát. A kivonat elfogadása feltétele az előadás megtartásának, de nem jelent automatikus utazási támogatást. Utazási támogatást külön kérelemre, korlátozott keretből ítélnek meg. A hallgatóság tagjai kivonat nélkül is regisztrálhatnak, és külön feltételekkel szintén kérhetnek támogatást. Eszter kivonatát elfogadták, de támogatási kérelméről még nem döntöttek. Az előadói regisztrációját már visszaigazolták, és más hiányzó feltételt nem jeleztek számára. A program végleges időbeosztása még készül.","Mit tudunk Eszter helyzetéről?",["A támogatásról az elfogadott kivonat miatt már pozitívan döntöttek.","Az előadás feltételei teljesültek, de az utazási támogatás még nem biztos.","Csak hallgatóként vehet részt.","Az előadás időpontja már végleges."],1,"A kivonat és a regisztráció rendezett, az utazási támogatás külön eljárásban, még nyitott kérdés."],
 ["Egy település a nyári vízfogyasztást két módszerrel közölte. Az összes felhasznált víz mennyisége nőtt, az egy lakosra jutó mennyiség viszont csökkent. A népességadat mindkét évben ugyanarra az időpontra vonatkozott, és a fogyasztási adatokat azonos területi határok között mérték. Az ideiglenes vendégek fogyasztását is beleszámították az összes vízfelhasználásba, de őket a lakosságszám nem tartalmazza. A jelentés nem különítette el a háztartási, turisztikai és vállalati fogyasztást. A két mutatót módszertani változás nélkül számították.","Melyik állítás következik biztosan a két mutató változásából?",["Minden háztartás takarékosabb lett.","A turisták száma csökkent.","A számításhoz használt lakosságszám nagyobb arányban nőtt, mint az összes vízfogyasztás.","A vállalkozások fogyasztása változatlan maradt."],2,"Pozitív összfogyasztás-növekedés mellett a hányados csak akkor csökken, ha a nevező nagyobb arányban nő."],
 ["Egy adatkezelési szabályzat szerint a név szerinti adatokhoz csak az adott ügyre kijelölt munkatársak férhetnek hozzá. Az anonimizált összesítéseket minden szervezeti egység megkaphatja. Az ügyre való kijelölés nem jelent korlátlan hozzáférést más ügyekhez. Tamás megkapta egy részleg anonimizált havi összesítését, de nem tudjuk, kijelölték-e bármelyik egyedi ügyre. Az összesítésből személyek nem azonosíthatók, és a részleg minden egységnek ugyanazt a dokumentumot küldte. A hozzáférési szabályok alól ebben a hónapban sem engedélyeztek kivételt.","Mi állapítható meg Tamás jogosultságáról?",["Biztosan hozzáfér minden név szerinti adathoz.","Biztosan nincs kijelölve egyetlen ügyre sem.","Az összesítés megküldése megsértette a szabályzatot.","Az összesítés kézhezvétele nem dönti el, jogosult-e egyedi ügyadatokhoz hozzáférni."],3,"Az anonimizált összesítés általánosan hozzáférhető; ebből az egyedi ügyekre szóló kijelölés nem következik."],
 ["Egy város két közparkjában kísérleti öntözési rendszert vezettek be. Az első parkban a vízfogyasztás csökkent, a másodikban nőtt. A második park öntözött területe időközben jelentősen bővült, az elsőé változatlan maradt. A jelentés parkonként csak az összes vízfogyasztást közölte, a négyzetméterre jutó értéket nem. A növényzet összetétele is eltért, és az eltérést a vizsgálat nem korrigálta. A rendszert mindkét parkban ugyanaz a vállalkozó telepítette. A karbantartási kiadásokról nem szerepel adat az értékelésben.","Melyik következtetés indokolt?",["A két park teljes fogyasztásából önmagában nem dönthető el a rendszerek területegységre jutó hatékonysága.","A második rendszer biztosan rosszabbul működik.","A második park négyzetméterre jutó fogyasztása biztosan nőtt.","A karbantartás mindkét parkban olcsóbb lett."],0,"Az öntözött terület és a növényzet különbsége miatt a teljes fogyasztás nem azonos a fajlagos hatékonysággal."],
 ["Egy képzési programban a tanúsítvány megszerzéséhez legalább nyolcvan százalékos részvétel és sikeres zárófeladat szükséges. Az igazolt hiányzást a részvételi arányban ugyanúgy hiányzásként veszik figyelembe, de az érintett foglalkozás pótolható. A pótolt foglalkozás teljesített jelenlétnek számít. Réka az eredeti órák hetvenöt százalékán vett részt, majd a teljes óraszám további tíz százalékának megfelelő foglalkozást szabályosan pótolta. Zárófeladatát sikeresnek minősítették. Más követelmény nincs, és a pótlásokat a rendszer már jóváírta.","Melyik állítás következik a szabályokból?",["Réka az eredeti hiányzás miatt végleg kizárt.","Réka teljesítette a tanúsítvány feltételeit.","Réka részvételi aránya továbbra is hetvenöt százalék.","A zárófeladat csak teljes jelenlét mellett fogadható el."],1,"A jóváírt részvétel 75% + 10% = 85%, és a zárófeladat sikeres; mindkét feltétel teljesült."],
 ["Egy új ügyintézési portál bevezetésekor az ügyfeleket véletlenszerűen két csoportba osztották. Az egyik csoport a korábbi, a másik az új felületet használta ugyanazon ügytípusokhoz. Az új felületen kevesebb kitöltési hibát mértek, de az ügyintézési idő átlagában nem találtak érdemi különbséget. A vizsgálat kizárólag asztali számítógépen történt; a mobilváltozatot még nem tesztelték. A két csoport ugyanolyan tájékoztatást kapott, és az értékelés minden résztvevő eredményét tartalmazta. A mérés egy hónapig tartott, és nem követte a későbbi használatot.","Melyik megállapítást támasztja alá közvetlenül a vizsgálat?",["A mobilfelület is csökkenti a hibákat.","Az új portál minden ügyet gyorsabban intéz el.","A vizsgált asztali használatban az új felületen kevesebb kitöltési hiba volt.","A javulás korlátlan ideig fennmarad."],2,"Az eredmény a tesztelt eszközre, ügytípusokra és időszakra vonatkozik, nem a még nem vizsgált mobilhasználatra."],
 ["Egy szervezet a belső állásokra minden munkatársától elfogad jelentkezést, de vezetői szerepre legalább két év igazolt irányítási tapasztalat szükséges. Ez a tapasztalat más munkáltatónál is szerezhető, és nem szükséges, hogy a jelenlegi beosztás vezetői legyen. Máté most ügyintézőként dolgozik, korábban azonban három évig igazoltan csoportot irányított egy másik szervezetnél. A kiválasztás szakmai interjút is tartalmaz, amelyre még nem került sor. A kiírás további jogosultsági feltételeit Máté teljesíti, és határidőben beadta jelentkezését.","Melyik állítás helyes?",["Máté jelenlegi beosztása miatt nem pályázhat.","Mátét kötelező kinevezni.","Csak a jelenlegi munkáltatónál szerzett vezetői tapasztalat számít.","Máté megfelel a tapasztalati feltételnek, de a kiválasztás eredménye még nem ismert."],3,"A korábbi, más munkáltatónál igazolt irányítási tapasztalat elfogadható. A jogosultság nem jelent automatikus kiválasztást."],
 ["Egy felmérésben az online vásárlók nagyobb aránya számolt be késedelmes kézbesítésről, mint az előző évben. A vizsgálatban idén több távoli térségben élő vásárló vett részt, és az eredményeket nem súlyozták a lakosság összetételére. Az adatfelvétel mindkét évben önkéntes kérdőívvel történt. A késedelem meghatározása változatlan maradt, de az egy vásárlóra jutó rendelések számát nem kérdezték meg. A szolgáltatók teljes szállítási nyilvántartásai nem álltak a kutatók rendelkezésére. Az eredmények kizárólag a válaszadók tapasztalatait összegzik.","Melyik következtetés bizonyított?",["Az idei válaszadók között nagyobb volt a késedelmet jelzők aránya.","Az ország összes csomagjának késedelmi aránya biztosan nőtt.","Minden szolgáltató romló teljesítményt mutatott.","A távoli térségekben minden csomag késik."],0,"A közölt változás a válaszadókra vonatkozik; az eltérő mintából nem következik automatikusan országos vagy szolgáltatónkénti romlás."],
 ["Egy gyűjtemény kölcsönzési szabályai szerint az eredeti tárgyakat csak biztosítással rendelkező intézményeknek adják át. A digitális másolatok kölcsönzéséhez nincs biztosítási követelmény. A biztosítás megléte önmagában nem garantálja egy eredeti tárgy átadását: annak állapotát és a tervezett kiállítás feltételeit külön vizsgálják. Egy múzeumnak nincs megfelelő biztosítása, ezért digitális másolatot igényelt. A másolatra vonatkozó minden egyéb feltételt teljesíti. A gyűjtemény nem kínál átmeneti biztosítást, és a szabály alól kivételt nem engedélyez.","Hogyan érinti a biztosítás hiánya ezt az igényt?",["Mindenféle kölcsönzést kizár.","A digitális másolat igénylésének nem akadálya.","Automatikusan eredeti tárgyra jogosít.","Csak a kiállítás után kell biztosítást kötni."],1,"A biztosítási feltétel az eredeti tárgyakra vonatkozik, a digitális másolatra nem."],
 ["Egy vállalkozói tanácsadó program ügyfeleinek árbevétele a részvételt követő évben átlagosan nőtt. Az értékelésben csak a beszámolót beküldő vállalkozások szerepelnek, amelyek az eredeti résztvevők kétharmadát teszik ki. Nem ismert, hogy a hiányzó cégek hogyan teljesítettek, és a programon kívüli vállalkozásokat sem vizsgálták. A program több ágazatban működött, eltérő piaci feltételek mellett. A tanácsadók elégedettségi visszajelzést is gyűjtöttek, de ez nem minden résztvevőtől érkezett meg. Az árbevételi adatokat a cégek maguk szolgáltatták.","Melyik állítás megalapozott?",["Minden résztvevő vállalkozás növelte bevételét.","A program okozta az egész növekedést.","Az értékelt cégek átlagos árbevétele nőtt, de a teljes résztvevői kör eredménye nem ismert.","A hiányzó beszámolók mind sikertelen cégektől származnak."],2,"A megállapítás a beszámoló cégek átlagára vonatkozik; a hiányzó vállalkozások teljesítményéről nincs adat."],
 ["Egy vizsgaszabályzat két részpontszámot ír elő. Mindkét részből legalább negyven százalékot, a két azonos súlyú rész összesített eredményében legalább hatvan százalékot kell elérni. Egyik feltétel sem helyettesíti a másikat. Nóra az első részben nyolcvan, a másodikban negyvenöt százalékot teljesített. A pontszámokat már véglegesítették, nincs kerekítési vagy levonási szabály, amely módosítaná őket. A szabályzat a sikeres vizsga meghatározásán kívül nem tartalmaz rangsorolási előírást. A más vizsgázók által elért eredmények nem szerepelnek a közlésben.","Melyik állítás igaz Nórára?",["A második rész miatt sikertelen a vizsgája.","Csak akkor sikeres, ha mások rosszabbul teljesítettek.","Az összesített eredménye ötven százalék.","Mindkét részminimumot és az összesített minimumot is teljesítette."],3,"Mindkét rész legalább 40%; az átlag (80 + 45) / 2 = 62,5%, ami eléri a 60%-ot."],
 ["Egy körzetben a lakások átlagos bérleti díja emelkedett, miközben minden megfigyelt lakás egyedi díja változatlan maradt. A nyilvántartásból több olcsó lakás kikerült, és drágább új lakások kerültek bele. A kimutatás nem ugyanazt a rögzített lakásállományt követte, hanem mindkét időpontban az aktuálisan kínált lakásokat vizsgálta. A díjakat teljes lakásonként, nem négyzetméterenként átlagolták. A jelentés nem közöl adatot az üresen állás hosszáról, és nem méri, hogy a meghirdetett díjak mellett végül milyen szerződéseket kötöttek.","Mi magyarázza a közölt átlag emelkedését?",["A megfigyelt kínálat összetételének változása.","Minden lakás bérleti díjának emelése.","A négyzetméterenkénti díj biztos növekedése.","Az üresen állási idő csökkenése."],0,"Az átlag változhat a kínálat összetétele miatt akkor is, ha az egyes lakások saját díja változatlan."],
 ["Egy rendszerben a sürgős és a normál igényeket külön sorban kezelik. Sürgősnek csak azokat az igényeket minősítik, amelyeknél dokumentált szolgáltatáskiesés áll fenn. A sürgős minősítés elsőbbséget biztosít, de nem garantál meghatározott befejezési időt. Egy igényt normálként tartanak nyilván, mert a benyújtott dokumentumok nem igazolják a kiesést. A kérelmező később új bizonyítékot is benyújthat. Az ügy tartalmi vizsgálata még folyamatban van, és a rendszer a minősítést új információ alapján módosíthatja. Az ügy fontosságáról külön értékelést nem készítettek.","Melyik állítás helyes?",["Biztosan nem történt szolgáltatáskiesés.","A jelenlegi iratok alapján nincs igazolt jogosultság a sürgős sorra.","Az igényt már tartalmilag elutasították.","A sürgős minősítés minden ügyben garantált határidőt ad."],1,"A bizonyíték hiánya nem bizonyítja a kiesés hiányát; csak a jelenlegi minősítés alapját határozza meg."],
 ["Egy intézmény dolgozóinak egy része költségmentesen használhatja a szolgálati parkolót. Erre kizárólag az érvényes parkolási engedéllyel rendelkezők jogosultak. Az engedélyt meghatározott időre adják ki, és az épületbelépő önmagában nem helyettesíti. Egy munkatársnak érvényes épületbelépője van, a parkolási engedélyének érvényességéről azonban nincs adat. A munkatárs korábban rendszeresen használta a parkolót, de nem tudjuk, azóta megújította-e engedélyét. A parkolási szabályok a mostani időszakban nem változtak, a régi engedélyek automatikus meghosszabbítását nem írják elő.","Mit lehet biztosan megállapítani?",["A korábbi használat jelenleg is jogosultságot ad.","Az épületbelépő elegendő a költségmentes parkoláshoz.","A rendelkezésre álló adatokból nem dönthető el a jelenlegi parkolási jogosultság.","A munkatárs engedélye biztosan lejárt."],2,"Az aktuális jogosultság az érvényes parkolási engedélytől függ, amelyről nincs információ."],
 ["Egy régióban a megújuló forrásból termelt villamos energia mennyisége nőtt, de aránya a teljes termelésen belül csökkent. A két év adatai azonos földrajzi területre és azonos forrásbesorolásra vonatkoznak. A jelentés a helyben termelt energiát méri, az importot nem számítja bele. A lakossági és ipari felhasználásról nem ad bontást, és az energia árát sem vizsgálja. A termelési adatok pozitív értékek mindkét évben. Az új megújuló létesítmények mellett más típusú erőművek is működtek, azok egyedi teljesítményét nem közlik.","Melyik következtetés biztos?",["Az import mennyisége csökkent.","A megújuló termelés abszolút mennyisége csökkent.","Az energia ára emelkedett.","A teljes termelés nagyobb arányban nőtt, mint a megújuló termelés."],3,"Növekvő megújuló mennyiség és csökkenő részarány mellett a teljes termelésnek ennél nagyobb arányban kellett nőnie."]
];
const round3Verbal = round3VerbalSpecs.map(([passage,prompt,options,answer,explanation],i)=>({id:`v${41+i}`,category:"verbal",difficulty:i%3===0?"Nehéz":"Közepes",passage,prompt,options,answer,explanation,tip:"Ellenőrizd, hogy az állítás pontosan a vizsgált csoportra, időszakra és feltételekre vonatkozik-e."}));
const round3Tables=[
 {contextTitle:"Közigazgatási ügyfeldolgozó központok, 2025",table:[
 ["Ország","Beérkezett (ezer ügy)","Digitálisan beérkezett ügyek (%)","Lezárva a beérkezett ügyekből (%)","Létszám (FTE)","Éves költség (M EUR)"],
 ["Belgium","80","75%","90%","100","6"],["Dánia","60","80%","85%","80","4,8"],["Spanyolország","120","60%","80%","150","9"],["Észtország","40","90%","95%","50","3"],["Luxemburg","20","85%","90%","25","1,8"]]},
 {contextTitle:"Szélessávú hálózatfejlesztés, 2024–2025",table:[
 ["Ország","Háztartások mindkét évben (ezer)","Lefedett 2024 (%)","Lefedett 2025 (%)","Hálózatbővítés (M EUR)","EU-forrás a beruházásból (%)","Előfizetők a lefedett háztartásokból, 2025 (%)"],
 ["Hollandia","1000","80%","92%","60","40%","75%"],["Németország","2000","70%","85%","150","50%","80%"],["Románia","800","55%","75%","64","70%","60%"],["Portugália","500","60%","84%","48","60%","70%"],["Írország","400","75%","90%","36","45%","80%"]]},
 {contextTitle:"Anyagvisszanyerés hulladékkezelő programokban",table:[
 ["Ország","Beérkező (ezer t)","Papír a beérkező tömegből (%)","Visszanyert papír a beérkező papírból (%)","Fém a beérkező tömegből (%)","Visszanyert fém a beérkező fémből (%)","Költség (M EUR)"],
 ["Franciaország","500","30%","80%","10%","90%","25"],["Olaszország","400","25%","84%","12%","85%","24"],["Lengyelország","300","20%","75%","15%","80%","18"],["Svédország","200","35%","90%","8%","95%","14"],["Ausztria","250","28%","85%","10%","90%","15"]]},
 {contextTitle:"Múzeumi hálózatok látogatási és pénzügyi adatai",table:[
 ["Ország","Látogatás 2024 (ezer)","Látogatás 2025 (ezer)","Fizetős látogatások 2025 (%)","Jegybevétel fizetős látogatásonként (EUR)","Költség (M EUR)"],
 ["Finnország","400","450","60%","12","4"],["Csehország","600","660","75%","10","6"],["Görögország","800","920","80%","15","10"],["Horvátország","300","360","70%","8","3"],["Szlovénia","200","220","65%","9","2"]]}
];
const round3NumericSpecs=[
 [0,"Összesen hány digitális ügy érkezett Belgium és Észtország központjába?",["90 000","96 000","108 000","110 000","120 000"],1,"Belgium: 80 000 × 75% = 60 000. Észtország: 40 000 × 90% = 36 000. Együtt 96 000 ügy."],
 [0,"Dánia és Spanyolország központjának együttesen beérkezett ügyei közül hány százalékot zártak le?",["80,0%","82,5%","81,7%","85,0%","87,5%"],2,"Lezárt: 60 × 85% + 120 × 80% = 147 ezer. Beérkezett: 180 ezer. 147 / 180 × 100 ≈ 81,7%."],
 [0,"Észtország központjában hány lezárt ügy jutott egy teljes munkaidős egyenértékre?",["720","800","840","760","950"],3,"40 000 × 95% = 38 000 lezárt ügy. 38 000 / 50 FTE = 760 ügy/FTE."],
 [0,"Luxemburg központjában mennyi volt az éves összköltség egy lezárt ügyre vetítve?",["90 EUR","95 EUR","105 EUR","110 EUR","100 EUR"],4,"Lezárt: 20 000 × 90% = 18 000. 1 800 000 EUR / 18 000 = 100 EUR/ügy."],
 [1,"A lefedett háztartások számának nettó növekedésére vetítve mennyibe került a német hálózatbővítés (EUR/háztartás)?",["500 EUR","75 EUR","100 EUR","750 EUR","1000 EUR"],0,"Újonnan lefedett: 2 000 000 × (85% − 70%) = 300 000 háztartás. 150 000 000 / 300 000 = 500 EUR."],
 [1,"Romániában hány háztartás fizetett elő a lefedett hálózatra 2025-ben?",["320 000","360 000","480 000","600 000","640 000"],1,"Lefedett: 800 000 × 75% = 600 000. Előfizető: 600 000 × 60% = 360 000."],
 [1,"Hollandiában és Írországban együtt hány háztartás maradt lefedetlen 2025-ben?",["80 000","100 000","120 000","140 000","160 000"],2,"Hollandia: 1 000 000 × 8% = 80 000. Írország: 400 000 × 10% = 40 000. Együtt 120 000."],
 [1,"Portugália és Írország együttes beruházásának körülbelül hány százalékát fedezte az EU?",["45,0%","50,0%","52,5%","53,6%","60,0%"],3,"EU-forrás: 48 × 60% + 36 × 45% = 45 millió EUR. Teljes beruházás: 84 millió. 45 / 84 × 100 ≈ 53,6%."],
 [2,"Franciaországban mennyi papírt és fémet nyertek vissza összesen?",["135 ezer t","150 ezer t","155 ezer t","200 ezer t","165 ezer t"],4,"Papír: 500 × 30% × 80% = 120 ezer t. Fém: 500 × 10% × 90% = 45 ezer t. Összesen 165 ezer t."],
 [2,"Mennyi volt Olaszország és Lengyelország együttes, tömeggel súlyozott papír-visszanyerési aránya?",["80,6%","79,5%","82,0%","84,0%","75,0%"],0,"Beérkező papír: 400 × 25% + 300 × 20% = 160 ezer t. Visszanyert: 100 × 84% + 60 × 75% = 129 ezer t. 129 / 160 × 100 ≈ 80,6%."],
 [2,"Mennyivel több papírt nyernének vissza Ausztriában, ha azonos beérkező tömeg és összetétel mellett a papír-visszanyerési arány 85%-ról 92%-ra nőne?",["3,5 ezer t","4,9 ezer t","7,0 ezer t","17,5 ezer t","23,0 ezer t"],1,"Beérkező papír: 250 × 28% = 70 ezer t. Többlet: 70 × (92% − 85%) = 4,9 ezer t."],
 [2,"Svédországban az összköltséget a visszanyert papír és fém együttes tömegére vetítve körülbelül hány EUR jut egy tonnára?",["70 EUR/t","155 EUR/t","179 EUR/t","200 EUR/t","222 EUR/t"],2,"Papír: 200 × 35% × 90% = 63 ezer t. Fém: 200 × 8% × 95% = 15,2 ezer t. 14 000 000 / 78 200 ≈ 179 EUR/t."],
 [3,"Mekkora volt Finnország és Csehország hálózatainak együttes jegybevétele 2025-ben?",["7,80 M EUR","9,00 M EUR","10,00 M EUR","8,19 M EUR","12,00 M EUR"],3,"Finnország: 450 000 × 60% × 12 = 3,24 millió EUR. Csehország: 660 000 × 75% × 10 = 4,95 millió EUR. Együtt 8,19 millió EUR."],
 [3,"Hány százalékkal nőtt Görögország és Horvátország együttes látogatásszáma 2024-ről 2025-re?",["15,0%","17,5%","20,0%","18,0%","16,4%"],4,"2024: 800 + 300 = 1 100 ezer. 2025: 920 + 360 = 1 280 ezer. 180 / 1 100 × 100 ≈ 16,4%."],
 [3,"Ha Szlovénia hálózatában változatlan látogatásszám mellett a fizető arány 70%-ra, az egy fizetőre jutó jegybevétel 10 EUR-ra nő, mennyivel nő az éves jegybevétel?",["253 000 EUR","110 000 EUR","143 000 EUR","220 000 EUR","297 000 EUR"],0,"Jelenlegi: 220 000 × 65% × 9 = 1 287 000 EUR. Új: 220 000 × 70% × 10 = 1 540 000 EUR. Különbség: 253 000 EUR."],
 [3,"Görögország hálózatában a jegybevétel a működési költség hány százalékát fedezte 2025-ben?",["90,6%","110,4%","120,0%","138,0%","104,0%"],1,"Bevétel: 920 000 × 80% × 15 = 11,04 millió EUR. Költség: 10 millió EUR. 11,04 / 10 × 100 = 110,4%. A 100% feletti arány többletet jelent."]
];
const round3Numeric=round3NumericSpecs.map(([t,prompt,options,answer,explanation],i)=>({id:`n${33+i}`,category:"numeric",difficulty:i%4===0?"Közepes":"Nehéz",...round3Tables[t],prompt,options,answer,explanation,tip:"A százalék alapját és a mértékegységet minden lépésben ellenőrizd. Az együttes arányhoz előbb összegezz, csak utána ossz."}));

// New visual families: grid masks, polygon/count relations, bar permutations.
const r3mod=(n,m)=>(n%m+m)%m;
const round3Rules=[
 {kind:0,row:s=>s,col:s=>2*s,fill:s=>s%2,explanation:"A fekete cella soronként lefelé, az üres kör oszloponként két helyet jobbra lép, körbeérve. A jobb felső sarokjel felváltva üres és kitöltött."},
 {kind:0,row:s=>-s,col:s=>s,fill:s=>Math.floor(s/2)%2,explanation:"A fekete cella soronként felfelé, a kör oszloponként jobbra lép, körbeérve. A sarokjel kitöltése két-két képenként vált: üres, üres, fekete, fekete, üres, üres."},
 {kind:0,row:s=>Math.floor(s/2),col:s=>-s,fill:s=>s%2,explanation:"A fekete cella két képenként lép egy sort lefelé. A kör minden képen egy oszlopot balra halad, körbeérve. A sarokjel kitöltése képenként vált."},
 {kind:0,row:s=>s,col:s=>Math.floor(s/2),fill:s=>1-s%2,explanation:"A fekete cella képenként egy sorral lejjebb kerül, körbeérve. A kör két képenként lép egy oszlopot jobbra. A sarokjel fekete és üres állapota váltakozik."},
 {kind:1,row:s=>s,col:s=>s,fill:s=>s%2,explanation:"A középső sokszög oldalszáma 3–4–5 ciklusú. A külső nyíl sarkonként az óramutató járásával megegyezően halad. A sokszög kitöltése váltakozik, a belső fehér pontok száma mindig az oldalszámnál kettővel kevesebb."},
 {kind:1,row:s=>-s,col:s=>-s,fill:s=>Math.floor(s/2)%2,explanation:"A sokszög oldalszáma 3–5–4 ciklusú. A nyíl sarkonként visszafelé halad. A kitöltés két képenként vált; a belső fehér pontok száma mindig az oldalszám mínusz kettő."},
 {kind:1,row:s=>s+1,col:s=>Math.floor(s/2),fill:s=>s%2,explanation:"A sokszög oldalszáma 4–5–3 ciklusú. A nyíl két képenként vált sarkot előrefelé. A kitöltés képenként váltakozik; a belső fehér pontok száma az oldalszám mínusz kettő."},
 {kind:1,row:s=>Math.floor(s/2),col:s=>s,fill:s=>1-s%2,explanation:"Az oldalszám két-két képenként változik: 3, 3, 4, 4, 5, 5. A nyíl minden képen egy sarokkal előrelép. A kitöltés váltakozik; a belső fehér pontok száma az oldalszám mínusz kettő."},
 {kind:2,row:s=>s,col:s=>s,fill:s=>s%2,explanation:"A három vízszintes sáv hosszsorrendje egy sorral felfelé tolódik, körbeérve. A fekete sáv helye lefelé halad. Az alsó háromszög felváltva felfelé és lefelé mutat."},
 {kind:2,row:s=>-s,col:s=>s,fill:s=>Math.floor(s/2)%2,explanation:"A sávok hosszsorrendje egy sorral lefelé tolódik. A fekete sáv szintén egy sorral lefelé halad. Az alsó háromszög iránya két képenként vált."},
 {kind:2,row:s=>Math.floor(s/2),col:s=>-s,fill:s=>s%2,explanation:"A hosszsorrend két képenként egy sorral felfelé tolódik. A fekete sáv helye minden képen egy sorral felfelé halad, körbeérve. A háromszög képenként fel-le fordul."},
 {kind:2,row:s=>s,col:s=>Math.floor(s/2),fill:s=>1-s%2,explanation:"A hosszsorrend képenként egy sorral felfelé tolódik. A kitöltött sáv két képenként lép egy sorral lefelé. Az alsó háromszög lefelé és felfelé mutató állapota váltakozik."}
];
function round3Frame(rule,s,change={}){
 const row=rule.row(s)+(change.row||0),col=rule.col(s)+(change.col||0),filled=Boolean(rule.fill(s))!==Boolean(change.fill);
 if(rule.kind===0){
  const pieces=[];
  for(const x of [20,40,60,80])pieces.push(lineItem(x,20,x,80,{width:1}));
  for(const y of [20,40,60,80])pieces.push(lineItem(20,y,80,y,{width:1}));
  // Black marker stays in the first column, ring in the third row.
  // At an intersection the white ring is visibly drawn over the black square.
  pieces.push(item("square",30,30+20*r3mod(row,3),{size:8,filled:true,strokeWidth:1}));
  pieces.push({shape:"white-ring",x:30+20*r3mod(col,3),y:70,size:5});
  pieces.push(item("diamond",85,14,{size:3.5,filled,strokeWidth:1.3}));
  return frame(...pieces);
 }
 if(rule.kind===1){
  const sides=3+r3mod(row,3),corners=[[18,18],[82,18],[82,82],[18,82]],p=corners[r3mod(col,4)];
  return frame(item("polygon",50,50,{sides,size:26,filled,strokeWidth:1.5}),...Array.from({length:sides-2},(_,i)=>({shape:"white-ring",x:50+(i-(sides-3)/2)*9,y:50,size:2.4})),...thinArrowItems(p[0],p[1],r3mod(col,4)*90,12,1.5));
 }
 const lengths=[18,32,46];
 return frame(...[0,1,2].map(i=>({shape:"horizontal-bar",x:50,y:28+i*17,length:lengths[r3mod(i+row,3)],filled:i===r3mod(col,3)})),item("triangle",50,82,{size:4,rotation:filled?180:0,filled:true,strokeWidth:1}));
}
const round3Abstract=round3Rules.map((rule,i)=>officialAbstractQuestion({id:`ar${45+i}`,difficulty:i%4===0?"Közepes":"Nehéz",sequence:[0,1,2,3,4].map(s=>round3Frame(rule,s)),correct:round3Frame(rule,5),distractors:[round3Frame(rule,5,{row:1}),round3Frame(rule,5,{col:1}),round3Frame(rule,5,{fill:true}),round3Frame(rule,5,{row:1,col:1})],answer:(i+2)%5,explanation:rule.explanation,tip:"Válaszd külön a mozgást, az elemsorrendet és a kitöltést. Az egymást fedő jelölőket is kövesd külön."}));

const questionBanks = { verbal: [...verbalQuestions, ...additionalVerbalQuestions, ...round3Verbal], numeric: [...advancedNumericQuestions, ...additionalNumericQuestions, ...round3Numeric], abstract: [...epsoAdvancedAbstractQuestions, ...additionalAbstractQuestions, ...round3Abstract] };

const state = {
  screen: "home",
  setup: { category: "mix", count: 10, difficulty: "Vegyes", timer: true, feedback: true },
  session: null,
  timerId: null,
  toastId: null
};

function loadProfile() {
  const fallback = {
    totals: {
      verbal: { answered: 0, correct: 0 },
      numeric: { answered: 0, correct: 0 },
      abstract: { answered: 0, correct: 0 }
    },
    streak: { lastDate: null, count: 0 },
    attempts: []
  };
  try {
    const saved = JSON.parse(localStorage.getItem(APP_KEY));
    return saved ? { ...fallback, ...saved, totals: { ...fallback.totals, ...saved.totals } } : fallback;
  } catch (_) {
    return fallback;
  }
}

let profile = loadProfile();

function saveProfile() {
  // Preserve the latest exam rotation when a different tab saves a result.
  profile.examQuestionOrder = loadProfile().examQuestionOrder || {};
  localStorage.setItem(APP_KEY, JSON.stringify(profile));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function todayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function yesterdayKey() {
  const value = new Date();
  value.setDate(value.getDate() - 1);
  return todayKey(value);
}

function percent(correct, answered) {
  return answered ? Math.round((correct / answered) * 100) : 0;
}

function formatSeconds(totalSeconds) {
  const safe = Math.max(0, Math.ceil(totalSeconds));
  const minutes = Math.floor(safe / 60);
  const seconds = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function difficultyFilter(bank, difficulty) {
  if (difficulty === "Vegyes") return bank;
  return bank.filter(question => difficulty === "Könnyebb"
    ? question.difficulty !== "Nehéz"
    : question.difficulty === "Nehéz");
}

function prepareQuestion(question, indexInSection) {
  const order = shuffle(question.options.map((_, index) => index));
  return {
    ...question,
    options: order.map(index => question.options[index]),
    answer: order.indexOf(question.answer),
    runId: `${question.id}-${indexInSection}`
  };
}

function pickFromBank(category, count, difficulty = "Vegyes") {
  let source = difficultyFilter(questionBanks[category], difficulty);
  if (!source.length) source = questionBanks[category];
  const result = [];
  while (result.length < count) {
    const round = shuffle(source);
    for (const question of round) {
      if (result.length >= count) break;
      result.push(prepareQuestion(question, result.length));
    }
  }
  return result;
}

function polygonPoints(cx, cy, radius, sides, rotation = -90) {
  return Array.from({ length: sides }, (_, index) => {
    const angle = (rotation + (360 / sides) * index) * Math.PI / 180;
    return `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`;
  }).join(" ");
}

function drawPatternItem(data) {
  if (data.shape === "white-ring") return `<circle cx="${data.x}" cy="${data.y}" r="${data.size}" fill="#fff" stroke="#181818" stroke-width="1.4"/>`;
  if (data.shape === "horizontal-bar") return `<rect x="${data.x-data.length/2}" y="${data.y-4}" width="${data.length}" height="8" fill="${data.filled ? '#181818' : '#fff'}" stroke="#181818" stroke-width="1.4"/>`;

  const stroke = "#181818";
  const fillColor = "#181818";
  const fill = data.filled ? fillColor : "none";
  const common = `fill="${fill}" stroke="${stroke}" stroke-width="${data.strokeWidth || 2.2}" stroke-linejoin="round"`;
  const transform = `transform="rotate(${data.rotation || 0} ${data.x} ${data.y})"`;
  const size = data.size || 22;
  if (data.shape === "line") {
    const dash = data.dashed ? ` stroke-dasharray="5 4"` : "";
    return `<line x1="${data.x}" y1="${data.y}" x2="${data.x2}" y2="${data.y2}" stroke="${stroke}" stroke-width="${data.width || 2.2}" stroke-linecap="round"${dash}/>`;
  }
  if (data.shape === "circle") return `<circle cx="${data.x}" cy="${data.y}" r="${size}" ${common}/>`;
  if (data.shape === "square") return `<rect x="${data.x-size}" y="${data.y-size}" width="${size*2}" height="${size*2}" rx="2" ${common} ${transform}/>`;
  if (data.shape === "diamond") return `<polygon points="${data.x},${data.y-size} ${data.x+size},${data.y} ${data.x},${data.y+size} ${data.x-size},${data.y}" ${common} ${transform}/>`;
  if (data.shape === "triangle") return `<polygon points="${data.x},${data.y-size} ${data.x+size*.9},${data.y+size*.75} ${data.x-size*.9},${data.y+size*.75}" ${common} ${transform}/>`;
  if (data.shape === "polygon") return `<polygon points="${polygonPoints(data.x,data.y,size,data.sides || 6)}" ${common} ${transform}/>`;
  if (data.shape === "bar") return `<rect x="${data.x-5}" y="${data.y-size}" width="10" height="${size*2}" rx="5" ${common}/>`;
  if (data.shape === "arrow") {
    const points = `${data.x},${data.y-size} ${data.x+size*.72},${data.y-size*.18} ${data.x+size*.28},${data.y-size*.18} ${data.x+size*.28},${data.y+size} ${data.x-size*.28},${data.y+size} ${data.x-size*.28},${data.y-size*.18} ${data.x-size*.72},${data.y-size*.18}`;
    return `<polygon points="${points}" ${common} ${transform}/>`;
  }
  return "";
}

function patternSvg(pattern, label = "Absztrakt ábra") {
  return `<svg class="pattern-svg" viewBox="0 0 100 100" role="img" aria-label="${escapeHtml(label)}"><rect x="7" y="7" width="86" height="86" fill="#fff" stroke="#181818" stroke-width="1.5"/>${pattern.items.map(drawPatternItem).join("")}</svg>`;
}

function fullscreenButtonHtml(compact = false) {
  const active = Boolean(document.fullscreenElement);
  const label = active ? "Normál nézet" : "Teljes képernyő";
  return `<button class="ghost-button fullscreen-button ${compact ? "quiz-fullscreen" : ""}" data-action="toggle-fullscreen" aria-label="${label}" aria-pressed="${active}"><span class="fullscreen-icon" aria-hidden="true">${active ? "⤢" : "⛶"}</span><span class="fullscreen-label">${label}</span></button>`;
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen();
    else showToast("Ebben a böngészőben a teljes képernyős mód nem érhető el.");
  } catch {
    showToast("A böngésző nem engedélyezte a teljes képernyős módot.");
  }
}

function keepToolVisible() {
  const panel = document.querySelector("[data-tool-window]");
  if (!panel) return;
  const rect = panel.getBoundingClientRect();
  const x = Math.max(8, Math.min(rect.left, window.innerWidth - rect.width - 8));
  const y = Math.max(8, Math.min(rect.top, window.innerHeight - rect.height - 8));
  panel.style.left = x + "px";
  panel.style.top = y + "px";
  panel.style.right = "auto";
  if (state.session) state.session.toolPositions[panel.dataset.toolWindow] = {x,y};
}

function updateFullscreenButtons() {
  requestAnimationFrame(keepToolVisible);
  const active = Boolean(document.fullscreenElement);
  const label = active ? "Normál nézet" : "Teljes képernyő";
  document.querySelectorAll('[data-action="toggle-fullscreen"]').forEach(button => {
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-pressed", String(active));
    button.innerHTML = `<span class="fullscreen-icon" aria-hidden="true">${active ? "⤢" : "⛶"}</span><span class="fullscreen-label">${label}</span>`;
  });
}

function topbarHtml(options = {}) {
  const { quiz = false } = options;
  if (quiz) return "";
  return `
    <header class="topbar">
      <button class="brand" data-action="home" aria-label="Kezdőlap">
        <span class="brand-mark">E</span>
        <span class="brand-copy"><strong>EPSO Sprint</strong><span>AD5 logikatréner</span></span>
      </button>
      <div class="top-actions">
        <button class="ghost-button text-action" data-action="history">Előzmények</button>
        ${fullscreenButtonHtml()}
        <button class="icon-button" data-action="setup" aria-label="Edzés beállítása">Beállítás</button>
      </div>
    </header>`;
}

function footerHtml() {
  return `<p class="footer-note">Önálló gyakorlóeszköz, nem az EPSO hivatalos terméke. A vizsgamód a 2026. július 1-jei összevont <a href="https://selection.eu-careers.europa.eu/system/files/2026-07/Notice-of-open-competition-EPSO-AD-427-26_consolidated-version.pdf" target="_blank" rel="noreferrer">EPSO/AD/427/26 kiírás</a> idő- és kérdésszámait követi. A feladatok minőségi mércéje az <a href="https://selection.eu-careers.europa.eu/en/graduates-administrators-ad5" target="_blank" rel="noreferrer">EPSO hivatalos mintasora</a> és az <a href="https://www.euphorum.org/demo/testtraining" target="_blank" rel="noreferrer">Euphorum nyilvános demója</a>; minden kérdés saját, eredeti gyakorlófeladat.<br><span class="app-version">Verzió: ${APP_VERSION}</span></p>`;
}

function renderHome() {
  stopTimer();
  state.screen = "home";
  const allAnswered = Object.values(profile.totals).reduce((sum, value) => sum + value.answered, 0);
  const allCorrect = Object.values(profile.totals).reduce((sum, value) => sum + value.correct, 0);
  const overall = percent(allCorrect, allAnswered);
  const attempts = profile.attempts.length;
  const modules = [
    { key: "verbal", number: "01", description: "Információsűrű szövegek, biztos következtetések, szükséges feltételek és csapdás általánosítások.", meta: ["20 kérdés", "35 perc"] },
    { key: "numeric", number: "02", description: "Sűrű adattáblák és többlépéses számítások — beépített jegyzettömbbel és számológéppel.", meta: ["10 kérdés", "20 perc"] },
    { key: "abstract", number: "03", description: "Öt ábrából álló sorozatok, amelyekben egyszerre több forgási, helyzeti és elemszám-szabály működik.", meta: ["10 kérdés", "10 perc"] }
  ];
  const moduleCards = modules.map(module => {
    const total = profile.totals[module.key];
    const accuracy = total.answered ? `${percent(total.correct, total.answered)}% pontosság` : "Még nincs eredmény";
    return `
      <article class="module-card" data-number="${module.number}">
        <div class="module-kicker">
          <span class="module-icon ${module.key}">${CATEGORY[module.key].icon}</span>
          <span class="module-time">hivatalos részteszt</span>
        </div>
        <h3>${CATEGORY[module.key].name}</h3>
        <p>${module.description}</p>
        <div class="module-meta">${module.meta.map(value => `<span class="tag">${value}</span>`).join("")}</div>
        <div class="module-footer">
          <span class="accuracy">${accuracy}</span>
          <button class="module-link" data-action="start-category" data-category="${module.key}">5 kérdés →</button>
        </div>
      </article>`;
  }).join("");

  document.getElementById("app").innerHTML = `
    ${topbarHtml()}
    <main>
      <section class="hero">
        <div class="hero-main">
          <div class="eyebrow">EPSO AD5 · Logikai felkészülés</div>
          <h1>Gyorsabban látni a mintát.</h1>
          <p>Három logikai készség, egy fókuszált edzés. Gyakorolj rövid blokkokban, vagy próbáld ki a teljes, szakaszos AD5-szimulációt.</p>
          <div class="hero-actions">
            <button class="primary-button yellow" data-action="start-daily">Napi mix · 12 kérdés</button>
            <button class="soft-button" data-action="start-exam">Teljes vizsgaszimuláció</button>
          </div>
        </div>
        <aside class="snapshot" aria-label="Saját haladás">
          <div>
            <span class="snapshot-label">Összesített pontosság</span>
            <div class="snapshot-number">${overall}<span>%</span></div>
            <div class="snapshot-rail" aria-label="${overall}%"><div class="snapshot-fill" style="width:${overall}%"></div></div>
            <p class="snapshot-note">${allAnswered ? `${allCorrect} helyes válasz ${allAnswered} feladatból.` : "Az első edzés után itt jelenik meg a teljesítményed."}</p>
          </div>
          <div class="mini-stats">
            <div class="mini-stat"><strong>${profile.streak.count}</strong><span>napos sorozat</span></div>
            <div class="mini-stat"><strong>${attempts}</strong><span>befejezett edzés</span></div>
          </div>
        </aside>
      </section>

      <div class="status-note">
        <span class="status-symbol">i</span>
        <div><strong>A vizsgád időpontja</strong><time datetime="2026-11-13T09:00:00+01:00">2026. november 13., péntek, 09:00</time> (berlini idő szerint). <a href="https://selection.eu-careers.europa.eu/en/news/ad5-graduates-competition-testing-second-week-november-2026/20908" target="_blank" rel="noreferrer">Hivatalos tájékoztató ↗</a></div>
      </div>

      <div class="section-heading"><div><h2>A három részteszt</h2><p>144 különböző feladat: 60 szövegértési, 48 numerikus, 36 absztrakt. Vizsgamódban résztesztenként először a még nem használt kérdések következnek.</p></div><button class="soft-button" data-action="setup">Saját edzés összeállítása</button></div>
      <section class="module-grid">${moduleCards}</section>

      <section class="format-strip" aria-label="Hivatalos vizsgaformátum">
        <div class="format-item"><strong>Verbális</strong><span>20 kérdés · 35 perc</span></div><div class="format-line"></div>
        <div class="format-item"><strong>Numerikus</strong><span>10 kérdés · 20 perc</span></div><div class="format-line"></div>
        <div class="format-item"><strong>Absztrakt</strong><span>10 kérdés · 10 perc</span></div>
        <div class="format-pass">Küszöb: 10/20 verbális + 10/20 numerikus és absztrakt együtt</div>
      </section>
    </main>
    ${footerHtml()}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupCategoryName(key) {
  return key === "mix" ? "Mindhárom, vegyesen" : CATEGORY[key].name;
}

function setupTimeEstimate() {
  if (!state.setup.timer) return "Nincs időkorlát";
  const count = state.setup.count;
  const seconds = state.setup.category === "mix"
    ? count * 95
    : count * CATEGORY[state.setup.category].seconds;
  return `${Math.ceil(seconds / 60)} perc`;
}

function renderSetup() {
  stopTimer();
  state.screen = "setup";
  const categoryChoices = [
    ["mix", "Vegyes", "mindhárom"], ["verbal", "Verbális", "szöveg"],
    ["numeric", "Numerikus", "számok"], ["abstract", "Absztrakt", "minták"]
  ];
  document.getElementById("app").innerHTML = `
    ${topbarHtml()}
    <main class="setup-layout">
      <section class="panel">
        <div class="eyebrow" style="color:var(--blue)">Saját edzés</div>
        <h1 style="font-size:clamp(2rem,5vw,3.6rem);color:var(--ink)">Állítsd be a mai blokkot.</h1>
        <p>Rövid, rendszeres gyakorlásnál a pontosság után érdemes fokozatosan emelni a tempót.</p>

        <div class="field">
          <span class="field-label">Feladattípus</span>
          <div class="choice-grid" style="grid-template-columns:repeat(2,1fr)">
            ${categoryChoices.map(([key, name, sub]) => `<button class="choice-button ${state.setup.category === key ? "active" : ""}" data-action="set-setup" data-field="category" data-value="${key}">${name}<small>${sub}</small></button>`).join("")}
          </div>
        </div>

        <div class="field">
          <span class="field-label">Kérdésszám</span>
          <div class="choice-grid">
            ${[5,10,20].map(value => `<button class="choice-button ${state.setup.count === value ? "active" : ""}" data-action="set-setup" data-field="count" data-value="${value}">${value}<small>kérdés</small></button>`).join("")}
          </div>
        </div>

        <div class="field">
          <span class="field-label">Nehézség</span>
          <div class="choice-grid">
            ${["Könnyebb","Vegyes","Nehezebb"].map(value => `<button class="choice-button ${state.setup.difficulty === value ? "active" : ""}" data-action="set-setup" data-field="difficulty" data-value="${value}">${value}</button>`).join("")}
          </div>
        </div>

        <div class="field">
          <span class="field-label">Működés</span>
          <div class="toggle-row">
            <div class="toggle-copy"><strong>Időmérő</strong><span>A hivatalos átlagos tempóhoz igazítva</span></div>
            <label class="switch"><input type="checkbox" data-setting="timer" ${state.setup.timer ? "checked" : ""}><span class="switch-track"></span></label>
          </div>
          <div class="toggle-row">
            <div class="toggle-copy"><strong>Azonnali magyarázat</strong><span>Minden válasz után megmutatja a logikát</span></div>
            <label class="switch"><input type="checkbox" data-setting="feedback" ${state.setup.feedback ? "checked" : ""}><span class="switch-track"></span></label>
          </div>
        </div>
      </section>
      <aside class="panel setup-summary">
        <span class="snapshot-label">Összefoglaló</span>
        <ul class="summary-list">
          <li><span>Típus</span><strong>${setupCategoryName(state.setup.category)}</strong></li>
          <li><span>Kérdések</span><strong>${state.setup.count}</strong></li>
          <li><span>Nehézség</span><strong>${state.setup.difficulty}</strong></li>
          <li><span>Idő</span><strong>${setupTimeEstimate()}</strong></li>
          <li><span>Visszajelzés</span><strong>${state.setup.feedback ? "Azonnal" : "A végén"}</strong></li>
        </ul>
        <div class="button-stack">
          <button class="primary-button" data-action="start-custom">Edzés indítása</button>
          <button class="ghost-button" data-action="home">Mégsem</button>
        </div>
      </aside>
    </main>`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function questionsForMix(count, difficulty = "Vegyes") {
  const keys = ["verbal", "numeric", "abstract"];
  const counts = { verbal: 0, numeric: 0, abstract: 0 };
  for (let index = 0; index < count; index += 1) counts[keys[index % 3]] += 1;
  return shuffle(keys.flatMap(key => pickFromBank(key, counts[key], difficulty)));
}

function nextExamQuestions() {
  const saved = loadProfile();
  const previousOrder = saved.examQuestionOrder || {};
  const nextOrder = {};
  const questions = [];
  for (const [category, count] of Object.entries({ verbal: 20, numeric: 10, abstract: 10 })) {
    const bank = questionBanks[category];
    const byId = new Map(bank.map(question => [question.id, question]));
    const prior = Array.isArray(previousOrder[category]) ? previousOrder[category] : [];
    const used = new Set(prior.filter(id => byId.has(id)));
    const unused = bank.filter(question => !used.has(question.id)).map(question => question.id);
    // Unseen questions first, then those used longest ago.
    const selected = unused.concat([...used]).slice(0, count);
    questions.push(...selected.map((id, index) => prepareQuestion(byId.get(id), index)));
    nextOrder[category] = [...used].filter(id => !selected.includes(id)).concat(selected);
  }
  saved.examQuestionOrder = nextOrder;
  localStorage.setItem(APP_KEY, JSON.stringify(saved));
  profile = saved;
  return questions;
}

function startSession(config) {
  stopTimer();
  let questions;
  if (config.mode === "exam") {
    try {
      questions = nextExamQuestions();
    } catch (error) {
      if (error.name !== "SecurityError" && error.name !== "QuotaExceededError") throw error;
      showToast("A böngésző nem tudta menteni a feladatsort. Engedélyezd a helyi tárolást, majd indítsd újra a vizsgát.");
      return;
    }
  } else if (config.categories.length === 3) {
    questions = questionsForMix(config.count, config.difficulty || "Vegyes");
  } else {
    questions = pickFromBank(config.categories[0], config.count, config.difficulty || "Vegyes");
  }
  state.session = {
    config,
    questions,
    answers: questions.map(() => ({ selected: null, flagged: false, locked: false, eliminated: [], highlights: [] })),
    current: 0,
    startedAt: Date.now(),
    finishedAt: null,
    deadline: null,
    sectionCategory: null,
    sectionReview: false,
    saved: false,
    timedOutSections: [],
    scratchpad: "",
    openTool: null,
    toolPositions: {},
    calculator: { display: "0", expression: "", tokens: [], finished: false, history: [], historyIndex: null, draft: null }
  };
  if (config.timer) {
    if (config.mode === "exam") {
      startSectionTimer("verbal");
    } else {
      const seconds = questions.reduce((sum, question) => sum + CATEGORY[question.category].seconds, 0);
      state.session.deadline = Date.now() + seconds * 1000;
    }
  }
  state.screen = "quiz";
  renderQuiz();
  if (config.timer) beginTimer();
}

function startSectionTimer(category) {
  const seconds = { verbal: 35 * 60, numeric: 20 * 60, abstract: 10 * 60 }[category];
  state.session.sectionReview = false;
  state.session.sectionCategory = category;
  state.session.deadline = Date.now() + seconds * 1000;
}

function beginTimer() {
  stopTimer();
  updateTimerDisplay();
  state.timerId = window.setInterval(updateTimerDisplay, 250);
}

function stopTimer() {
  if (state.timerId) window.clearInterval(state.timerId);
  state.timerId = null;
}

function updateTimerDisplay() {
  if (!state.session || state.screen !== "quiz" || !state.session.config.timer) return;
  const remaining = (state.session.deadline - Date.now()) / 1000;
  const display = document.querySelector("[data-timer]");
  if (display) {
    display.textContent = formatSeconds(remaining);
    display.closest(".timer")?.classList.toggle("urgent", remaining <= 60);
  }
  if (remaining <= 0) handleTimeout();
}

function handleTimeout() {
  const session = state.session;
  if (!session || state.screen !== "quiz") return;
  if (session.config.mode !== "exam") {
    showToast("Lejárt az idő — mutatom az eredményt.");
    finishSession();
    return;
  }
  const expiredCategory = session.questions[session.current].category;
  session.timedOutSections.push(expiredCategory);
  let index = session.current;
  while (index < session.questions.length && session.questions[index].category === expiredCategory) index += 1;
  if (index >= session.questions.length) {
    finishSession();
    return;
  }
  session.current = index;
  const nextCategory = session.questions[index].category;
  startSectionTimer(nextCategory);
  showToast(`${CATEGORY[expiredCategory].short} rész: lejárt az idő. Következik a ${CATEGORY[nextCategory].short.toLowerCase()} rész.`);
  renderQuiz();
}

const HIGHLIGHT_COLORS = { yellow: "Sárga", green: "Zöld", blue: "Kék", pink: "Rózsaszín" };
let pendingHighlight = null;

function highlightRanges(ranges, start, end, color) {
  const result = [];
  for (const range of ranges) {
    if (range.end <= start || range.start >= end) result.push({...range});
    else {
      if (range.start < start) result.push({...range, end:start});
      if (range.end > end) result.push({...range, start:end});
    }
  }
  if (color) result.push({start,end,color});
  result.sort((a,b) => a.start-b.start);
  return result.reduce((merged,range) => {
    const last = merged[merged.length-1];
    if (last && last.end === range.start && last.color === range.color) last.end=range.end;
    else merged.push(range);
    return merged;
  }, []);
}

function highlightedPassage(text, ranges = []) {
  let html = "", cursor = 0;
  for (const range of ranges) {
    if (!Object.hasOwn(HIGHLIGHT_COLORS,range.color) || range.start < cursor || range.end > text.length) continue;
    html += escapeHtml(text.slice(cursor,range.start));
    html += `<mark class="text-highlight highlight-${range.color}">${escapeHtml(text.slice(range.start,range.end))}</mark>`;
    cursor=range.end;
  }
  return html+escapeHtml(text.slice(cursor));
}

function verbalContext(question, interactive) {
  const session=state.session;
  const index=session?.questions.findIndex(q=>q.id===question.id) ?? -1;
  const ranges=index>=0 ? session.answers[index].highlights || [] : [];
  const toolbar=interactive ? `<div class="highlight-toolbar" role="group" aria-label="Szövegkiemelők">
    <span class="highlight-help">Jelöld ki a szöveget, majd válassz színt:</span>
    <div class="highlight-buttons">${Object.entries(HIGHLIGHT_COLORS).map(([color,name])=>`<button type="button" class="highlight-color highlight-${color}" data-action="highlight-text" data-color="${color}" aria-label="${name} kiemelő"><span aria-hidden="true">▰</span> ${name}</button>`).join("")}
    <button type="button" class="soft-button" data-action="highlight-text" data-color="erase">Kijelölés kiemelésének törlése</button>
    <button type="button" class="ghost-button" data-action="clear-highlights">Összes kiemelés törlése</button></div>
    <span class="highlight-status" data-highlight-status role="status" aria-live="polite"></span>
  </div>` : "";
  return `${toolbar}<div class="passage" ${interactive ? 'data-highlight-passage' : ''}>${highlightedPassage(question.passage,ranges)}</div>`;
}

function captureHighlightSelection() {
  const session=state.session;
  if (state.screen!=="quiz" || !session || session.sectionReview || session.questions[session.current].category!=="verbal") {
    pendingHighlight=null;
    return;
  }
  const host=document.querySelector('[data-highlight-passage]');
  const selection=window.getSelection();
  if (!host || !selection || selection.rangeCount===0 || selection.isCollapsed) {
    pendingHighlight=null;
    return;
  }
  const range=selection.getRangeAt(0);
  if (!host.contains(range.startContainer) || !host.contains(range.endContainer)) {
    pendingHighlight=null;
    return;
  }
  const prefix=document.createRange();
  prefix.selectNodeContents(host);
  prefix.setEnd(range.startContainer,range.startOffset);
  const start=prefix.toString().length;
  pendingHighlight={index:session.current,start,end:start+range.toString().length};
}

function applyTextHighlight(color) {
  const session=state.session;
  if (!session || state.screen!=="quiz" || session.sectionReview || session.questions[session.current].category!=="verbal" || examTimeExpired()) return;
  if (color!=="erase" && !Object.hasOwn(HIGHLIGHT_COLORS,color)) return;
  const host=document.querySelector('[data-highlight-passage]');
  const status=document.querySelector('[data-highlight-status]');
  const selected=pendingHighlight;
  if (!host || !selected || selected.index!==session.current || selected.start===selected.end) {
    if(status) status.textContent="Előbb jelölj ki egy szövegrészletet a feladat szövegében.";
    return;
  }
  const answer=session.answers[session.current];
  answer.highlights=highlightRanges(answer.highlights || [],selected.start,selected.end,color==="erase" ? null : color);
  host.innerHTML=highlightedPassage(session.questions[session.current].passage,answer.highlights);
  pendingHighlight=null;
  window.getSelection()?.removeAllRanges();
  if(status) status.textContent=color==="erase" ? "A kijelölt rész kiemelése törölve." : `${HIGHLIGHT_COLORS[color]} kiemelés hozzáadva.`;
}

function clearTextHighlights() {
  const session=state.session;
  if (!session || state.screen!=="quiz" || session.sectionReview || session.questions[session.current].category!=="verbal" || examTimeExpired()) return;
  session.answers[session.current].highlights=[];
  pendingHighlight=null;
  const host=document.querySelector('[data-highlight-passage]');
  if(host) host.innerHTML=escapeHtml(session.questions[session.current].passage);
  const status=document.querySelector('[data-highlight-status]');
  if(status) status.textContent="A feladat összes kiemelése törölve.";
}

document.addEventListener('selectionchange', captureHighlightSelection);
document.getElementById('app').addEventListener('pointerdown',event=>{
  if(event.target.closest('[data-action="highlight-text"]')) event.preventDefault();
});

function renderQuestionContext(question, interactive = false) {
  if (question.category === "verbal") return verbalContext(question, interactive);
  if (question.category === "numeric") {
    const [head, ...rows] = question.table;
    return `
      ${interactive ? `<h2>${escapeHtml(question.prompt)}</h2>` : ""}
      <div class="context-title">${escapeHtml(question.contextTitle)}</div>
      <div class="data-table-wrap"><table class="data-table" aria-label="${escapeHtml(question.contextTitle)}">
        <thead><tr>${head.map(value => `<th scope="col">${escapeHtml(value)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map((value, index) => `<td data-label="${escapeHtml(head[index])}">${escapeHtml(value)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
  }
  return `<div class="sequence" role="group" aria-label="Öt ábrából álló sorozat">${question.sequence.map((pattern, index) => `<div class="sequence-cell">${patternSvg(pattern, `${index + 1}. ábra`)}</div>`).join("")}</div>`;
}

function renderOptions(question, answerState, reveal) {
  return question.options.map((option, index) => {
    const isSelected = answerState.selected === index;
    const isEliminated = (answerState.eliminated || []).includes(index);
    let className = "option";
    if (question.category === "abstract") className += " pattern-answer";
    if (isSelected) className += " selected";
    if (reveal && index === question.answer) className += " correct";
    if (reveal && isSelected && index !== question.answer) className += " incorrect";
    const content = question.category === "abstract"
      ? `<div class="pattern-option">${patternSvg(option, `${String.fromCharCode(65 + index)} válasz`)}</div>`
      : `<span class="option-content">${escapeHtml(option)}</span>`;
    return `<div class="option-row ${isEliminated ? "eliminated" : ""}">
      <button class="${className}" data-action="answer" data-index="${index}" ${(answerState.locked || isEliminated) ? "disabled" : ""}><span class="option-key">${String.fromCharCode(65 + index)}</span>${content}</button>
      <button class="eliminate-button ${isEliminated ? "active" : ""}" data-action="toggle-eliminate" data-index="${index}" ${answerState.locked ? "disabled" : ""} aria-label="${String.fromCharCode(65 + index)} válasz ${isEliminated ? "visszaállítása" : "kizárása"}">
        <span aria-hidden="true">${isEliminated ? "↶" : "×"}</span><small>${isEliminated ? "Vissza" : "Kizárás"}</small>
      </button>
    </div>`;
  }).join("");
}

function calculatorSymbol(operator) {
  return ({ "+":"+", "-":"−", "*":"×", "/":"÷" })[operator] || operator;
}

function calculatorNumber(value) {
  if (!Number.isFinite(value)) return "Hiba";
  const rounded = Number.parseFloat(value.toPrecision(12));
  const text = String(rounded);
  return text.length > 22 ? value.toExponential(10) : text;
}

function evaluateCalculator(tokens) {
  let cursor = 0;
  function operand() {
    const token = tokens[cursor++];
    if (token === "-") return -operand();
    if (token === "+") return operand();
    let value;
    if (token === "(") {
      value = sum();
      if (tokens[cursor++] !== ")") throw Error("Hiányzó zárójel");
    } else {
      if (!token || !/^-?\d+(?:\.\d*)?(?:e[+-]?\d+)?$/i.test(token)) throw Error("Hiányzó szám");
      value = Number(token);
    }
    while (tokens[cursor] === "%") { cursor++; value /= 100; }
    return value;
  }
  function product() {
    let value = operand();
    while (tokens[cursor] === "*" || tokens[cursor] === "/") {
      const operation = tokens[cursor++];
      const right = operand();
      if (operation === "/" && right === 0) throw Error("Nullával osztás");
      value = operation === "*" ? value * right : value / right;
    }
    return value;
  }
  function sum() {
    let value = product();
    while (tokens[cursor] === "+" || tokens[cursor] === "-") {
      const operation = tokens[cursor++];
      const right = product();
      value = operation === "+" ? value + right : value - right;
    }
    return value;
  }
  const value = sum();
  if (cursor !== tokens.length || !Number.isFinite(value)) throw Error("Hibás kifejezés");
  return value;
}

function calculatorScreen(calc) {
  return { tokens: calc.tokens.slice(), display: calc.display, expression: calc.expression, finished: calc.finished };
}

function recallCalculation(calc, direction) {
  const count = calc.history.length;
  if (!count) return;
  let index = calc.historyIndex;
  if (index === null) {
    if (direction > 0) return;
    calc.draft = calculatorScreen(calc);
    index = count;
    if (calc.finished && calc.history[count-1].expression === calc.expression && count > 1) index--;
  }
  index = Math.min(count, Math.max(0, index + direction));
  const screen = index === count ? calc.draft : calc.history[index];
  Object.assign(calc, screen, {tokens:screen.tokens.slice(), historyIndex:index === count ? null : index});
}

function toggleCalculatorSign(tokens) {
  let start = tokens.length - 1;
  while (tokens[start] === "%") start--;
  if (tokens[start] === ")") {
    let depth = 1;
    while (start > 0 && depth) {
      start--;
      if (tokens[start] === "(") depth--;
      if (tokens[start] === ")") depth++;
    }
  } else if (start < 0 || !/^-?\d/.test(tokens[start])) {
    if (tokens.at(-1) === "-" && (tokens.length === 1 || ["(","+","-","*","/"].includes(tokens.at(-2)))) tokens.pop();
    else tokens.push("-");
    return;
  }
  if (tokens[start-1] === "-" && (start === 1 || ["(","+","-","*","/"].includes(tokens[start-2]))) tokens.splice(start-1,1);
  else tokens.splice(start,0,"-");
}

function calculatorInput(key) {
  const calc = state.session?.calculator;
  if (!calc) return;
  if (key === "up" || key === "down") {
    recallCalculation(calc, key === "up" ? -1 : 1);
    updateCalculatorDisplay();
    return;
  }
  const binary = ["+", "-", "*", "/"];
  if (key === "=") {
    if (!calc.finished && calc.tokens.length) {
      try {
        calc.display = calculatorNumber(evaluateCalculator(calc.tokens));
        calc.expression = calc.tokens.map(calculatorSymbol).join(" ") + " =";
        calc.finished = true;
        calc.history.push(calculatorScreen(calc));
        calc.historyIndex = null;
        calc.draft = null;
      } catch {
        calc.display = "Hiba";
      }
    }
    updateCalculatorDisplay();
    return;
  }

  if (calc.finished) {
    if (binary.includes(key) || key === "%" || key === "sign") calc.tokens = [calc.display];
    else if (key !== "backspace") calc.tokens = [];
    calc.finished = false;
  }
  calc.historyIndex = null;
  calc.draft = null;
  const tokens = calc.tokens;
  const last = tokens.at(-1) || "";
  const number = /^-?\d/.test(last);
  const valueEnd = number || last === ")" || last === "%";
  if (/^\d$/.test(key) || key === ".") {
    if (last === ")" || last === "%") tokens.push("*");
    if (number) {
      if (key === "." && last.includes(".")) return;
      if (last.length < 22) tokens[tokens.length-1] = last === "0" && key !== "." ? key : last + key;
    } else tokens.push(key === "." ? "0." : key);
  } else if (key === "(") {
    if (valueEnd) tokens.push("*");
    tokens.push("(");
  } else if (key === ")") {
    const balance = tokens.reduce((n,t) => n + (t === "(") - (t === ")"), 0);
    if (valueEnd && balance > 0) tokens.push(")");
  } else if (binary.includes(key)) {
    if (valueEnd || key === "-") tokens.push(key);
    else if (binary.includes(last) && tokens.length > 1 && !binary.includes(tokens.at(-2)) && tokens.at(-2) !== "(") tokens[tokens.length-1] = key;
  } else if (key === "%") {
    if (valueEnd) tokens.push(key);
  } else if (key === "sign") {
    toggleCalculatorSign(tokens);
  } else if (key === "backspace") {
    if (number && last.length > 1 && !last.includes("e")) tokens[tokens.length-1] = last.slice(0,-1);
    else tokens.pop();
  } else if (key === "clear") {
    tokens.length = 0;
  } else return;

  calc.expression = tokens.map(calculatorSymbol).join(" ");
  calc.display = calculatorSymbol(tokens.at(-1) || "0");
  if (tokens.at(-1) === "%" || tokens.at(-1) === ")") {
    try { calc.display = calculatorNumber(evaluateCalculator(tokens)); } catch { /* An outer group is still open. */ }
  }
  updateCalculatorDisplay();
}

function updateCalculatorDisplay() {
  const calc = state.session?.calculator;
  if (!calc) return;
  const display = document.querySelector("[data-calc-display]");
  const expression = document.querySelector("[data-calc-expression]");
  if (display) display.textContent = calc.display.replace(".", ",");
  if (expression) expression.textContent = calc.expression.replaceAll(".", ",");
}

function renderCalculator() {
  const calc = state.session.calculator;
  const keys = [
    ["↑","up","utility","Előző számítás"],["↓","down","utility","Következő számítás"],["(","(","operator","Nyitó zárójel"],[")",")","operator","Záró zárójel"],
    ["C","clear","utility"],["⌫","backspace","utility"],["%","%","utility"],["÷","/","operator"],
    ["7","7",""] ,["8","8",""] ,["9","9",""] ,["×","*","operator"],
    ["4","4",""] ,["5","5",""] ,["6","6",""] ,["−","-","operator"],
    ["1","1",""] ,["2","2",""] ,["3","3",""] ,["+","+","operator"],
    ["±","sign","utility"],["0","0",""] ,[",",".","decimal"],["=","=","equals"]
  ];
  return `<div class="calculator-display" role="status" aria-label="Számológép kijelző"><small data-calc-expression>${escapeHtml(calc.expression.replaceAll(".", ","))}</small><strong data-calc-display>${escapeHtml(calc.display.replace(".", ","))}</strong></div>
    <div class="calculator-grid">${keys.map(([label,value,type,name]) => `<button class="calculator-key ${type}" data-action="calculator-key" data-value="${value}" title="${name || label}" aria-label="${name || label || "Tizedesvessző"}">${label || ","}</button>`).join("")}</div>`;
}

function renderTestTool(question) {
  const session = state.session;
  if (!session || question.category === "abstract" || !session.openTool) return "";
  const tool = session.openTool;
  const position = session.toolPositions[tool];
  const positionStyle = position ? `left:${position.x}px;top:${position.y}px;right:auto` : "";
  const content = tool === "notes"
    ? `<div class="scratchpad-body"><label for="scratchpad">Digitális piszkozat</label><textarea id="scratchpad" data-scratchpad spellcheck="false" placeholder="Írd ide a számításaidat…">${escapeHtml(session.scratchpad)}</textarea><button class="ghost-button" data-action="clear-scratchpad">Jegyzet törlése</button></div>`
    : renderCalculator();
  return `<aside class="test-tool-window ${tool}" data-tool-window="${tool}" style="${positionStyle}" aria-label="${tool === "notes" ? "Jegyzettömb" : "Számológép"}">
    <div class="test-tool-header" data-tool-drag>
      <strong>${tool === "notes" ? "▤ Jegyzettömb" : "⌗ Számológép"}</strong>
      <span>Húzással mozgatható</span>
      <button data-action="close-tool" aria-label="Bezárás">×</button>
    </div>
    <div class="test-tool-content">${content}</div>
  </aside>`;
}

function renderQuiz() {
  pendingHighlight = null;
  const session = state.session;
  if (!session) return renderHome();
  if (session.sectionReview) return renderSectionReview();
  const question = session.questions[session.current];
  if (question.category === "abstract") session.openTool = null;
  const answerState = session.answers[session.current];
  const reveal = Boolean(session.config.feedback && answerState.locked);
  const progress = ((session.current + 1) / session.questions.length) * 100;
  const feedback = reveal ? `
    <div class="feedback ${answerState.selected === question.answer ? "correct" : "incorrect"}">
      <strong>${answerState.selected === question.answer ? "Helyes válasz." : `A helyes válasz: ${String.fromCharCode(65 + question.answer)}.`}</strong>
      ${escapeHtml(question.explanation)} <em>${escapeHtml(question.tip)}</em>
    </div>` : "";
  const phase = session.config.mode === "exam"
    ? `${CATEGORY[question.category].short} részteszt`
    : session.config.title;
  const isExam = session.config.mode === "exam";
  const atSectionEnd = isExam && session.questions[session.current + 1]?.category !== question.category;
  const sectionQuestions = isExam ? session.questions.filter(q => q.category === question.category) : session.questions;
  const questionNumber = isExam ? session.questions.slice(0,session.current+1).filter(q => q.category === question.category).length : session.current+1;
  const nextLabel = atSectionEnd ? "Részteszt áttekintése →" : session.current === session.questions.length - 1 ? "Eredmény" : "Tovább →";
  document.getElementById("app").innerHTML = `
    <main class="quiz-shell ${question.category === "numeric" ? "numeric-quiz" : ""} ${question.category === "abstract" ? "abstract-quiz" : ""}">
      <div class="quiz-top">
        <button class="ghost-button quiz-exit" data-action="quit-quiz">Kilépés</button>
        <div class="quiz-phase">${escapeHtml(phase)}</div>
        <div class="quiz-top-tools">${fullscreenButtonHtml(true)}${session.config.timer ? `<div class="timer" aria-label="Hátralévő idő">◷ <span data-timer>${formatSeconds((session.deadline-Date.now())/1000)}</span></div>` : ""}</div>
      </div>
      ${question.category !== "abstract" ? `<div class="quiz-utility-bar"><span>Papírmentes vizsgagyakorlat · a jegyzet a részteszt alatt megmarad</span><div><button class="utility-button ${session.openTool === "notes" ? "active" : ""}" data-action="open-tool" data-tool="notes">▤ Jegyzettömb</button><button class="utility-button ${session.openTool === "calculator" ? "active" : ""}" data-action="open-tool" data-tool="calculator">⌗ Számológép</button></div></div>` : ""}
      ${isExam ? '<p class="exam-time-note">A részteszt hátralévő ideje látható. Teljes keret: szövegértés 35 perc · numerikus 20 perc · absztrakt 10 perc.</p>' : ''}
      <div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div><span class="progress-label">${session.current + 1} / ${session.questions.length}</span></div>

      <article class="question-card">
        <div class="question-identity"><strong>${CATEGORY[question.category].short} · ${questionNumber} / ${sectionQuestions.length}. feladat</strong><span>Azonosító: ${escapeHtml(question.id.toUpperCase())}</span></div>
        <div class="question-meta">
          <span class="category-pill ${question.category}">${CATEGORY[question.category].name}</span>
          <span class="difficulty">${question.difficulty}</span>
          ${answerState.flagged ? `<span class="flagged">⚑ Megjelölve</span>` : ""}
        </div>
        ${renderQuestionContext(question, true)}
        ${question.category === "verbal" && question.prompt ? `<h2>${escapeHtml(question.prompt)}</h2>` : ""}
        <div class="options ${question.category === "abstract" ? "abstract-options" : ""}">${renderOptions(question, answerState, reveal)}</div>
        ${feedback}
      </article>
      <div class="quiz-actions">
        ${isExam ? '<button class="soft-button" data-action="previous-question" ' + (session.questions[session.current - 1]?.category !== question.category ? 'disabled' : '') + '>← Előző</button><button class="soft-button" data-action="review-section">Áttekintés</button>' : ''}
        <button class="soft-button" data-action="toggle-flag">${answerState.flagged ? "Jelölés levétele" : "⚑ Megjelölés"}</button>
        <button class="primary-button" data-action="next-question">${nextLabel}</button>
      </div>
      <p class="shortcut-note">Billentyűk: A–${String.fromCharCode(64 + question.options.length)} vagy 1–${question.options.length} a válaszhoz · Enter a továbblépéshez</p>
      ${renderTestTool(question)}
    </main>`;
  updateTimerDisplay();
  requestAnimationFrame(keepToolVisible);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectAnswer(index) {
  if (state.session?.sectionReview || examTimeExpired()) return;
  const session = state.session;
  const answerState = session?.answers[session.current];
  const question = session?.questions[session.current];
  if (!answerState || !question || answerState.locked || index < 0 || index >= question.options.length || (answerState.eliminated || []).includes(index)) return;
  answerState.selected = index;
  if (session.config.feedback) answerState.locked = true;
  renderQuiz();
}

function toggleEliminate(index) {
  if (state.session?.sectionReview || examTimeExpired()) return;
  const session = state.session;
  const answerState = session?.answers[session.current];
  const question = session?.questions[session.current];
  if (!answerState || !question || answerState.locked || index < 0 || index >= question.options.length) return;
  const eliminated = answerState.eliminated || (answerState.eliminated = []);
  const existing = eliminated.indexOf(index);
  if (existing >= 0) eliminated.splice(existing, 1);
  else {
    eliminated.push(index);
    if (answerState.selected === index) answerState.selected = null;
  }
  renderQuiz();
}

function examTimeExpired() {
  const session = state.session;
  if (session?.config.mode === "exam" && session.config.timer && Date.now() >= session.deadline) {
    handleTimeout();
    return true;
  }
  return false;
}

function reviewSection() {
  if (state.session?.config.mode !== "exam" || examTimeExpired()) return;
  state.session.sectionReview = true;
  state.session.openTool = null;
  renderQuiz();
}

function visitExamQuestion(index) {
  const session = state.session;
  if (!session || session.config.mode !== "exam" || examTimeExpired()) return;
  if (!Number.isInteger(index) || session.questions[index]?.category !== session.sectionCategory) return;
  session.current = index;
  session.sectionReview = false;
  renderQuiz();
}

function completeExamSection() {
  const session = state.session;
  if (!session || session.config.mode !== "exam" || !session.sectionReview || examTimeExpired()) return;
  const next = session.questions.findIndex((q,i) => i > session.current && q.category !== session.sectionCategory);
  session.sectionReview = false;
  if (next < 0) return finishSession();
  session.current = next;
  startSectionTimer(session.questions[next].category);
  renderQuiz();
}

function renderSectionReview() {
  const session = state.session;
  const category = session.sectionCategory;
  const indices = session.questions.map((q,i) => q.category === category ? i : -1).filter(i => i >= 0);
  const unanswered = indices.filter(i => session.answers[i].selected === null).length;
  const last = category === "abstract";
  document.getElementById("app").innerHTML = `
    <main class="quiz-shell">
      <div class="quiz-top"><button class="ghost-button" data-action="quit-quiz">Kilépés</button><div class="quiz-phase">${CATEGORY[category].short} részteszt</div><div class="timer" aria-label="Hátralévő idő">◷ <span data-timer>${formatSeconds((session.deadline-Date.now())/1000)}</span></div></div>
      <article class="question-card">
        <h1>Részteszt áttekintése</h1>
        <p><strong>Az óra tovább fut. A hátralévő idő a tiéd.</strong> Válassz egy kérdést az ellenőrzéshez vagy a válasz módosításához.</p>
        <p>${indices.length - unanswered} / ${indices.length} megválaszolva · ${unanswered} válasz nélkül. A ⚑ jel a megjelölt kérdéseket mutatja.</p>
        <div class="exam-question-grid">${indices.map((i,n) => '<button class="soft-button" data-action="visit-exam-question" data-index="'+i+'">'+(n+1)+'. '+(session.answers[i].selected === null ? 'Válasz nélkül' : 'Megválaszolva')+(session.answers[i].flagged ? ' ⚑' : '')+'</button>').join('')}</div>
        <p>A lezárással lemondasz a megmaradt időről, és ehhez a részteszthez már nem térhetsz vissza. ${last ? 'Ezután az eredmény következik.' : 'A következő részteszt saját, teljes időkerettel indul.'}</p>
        <div class="quiz-actions"><button class="soft-button" data-action="visit-exam-question" data-index="${session.current}">Vissza a feladatokhoz</button><button class="primary-button" data-action="complete-exam-section">${last ? 'Vizsga lezárása és eredmény' : 'Részteszt lezárása és továbblépés'}</button></div>
      </article>
    </main>`;
  updateTimerDisplay();
  window.scrollTo({top:0,behavior:"smooth"});
}

function nextQuestion() {
  const session = state.session;
  if (!session || session.sectionReview || examTimeExpired()) return;
  if (session.config.mode === "exam" && session.questions[session.current + 1]?.category !== session.sectionCategory) {
    reviewSection();
    return;
  }
  const answerState = session.answers[session.current];
  if (session.config.feedback && answerState.selected === null) {
    showToast("Előbb válassz egy lehetőséget.");
    return;
  }
  if (session.current >= session.questions.length - 1) {
    finishSession();
    return;
  }
  const previousCategory = session.questions[session.current].category;
  session.current += 1;
  const nextCategory = session.questions[session.current].category;
  if (session.config.mode === "exam" && nextCategory !== previousCategory) startSectionTimer(nextCategory);
  renderQuiz();
}

function quitQuiz() {
  if (window.confirm("Biztosan kilépsz? A félbehagyott edzést nem mentjük.")) {
    state.session = null;
    renderHome();
  }
}

function finishSession() {
  stopTimer();
  const session = state.session;
  if (!session) return;
  session.finishedAt = Date.now();
  state.screen = "result";
  saveAttempt(session);
  renderResult();
}

function sessionBreakdown(session) {
  const result = {
    verbal: { total: 0, correct: 0 },
    numeric: { total: 0, correct: 0 },
    abstract: { total: 0, correct: 0 }
  };
  session.questions.forEach((question, index) => {
    result[question.category].total += 1;
    if (session.answers[index].selected === question.answer) result[question.category].correct += 1;
  });
  return result;
}

function saveAttempt(session) {
  if (session.saved) return;
  const breakdown = sessionBreakdown(session);
  for (const key of Object.keys(breakdown)) {
    profile.totals[key].answered += breakdown[key].total;
    profile.totals[key].correct += breakdown[key].correct;
  }
  const total = session.questions.length;
  const correct = Object.values(breakdown).reduce((sum, value) => sum + value.correct, 0);
  const date = todayKey();
  if (profile.streak.lastDate !== date) {
    profile.streak.count = profile.streak.lastDate === yesterdayKey() ? profile.streak.count + 1 : 1;
    profile.streak.lastDate = date;
  }
  profile.attempts.unshift({
    id: Date.now(),
    date: new Date().toISOString(),
    title: session.config.title,
    mode: session.config.mode,
    total,
    correct,
    seconds: Math.round((session.finishedAt - session.startedAt) / 1000),
    breakdown
  });
  profile.attempts = profile.attempts.slice(0, 30);
  saveProfile();
  session.saved = true;
}

function answerText(question, index) {
  if (index === null || index === undefined) return "Nem válaszoltál";
  if (question.category === "abstract") return `${String.fromCharCode(65 + index)} válasz`;
  return question.options[index];
}

function renderResult() {
  const session = state.session;
  if (!session) return renderHome();
  const breakdown = sessionBreakdown(session);
  const correct = Object.values(breakdown).reduce((sum, value) => sum + value.correct, 0);
  const score = percent(correct, session.questions.length);
  const seconds = Math.round(((session.finishedAt || Date.now()) - session.startedAt) / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const isExam = session.config.mode === "exam";
  const passed = breakdown.verbal.correct >= 10 && (breakdown.numeric.correct + breakdown.abstract.correct) >= 10;
  const heading = score >= 80 ? "Erős kör." : score >= 60 ? "Jó alap." : "Innen építkezünk.";
  const weakest = Object.entries(breakdown).filter(([,value]) => value.total).sort((a,b) => percent(a[1].correct,a[1].total)-percent(b[1].correct,b[1].total))[0];
  const summaryText = weakest
    ? `A következő blokkban a ${CATEGORY[weakest[0]].name.toLowerCase()} hozhatja a legnagyobb javulást.`
    : "A következő blokkban próbálj ki egy másik feladattípust.";
  const stats = Object.entries(breakdown).filter(([, value]) => value.total).map(([key, value]) => `
    <div class="result-stat"><span>${CATEGORY[key].name}</span><strong>${value.correct} / ${value.total}</strong></div>`).join("");
  const passBox = isExam ? `
    <div class="pass-box ${passed ? "pass" : "fail"}">
      <strong>${passed ? "A logikai továbbjutási küszöb teljesült." : "A logikai továbbjutási küszöb most még nem teljesült."}</strong><br>
      Verbális: ${breakdown.verbal.correct}/20 (minimum 10). Numerikus + absztrakt: ${breakdown.numeric.correct + breakdown.abstract.correct}/20 (minimum 10).
    </div>` : "";
  const review = session.questions.map((question, index) => {
    const selected = session.answers[index].selected;
    const ok = selected === question.answer;
    return `
      <article class="review-item">
        <button class="review-toggle" data-action="toggle-review">
          <span class="review-status ${ok ? "ok" : "bad"}">${ok ? "✓" : "×"}</span>
          <span class="review-question">${index + 1}. ${question.category === "abstract" ? "Absztrakt ábrasor" : escapeHtml(question.prompt)}</span>
          <span class="review-category">${CATEGORY[question.category].short}</span>
        </button>
        <div class="review-detail">
          ${renderQuestionContext(question)}
          <div class="review-options ${question.category === "abstract" ? "review-patterns" : ""}">${question.options.map((option, optionIndex) => `<div class="review-option ${optionIndex === question.answer ? "correct" : optionIndex === selected ? "incorrect" : ""}"><strong>${String.fromCharCode(65 + optionIndex)}${optionIndex === question.answer ? " ✓" : optionIndex === selected ? " ×" : ""}</strong>${question.category === "abstract" ? patternSvg(option, `${String.fromCharCode(65 + optionIndex)} válasz`) : `<span>${escapeHtml(option)}</span>`}</div>`).join("")}</div>
          <p><strong>A te válaszod:</strong> ${escapeHtml(answerText(question, selected))}</p>
          <p><strong>Helyes válasz:</strong> ${escapeHtml(answerText(question, question.answer))}</p>
          <p><strong>Magyarázat:</strong> ${escapeHtml(question.explanation)}</p>
          <p><strong>Gyors tipp:</strong> ${escapeHtml(question.tip)}</p>
        </div>
      </article>`;
  }).join("");

  document.getElementById("app").innerHTML = `
    ${topbarHtml()}
    <main>
      <section class="result-hero">
        <div>
          <div class="eyebrow">${escapeHtml(session.config.title)}</div>
          <h1>${heading}</h1>
          <p>${summaryText}</p>
        </div>
        <div class="score-ring" style="--score-angle:${score * 3.6}deg" aria-label="${score}%">
          <div class="score-ring-inner"><div><strong>${score}%</strong><span>${correct} / ${session.questions.length} helyes</span></div></div>
        </div>
      </section>
      <section class="result-grid">
        ${stats}
        <div class="result-stat"><span>Ténylegesen eltelt idő</span><strong>${minutes}:${String(remainingSeconds).padStart(2,"0")}</strong></div>
      </section>
      ${isExam ? '<p class="exam-time-note">Teljes vizsgaidőkeret: <strong>65 perc</strong> (35 + 20 + 10). A ténylegesen eltelt idő rövidebb, ha egy résztesztet az idő lejárta előtt lezártál.</p>' : ''}
      ${passBox}
      <div class="hero-actions" style="margin:0 0 28px">
        <button class="primary-button" data-action="repeat-session">Új hasonló edzés</button>
        <button class="soft-button" data-action="home">Vissza a kezdőlapra</button>
      </div>
      <div class="review-header"><div><h2>Feladatok áttekintése</h2><p style="color:var(--ink-soft);margin:0;font-size:.82rem">Nyisd le a magyarázatot ott, ahol bizonytalan voltál.</p></div></div>
      <section class="review-list">${review}</section>
    </main>
    ${footerHtml()}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHistory() {
  stopTimer();
  state.screen = "history";
  const rows = profile.attempts.length ? profile.attempts.map(attempt => {
    const date = new Date(attempt.date).toLocaleDateString("hu-HU", { year: "numeric", month: "short", day: "numeric" });
    return `<div class="history-row"><div><strong>${escapeHtml(attempt.title)}</strong><span>${date}</span></div><span>${Math.floor(attempt.seconds/60)}:${String(attempt.seconds%60).padStart(2,"0")}</span><div class="history-score">${percent(attempt.correct,attempt.total)}%</div></div>`;
  }).join("") : `<div class="empty-state"><div class="empty-symbol">↗</div><h3>Még nincs elmentett edzés.</h3><p>Fejezz be egy öt kérdéses blokkot, és itt követheted a fejlődésedet.</p></div>`;
  document.getElementById("app").innerHTML = `
    ${topbarHtml()}
    <main class="panel">
      <div class="section-heading" style="margin-top:0"><div><div class="eyebrow" style="color:var(--blue)">Saját adatok</div><h1 style="font-size:clamp(2rem,5vw,3.6rem);color:var(--ink)">Edzéselőzmények</h1><p>Az adatok csak ebben a böngészőben tárolódnak.</p></div><button class="danger-button" data-action="reset-progress">Adatok törlése</button></div>
      <section class="history-list">${rows}</section>
    </main>
    ${footerHtml()}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function repeatSession() {
  const config = state.session?.config;
  if (config) startSession({ ...config });
}

function resetProgress() {
  if (!window.confirm("Biztosan törlöd az összes helyi eredményt és előzményt?")) return;
  localStorage.removeItem(APP_KEY);
  profile = loadProfile();
  renderHistory();
  showToast("A helyi eredményeket töröltük.");
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  window.clearTimeout(state.toastId);
  requestAnimationFrame(() => toast.classList.add("show"));
  state.toastId = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

document.getElementById("app").addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (action === "home") renderHome();
  if (action === "history") renderHistory();
  if (action === "setup") renderSetup();
  if (action === "toggle-fullscreen") toggleFullscreen();
  if (action === "start-category") startSession({ mode: "practice", title: `${CATEGORY[target.dataset.category].short} gyakorlat`, categories: [target.dataset.category], count: 5, difficulty: "Vegyes", timer: true, feedback: true });
  if (action === "start-daily") startSession({ mode: "daily", title: "Napi mix", categories: ["verbal","numeric","abstract"], count: 12, difficulty: "Vegyes", timer: true, feedback: true });
  if (action === "start-exam") startSession({ mode: "exam", title: "Teljes AD5 logikai szimuláció", categories: ["verbal","numeric","abstract"], count: 40, difficulty: "Vegyes", timer: true, feedback: false });
  if (action === "set-setup") {
    const value = target.dataset.field === "count" ? Number(target.dataset.value) : target.dataset.value;
    state.setup[target.dataset.field] = value;
    renderSetup();
  }
  if (action === "start-custom") {
    const categories = state.setup.category === "mix" ? ["verbal","numeric","abstract"] : [state.setup.category];
    startSession({ mode: "practice", title: "Saját edzés", categories, count: state.setup.count, difficulty: state.setup.difficulty, timer: state.setup.timer, feedback: state.setup.feedback });
  }
  if (action === "answer") selectAnswer(Number(target.dataset.index));
  if (action === "toggle-eliminate") toggleEliminate(Number(target.dataset.index));
  if (action === "highlight-text") applyTextHighlight(target.dataset.color);
  if (action === "clear-highlights") clearTextHighlights();
  if (action === "next-question") nextQuestion();
  if (action === "previous-question") visitExamQuestion(state.session.current - 1);
  if (action === "review-section") reviewSection();
  if (action === "visit-exam-question") visitExamQuestion(Number(target.dataset.index));
  if (action === "complete-exam-section") completeExamSection();
  if (action === "toggle-flag") {
    const answer = state.session?.answers[state.session.current];
    if (answer) { answer.flagged = !answer.flagged; renderQuiz(); }
  }
  if (action === "quit-quiz") quitQuiz();
  if (action === "repeat-session") repeatSession();
  if (action === "toggle-review") target.closest(".review-item")?.classList.toggle("open");
  if (action === "reset-progress") resetProgress();
  if (action === "open-tool" && state.session) {
    state.session.openTool = state.session.openTool === target.dataset.tool ? null : target.dataset.tool;
    renderQuiz();
  }
  if (action === "close-tool" && state.session) {
    state.session.openTool = null;
    renderQuiz();
  }
  if (action === "calculator-key") calculatorInput(target.dataset.value);
  if (action === "clear-scratchpad" && state.session) {
    state.session.scratchpad = "";
    const scratchpad = document.querySelector("[data-scratchpad]");
    if (scratchpad) scratchpad.value = "";
  }
});

document.getElementById("app").addEventListener("change", event => {
  if (!event.target.matches("[data-setting]")) return;
  state.setup[event.target.dataset.setting] = event.target.checked;
  renderSetup();
});

document.addEventListener("fullscreenchange", updateFullscreenButtons);
window.addEventListener("resize", () => requestAnimationFrame(keepToolVisible));

document.getElementById("app").addEventListener("input", event => {
  if (event.target.matches("[data-scratchpad]") && state.session) state.session.scratchpad = event.target.value;
});

let toolDrag = null;

document.getElementById("app").addEventListener("pointerdown", event => {
  const handle = event.target.closest("[data-tool-drag]");
  if (!handle || event.target.closest("button")) return;
  const panel = handle.closest("[data-tool-window]");
  if (!panel) return;
  const rect = panel.getBoundingClientRect();
  toolDrag = { panel, tool: panel.dataset.toolWindow, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top };
  panel.classList.add("dragging");
});

document.addEventListener("pointermove", event => {
  if (!toolDrag) return;
  const rect = toolDrag.panel.getBoundingClientRect();
  const x = Math.max(8, Math.min(window.innerWidth - rect.width - 8, event.clientX - toolDrag.offsetX));
  const y = Math.max(8, Math.min(window.innerHeight - rect.height - 8, event.clientY - toolDrag.offsetY));
  toolDrag.panel.style.left = `${x}px`;
  toolDrag.panel.style.top = `${y}px`;
  toolDrag.panel.style.right = "auto";
  if (state.session) state.session.toolPositions[toolDrag.tool] = { x, y };
});

document.addEventListener("pointerup", () => {
  if (toolDrag) toolDrag.panel.classList.remove("dragging");
  toolDrag = null;
});

document.addEventListener("keydown", event => {
  if (state.screen !== "quiz" || state.session?.sectionReview) return;
  if (event.target.matches("textarea, input, select")) return;
  if (state.session?.openTool === "calculator") {
    const calcKeys = { "ArrowUp":"up", "ArrowDown":"down", "(":"(", ")":")", ",":".", ".":".", "+":"+", "-":"-", "*":"*", "/":"/", "%":"%", "Enter":"=", "=":"=", "Backspace":"backspace", "Escape":"close" };
    if (/^\d$/.test(event.key)) {
      event.preventDefault();
      calculatorInput(event.key);
      return;
    }
    if (calcKeys[event.key]) {
      event.preventDefault();
      if (calcKeys[event.key] === "close") {
        state.session.openTool = null;
        renderQuiz();
      } else calculatorInput(calcKeys[event.key]);
      return;
    }
  }
  const question = state.session?.questions[state.session.current];
  const key = event.key.toLowerCase();
  const answerKeys = { a:0, b:1, c:2, d:3, e:4, 1:0, 2:1, 3:2, 4:3, 5:4 };
  if (question && Object.hasOwn(answerKeys, key) && answerKeys[key] < question.options.length) {
    selectAnswer(answerKeys[key]);
  }
  if (event.key === "Enter") nextQuestion();
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

renderHome();
