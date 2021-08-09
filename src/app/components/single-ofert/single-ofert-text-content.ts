export interface IBodyElement {
  type: string;
  content?: string;
  headerList?: string;
  items?: string[];
}

export interface ISingleContent {
  title: string;
  body: IBodyElement[];
  contact: {
    person: string;
    email: string;
    phone: string;
  };
  [x: string]: any;
}

export interface ISingleOffert {
  [x: string]: ISingleContent;
}

export const singleOfferContent: { [x: string]: ISingleOffert } = {
  PL: {
    main: {
      title: 'Oferta',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Firma Animo oferuje profesjonalne usługi związane z montażem
          i serwisem szerokiej gamy drzwi, bram, rolet oraz systemów oddymiających.
          Najnowocześniejsze rozwiązania zapewniają niezawodność i niebywałą
          żywotność naszych produktów. Bogata gama wzornictwa umożliwia
          maksymalne dostosowanie  do nawet najbardziej wygórowanych potrzeb
          bądź upodobań Klienta. Produkty Animo oferują bezpieczeństwo,
          nowoczesność oraz indywidualność, przy jednoczesnym zachowaniu
          prostoty działania i dobrego smaku. Nasze produkty objęte są
          niezawodnym serwisem, który natychmiastowo reaguje na każdą zgłoszoną usterkę.`,
        },
      ],
      contact: {
        person: 'Biuro obsługi',
        email: 'animo@animo.wroclaw.pl',
        phone: '+48 601 956 901',
      },
    },
    ['drzwi-automatyczne']: {
      title: 'Drzwi automatyczne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Drzwi automatyczne stanowią obecnie podstawowy element wyposażenia między
          innymi obiektów usługowych oraz biurowych. Jest to wygodne, a zarazem
          nowoczesne rozwiązanie stosowane zarówno na zewnątrz, jak i wewnątrz budynków.
          Bogate wzornictwo umożliwia dowolne dostosowanie montowanych drzwi do architektury
          obiektu bądź wystroju jego wnętrza. Zaawansowane mechanizmy automatyczne dysponują
          możliwościami inteligentnej pracy i samodzielnej konfiguracji, zależnej od typu montowanych skrzydeł.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zapewniamy serwis oraz montaż drzwi automatycznych firm :`,
        },
        {
          type: 'HEADER',
          content: 'GEZE, ESCO, TORMAX, RECORD, BESAM, DORMA.',
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['bramy-garazowe']: {
      title: 'Bramy garażowe',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Bramy są kluczowym elementem każdego garażu, ponieważ pełnią funkcję zabezpieczającą zarówno przed
        nieproszonymi gośćmi, jak i nieprzyjaznymi pojazdom warunkami atmosferycznymi. Klienci decydujący
        się na wybór bram garażowych marki Animo, mają pewność ich solidności i niezawodności.
        Ogromne możliwości personalizacji umożliwiają wykonanie gotowego produktu według ściśle
        określonych wymogów kupującego – zarówno jeśli chodzi o wymiary, jak i wzornictwo.
        W naszej ofercie znajdują się między innymi segmentowe bramy garażowe, bramy garażowe rolowane,
        uchylne bramy garażowe czy bramy garażowe rozwierne.`,
        },
        {
          type: 'PARAGRAPH',
          content: `W naszej ofercie do nabycia znajdą Państwo bramy garażowe firm:`,
        },
        {
          type: 'HEADER',
          content: `Wiśniowski, Krispol, Wayne-Dalton.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zapewniamy serwis oraz montaż bram garażowych wszystkich producentów`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['rolety-zewnetrzne']: {
      title: 'Rolety zewnętrzne i wewętrzne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Rolety stanowią doskonałe zabezpieczenie przed czynnikami zewnętrznymi. Stanowią bardzo dobrą izolację
        cieplną zapewniając oszczędność energii. Izolują akustycznie, zabezpieczają przed hałasem i obciążeniami z zewnątrz.
        Chronią przed wiatrem, deszczem, nadmiernym nasłonecznieniem. Niewątpliwie koronnym atutem rolet zewnętrznych jest
        zapewnienie bezpieczeństwa domownikom, dzięki zabezpieczeniom antywłamaniowym oraz mocnym pancerzom rolety
        zdecydowanie utrudniają włamanie i chronią przed wandalizmem.`,
        },
        {
          type: 'LIST',
          headerList:
            'Oferujemy różnego rodzaju systemy zabudowań rolet zewnętrznych:',
          items: [
            `System standard - z widoczną skrzynką prostokątną lub owalną, montowane do istniejącej stolarki okiennej lub
            na mur przed nią. Oferowany również w wersji ze zintegrowaną siatką przeciw insektom.`,
            `System nakładany - rozwiązanie stosowane w trakcie wymiany stolarki okiennej. System rolet połączony z ramą okna
            lub drzwi za pomocą listwy adaptacyjnej. Klapa rewizyjna z tyłu skrzynki lub od dołu ( do zabudowy).
            Dodatkowym atutem systemu jest uszczelnienie prowadnic i zastosowanie szczotek wyciszających roletę.
            Skrzynki rolet nakładanych są ocieplane w środku i wyposażone w profil podtrzymujący tynk zewnętrzny.
            Oferowany również w wersji ze zintegrowaną siatką przeciw insektom.`,
            `System podtynkowy - mocowany we wnęce muru nad otworem okiennym, jest nowoczesnym rozwiązaniem w nowo wznoszonych budynkach,
            jak również w istniejących obiektach, słowem dla tych wszystkich którym energooszczędność nie jest obojętna.`,
            `Proponujemy różne warianty sterowań do rolet zewnętrznych:`,
            `Napęd ręczny – zwijacz taśmy lub linki, zwijacz korbowy, przekładnia korbowa.`,
            'Napęd sprężynowy.',
            'Napęd elektryczny - sterowanie elektryczne przewodowe i radiowe (sterowania indywidualne, grupowe lub centralne).',
            `Niewątpliwą zaletą rolet zewnętrznych jest ich funkcja dodatkowego zabezpieczenia przed nieproszonymi gośćmi.
            Rolety zewnętrzne możemy wyposażyć w szereg blokad chroniących przed podniesieniem pancerza z zewnątrz:`,
            `Zasuwki ręczne - czyli ręczne zabezpieczenie montowane w listwie dolnej.`,
            `Rygiel automatyczny - automatycznie blokuje pancerz po jego całkowitym opuszczeniu i odblokowuje przy otwarciu za pomocą
            taśmy lub sznurka, stosowany w roletach z napędem ręcznym.`,
            `Zamek baskwilowy - to zamek montowany w listwie końcowej, z obustronną wkładką patentową na klucz.
            Rozwiązanie stosowane przede wszystkim w roletach z napędem sprężynowym.
        `,
          ],
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['drzwi-drewniane']: {
      title: 'Drzwi drewniane wejściowe i wewnętrzne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Drzwi stanowią jeden z najistotniejszych, a mimo to rzadko docenianych elementów wnętrza.
          Właściwie dobrane i zamontowane będą nam służyć przez lata, dlatego warto zastanowić się nad ich wyborem.`,
        },
        {
          type: 'PARAGRAPH',
          content: `W naszej ofercie znajdziecie Państwo bardzo szeroki wybór drzwi: proponujemy między innymi drzwi drewniane,
          wewnętrzne, zewnętrzne oraz drzwi jedno- i dwuskrzydłowe. Dzięki naszemu profesjonalnemu montażowi drzwi będą
          działać przez wiele lat, a nasz serwis szybko upora się z każdą, nawet najdrobniejszą usterką.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['bramy-przemyslowe']: {
      title: 'Bramy przemysłowe',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Bramy przemysłowe firmy Animo stanowią doskonałe rozwiązanie do hal produkcyjnych i magazynowych,
          salonów sprzedaży, warsztatów czy myjni samochodowych. Cechuje je przede wszystkim nowoczesność
          oraz bezpieczeństwo i trwałość. W ofercie dostępne są zarówno starannie wykonane bramy segmentowe,
          jak i rolowane. Każde z nich można ponadto dowolnie dostosować do indywidualnych upodobań Klienta.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['systemy-oddymiania']: {
      title: 'Systemy oddymiania',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Profesjonalne systemy oddymiania odgrywają ogromną rolę w przypadku wystąpienia pożaru.
          Pozwalają na usunięcie dymu oraz nadmiernego ciepła ze strefy objętej zagrożeniem, ułatwiając
          ewakuację, a także zmniejszając temperaturę wewnątrz budynku, która może zagrozić stabilności
          konstrukcji budynku. Dzięki takim działaniom akcja gaśnicza przebiega sprawniej i bezpieczniej,
          a straty materialne zostają ograniczone.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['montaz-okna-pcv']: {
      title: 'Okna PVC i Aluminium : VEKA',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Każdy chce mieszkać ładnie, czuć się dobrze i bezpiecznie w swoich czterech kątach.
          Jednak nie ma jednego uniwersalnego rozwiązania. Jest to kwestia indywidualna,
          uzależniona od upodobań, gustu, trybu życia i potrzeb domowników.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dzisiejszy rynek wychodzi naprzeciw nawet najbardziej wygórowanym potrzebom i oczekiwaniom.
          Dlatego też nasza Firma współpracuje z wieloma producentami, dzięki czemu w naszej ofercie znajdą
          Państwo szeroki wybór asortymentu pod względem kolorystyki oraz funkcjonalności.`,
        },
        {
          type: 'HEADER',
          content: `MONTAŻ OKIEN WYKONUJEMY TYLKO PRZEZ AUTORYZOWANE GRUPY.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['uslugi']: {
      title: 'Usługi naprawcze',
      body: [
        {
          type: 'PARAGRAPH',
          content: `W przypadku pojawienia się usterki lub uszkodzenia drzwi, firma Animo świadczy usługi profesjonalnego
          doradztwa i serwisu. Nasi specjaliści po zapoznaniu się ze szczegółami usterki, od razu podejmują niezbędne prace
          naprawcze u  Klienta. Serwis dysponuje własnymi częściami zamiennymi, co zdecydowanie skraca czas naprawy. W razie
          braku możliwości usunięcia usterki Klientowi zostanie zaprezentowana oferta firmy Animo wraz z możliwością całkowitego
          dostosowania produktów do pozostałych elementów wystroju domu, mieszkania lub hali.`,
        },
        {
          type: 'LIST',
          headerList: 'Naprawa, montaż, serwis drzwi:',
          items: [
            'Aluminiowych',
            'PCW',
            'Drewnianych',
            'Stalowych',
            'Automatycznych',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Naprawa, montaż, serwis okien:',
          items: [
            'Aluminiowych',
            'PCW',
            'Drewnianych',
            'Stalowych',
            'Naprawa, montaż, serwis rolet',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Prace ogólnobudowlane:',
          items: [
            'Murowanie',
            'Gładzie',
            'Malowanie',
            'Docieplanie',
            'Wylewki posadzek',
            'Glazura i terakota',
            'Kucia, przekucia, rozbiórki',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Prace instalacji wodnokanalizacyjnych:',
          items: [
            'Naprawy awaryjne',
            'Nowe instalacje',
            'Przeróbka istniejących instalacji',
            'Czyszczenie i przetykanie instalacji do średnicy 150mm',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Czyszczenie kanalizacji:',
          items: [
            `Spirala elektryczna - REMS Cobra 22/32 do czyszczenia rur Ø 20–150 mm, z łączonymi spiralami,
            łańcuchami czyszczącymi lub frezami, zapewniają skuteczną, szybką pracę. Także w trudnych sytuacjach,
            np.: przy twardych czopach i twardych złogach`,
            'Elektryczny przepychacz ciśnieniowy',
            `Wodny przepychacz ciśnieniowy RIDGID przeznaczony do czyszczenia odpływów. Elastyczny, lekki wąż ciśnieniowy
            przedostaje się przez zatory z osadów kanalizacyjnych,mydła i tłuszczu. Podczas wyciągania węża instalacja jest
            ciśnieniowo przemywana, co powoduje wypłukanie osadów oraz przywrócenie kanałowi drożności.`,
          ],
        },
        {
          type: 'LIST',
          headerList: 'Prace elektryczne do 1 KV:',
          items: ['Naprawy awaryjne', 'Nowe instalacje elektryczne'],
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['drzwi-zewnetrzne']: {
      title: 'Drzwi drewniane zewnętrzne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Współpraca z czołowymi producentami drzwi, oferującymi najwyższą jakość swoich produktów stanowi
          niewątpliwy atut naszej firmy. Prowadzona przez nas sprzedaż, obfitująca w bogatą ofertę w której możemy
          znaleźć między innymi drzwi drewniane, daje Klientom pewność sprostania nawet najbardziej wygórowanym warunkom.
          Indywidualne podejście do każdego Kontrahenta pozwala natomiast na maksymalną personalizację zamawianego towaru,
          co gwarantuje udaną transakcję.`,
        },
        {
          type: 'HEADER',
          content: `ZAMÓW POMIAR!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zachęcamy do kontaktu z naszymi konsultantami, w celu ustalenia szczegółów zamówienia.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['drzwi-wewnetrzne']: {
      title: 'Drzwi wewnętrzne (z montażem) Wrocław',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Firma Animo od 1992 roku działa we Wrocławiu. Zajmuje się kompleksowym serwisem oraz montażem
          drzwi automatycznych, przemysłowych, bram garażowych, rolet oraz systemów oddymiania.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Ponad dwudziestoletnia praktyka sprawia, że nasze przedsiębiorstwo zdobyło profesjonalne doświadczenie
          w wykonywanej branży. Animo jest elastyczną firmą i zawsze kieruje się działaniem ku dobru naszego klienta.
          Swoim klientom dajemy szeroki wachlarz wyboru oferując drzwi wejściowe oraz różnorodne drzwi wewnętrzne, również automatyczne.
          Nasze drzwi to najwyższa jakość i staranne wykonanie dzięki czemu charakteryzują się eleganckim wzornictwem,
          szczelnością oraz trwałością. Klientom, którzy się na nie zdecydują posłużą w idealnym stanie przez wiele lat, co niewątpliwie
          jest ich główną zaletą.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Towar jaki oferujemy naszym klientom to oczywiście drzwi z montażem. Wrocław wielokrotnie przekonał się już,
          że jest to usługa wykonywana szybko, sprawnie i solidnie. Firma Animo prowadzi również współpracę z kilkoma innymi
          przedsiębiorstwami, które w tej samej branży zajmują czołowe miejsce na rynku, co znacznie zwiększa naszą elastyczność
          i umiejętność dopasowania się do potrzeb klienta. Dzięki temu możemy oferować Państwu najlepsze na rynku drzwi wewnętrzne.
          Wrocław jest dumny z firmy Animo już od wielu lat. Przez ten czas przedsiębiorstwo uzyskało znaczną ilość klientów,
          a dzięki zadowoleniu kontrahentów ich ilość wciąż wzrasta. Nasze drzwi z montażem to wysokiej klasy usługa, która cieszy się
          stale rosnącą popularnością wśród klientów.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Usługi zawsze świadczymy rzetelnie i profesjonalnie, ponieważ zależy nam na zaufaniu i zadowoleniu naszych klientów.
          Naszej pracy nie traktujemy wyłącznie jako obowiązku a oddajemy się wykonawstwu drzwi z oddaniem i pasją. Dzięki współpracy z
          wieloma czołowymi firmami zapewniamy najwyższej klasy, wykonane z najwyższej jakości produktów drzwi wewnętrzne.
          Wrocław już niejednokrotnie przekonał się, że to najlepsza oferta na rynku lokalnym. Zapraszamy do kontaktu oraz współpracy.`,
        },
        {
          type: 'HEADER',
          content: `ZAMÓW POMIAR!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zachęcamy do kontaktu z naszymi konsultantami, w celu ustalenia szczegółów zamówienia. `,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['drzwi-automatyczne-sprzedaz']: {
      title: 'Drzwi automatyczne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Drzwi automatyczne stanowią obecnie podstawowy element wyposażenia między innymi obiektów usługowych oraz biurowych.
          Jest to wygodne, a zarazem nowoczesne rozwiązanie stosowane zarówno na zewnątrz, jak i wewnątrz budynków. Bogate wzornictwo
          umożliwia dowolne dostosowanie montowanych drzwi do architektury obiektu bądź wystroju jego wnętrza.
          Zaawansowane mechanizmy automatyczne dysponują możliwościami inteligentnej pracy i samodzielnej konfiguracji,
          zależnej od typu montowanych skrzydeł.`,
        },
        {
          type: 'HEADER',
          content: `ZAMÓW POMIAR!`,
        },
        {
          type: 'PARAGRAPH',
          content: `W naszej ofercie do nabycia znajdą Państwo drzwi automatyczne oraz systemy do nich firm`,
        },
        {
          type: 'HEADER',
          content: `GEZE`,
        },
        {
          type: 'LIST',
          headerList: 'Systemy drzwi przymykowych:',
          items: ['TSA', 'EMD', 'ECturn'],
        },
        {
          type: 'LIST',
          headerList: 'Systemy drzwi przesuwnych:',
          items: ['Slimdrive', 'ECdrive', 'Powerdrive', 'TSA 360 NT'],
        },
        {
          type: 'LIST',
          headerList: 'Drzwi karuzelowe:',
          items: [
            'TSA 325 NT napęd ręczny',
            'TSA 325 NT „Push&Go"',
            'TSA 325 NT automatyczny',
          ],
        },
        {
          type: 'HEADER',
          content: `ESCO`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: [
            'Automatyka do drzwi rozwiernych - Escomatic',
            'Escomatic EMSL-T (EscoMatic SLiding Telescopic)',
            'Escomatic EMSL (EscoMatic SLiding)',
          ],
        },
        {
          type: 'HEADER',
          content: `TORMAX`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: [
            'Drzwi przesuwane',
            'Drzwi rozwierne',
            'Drzwi karuzelowe',
            'Drzwi harmonijkowe',
          ],
        },
        {
          type: 'HEADER',
          content: `RECORD`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: [
            'Record 20',
            'Record 20 RED',
            'FULL POWER (standard)',
            'Standard 2-, i 4- skrzydłowe drzwi harmonijkowe',
            'LOW ENERGY',
          ],
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['bramy-garazowe-sprzedaz']: {
      title: 'Bramy garażowe',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Oferujemy produkty, które nie tylko wpływają na poziom bezpieczeństwa domowników i ich mienia,
          ale również chronią posiadany pojazd przez niekorzystnymi warunkami pogodowymi, które mogłyby je uszkodzić.
          Bramy garażowe, bo o nich tu mowa, muszą cechować się najwyższą starannością wykonania i niezwykłą solidnością – tylko
          wtedy będą w stanie służyć Państwu przez lata bez konieczności wydawania dodatkowych pieniędzy na ich naprawy.
          Właśnie takie są oferowane przez nas produkty marek Wiśniowski, Krispol i Wayne-Dalton.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Jeśli są Państwo z Wrocławia lub okolic, zapraszamy do zapoznania się z naszą ofertą. W ramach naszych usług
           wykonujemy pomiary, umożliwiające spersonalizowanie bramy garażowej do Państwa potrzeb i preferencji estetycznych.
           Dodatkowo zajmujemy się także montażem oraz serwisem proponowanych przez nas artykułów.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Poniżej przedstawiamy rodzaje produktów oferowane przez naszych producentów.`,
        },
        {
          type: 'HEADER',
          content: `Wiśniowski`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: [
            'Segmentowe',
            'Roletowe',
            'Uchylne',
            'Rozwierne',
            'Drzwi stalowe DST',
          ],
        },
        {
          type: 'HEADER',
          content: `Krispol`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: [
            'Segmentowe – stalowe',
            'Segmentowe – aluminiowe',
            'Segmentowe o podwyższonej odporności',
            'Rolowe',
          ],
        },
        {
          type: 'HEADER',
          content: `Wayne-Dalton`,
        },
        {
          type: 'LIST',
          headerList: 'Produkty:',
          items: ['9100 Comfort', '9600 Classic', '9500 Thermo', '9700 Design'],
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['rolety-zewnetrzne-sprzedaz']: {
      title: 'Rolety wewnętrzne i zewnętrzne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Produkty oferowane przez Animo z Wrocławia są gwarancją jakości i trwałości, nawet przy wzmożonym użytkowaniu.
           Nasza oferta składa się jedynie z wyrobów sprawdzonych producentów, co zapewnia maksimum niezawodności i zadowolenia Klienta.
            Szeroka gama wzornictwa rolet wewnętrznych i zewnętrznych umożliwia znalezienie produktu na miarę ściśle określonych potrzeb.
             Rolety zewnętrzne oraz wewnętrzne stają się podstawowym wyposażeniem wszystkich ekologicznych obiektów, jakie stanowią
             energooszczędne domy pasywne. Grono wykwalifikowanych doradców z przyjemnością pomoże w wyborze najodpowiedniejszej oferty
             nawet najbardziej wymagającym Klientom.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zapraszamy Państwa do skontaktowania się z nami w celu wykonania pomiaru. Dzięki temu będziemy w stanie
          zapewnić Państwu odpowiednio dopasowane rolety wewnętrzne i zewnętrzne o napędzie ręcznym, sprężynowym bądź elektrycznym,
          które doskonale wzbogacą Państwa pasywne domy energooszczędne.`,
        },
        {
          type: 'LIST',
          headerList:
            'Proponujemy różne warianty sterowań do rolet zewnętrznych dla domów pasywnych:',
          items: [
            'Napęd ręczny – zwijacz taśmy lub linki, zwijacz korbowy, przekładnia korbowa',
            'Napęd sprężynowy',
            'Napęd elektryczny - sterowanie elektryczne przewodowe i radiowe (sterowania indywidualne, grupowe lub centralne)',
          ],
        },
        {
          type: 'LIST',
          headerList:
            'Dodatkowo energooszczędne rozwiązania, znajdujące się na dworze, mogą zostać wyposażone w różne zabezpieczenia, takie jak:',
          items: [
            'Zasuwki ręczne w dolnej listwie',
            'Rygiel automatyczny',
            'Zamki baskwilowe w końcowej listwie',
          ],
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['okna-pcv']: {
      title: 'Okna PVC i Aluminium',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Nasza firma oferuje szeroki wybór elementów, które stanowią podstawę wykończenia każdego domu i mieszkania.
          Różnorodność okien PVC i aluminiowych, znajdujących się w naszym asortymencie, sprawi, że każdy Klient będzie w stanie
          znaleźć odpowiednie dla siebie rozwiązanie. Jeśli remontują Państwo swoje lokum i stoją przed wyborem, na które okna
          postawić, nasi wykwalifikowani konsultanci, będący do Państwa dyspozycji w naszym salonie we Wrocławiu, z przyjemnością
           udzielą Państwu kilku wartościowych porad.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Czymś, co dodatkowo nas wyróżnia jest zapewnienie profesjonalnego montażu oferowanych przez nas produktów.`,
        },
        {
          type: 'LIST',
          headerList: 'W naszym asortymencie posiadamy następujące profile:',
          items: [
            'Alphaline',
            'Perfectline półzlicowany',
            'Revento',
            'Swingline',
          ],
        },
        {
          type: 'HEADER',
          content: `Zapraszamy do zamówienia profesjonalnego pomiaru, który umożliwi stworzenie idealnie dopasowanego produktu.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['malowanie-scian']: {
      title: 'Malowanie ścian',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Czasem wystarczą drobne zmiany, by nadać wnętrzom całkiem nowego charakteru bez konieczności kosztownych i
          czasochłonnych prac remontowych. Dlatego oferujemy Państwu profesjonalne malowanie ścian według indywidualnych upodobań.
          Pomożemy również w wyborze odpowiedniej farby oraz innych preparatów, co zapewni spektakularny i przede wszystkim
          trwały efekt. Usługi wykonujemy zarówno na mniejszych, jak i większych powierzchniach.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Może się wydawać, że malowanie ścian jest banalnie proste i nie wymaga zatrudnienia fachowców. Niekoniecznie.
          Czasem nie wystarczy zakup farby, pędzla i wałka oraz dobre chęci. Jeśli nie mamy wprawy w tego typu pracach ani nie
          dysponujemy odpowiednim sprzętem, warto skorzystać z usług rzetelnej ekipy. Da to pewność, że wnętrze zostanie
          odmienione szybko, a efekt końcowy będzie w 100% zadowalający. Niezwykle ważne jest bowiem także odpowiednie
          przygotowanie podłoża, a także zabezpieczenie drzwi, grzejników, mebli, okien czy też podłóg. W przypadku nierówności
          ściany, odprysków czy pęknięć tynku, a także zabrudzeń i pozostałości pod starej farbie, konieczne będzie ich dokładne
          usunięcie, a także wykonanie gruntowania. Dokonamy również stosownych obliczeń z uwzględnieniem powierzchni, a także
          koniecznej liczby nakładanych warstw, co pozwoli na zakup optymalnej ilości farby.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Przy malowaniu ścian niezbędne jest również zapewnienie odpowiedniego oświetlenia, które pomoże w kontrolowaniu
          dokładności rozłożenia farby, dzięki czemu unikniemy powstania ewentualnych nierównomierności czy też nieestetycznych smug.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['ukladanie-plytek']: {
      title: 'Układanie płytek',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Naszym klientom oferujemy kompleksowe wsparcie przy układaniu płytek ceramicznych zarówno na ścianie,
          jak i na podłodze. Wiemy, że prace te wymagają nie tylko starannego wykonania i szczególnej precyzji, ale i odpowiedniego
          przygotowania. Dlatego dokonamy dokładnych wyliczeń, co pozwoli na zakup wystarczającej liczby płytek. Pozwoli to uniknąć
          przykrych niespodzianek i przestoju w pracach spowodowanego nerwowym poszukiwaniem identycznych płytek w sklepach czy
          hurtowniach.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Przed przystąpieniem do układania płytek dokładnie przygotowujemy podłoże. Musi być ono równe, czyste oraz suche.
           Następnie wykonujemy tzw. próbę, czyli ułożenie płytek „na sucho”, co pozwoli na rozplanowanie układu.
           Często zdarza się, że konieczne jest przycięcie płytek – dlatego warto wcześniej rozplanować układ tak, by
           elementy przycięte znajdowały się w mniej widocznych miejscach. Przy układaniu płytek wspomagamy się krzyżykami
           dystansowymi oraz listwami, a także na bieżąco kontrolujemy równość ułożenia za pomocą poziomicy.
           Pozwoli to na wykrycie ewentualnych nierówności i natychmiastową korektę, zanim klej zdąży wyschnąć.
           Dla zwiększenia wiązania każdą z płytek delikatnie dociskamy do podłoża, co zapewnia równomierny rozkład zaprawy
           klejowej pod spodem, a tym samym trwalszy efekt końcowy`,
        },
        {
          type: 'PARAGRAPH',
          content: `Układanie płytek wiąże się również z koniecznością starannego wykończenia.
          Dlatego po wyschnięciu kleju zajmujemy się fugowaniem, a także montowaniem elementów wykończeniowych typu listwy
          przypodłogowe czy też cokoliki ceramiczne.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['instalacje-hydrauliczne']: {
      title: 'Instalacje hydrauliczne i elektryczne',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Wykonujemy szeroki zakres usług związanych z instalacjami hydraulicznymi i elektrycznymi. Są to zarówno naprawy
        awaryjne, jak i przeróbki czy też zakładanie nowych instalacji. Posiadamy nie tylko bogate doświadczenie i rozległą wiedzę,
        ale i wszelkie uprawnienia do wykonywania tego typu prac (m.in. uprawnienia elektryczne SEP do 1 kV). Ma to szczególne
        znaczenie w przypadku instalacji elektrycznej, ponieważ naprawy i przeróbki wykonane przez osoby nieuprawnione mogłyby
        spowodować zagrożenie nie tylko dla zdrowia, ale i życia osób użytkujących dany obiekt (ryzyko powstania przeciążenia czy
          zwarcia, które może być przyczyną poważnego w skutkach pożaru).`,
        },
        {
          type: 'PARAGRAPH',
          content: `W przypadku prac wodno-kanalizacyjnych oferujemy dodatkowo czyszczenie oraz przetykanie instalacji o
        średnicy do 150 mm. W tym celu wykorzystujemy zarówno elektryczny, jak i wodny przepychacz ciśnieniowy RIDGID,
        a także spiralę elektryczną REMS Cobra 22/32. Zapewnia to sprawną i skuteczną pracę nawet przy twardych złogach oraz czopach.
        Usuniemy kłopotliwe zatory zarówno z mydła, tłuszczu, jak osadów kanalizacyjnych, a także przywrócimy kanałowi odpowiednią
        drożność umożliwiającą bezproblemowe, codzienne użytkowanie. Mogą Państwo liczyć na naszą pomoc nie tylko przy rozwiązaniu
        sytuacji awaryjnych (zdiagnozowanie źródła usterki oraz natychmiastowe podjęcie działań naprawczych), ale i przy tworzeniu
        instalacji od podstaw.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Przy wykonywaniu prac dbamy o szczególnie o zachowanie wszelkich standardów bezpieczeństwa. Warto również zaznaczyć,
        że dysponujemy wieloma częściami zamiennymi, co w wielu przypadkach pozwala na znaczne skrócenie czasu naprawy.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['domy-kontenerowe']: {
      title: 'Domy kontenerowe',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Mieszkanie w kontenerze brzmi niezbyt ciekawie i wielu osobom kojarzy się z prowizorycznym lokum socjalnym dla
          najuboższych. I jest to ogromny błąd! Dom kontenerowy stanowi aktualnie niezwykle nowoczesną, a także funkcjonalną
          propozycję dla szczególnie wymagających osób!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Energooszczędne rozwiązania, szybkość wykonania, dużo mniej formalności niż w przypadku budowy tradycyjnego domu,
          a także wyjątkowy komfort i innowacyjny design. Tak w skrócie można opisać domy kontenerowe, które w niczym nie odbiegają
          od innych budynków.`,
        },
        {
          type: 'HEADER',
          content: `Jak wygląda dom kontenerowy?`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dom kontenerowy składany jest (dosłownie) z segmentów. Konstrukcja powstaje na hali produkcyjnej i do klienta
          przywożony jest obiekt gotowy do osadzenia w określonym miejscu za pomocą dźwigu bądź podnośnika. Kontener może być
           umiejscowiony na wcześniej przygotowanych fundamentach lub też dachu obiektu już istniejącego. Trwa to chwilę i pozostaje
           już tylko wykończenie według indywidualnych preferencji oraz podłączenie niezbędnych mediów.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dom kontenerowy wcale nie oznacza blaszanego baraku kojarzonego głównie z placem budowy. To elegancki obiekt,
          który może zostać dowolnie wykończony – ekskluzywności nadadzą mu na przykład szklane ściany, a także elementy z drewna
          czy też innych materiałów.`,
        },
        {
          type: 'PARAGRAPH',
          content: `W środku niczym nie różni się od tradycyjnego budynku. W zależności od projektu może być w nim kuchnia, łazienka,
          jak i dowolna liczba innych pomieszczeń. Daje to komfortowe warunki do mieszkania na co dzień.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dzięki odpowiedniej izolacji we wnętrzu jest ciepło nawet podczas zimowych mrozów. Eliminuje to również ryzyko
          nadmiernego nagrzania podczas letnich upałów.`,
        },
        {
          type: 'HEADER',
          content: `Czym różni się od tradycyjnego domu?`,
        },
        {
          type: 'PARAGRAPH',
          content: `Istotną kwestią jest przede wszystkim czas wykonania. Tradycyjne budynki powstają często przez lata i wymagają
          ciężkiej pracy dużej liczby osób. W przypadku konstrukcji modułowych jest to zaledwie kilka miesięcy. Obiekt powstaje
           w hali produkcyjnej i stawiany jest w miejscu docelowym w ciągu jednego dnia. Dzięki temu mamy porządek na działce i nie ma
           mowy o jakimkolwiek bałaganie jak na tradycyjnych placach budowy. Jedynym minusem tak szybkiej realizacji mogą być
           kwestie finansowe. Wprawdzie są to koszty niższe niż w przypadku budowy domu murowanego, jednak musimy się liczyć
           z praktycznie jednorazowym większym wydatkiem – w przypadku tradycyjnego budownictwa koszty te niejako rozkładają
           się w czasie i związane są z poszczególnymi etapami prac w ciągu nawet kilku lat.`,
        },
        {
          type: 'HEADER',
          content: `Co na to polskie prawo?`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dom kontenerowy nie podlega takim obostrzeniom prawnym jak tradycyjnym. Wprawdzie nie jest też wymagane
          uzyskanie pozwolenia na budowę, jednak należy pamiętać, że i tu jest pewien „haczyk”. Jeżeli obiekt będzie
          użytkowany w jednym miejscu przez okres powyżej 180 dni, wówczas traktowany jest jak standardowy obiekt
          mieszkalny i wymagane jest uzyskanie stosownych pozwoleń, w tym także na budowę.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['domy-na-wodze']: {
      title: 'Domy na wodzie',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Stanowi marzenie każdego, kto kocha nieszablonowe rozwiązania, a także wyjątkową bliskość natury i swobodę.
          Dom na wodzie wyszedł już dawno ze sfery marzeń i bez większych problemów można stać się jego posiadaczem także w Polsce!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Wbrew pozorom dom na wodzie z powodzeniem może stanowić całoroczny obiekt mieszkalny. Dzięki odpowiedniej
          konstrukcji oraz wykończeniu jest w pełni bezpieczny i zapewnia komfortowe warunki użytkowania. W środku w niczym nie
          różni się od tradycyjnych budynków – składa się nie tylko z pokoju, z którego można podziwiać piękne widoki.
          To także kuchnia oraz łazienka i wszystko, co jest potrzebne do codziennego funkcjonowania.`,
        },
        {
          type: 'LIST',
          headerList: 'Gdzie można umieścić taką konstrukcję?',
          items: [
            `Teren musi być naszą własnością – w przeciwnym przypadku konieczne jest pozwolenie od właściciela bądź odpowiednich organów`,
            'Należy uiścić opłaty za cumowanie i korzystanie z odcinka linii brzegowej',
            `Należy upewnić się, że dane miejsce nie jest objęte ochroną konserwatora budynków ani nie jest już uwzględnione w planach
            zabudowy linii brzegowej`,
            `Należy upewnić się, że obiekt nie będzie stanowił przeszkody dla statków – konieczne będzie zezwolenie od
            Urzędu Żeglugi Śródlądowej`,
            `Miejscowy starosta musi wydać pozwolenie wodnoprawne (dokument ważny jest do 20 lat).`,
          ],
        },
        {
          type: 'HEADER',
          content: `Bezpieczeństwo ponad wszystko`,
        },
        {
          type: 'PARAGRAPH',
          content: `Mając na uwadze specyfikę wykorzystania i umiejscowienia konstrukcji, wykonawcy wykorzystują jedynie sprawdzone
          technologie oraz wyjątkowo wytrzymałe materiały. Konstrukcja obiektu jest niezwykle lekka, o dużej wyporności i oparta
          jest na konstrukcji szkieletowej połączonej z pływakiem. Wykorzystane materiały są odporne nie tylko na uszkodzenia
          mechaniczne, ale i działanie wody, która mogłaby powodować niszczenie w postaci rdzy, pękania, pęcznienia, itp.`,
        },
        {
          type: 'HEADER',
          content: `Dostęp do mediów`,
        },
        {
          type: 'PARAGRAPH',
          content: `W domu na wodzie można bez problemu oglądać telewizję czy też korzystać z lodówki czy oświetlenia.
          Zasilany jest on bowiem prądem z lądu bądź też z własnego generatora. Zamontowane są również specjalne zbiorniki
          na wodę oraz ścieki. Obiekty są również ogrzewane (zazwyczaj dzięki ogrzewaniu elektrycznemu).
          Istnieje również możliwość wyposażenia w alternatywne źródła energii.`,
        },
        {
          type: 'HEADER',
          content: `Nie tylko dla bogatych`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dom na wodzie bywa kojarzony z większym prestiżem, luksusem i dobrobytem, a także awangardowym stylem życia.
          Jednak wbrew pozorom nie jest to rozwiązanie zarezerwowane dla najbogatszych. Najtańszą opcją jest zakup gotowego obiektu,
          w przypadku projektu indywidualnego należy liczyć się z nieco większymi wydatkami. Jednak koszt takiej konstrukcji jest
          znacznie niższy niż w przypadku tradycyjnego domu. Chodzi tu nie tylko o koszty związane z wykonaniem obiektu, ale i brak
          konieczności zakupu działki. Jedynym minusem może być tutaj fakt, że dom na wodzie nie jest w polskim prawie
          traktowany jako budynek mieszalny, w związku z czym nie ma możliwości uzyskania z banku kredytu hipotecznego
          na cel i należy ponieść jednorazowy, większy wydatek z własnej kieszeni.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['lozko-w-scianie']: {
      title: 'Łóżko w ścianie',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Designerskie, a przy tym niezwykle praktyczne rozwiązanie do domów i mieszkań o ograniczonym metrażu.
          Łóżko w ścianie pozwoli na optymalne zagospodarowanie przestrzeni – wystarczy schować je we wnęce ściany, by zyskać
          sporo dodatkowego miejsca w ciągu dnia. Pozwoli to na zachowanie harmonii, a także porządku zarówno w sypialni,
          jak i pokoju dziennym bądź dziecięcym. Nie jest to innowacyjne rozwiązanie – podobny mechanizm był znany już wiele
          lat temu i wykorzystywano go w popularnych niegdyś półkotapczanach.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Możemy je wykonać samodzielnie – wystarczy zakup specjalnego mechanizmu z ramą łóżka. By wszystko działało
          bez zarzutu, należy sprawdzić, czy mechanizmy są wykonane z wytrzymałego, solidnego metalu oraz odpowiedniej liczby sprężyn.
           Na rynku jest też mnóstwo gotowych rozwiązań, także z dodatkowym udogodnieniem w postaci obsługi zdalnej za pomocą pilota.
           Łóżko w ścianie to również doskonała propozycja dla osób, dla których prawdziwą udręką jest codziennie ścielenie.
           Dzięki odpowiednim pasom pościel można po prostu przypiąć do materaca i wraz z łóżkiem schować ją w ścianie.
           Jest to zatem nie tylko znaczna oszczędność miejsca, ale i czasu.`,
        },
        {
          type: 'PARAGRAPH',
          content: `ducenci dostarczają bogaty wybór łóżek w ścianie czy też szafie w różnych stylach oraz wymiarach,
          dzięki czemu będą się one idealnie komponować z wnętrzami urządzonymi zarówno w klasycznym, jak i nowoczesnym stylu.
          To rozwiązanie nie tylko do właścicieli małych mieszkań, ale i dla miłośników maksymalnie funkcjonalnego zagospodarowania
          przestrzeni.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
  },
};
