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
          content: `Producenci dostarczają bogaty wybór łóżek w ścianie czy też szafie w różnych stylach oraz wymiarach,
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
  EN: {
    main: {
      title: 'Offer',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Animo company offers professional services related to installation
          and service of a wide range of doors, gates, roller shutters and smoke extraction systems.
          State-of-the-art solutions ensure reliability and extraordinary
          durability of our products. A wide range of design allows
          maximum adaptation to even the most exaggerated needs or
          or customer preferences. Animo products offer safety,
          modernity and individuality, while maintaining simplicity
          simplicity and good taste. Our products are covered by
          a reliable service that responds immediately to any reported defect.`,
        },
      ],
      contact: {
        person: 'Biuro obsługi',
        email: 'animo@animo.wroclaw.pl',
        phone: '+48 601 956 901',
      },
    },
    ['drzwi-automatyczne']: {
      title: 'Automatic doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Automatic doors are nowadays a basic element of equipment in
          This is both convenient and at the same time safe. It is a comfortable and modern
          It is a comfortable and modern solution used both outside and inside buildings.
          Rich design makes it possible to adjust doors to the architecture of the building or its interior.
          architecture of the building or its interior design. Advanced automatic mechanisms offer
          possibilities of intelligent operation and independent configuration, depending on the type of mounted wings.`,
        },
        {
          type: 'PARAGRAPH',
          content: `We provide service and installation of automatic doors of companies :`,
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
      title: 'Garage doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Gates are a key element of every garage, because they perform the function of protection against both
          uninvited guests and unfriendly weather conditions. Customers who decide
          choosing Animo brand garage doors, are sure of their solidity and reliability.
          Huge possibilities of personalization make it possible to manufacture a finished product according to specific
          requirements of the buyer - both in terms of dimensions and design.
          Our offer includes, among others, sectional garage doors, rolling garage doors,
          overhead garage doors or swing garage doors.`,
        },
        {
          type: 'PARAGRAPH',
          content: `In our offer to purchase you will find garage doors from companies:`,
        },
        {
          type: 'HEADER',
          content: `Wiśniowski, Krispol, Wayne-Dalton.`,
        },
        {
          type: 'PARAGRAPH',
          content: `We provide service and installation of garage doors of all manufacturers`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['rolety-zewnetrzne']: {
      title: 'External and internal roller blinds',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Roller blinds provide excellent protection against external factors. They provide very good thermal insulation
          providing energy savings. They insulate acoustically, protect against noise and external loads.
          They protect against wind, rain, excessive sunlight. Undoubtedly, the main advantage of external roller blinds is
          they ensure the safety of household members, thanks to anti-burglary protection and strong armouring
          make it much more difficult to break in and protect against vandalism.`,
        },
        {
          type: 'LIST',
          headerList:
            'We offer various types of building systems for external roller shutters:',
          items: [
            `Standard system - with visible rectangular or oval window box, mounted to the existing window frame or on the wall in front of it.
            on the wall in front of it. Also offered in a version with integrated insect screen.`,
            `Overlay system - a solution used during window joinery replacement. The roller shutter system is connected with the window or door frame
            The roller shutter system is connected with the window or door frame by means of an adaptation bar. Inspection flap on the back side of the box or from the bottom (for building in).
            An additional advantage of the system is sealing the guides and the use of noise-making brushes.
            The shutter boxes are insulated inside and equipped with a profile supporting an external plaster.
            It is also offered in a version with an integrated insect screen.`,
            `The concealed system - fixed in the wall recess above the window opening, is a modern solution for newly erected buildings,
            as well as in existing buildings, in a word for all those who are not indifferent to energy efficiency.`,
            `We offer different variants of controls for external roller shutters:`,
            `Manual drive - tape or cord retractor, crank retractor, crank gear.`,
            'Spring Drive.',
            'Electric drive - wire and radio control (individual, group or central control).',
            `An unquestionable advantage of external roller blinds is their function of additional protection against uninvited guests.
            External roller shutters can be equipped with a number of blockades protecting against lifting the armour from outside:`,
            `Manual latches - which is a manual safety device mounted in the bottom bar.`,
            `Automatic armour closing device - automatically blocks the armour when it is completely lowered and unblocks it when opened by means of
            tape or cord, used in roller blinds with manual operation.`,
            `Basquil lock - it is a lock mounted in the end strip with a keyed cylinder on both sides.
            The solution used mainly in roller blinds with spring drive.`,
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
      title: 'Wooden front doors and interior doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Doors are one of the most important, yet rarely appreciated elements of the interior.
          Properly selected and installed, they will serve us for years, so it is worth considering their selection.`,
        },
        {
          type: 'PARAGRAPH',
          content: `In our offer you will find a very wide selection of doors: we propose among others wooden doors,
          We offer wooden doors, internal doors, external doors and single and double leaf doors. Thanks to our professional installation the doors will
          work for many years, and our service will quickly deal with any, even the smallest fault.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['bramy-przemyslowe']: {
      title: 'Industrial doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Animo industrial doors are the perfect solution for production halls and warehouses,
          showrooms, workshops or car washes. They are characterized primarily by modernity
          and safety and durability. The offer includes both carefully crafted sectional doors,
          as well as rolling doors. Each of them can be freely adjusted to individual customer preferences.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['systemy-oddymiania']: {
      title: 'Smoke ventilation systems',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Professional smoke ventilation systems play an important role in case of fire.
          They allow smoke and excessive heat to be removed from the affected area, facilitating
          They also reduce the temperature inside the building, which can threaten the stability of the
          building structure. Thanks to such actions, the firefighting action runs more efficiently and safely,
          and material losses are reduced.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['montaz-okna-pcv']: {
      title: 'PVC and aluminium windows : VEKA',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Everyone wants to live nicely, feel good and safe in their four corners.
          However, there is no one universal solution. It is an individual issue,
          It depends on tastes, preferences, lifestyle and needs of household members.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Today's market meets even the most demanding needs and expectations.
          Therefore, our company cooperates with many manufacturers, so in our offer you will find
          wide range of assortment in terms of color and functionality.`,
        },
        {
          type: 'HEADER',
          content: `INSTALLATION OF WINDOWS IS CARRIED OUT ONLY BY AUTHORIZED GROUPS.`,
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['uslugi']: {
      title: 'Repair services',
      body: [
        {
          type: 'PARAGRAPH',
          content: `In case of appearing a defect or damage to a door, the Animo company provides professional
          advice and service. Our specialists, after getting acquainted with the details of the defect, immediately undertake the necessary
          repairs at the customer's premises. The service has its own spare parts, which significantly reduces repair time. In case
          the defect cannot be repaired, the Customer shall be presented with the offer of Animo company, together with the possibility of
          products to other elements of interior design of a house, apartment or hall.`,
        },
        {
          type: 'LIST',
          headerList: 'Door repair, installation, service:',
          items: ['Aluminum', 'PCW', 'Wooden', 'Steel', 'Automatic'],
        },
        {
          type: 'LIST',
          headerList: 'Window repair, installation, service:',
          items: [
            'Aluminum',
            'PCW',
            'Wooden',
            'Steel',
            'Repair, installation, maintenance of roller shutters',
          ],
        },
        {
          type: 'LIST',
          headerList: 'General construction work:',
          items: [
            'Masonry',
            'Plastering',
            'Painting',
            'Insulation',
            'Floor screed',
            'Tiling and terracotta',
            'Forging, alterations, demolition',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Plumbing work:',
          items: [
            'Emergency repairs',
            'New installations',
            'Alteration of existing installations',
            'Cleaning and repiping pipes up to 150 mm in diameter',
            'Emergency repairs',
            'New installations',
            'Conversion of existing installations',
            'Cleaning and repiping of installations up to 150mm in diameter',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Sewer Cleaning:',
          items: [
            `Electric pipe and drain cleaning machine - REMS Cobra 22/32 for cleaning of pipes Ø 20 - 150 mm, with connecting spirals,
            Cleaning chains or cutters for efficient, fast work. Even in difficult situations,
            e.g. with hard stubs and hard deposits`,
            'Electric Pressure Pusher',
            `RIDGID water jetter for drain cleaning. Flexible, lightweight pressure hose
            penetrates through blockages of sewage sludge, soap and grease. When the hose is pulled out, the system is
            When the hose is pulled out, the system is flushed under pressure, which flushes out the deposits and restores the patency of the sewer.`,
          ],
        },
        {
          type: 'LIST',
          headerList: 'Electrical work up to 1 KV:',
          items: ['Emergency repairs', 'New electrical installations'],
        },
      ],
      contact: {
        person: 'Marcin Korzeniewski',
        email: 'animos.marcin@gmail.com',
        phone: '+48 607 766 901',
      },
    },
    ['drzwi-zewnetrzne']: {
      title: 'Wooden exterior doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Cooperation with leading door manufacturers, offering the highest quality of their products is
          unquestionable asset of our company. Sales conducted by us, abounding in a rich offer in which we can
          which includes wooden doors, gives our customers the confidence to meet even the most demanding conditions.
          Individual approach to each Contractor allows maximum personalization of ordered goods,
          which guarantees a successful transaction.`,
        },
        {
          type: 'HEADER',
          content: `ORDER A MEASUREMENT!`,
        },
        {
          type: 'PARAGRAPH',
          content: `We encourage you to contact our consultants to arrange the details of your order.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['drzwi-wewnetrzne']: {
      title: 'Internal doors (with assembly) Wrocław',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Animo company has been operating in Wroclaw since 1992. It deals with comprehensive service and installation
          automatic and industrial doors, garage doors, roller shutters and smoke removal systems.`,
        },
        {
          type: 'PARAGRAPH',
          content: `With over twenty years of practice, our company has gained professional experience
          in the industry we work in. Animo is a flexible company and always acts in the best interests of our customers.
          We offer our customers a wide range of choices, offering entrance doors and various interior doors, including automatic doors.
          Our doors are of the highest quality and careful workmanship thanks to which they are characterized by elegant design,
          tightness and durability. Customers who opt for them will serve in perfect condition for many years, which is undoubtedly their main advantage.
          is their main advantage.`,
        },
        {
          type: 'PARAGRAPH',
          content: `The goods that we offer our customers are of course doors with installation. Wroclaw has already convinced itself many times,
          that this service is performed quickly, efficiently and reliably. Animo company also cooperates with several other
          companies, which in the same industry occupy a leading place in the market, which greatly increases our flexibility and ability
          and ability to adapt to customer needs. This allows us to offer you the best interior doors on the market.
          Wroclaw has been proud of Animo company for many years. During this time the company has gained a significant number of customers,
          and thanks to the satisfaction of contractors their number is still growing. Our doors with installation are a high-class service, which is constantly growing in popularity among customers.
          constantly growing popularity among customers.`,
        },
        {
          type: 'PARAGRAPH',
          content: `We always provide our services reliably and professionally because we care about trust and satisfaction of our customers.
          We do not treat our work only as a duty and we devote ourselves to making doors with passion and devotion. Thanks to cooperation with
          many leading companies we provide top class interior doors made of the highest quality products.
          Wroclaw has already convinced itself more than once that this is the best offer on the local market. We invite you to contact and cooperate with us.`,
        },
        {
          type: 'HEADER',
          content: `ORDER A MEASUREMENT!`,
        },
        {
          type: 'PARAGRAPH',
          content: `We encourage you to contact our consultants to arrange the details of your order.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['drzwi-automatyczne-sprzedaz']: {
      title: 'Automatic doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Automatic doors are nowadays a basic element of equipment in service and office facilities, among others.
          It is a comfortable and modern solution used both outside and inside buildings. Rich design
          rich design makes it possible to freely adjust the installed doors to the architecture of the building or its interior.
          Advanced automatic mechanisms offer the possibility of intelligent operation and independent configuration,
          Depending on the type of mounted wings.`,
        },
        {
          type: 'HEADER',
          content: `ZORDER A MEASUREMENT!`,
        },
        {
          type: 'PARAGRAPH',
          content: `In our offer you can buy automatic doors and systems for them from`,
        },
        {
          type: 'HEADER',
          content: `GEZE`,
        },
        {
          type: 'LIST',
          headerList: 'Swing door systems:',
          items: ['TSA', 'EMD', 'ECturn'],
        },
        {
          type: 'LIST',
          headerList: 'Sliding door systems',
          items: ['Slimdrive', 'ECdrive', 'Powerdrive', 'TSA 360 NT'],
        },
        {
          type: 'LIST',
          headerList: 'Revolving doors:',
          items: [
            'TSA 325 NT  manual drive',
            'TSA 325 NT „Push&Go"',
            'TSA 325 NT automatic',
          ],
        },
        {
          type: 'HEADER',
          content: `ESCO`,
        },
        {
          type: 'LIST',
          headerList: 'Products:',
          items: [
            'Swing Door Automation - Escomatic',
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
          headerList: 'Products:',
          items: [
            'Sliding doors',
            'Swinging doors',
            'Revolving doors',
            'Folding doors',
          ],
        },
        {
          type: 'HEADER',
          content: `RECORD`,
        },
        {
          type: 'LIST',
          headerList: 'Products:',
          items: [
            'Record 20',
            'Record 20 RED',
            'FULL POWER (standard)',
            'Standard 2, and 4 leaf folding doors',
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
      title: 'Garage doors',
      body: [
        {
          type: 'PARAGRAPH',
          content: `We offer products that not only affect the level of security of household members and their property,
          but also protect your vehicle against adverse weather conditions that could damage them.
          Garage doors, as they are herein referred to, must be characterized by the highest care in workmanship and extraordinary solidity - only
          only then they will be able to serve you for years without the need to spend additional money on their repair.
          Such are the products offered by us of the Wiśniowski, Krispol and Wayne-Dalton brands.`,
        },
        {
          type: 'PARAGRAPH',
          content: `If you are from Wroclaw or the surrounding area, we invite you to familiarize yourself with our offer. As part of our services
          we take measurements, allowing for personalization of garage door to your needs and aesthetic preferences.
          In addition, we also deal with the installation and service of our products.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Below are the types of products offered by our manufacturers.`,
        },
        {
          type: 'HEADER',
          content: `Wiśniowski`,
        },
        {
          type: 'LIST',
          headerList: 'Products:',
          items: [
            'Segmented',
            'Roller shutter',
            'Tilt',
            'Turn-On',
            'DST steel doors',
          ],
        },
        {
          type: 'HEADER',
          content: `Krispol`,
        },
        {
          type: 'LIST',
          headerList: 'Products:',
          items: [
            'Segmented - steel',
            'Segmented - aluminium',
            'Segments with increased resistance',
            'Roll-up',
          ],
        },
        {
          type: 'HEADER',
          content: `Wayne-Dalton`,
        },
        {
          type: 'LIST',
          headerList: 'Products:',
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
      title: 'Internal and external roller blinds',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Products offered by Animo from Wrocław are a guarantee of quality and durability, even under heavy use.
          Our offer consists only of products from reliable manufacturers, which ensures maximum reliability and customer satisfaction.
          A wide range of internal and external roller blind designs makes it possible to find a product tailored to specific needs.
          External and internal roller blinds are becoming the basic equipment of all ecological facilities, which are
          energy-efficient passive houses. A group of qualified advisors will be happy to help you choose the most suitable offer
          even the most demanding customers.`,
        },
        {
          type: 'PARAGRAPH',
          content: `We invite you to contact us for a measurement. In this way we will be able to
          provide you with properly fitted interior and exterior roller blinds with manual, spring or electric drive,
          which will be a perfect addition to your passive energy-saving houses.`,
        },
        {
          type: 'LIST',
          headerList:
            'We offer different variants of controls for external blinds for passive houses:',
          items: [
            'Manual drive - tape or cord retractor, crank retractor, crank gear',
            'Spring drive',
            'Electric drive - hard-wired and radio-controlled (individual, group or central control)',
          ],
        },
        {
          type: 'LIST',
          headerList:
            'Additionally, energy-efficient solutions that are outside can be equipped with various safety features, such as:',
          items: [
            'Manual latches in lower slat',
            'Automatic latch',
            'Basquila locks in the end rail',
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
      title: 'PVC and aluminium windows',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Our company offers a wide range of elements that are the basis for the finishing of every house and apartment.
          The variety of PVC and aluminium windows, which are in our assortment, will make it possible for each customer to
          find the right solution for themselves. If you are renovating your premises and are facing the choice on which windows to bet
          windows, our qualified consultants, who are at your disposal in our showroom in Wrocław, will gladly give you some valuable advice.
           will give you some valuable advice.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Something that additionally distinguishes us is providing professional installation of the products we offer.`,
        },
        {
          type: 'LIST',
          headerList: 'We have the following profiles in our assortment:',
          items: [
            'Alphaline',
            'Perfectline semi-sliced',
            'Revento',
            'Swingline',
          ],
        },
        {
          type: 'HEADER',
          content: `Feel free to order a professional measurement to create the perfect fit.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['malowanie-scian']: {
      title: 'Painting the walls',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Sometimes it is enough to make small changes to give the interior a completely new character without the need for expensive and time-consuming
          time-consuming renovation works. That is why we offer you professional painting of walls according to your individual preferences.
          We will also help you choose the right paint and other preparations, which will provide a spectacular and above all
          lasting effect. We perform our services both on smaller and larger surfaces.`,
        },
        {
          type: 'PARAGRAPH',
          content: `You may think that painting walls is trivial and doesn't require hiring professionals. Not necessarily.
          Sometimes it is not enough to buy paint, a brush and a roller and good intentions. If we do not have experience in this type of work or do
          have at our disposal appropriate equipment, it is worth using the services of a reliable team. This will ensure that the interior will be
          changed quickly and the end result will be 100% satisfactory. It is also extremely important to properly
          preparation of the ground, as well as securing doors, radiators, furniture, windows or floors. In case of unevenness
          unevenness of the wall, chipped or cracked plaster, as well as dirt and remains of old paint, it will be necessary to thoroughly
          removal and priming. We will also make appropriate calculations taking into account the surface and
          We will also make the appropriate calculations taking into account the surface, as well as the necessary number of layers to be applied,
          which will allow you to purchase the optimal amount of paint.`,
        },
        {
          type: 'PARAGRAPH',
          content: `When painting walls it is also necessary to provide adequate lighting, which will help to control
          the accuracy of paint distribution, avoiding the formation of possible unevenness or unsightly streaks`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['ukladanie-plytek']: {
      title: 'Tiling',
      body: [
        {
          type: 'PARAGRAPH',
          content: `We offer our customers comprehensive support for the installation of ceramic tiles both on the wall,
          as well as on the floor. We know that these works require not only careful execution and special precision, but also appropriate
          preparation. Therefore, we will make accurate calculations, which will allow you to purchase a sufficient number of tiles. This will allow you to avoid
          unpleasant surprises and stoppage of work caused by a nervous search for identical tiles in stores or wholesalers.
          wholesalers.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Before you start laying the tiles, prepare the surface carefully. It has to be even, clean and dry.
          Then, make a test, i.e. arrange the tiles "dry", which will allow you to plan the arrangement.
          It often happens that it is necessary to cut the tiles - that is why, it is worth to plan the arrangement in advance in such a way that
          cut elements are located in less visible places. When arranging the tiles, we use distance crosses and
          When laying the tiles, use distance crosses and strips, and regularly check the evenness of the arrangement with a spirit level.
          This will allow you to detect any irregularities and correct them immediately before the adhesive has time to dry.
          To increase the bonding, gently press each tile to the substrate, which ensures even distribution of
          mortar underneath, and thus a more durable end result.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Laying tiles is also connected with the necessity of careful finishing.
          Therefore, after the glue dries, we do the grouting, as well as installing finishing elements such as skirting boards
          skirting boards or ceramic plinths.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['instalacje-hydrauliczne']: {
      title: 'Plumbing and electrical installations',
      body: [
        {
          type: 'PARAGRAPH',
          content: `We perform a wide range of plumbing and electrical services. These are both emergency repairs
          emergency, as well as alterations or installation of new installations. We have not only extensive experience and knowledge,
          but also all authorizations to perform this type of work (including electrical SEP to 1 kV). This is of particular importance
          This is particularly important in the case of electrical installations, because repairs and alterations made by unauthorized persons could
          cause a threat not only to the health but also the lives of people using the object (risk of overloading or short
            short-circuit, which may cause a serious fire).`,
        },
        {
          type: 'PARAGRAPH',
          content: `In case of water and sewage works, we additionally offer cleaning and piping of installations with
          diameter up to 150 mm. For this purpose, we use both the electric and the water pressure pipe pusher RIDGID,
          This ensures efficient and effective work even with hard deposits and plugs.
          We remove bothersome blockages from soap, grease and sewage sludge and restore the proper permeability of the sewer, making it easy to clean.
          We will also restore the sewer's patency so that it can be used without any problems on a daily basis. You can count on our help not only in solving
          You can count on our assistance not only in solving emergency situations (diagnosing the source of failure and the immediate initiation of corrective measures), but also in creating installations from scratch.
          installation from scratch.`,
        },
        {
          type: 'PARAGRAPH',
          content: `When performing work, we take special care to maintain all safety standards. It is also worth noting,
          that we have many spare parts at our disposal, which in many cases allows for a significant reduction of repair time.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['domy-kontenerowe']: {
      title: 'Container homes',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Living in a container does not sound very interesting and many people associate it with makeshift social housing for the
          the poorest. And this is a huge mistake! Container house is currently an extremely modern and functional
          offer for particularly demanding people!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Energy-saving solutions, quick construction, much less paperwork than building a traditional house,
          as well as exceptional comfort and innovative design. This is a brief description of container houses, which in no way differ from other buildings.
          from other buildings.`,
        },
        {
          type: 'HEADER',
          content: `What does a container house look like?`,
        },
        {
          type: 'PARAGRAPH',
          content: `The container house is assembled (literally) from segments. The structure is made in the production hall and
          is brought to the customer ready to be placed in a specific place with the help of a crane or an elevator. Container can be
          placed on previously prepared foundations or the roof of an existing building. It takes a while and all that is left
          only finishing according to individual preferences and connecting the necessary media.`,
        },
        {
          type: 'PARAGRAPH',
          content: `A container house does not mean a tin barrack associated mainly with a construction site. It is an elegant object,
          It can be finished in any way you like - for example, glass walls will give it exclusiveness as well as elements made of wood or other materials.
          or other materials.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Inside, it is no different from a traditional building. Depending on the project there may be a kitchen, a bathroom,
          as well as any number of other rooms. This gives comfortable conditions for everyday living.`,
        },
        {
          type: 'PARAGRAPH',
          content: `With proper insulation, the interior stays warm even during cold winter weather. It also eliminates the risk of
          overheating during the summer heat.`,
        },
        {
          type: 'HEADER',
          content: `How is it different from a traditional house?`,
        },
        {
          type: 'PARAGRAPH',
          content: `Above all, construction time is an important consideration. Traditional buildings often take years to build and require
          hard work of a large number of people. In the case of modular structures, it is only a few months. The building is constructed
           The building is constructed in a production hall and erected in the target place within one day. Thanks to this we have order on the plot and there is no
           There is no question of any mess as on traditional construction sites. The only disadvantage of such a quick realization may be
           financial issues. Although the costs are lower than in case of brick house construction, but we have to reckon with
           with practically one time bigger expense - in case of traditional construction these costs are spread
           spread in time and are associated with individual stages of work over several years.`,
        },
        {
          type: 'HEADER',
          content: `What is the Polish law on this?`,
        },
        {
          type: 'PARAGRAPH',
          content: `A container house is not subject to as many legal restrictions as a traditional house. Admittedly, it is not required to obtain
          to obtain a building permit, but it should be remembered that even here there is a "catch". If the object will be
          used in one place for more than 180 days, then it is treated as a standard
          If the object will be used in one place for a period exceeding 180 days, then it is treated as a standard residential building
          and it is required to obtain appropriate permits, including construction permits.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['domy-na-wodze']: {
      title: 'Houses on the water',
      body: [
        {
          type: 'PARAGRAPH',
          content: `It is a dream of anyone who loves unconventional solutions, as well as exceptional closeness to nature and freedom. A house
          on water has long been out of the realm of dreams and without any major problems you can become its owner also in Poland!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Despite appearances, a house on the water can successfully be a year-round residential facility. Thanks to its appropriate
          construction and finishing is fully safe and provides comfortable conditions for use. Inside, it does not differ from
          inside it does not differ from traditional buildings - it consists not only of a room from which you can admire beautiful views.
          It also includes a kitchen and a bathroom and everything you need for everyday living.`,
        },
        {
          type: 'LIST',
          headerList: 'Where can such a structure be placed?',
          items: [
            `The site must be our property - otherwise permission from the owner or the relevant authority is required`,
            'Mooring and shoreline fees must be paid',
            `Ensure that the site is not under the protection of a building conservation officer or already included in plans for
            shoreline development plans`,
            `Ensure that the facility will not obstruct vessels - a permit from the
            Inland Waterways Authority`,
            `The local district governor must issue a water permit (the document is valid for up to 20 years).`,
          ],
        },
        {
          type: 'HEADER',
          content: `Afety above all`,
        },
        {
          type: 'PARAGRAPH',
          content: `Bearing in mind the specific use and location of the structure, the contractors use only proven
          technologies and extremely durable materials. The structure is extremely lightweight, with a high buoyancy and is based
          The structure is extremely light, with high buoyancy and is based on a skeleton construction connected to a float. The materials used are resistant not only to mechanical
          The materials used are resistant not only to mechanical damage, but also to water, which could cause damage in the form of rust, cracking, swelling, etc.`,
        },
        {
          type: 'HEADER',
          content: `Access to utilities`,
        },
        {
          type: 'PARAGRAPH',
          content: `In the house on the water you can easily watch TV or use the refrigerator and lighting.
          It is powered by electricity from land or from its own generator. There are also special tanks installed
          for water and sewage. The facilities are also heated (usually by electric heating).
          Alternative energy sources are also available.`,
        },
        {
          type: 'HEADER',
          content: `Not just for the rich`,
        },
        {
          type: 'PARAGRAPH',
          content: ` house on water is sometimes associated with more prestige, luxury and wealth, as well as an avant-garde lifestyle.
          However, despite appearances, it is not a solution reserved for the wealthiest. The cheapest option is to buy a ready-made object,
          In the case of an individual project you have to reckon with slightly higher expenses. However, the cost of such construction is
          much lower than in the case of a traditional house. It is not only about the costs associated with the construction of the object, but also the lack
          need to purchase a plot of land. The only disadvantage may be the fact that a house on water is not treated in Polish law as a
          treated in Polish law as a residential building, therefore it is not possible to obtain a mortgage from a bank for the
          The only drawback here may be the fact that a house on the water is not treated as a residential building under Polish law.`,
        },
      ],
      contact: {
        person: 'Ryszard Piegza',
        email: 'stolarka@animo.wroclaw.pl',
        phone: '+48 601 95 56 56',
      },
    },
    ['lozko-w-scianie']: {
      title: 'Bed in the wall',
      body: [
        {
          type: 'PARAGRAPH',
          content: `Designer and at the same time extremely practical solution for houses and apartments with limited space.
          Bed in the wall will allow for optimal use of space - just hide it in the recess of the wall, to gain
          It is enough to hide it in a recess in the wall to gain a lot of extra space during the day. This will allow you to maintain harmony, as well as order both in the bedroom,
          as well as in the living room or in the children's room. It is not an innovative solution - a similar mechanism was already
          It is not an innovative solution - a similar mechanism was already known many years ago and was used in the once popular half-sleeper sofa.`,
        },
        {
          type: 'PARAGRAPH',
          content: `We can make them ourselves - just buy a special mechanism with the bed frame. In order for everything to work
          to work perfectly, you should check whether the mechanisms are made of durable, solid metal and the right number of springs.
           There are also plenty of ready-made solutions on the market, also with the added convenience of remote control operation.
           A bed in the wall is also a great option for people for whom a real torment is the daily bedding.
           With the right straps, the bed linen can simply be clipped to the mattress and stored in the wall together with the bed.
           This not only saves space but also time.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Manufacturers provide a wide selection of beds in the wall or closet in different styles and sizes,
          thanks to which they will perfectly fit into interiors decorated in both classic and modern style.
          This solution is not only for owners of small apartments, but also for lovers of maximum functional use of space.
          space.`,
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
