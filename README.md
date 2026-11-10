## Vizsgasorok

A vizsga indításakor a böngésző menti a kiosztott kérdések azonosítóit. A következő vizsgán résztesztenként előbb a még fel nem használt, majd a legrégebben használt kérdések kerülnek sorra. A félbehagyott vizsga feladatai is kiosztottnak számítanak. A válaszlehetőségek sorrendje kevert.

A számológépen a ↑ és ↓ gombokkal bejárhatod a munkamenetben korábban kiszámított eredményeket. Az egymásba ágyazott zárójeleket és a műveleti sorrendet az egérrel és a billentyűzettel bevitt kifejezéseknél is használhatod.

## Numerikus feladatok bővítése

Az új numerikus feladat sorrendje: kérdés, rövid táblázatcím, táblázat, válaszlehetőségek. Az időszakot, mértékegységet és a százalék alapját a fejlécben add meg. A megoldáshoz szükséges egyedi feltételt a kérdésbe írd. Táblázat előtti magyarázó szöveget ne adj hozzá. A számítás levezetése a válasz értékeléséhez tartozik.

# Szövegkiemelők — 2026. november 6.

A szövegértési feladatok szövegében jelölj ki egy részletet, majd válassz sárga, zöld, kék vagy rózsaszín kiemelőt. A kiemelés átszínezhető, részben vagy teljesen törölhető. Az aktuális edzésen belül megmarad visszalépéskor és az eredmény áttekintésében is; új edzés tiszta kiemelésekkel indul. Numerikus és absztrakt feladatoknál nincs szövegkiemelő.

# Vizsgamód javítása — 2026. november 6.

A részteszt utolsó kérdése után áttekintés jelenik meg, az óra tovább fut. A részteszten belül visszaléphetsz és módosíthatod a válaszokat. Idő előtti lezárás csak az áttekintés külön gombjával történik. Időlejáratkor automatikus váltás. Külön időkeretek: 35 + 20 + 10 perc. Az eredményoldal külön jelzi a 65 perces keretet és a ténylegesen eltelt időt.

# 144 feladatos változat — 2026. november 2.

60 szövegértési, 48 numerikus és 36 absztrakt feladat. Ebben a frissítésben 20 + 16 + 12 új feladat került a bankba. Az új numerikus táblák ügyfeldolgozást, hálózatfejlesztést, anyagvisszanyerést és múzeumi hálózatokat mutatnak be, mesterséges gyakorlóadatokkal. Az új absztrakt sorok rácsos jelölőket, sokszög–pont kapcsolatokat és változó sávokat használnak.

A feladatok és válaszok véletlenszerű sorrendje, az időzítés és minden segédeszköz megmaradt. A továbbiakban a korábbi verziók leírása következik.

# EPSO Sprint — 2026. november 2-i bővítés

96 aktív, különböző feladat: 40 szövegértési, 32 numerikus, 24 absztrakt. Az új feladatok saját gyakorlófeladatok, nem hivatalos EPSO-kérdések.

A feladatok és a válaszok sorrendje új edzésenként véletlenszerű. Egy körön belül a kiválasztott nehézségi szint feladatai nem ismétlődnek, amíg a megfelelő bank ki nem merül. Külön edzésekben ugyanaz a kérdés újra előfordulhat. A vizsgaszimulációban a három részteszt sorrendje és ideje megmarad; a részeken belüli kérdések véletlenszerűek.

Az alábbiak a korábbi verzió leírását és frissítési előzményeit tartalmazzák.

# EPSO Sprint — AD5 logikatréner

Magyar nyelvű, böngészőben futó gyakorlóapp az EPSO/AD/427/26 első vizsgakörének három logikai résztesztjéhez.

## Indítás

A legegyszerűbb megoldás Windows alatt: csomagold ki a ZIP-et, majd kattints kétszer az `EPSO-Trener-inditasa.cmd` fájlra. Az app a ChatGPT-től függetlenül, az alapértelmezett böngészőben nyílik meg. Az `index.html` közvetlenül is megnyitható. Nincs szükség regisztrációra vagy internetkapcsolatra; az eredmények az adott böngészőben maradnak.

Az app felső sávjában és a tesztképernyőn található „Teljes képernyő” gombbal a böngésző kezelősávjai elrejthetők. Ugyanezzel a gombbal lehet visszatérni a normál, átméretezhető ablakhoz.

Telepíthető webappként is használhatod. Ehhez indíts helyi webszervert ebben a mappában, például:

```powershell
python -m http.server 8080
```

Ezután nyisd meg a `http://localhost:8080` címet, és válaszd a böngésző „Telepítés” parancsát.

## Mit tartalmaz?

- 20 eredeti, 79–93 szavas, információsűrű verbális feladat;
- 16 eredeti, többlépéses numerikus feladat 5×6–8 mezős adattáblákkal és öt válaszlehetőséggel;
- 12 eredeti, SVG-vel rajzolt, több párhuzamos szabályt alkalmazó absztrakt feladat öt válaszlehetőséggel;
- válaszlehetőségenkénti „Kizárás” gomb, amely áthúzza, majd szükség esetén visszaállítja az opciót;
- a numerikus részben munkameneten belül megmaradó digitális jegyzettömb és alapműveletes számológép;
- azonnali magyarázat és megoldási tipp;
- napi, egyéni és teljes vizsgamód;
- helyi pontosság-, sorozat- és előzménykövetés;
- mobil- és asztali nézet;
- teljes képernyős és szabadon átméretezhető böngészőnézet;
- internet nélkül is működő alkalmazásmód.

## Frissítés: 2026. október 20.

- A numerikus táblázatok mind EU-tagállamokat hasonlítanak össze; rövidebb fejlécek és egyértelmű mértékegységek segítik az olvasást.
- Új edzésenként változik a válaszlehetőségek sorrendje, a helyes válasz és a magyarázat hozzárendelése megmarad.
- A könnyebb szűrő a közepes feladatokat is bevonja, így numerikus és absztrakt módban is működik.
- Az eredményoldalon a teljes szöveg, táblázat vagy ábrasor és minden válaszlehetőség újra megtekinthető.
- Absztrakt feladatnál nincs kérdésszöveg; az öt sorozatképet öt válaszábra követi.
- Frissült az EPSO-menetrend és a hivatalos minták hivatkozása.
- Az offline gyorsítótár a verziószámos CSS- és JS-hivatkozásokat is kezeli.

A korábbi helyen lévő alkalmazás is frissült. A böngészőben ott tárolt eredmények megőrzéséhez továbbra is ugyanazon a címen nyisd meg. Másik fájlútvonalon vagy böngészőben külön eredménytároló jöhet létre.

## Hivatalos vizsgamód

- Verbális: 20 kérdés, 35 perc, minimum 10/20.
- Numerikus: 10 kérdés, 20 perc.
- Absztrakt: 10 kérdés, 10 perc.
- A numerikus és absztrakt teszt közös minimuma 10/20.

Az app független gyakorlóeszköz, nem az EPSO hivatalos terméke. A formátum és a nehézségi szint összehasonlítási alapjai:

- [EPSO hivatalos reasoning mintatesztek](https://selection.eu-careers.europa.eu/en/graduates-administrators-ad5);
- [EPSO AD verbális mintasor](https://eu-careers.europa.eu/system/files/2024-05/AD_Verbal_10Q_DA2.pdf);
- [EPSO AD numerikus mintasor](https://eu-careers.europa.eu/system/files/2024-05/AD_Numerical_5Q_DA2.pdf);
- [Euphorum nyilvános testtraining demó](https://www.euphorum.org/demo/testtraining);
- a 2026. július 1-jei összevont EPSO/AD/427/26 versenyvizsga-kiírás.

Az Euphorum demót kizárólag szerkezeti és minőségi összehasonlításra használtuk: szöveghossz, táblázatsűrűség, öt válaszopció, összetett ábrasorok és kezelési funkciók. A feladatok nem másolatok. A numerikus táblák valós EU-tagállamneveket, de mesterséges gyakorlóadatokat tartalmaznak; nem használhatók országstatisztikaként. A jegyzettömb és a számológép vizsgaszerű gyakorlóeszköz, nem az OAT/TAO felület pixelpontos reprodukciója.


## Ellenőrzés

A frissítés 48 aktív feladatot tartalmaz: 20 szövegértési, 16 numerikus és 12 absztrakt feladatot.
Mind a 16 numerikus megoldás külön újraszámolva egyezik a válaszkulccsal. Automatikus ellenőrzés futott a válaszkeverésre, a nehézségszűrésre, a résztesztek időkorlátaira, a kizárásra, a jegyzet megtartására, a számológépre és a teljes feladat-visszanézetre.
Asztali böngészőben ellenőrizve: feladatindítás, kizárás és visszaállítás, jegyzettömb, számológép, teljes képernyő, pontozás és numerikus áttekintés; az absztrakt ábrasor kérdésszöveg nélkül jelenik meg.
A keskeny képernyőkhöz készült CSS megmaradt és az ábrasoroknál módosult, de a mobilnézet vizuális ellenőrzése a tesztböngésző méretezési korlátja miatt nem teljes.
