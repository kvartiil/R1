import { Component } from '@angular/core';

@Component({
  selector: 'varav4',
  templateUrl: './varav4.component.html',
  styleUrls: ['./varav4.component.scss']
})
export class Varav4Component {
  currentIndex;

  sections = [
    {
      name: 'Mis on Kratt?',
      content:
        'Kratt on tehisintellekti tehnoloogial põhinev praktiline rakendus. Kratt põhineb tarkvaralisel algoritmil, mis on õppimisvõimeline ning täidab traditsiooniliselt inimese poolt tehtavaid ülesandeid. Tegemist on kitsa tehisintellektiga (narrow AI), mis tähendab masina võimet tegutseda intelligentselt ühes kitsas valdkonnas.         Elujõulisuse krati supervõime on masinõppel põhineva prognoosi tegemise oskus, mis lisaks ettevõtte enda majandusnäitajatele arvestab teiste Eesti majanduses tegutsevate ettevõtete tegevust, finantsnäitajaid ja laiemat majanduskonteksti. Kratt on õppinud väga suurelt andmekogumilt, millele ükski ettevõte tavapäraselt ligi ei pääse. Samas tuleb arvestada, et tegu on siiski masinaga, täpsemalt on kratt oma sisult arvutiprogramm. See on küll võimeline suure hulga informatsiooni abil prognoosima teie ettevõtte elujõulisust, kuid sel puudub võime näha tulevikku ning arvestada kõiki asjaolusid, sündmusi ja ettevõtte tegutsemise konteksti. <b>Arvestada tuleb teatava veamääraga.</b>',
      }, 
    {
      name: 'Mis on elujõulisus?',
      content:
        'Ettevõtte elujõulisuse indeksi metoodika aluseks on üldtunnustatud majandusanalüütika näitajad ja põhimõtted. Peamiselt kasutatakse analüüsil finantssuhtarve. Kratt hindab viit tüüpi elujõulisust: maksevõimet, efektiivsust, finantsvõimendust, tasuvust ja tööjõukulude tootlikkust. ',
    },
    {
      name: 'Finantssuhtarvud',
      content:
        'Finantssuhtarve või ka raamatupidamise suhtarve kasutatakse ettevõtte või muu organisatsiooni üldise finantsseisundi hindamiseks ning need aitavad muuta finantsaruanded paremini loetavaks. Suhtarvud annavad kasulikku teavet nii ettevõtte juhtkonnale, omanikele kui ka võlausaldajatele. Finantsanalüüsides kasutatakse finantssuhtarve selleks, et võrrelda omavahel eri ettevõtete tugevaid ja nõrku külgi.'         
    },
    {
      name: 'Lühiajalise maksevõime ehk likviidsussuhtarvud',
      content:
        'Lühiajalise maksevõime ehk likviidsussuhtarvud (short-term solvency ratios; liquidity ratios) näitavad ettevõtte võimet katta oma lühiajalisi kohustusi ehk teisisõnu – kas ettevõttel on piisavalt raha võlgnevuste tasumiseks.'
    },
    {
      name: 'Efektiivsuse suhtarvud',
      content: 
        'Efektiivsuse suhtarvud (activity ratios) näitavad, kui efektiivselt ettevõte juhib eri varadesse investeeritud vahendeid.',
    },
    {
      name: 'Finantsvõimenduse ehk kapitali struktuuri suhtarvud',
      content:
        'Finantsvõimenduse ehk kapitali struktuuri suhtarvud (financial leverage ratios; debt ratios) näitavad, kui palju ettevõte kasutab laenukapitali ehk ettevõtte võimet tasuda lühi- ja pikaajalisi kohustusi.',
    },
    {
      name: 'Tasuvuse suhtarvud',
      content:
        'Tasuvuse suhtarvud (profitability ratios) näitavad ettevõtte rentaablust ehk seda, kui palju toodab ettevõttesse investeeritud kapital kasumit.',
    },
    {
      name: 'Tööjõukulude tootlikkus käibe alusel',
      content:
        'Tööjõukulude tootlikkus käibe alusel näitab, mitu eurot käivet saadakse ühe euro tööjõukulude kohta.',
    },
    {
      name: 'Likviidsussuhtarvud',
      content:
        'Ettevõtte likviidsuse ehk maksevõime all mõistetakse ettevõtte võimet katta tähtaegselt oma lühiajalisi kohustisi. Maksevõime hindamiseks kasutatakse enamasti lühiajalise võlgnevuse kattekordajat ning maksevõime kordajat, lisaks ka rahakordajat.',
    },
    {
      name: 'Lühiajaliste kohustuste kattekordaja',
      content:
        'Lühiajaliste kohustuste kattekordaja (current ratio; working capital ratio) kajastab ettevõtte võimet katta võlausaldajate lühiajalised nõuded käibevaraga.',
    },
    {
      name: 'Lühiajaliste kohustuste kattekordaja valem/tõlgendus',
      content:
        'Lühiajaliste kohustuste kattekordaja=Käibevara/(Lühiajalised kohustused). Üldiselt peetakse heaks, kui kordaja jääb vahemikku 1,5 kuni 2 – sel juhul on ettevõtte lühiajaline finantsseisund hea. Liiga kõrge kordaja väärtus (kattekordaja on > 2) viitab asjaolule, et ettevõte ei kasuta oma käibevara tõhusalt. Kui aga lühiajalised kohustused ületavad käibevara (kattekordaja on < 1), võib ettevõttel esineda probleeme lühiajaliste kohustiste täitmisega ehk teisisõnu, ettevõte võib sattuda makseraskustesse. Teisalt ei pruugi see veel tähendada suuri probleeme, kui kohustisi on võimalik täita pikemaajaliste väljavaadete arvelt.',
    },
    {
      name: 'Maksevõimekordaja',
      content:
        'Maksevõimekordaja (quick ratio; acid-test ratio) näitab ettevõtte suutlikust likviidse varaga üheaegselt kõik lühiajalised kohustised kohe tasuda.',
    },
    {
      name: 'Maksevõimekordaja valem/tõlgendus',
      content:
        'Maksevõimekordaja (Raha+Likviidsed väärtpaberid+Laekumata arvad)/(Lühiajalised kohustused) Kõikide võlgnevuste tasumiseks korraga peab ettevõtte maksevõime kordaja olema 1 või suurem. Oluline on tähele panna, et kordaja sisaldab ka laekumata arveid. Näiteks kui ettevõttel on hulk pika maksetähtajaga laekumata arveid ning samaaegselt on kohustuste tähtaeg lühike, siis maksevõime kordajast probleemi ei ilmne, kuigi tegelikult saab ettevõttel kohe raha otsa. Samas, kui klientide maksetähtajad on lühikesed ning tarnijatel pikad, siis ei pruugi madal kordaja automaatselt tähendada probleeme maksevõimega.',
    },
    {
      name: 'Rahakordaja',
      content:
        'Rahakordaja (cash ratio) näitab ettevõtte võimet tasuda kohe saabuva tähtajaga kohustusi. Rahakordaja=(Raha+Likviidsed väärtpaberid)/(Lühiajalised kohustused) Lisaks ülaltoodule võib hinnata ka muu käibevara ja lühiajaliste kohustuste suhet (nt varude või debitoorse võlgnevuse suhet lühiajalistesse kohustustesse). See, millised suhtarvud on kõige sobivamad, sõltub konkreetse ettevõtte tegevusalast.',
    },
    {
      name: 'Efektiivsuse suhtarvud',
      content:
        'Efektiivsuse suhtarvud näitavad ettevõtte vara kasutamise efektiivsust. Põhiliselt kasutatakse kolme efektiivsuse suhtarvu: varade käibekordaja, lühiajalise võlgnevuse käibekordaja ja varude käibekordaja.',
    },
    {
      name: 'Vara käibesagedus',
      content:
        'Vara käibesagedus (asset turnover) või ka koguvara käive näitab, kui efektiivselt kasutab ettevõte oma vara. Mida suurem see näitaja on, seda efektiivsemalt varasid kasutatakse.',
    },
    {
      name: 'Vara käibesagedus valem/tõlgendus',
      content:
        'Vara käibesagedus: Müügitulu/Keskmine vara. Müügitulu (net sales) võetakse vaadeldava aruandeperioodi kasumiaruandest. Keskmine vara on vaadeldava ajavahemiku keskmine koguvara, mille võib leida näiteks perioodi alguse ja lõpu bilansside koguvara jagamisel kahega. Reeglina on kõrge kasumimarginaaliga ettevõtetel madal varade käibekordaja ning madala kasumimarginaaliga ettevõtetel kõrge varade käibekordaja.',
    },
    {
      name: 'Lühiajalise võlgnevuse käibekordaja',
      content:
        'Lühiajalise võlgnevuse käibekordaja: (receivables turnover) või ka debitoorse võlgnevuse käibekordaja näitab, kui suure osa ettevõtte aastasest netokäibest moodustab deebitoride debitoorne võlgnevus (ostjate laekumata arved) ehk mitu korda toimub aruandeperioodi jooksul debitoorse võlgnevuse tasumine deebitoride poolt. Lühiajalise võlgnevuse käibekordaja=Müügitulu/(Keskmine debitoorne võlgnevus)',
    },
    {
      name: 'Varude käibesagedus',
      content:
        'Varude käibesagedus (inventory turnover ratio) ehk käibekordaja näitab kauba või materjalivarude kasutamise efektiivsust. Mida suurem on varude käibesagedus, seda efektiivemalt ja kiiremini kasutatakse varusid ja varudesse investeeritud raha hulk ei ole väga suur. Varude käibesagedus=  Müügitulu/(Keskmised varud).',
    },
    {
      name: 'Finantsvõimenduse suhtarvud',
      content:
        'Finantsvõimendus näitab, kui suures ulatuses ettevõte kasutab tegevuse finantseerimiseks võõrkapitali ehk laenukapitali. Mida suurem on võõrkapitali osakaal, seda suurem on finantsvõimendus. Võõrkapitali hulka kuuluvad näiteks võetud laenud, ettevõtte emiteeritud ja kaubeldavad võlakohustised ning rahaturuinstrumendid. Põhiliselt kasutatakse ettevõtte analüüsimisel järgmisi finantsvõimenduse suhtarve: võlakordaja, kohustuste ja omakapitali suhe ning Intresside kattekordaja.',
    },
    {
      name: 'Võlakordaja',
      content:
        'Võlakordaja (debt ratio) on finantssuhtarv, mis näitab, kui suure osa ettevõtte koguvarast moodustab laenukapital. See on ettevõtte koguvõla (lühi- ja pikaajaliste kohustiste) ning koguvarade jagatis. Võlakordaja=(Kohustused kokku)/(Varad kokku) Optimaalne võlakordaja sõltub suuresti ettevõtte tegevusalast ning selle leidmine on ettevõtte finantsjuhtimise üks põhiküsimusi. Kui kordaja on < 0,5, siis finantseeritakse enamikku ettevõtte varadest omakapitalist, kui vastupidi, siis võõrkapitalist. Suur võlakordaja viitab, et ettevõtte täiendava laenukapitali kaasamise võimekus on väike.',
    },
    {
      name: 'Kohustuste ja omakapitali suhe',
      content:
        'Kohustuste ja omakapitali suhe (debt-equity ratio, gearing, leverage) näitab võõrkapitali ja omakapitali kasutamise suhet. Ettevõtete võrdlemisel on oluline tähele panna, kas näitaja on arvutatud raamatupidamis- (book value) või turuväärtuste (market value) baasil. Kui ettevõte on välja lasknud eelisaktsiaid (preferred stock), siis võib need, konkreetseid asjaolusid kaaludes, arvata kas võõrkapitali või omakapitali hulka. Üldjuhul võetakse kohustiste ja omakapitali suhte arvutamisel arvesse üksnes pikaajalisi kohustusi. Kohustusteja omakapitali suhe=(Kohustused kokku)/(Omakapital kokku).',
    },
    {
      name: 'Intresside kattekordaja',
      content:
        'Intresside kattekordaja (interest coverage ratio; times-interest-earned (TIE) ratio) näitab ettevõtte laenuteenindamise võimet ehk seda, kas teenitav põhitegevuskasum on piisav, et katta kõik intressikulud. Intresside kattekordaja=EBIT/(Aruandeperioodi intressikulu) Arvutustes võib sõltuvalt asjaoludest kasutada nii EBIT (kasum enne intresse ja makse) kui ka EBITDA (kasum enne intresse, makse ja kulumit) näitajat. Intressikulu võetakse reeglina aruandeperioodi kasumiaruandest. Intresside kattekordaja võiks ületada vähemalt 2,5.',
    },
    {
      name: 'Tasuvuse suhtarvud',
      content:
        'Tasuvuse ehk rentaabluse ehk kasumlikkuse suhtarvud (profitability ratios) mõõdavad seda, kui efektiivselt ettevõte suudab oma vara kasutada ning kulusid kontrolli all hoida, et tagada oodatav tulusus.',
    },
    {
      name: 'Käibe ärirentaablus',
      content:
        'Käibe ärirentaablus (operating margin) näitab, kui palju teenis ettevõte kasumit oma põhitegevusest. Käibe ärirentaablus=Ärikasum/Müügitulu.',
    },
    {
      name: 'Käibe puhasrentaablus',
      content:
        'Käibe puhasrentaablus ehk puhaskasumimarginaal (profit margin, net margin, net profit margin) näitab ettevõtte kasumlikkust ehk seda, kui palju kasumit teenitakse ühe euro käibe kohta. See näitab ühtlasi, kui mõistlik on ettevõtte hinnapoliitika ning kui hästi kontrollitakse kulusid. Eri ettevõtete puhaskasumimarginaal ei ole eriti hästi võrreldav, kuna iga ettevõtte kulude struktuur on erinev. Käibe puhasrentaablus=Puhaskasum/Müügitulu.',
    },
    {
      name: 'Varade ehk kogukapitali puhasrentaablus',
      content:
        'Varade ehk kogukapitali puhasrentaablus (return on assets — ROA) näitab ettevõtte varade kasutamise efektiivsust puhaskasumi teenimiseks ehk seda, kui palju kasumit teenib iga ettevõtte varasse investeeritud euro. Selleks kasutatakse järgmist valemit (DuPonti valem): Varade puhasrentabblus (ROA=Puhaskasumimarginal×Varade käibekordaja=Puhaskasum/Müügitulu×Müügitulu/Varad= Puhaskasum/Varad ROA leidmiseks jagatakse enamasti kasumiaruande kirje „Puhaskasum“ bilansi kirjega „Varad (aktiva) kokku“. DuPonti valem võimaldab analüüsida ka kasumlikkust (mida väljendab puhaskasumimarginaal) ning varade kasutamise efektiivsust (mida väljendab varade käibekordaja).',
    },
    {
      name: 'Omakapitali tootlus',
      content:
        'Omakapitali tootlus ehk puhasrentaablus (return on equity — ROE) näitab ettevõttesse investeeritud omakapitali kasutamise efektiivsust puhaskasumi teenimiseks st seda, kui palju kasumit teenib iga ettevõtte omakapitali investeeritud euro. DuPonti valem jagab omakapitali tootluse kolmeks komponendiks: kasumlikkus, vara kasutamise efektiivsus ning finantsvõimendus. ROE on leitav järgmise valemiga: Omakapitali puhasrentaablus (ROE)= Puhaskasumimarginaal×Varade käibekordaja×Finanstvõimendus=ROA×Varad/Omakapital=Puhaskasum/Omakapital ROE leidmiseks jagatakse enamasti kasumiaruande kirje „Puhaskasum“ bilansi kirjega „Omakapital kokku“. DuPonti analüüs võimaldab aktsepteeritava omakapitali tootluse saavutamiseks eristada kolme liiki ettevõtteid: kõrge kasumimarginaaliga ettevõtteid (näiteks moetööstus, tarkvaraarendus, luksuskaupade turustamine), kõrge käibega ettevõtteid (näiteks jaekaubandus) ning suure finantsvõimendusega ettevõtteid (näiteks pangandus).',
    },
    {
      name: 'Tööjõukulude tootlikkus',
      content:
        'Tööjõukulude tootlikkus näitab, mitu eurot käivet saadakse ühe euro tööjõukulude kohta ehk kui palju käivet suudab ettevõte luua teatud tööjõukulude juures. Tööjõukulude tootlikkuse vähenemine viitab sellele, et palkade tõus on olnud suurem kui käibe kasv (või käibe vähenemine on olnud ulatuslikum kui palkade vähendamine). Kui eelnevad suhtarvud põhinesid majandusaasta aruandel, siis tööjõukulude tootlikkuse allikateks on käibedeklaratsioon (vorm KMD) ning tulu- ja sotsiaalmaksu, kohustusliku kogumispensioni ja töötuskindlustusmakse deklaratsioon (vorm TSD).Tööjõukulude tootlikkus=(Perioodi käive)/(Perioodi tööjõukulud).', 
    },
    {
      name: 'Tegevussektorite määramine',
      content:
        'Ettevõtluse elujõulisuse indeksi jaoks on defineeritud ettevõtete ja majandusüksuste tegevussektorid. Sektorid on moodustatud tegevusalade (EMTAK) kombineerimisel. Aluseks on sarnane põhitegevusala, mis eelduslikult tähendab sarnasust tehingute kajastuses bilanssides/kasumiaruannetes; sarnasust tehingute loogikas; sarnast majandusmudelit. Mudelite treenimiseks kasutatavate sisendandmete kokkupanekul kontrolliti iga sektori kohta, et sinna kuuluks piisav arv ettevõtteid, et masinõppemudel saaks toimida ja vajaliku tulemi tagada.',
    },
    {
      name: 'Tegevusala grupp (Klaster)',
      content:
        'Ettevõtted on oma olemuselt, tegevustelt ja bilansinäitajatelt mitmekesised ning see muudab masinõppe keeruliseks. Seetõttu jagati ettevõtete tegevusalad (EMTAKi järgi) klasteranalüüsiga nelja homogeensemasse tegevusalade gruppi. Ettevõtted saavad elujõulisuse prognoosi võrdluses teiste sama klastri ettevõtetega. See võimaldab suurendada hinnangu täpsust ning vähendada olukordi, kus omavahel võrdlusesse satuvad äärmiselt erinevad ettevõtted. Need ettevõtted, mida ei saa seostada ühegi tegevusalade grupiga, jäävad elujõulisuse prognoosimisest kõrvale.',
    },
    {
      name: 'Prognooside kriitiline tõlgendamine',
      content:
        'Krati prognooside tõlgendamisel tuleb olla ettevaatlik.         •	Elujõulisuse indeksi rakenduse tulemuste ja soovituste puhul tuleb silmas pidada, et tegemist on masinõppemudelil põhineva prognoosiga. Tulevikuperspektiivide ennustamisel kasutatakse tehisnärvivõrke ja tulemused sõltuvad sellest, milliseid andmeid ja parameetreid on mudelite treenimisel kasutatud. Tegu on üldistusega, mis ei oska arvestada iga ettevõtte eripärasid, konteksti, erakordseid sündmusi ning majandustegevuse omapärasid, mis ei kajastu peamistes finantsnäitajates. Näiteks ei oska indeks arvesse võtta eriolukordi, nagu varade jagunemist osanike vahel.         •	Masinõppemudel suudab suure hulga minevikuinformatsiooni põhjal teatava veamääraga tulevikku prognoosida, kuid masinal puudub selgeltnägemisvõime. Kuna kratt on eelmiste aastate andmete põhjal treenitud mudelite süsteem, ei oska see arvesse võtta eelnevast olukorrast väga erinevaid arenguid, ootamatuid sündmusi ja muutusi ettevõtte tegevussektori keskkonnas. Sellisel juhul võib süsteem ettevõtte andmetest nähtuvat (ja tegelikult muutuvast makrokeskkonnast tulenevat) majandusseisu muutust tõlgendada ebakorrektselt.         •	Kratt ei pruugi osata anda usaldusväärset prognoosi juhul, kui ettevõte on analüüsitava perioodi jooksul teinud läbi olulise restruktureerimise ja/või majandustegevuse olemuse olulise muutuse, mille tulemusena perioodi kirjeldavad majandusaasta aruanded on väga erinevad. Kui ettevõte on viimastel aastatel muutnud põhitegevusala (EMTAKi järgi), siis ei ole võimalik prognoosi koostada.         •	Masinõppemudelite analüütilised tulemid on ainult osaliselt selgitatavad. Mudelid kasutavad  keerukaid matemaatilisi algoritme. Algoritmide olemusest tulenevalt ei ole alati tavaloogikat või majandusanalüütika loogikat kasutades võimalik lahti mõtestada, miks üks või teine mudel on teinud mõne konkreetse järelduse.         •	Elujõulisuse indeks kasutab analüüsiks ettevõtte majandusaasta aruande, maksudeklaratsioonide, töötamise registri ja majandusüksuste statistilise registri andmeid. Seega sõltub hinnangute täpsus sellest, kui täpsed on ettevõtte edastatud andmed.         •	Juhul, kui ettevõte ei ole esitanud eelnevalt kirjeldatud perioodide kohta majandusaasta aruandeid ja/või maksudeklaratsioone, siis ei saa rakendus ettevõtte kohta hinnangut anda.         •	Kui ettevõtte tegevus ja bilanss erinevad oluliselt teistest sama EMTAKi koodiga ettevõtetest, ei pruugi saadud prognoos usaldusväärne olla. ',
    },
    {
      name: 'Soovitused',
      content:
        'Lähtuvalt majandusteooriast ja suhtarvude analüüsist annab kratt ettevõttele tavapäraseid tegevussuuna soovitusi vastavalt hinnangule igas elujõulisuse tüübis. Kuna rakendusel pole piisavalt detailset teavet iga ettevõtte kohta, siis ei saa see anda konkreetset nõu, vaid pigem suunata ettevõtet edasist olukorda analüüsima. Krati soovitusi ilma nende sisu ja asjakohasust analüüsimata ellu viia ei ole õige. Edasiste tegevusplaanide tegemisse on soovitav kaasata ekspert või eriteadmistega konsultant. Täpsema metoodika leiab siit: …link metoodikaraportile…',
    },
  ];





  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}