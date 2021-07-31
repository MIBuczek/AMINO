export interface ISingleContent {
  title: string;
  content: string[];
  [x: string]: any;
}

export interface ISingleOffert {
  [x: string]: ISingleContent;
}

export const singleOfferContent: { [x: string]: ISingleOffert } = {
  PL: {
    main: {
      title: 'Oferta',
      content: [
        `Firma Animo oferuje profesjonalne usługi związane z montażem
        i serwisem szerokiej gamy drzwi, bram, rolet oraz systemów oddymiających.
        Najnowocześniejsze rozwiązania zapewniają niezawodność i niebywałą
        żywotność naszych produktów. Bogata gama wzornictwa umożliwia
        maksymalne dostosowanie  do nawet najbardziej wygórowanych potrzeb
        bądź upodobań Klienta. Produkty Animo oferują bezpieczeństwo,
        nowoczesność oraz indywidualność, przy jednoczesnym zachowaniu
        prostoty działania i dobrego smaku. Nasze produkty objęte są
        niezawodnym serwisem, który natychmiastowo reaguje na każdą zgłoszoną usterkę.`,
      ],
    },
    ['drzwi-automatyczne']: {
      title: 'Drzwi automatyczne',
      content: [
        `Drzwi automatyczne stanowią obecnie podstawowy element wyposażenia między
            innymi obiektów usługowych oraz biurowych. Jest to wygodne, a zarazem
            nowoczesne rozwiązanie stosowane zarówno na zewnątrz, jak i wewnątrz budynków.
            Bogate wzornictwo umożliwia dowolne dostosowanie montowanych drzwi do architektury
            obiektu bądź wystroju jego wnętrza. Zaawansowane mechanizmy automatyczne dysponują
            możliwościami inteligentnej pracy i samodzielnej konfiguracji, zależnej od typu montowanych skrzydeł.`,
        `
            Zapewniamy serwis oraz montaż drzwi automatycznych firm : GEZE, ESCO, TORMAX, RECORD, BESAM, DORMA.
            `,
      ],
    },
    ['branmy-garazowe']: {
      title: 'Bramy garażowe',
      content: [
        `Bramy są kluczowym elementem każdego garażu, ponieważ pełnią funkcję zabezpieczającą zarówno przed
        nieproszonymi gośćmi, jak i nieprzyjaznymi pojazdom warunkami atmosferycznymi. Klienci decydujący
        się na wybór bram garażowych marki Animo, mają pewność ich solidności i niezawodności.
        Ogromne możliwości personalizacji umożliwiają wykonanie gotowego produktu według ściśle
        określonych wymogów kupującego – zarówno jeśli chodzi o wymiary, jak i wzornictwo.
        W naszej ofercie znajdują się między innymi segmentowe bramy garażowe, bramy garażowe rolowane,
        uchylne bramy garażowe czy bramy garażowe rozwierne.`,
        `W naszej ofercie do nabycia znajdą Państwo bramy garażowe firm: Wiśniowski, Krispol, Wayne-Dalton.`,
        `Zapewniamy serwis oraz montaż bram garażowych wszystkich producentów`,
      ],
    },
    ['rolety-zewnetrzne']: {
      title: 'Rolety zewnętrzne i wewętrzne',
      content: [
        `Rolety stanowią doskonałe zabezpieczenie przed czynnikami zewnętrznymi. Stanowią bardzo dobrą izolację
        cieplną zapewniając oszczędność energii. Izolują akustycznie, zabezpieczają przed hałasem i obciążeniami z zewnątrz.
        Chronią przed wiatrem, deszczem, nadmiernym nasłonecznieniem. Niewątpliwie koronnym atutem rolet zewnętrznych jest
        zapewnienie bezpieczeństwa domownikom, dzięki zabezpieczeniom antywłamaniowym oraz mocnym pancerzom rolety
        zdecydowanie utrudniają włamanie i chronią przed wandalizmem.`,
        `Oferujemy różnego rodzaju systemy zabudowań rolet zewnętrznych:`,
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
    ['drzwi-drewniane']: {
      title: 'Drzwi drewniane wejściowe i wewnętrzne',
      content: [
        `Drzwi stanowią jeden z najistotniejszych, a mimo to rzadko docenianych elementów wnętrza.
        Właściwie dobrane i zamontowane będą nam służyć przez lata, dlatego warto zastanowić się nad ich wyborem.`,
        `W naszej ofercie znajdziecie Państwo bardzo szeroki wybór drzwi: proponujemy między innymi drzwi drewniane, 
        wewnętrzne, zewnętrzne oraz drzwi jedno- i dwuskrzydłowe. Dzięki naszemu profesjonalnemu montażowi drzwi będą 
        działać przez wiele lat, a nasz serwis szybko upora się z każdą, nawet najdrobniejszą usterką.`,
      ],
    },
    ['bramy-przemyslowe']: {
      title: 'Bramy przemysłowe',
      content: [
        `Bramy przemysłowe firmy Animo stanowią doskonałe rozwiązanie do hal produkcyjnych i magazynowych, 
          salonów sprzedaży, warsztatów czy myjni samochodowych. Cechuje je przede wszystkim nowoczesność 
          oraz bezpieczeństwo i trwałość. W ofercie dostępne są zarówno starannie wykonane bramy segmentowe, 
          jak i rolowane. Każde z nich można ponadto dowolnie dostosować do indywidualnych upodobań Klienta.`,
      ],
    },
    ['systemy-oddymiania']: {
      title: 'Systemy oddymiania',
      content: [
        `Profesjonalne systemy oddymiania odgrywają ogromną rolę w przypadku wystąpienia pożaru. 
          Pozwalają na usunięcie dymu oraz nadmiernego ciepła ze strefy objętej zagrożeniem, ułatwiając 
          ewakuację, a także zmniejszając temperaturę wewnątrz budynku, która może zagrozić stabilności 
          konstrukcji budynku. Dzięki takim działaniom akcja gaśnicza przebiega sprawniej i bezpieczniej, 
          a straty materialne zostają ograniczone.`,
      ],
    },
    ['montaz-okna-pcv']: {
      title: 'Okna PVC i Aluminium : VEKA',
      content: [
        `Każdy chce mieszkać ładnie, czuć się dobrze i bezpiecznie w swoich czterech kątach. 
          Jednak nie ma jednego uniwersalnego rozwiązania. Jest to kwestia indywidualna, 
          uzależniona od upodobań, gustu, trybu życia i potrzeb domowników.`,
        `Dzisiejszy rynek wychodzi naprzeciw nawet najbardziej wygórowanym potrzebom i oczekiwaniom. 
          Dlatego też nasza Firma współpracuje z wieloma producentami, dzięki czemu w naszej ofercie znajdą 
          Państwo szeroki wybór asortymentu pod względem kolorystyki oraz funkcjonalności.`,
        `MONTAŻ OKIEN WYKONUJEMY TYLKO PRZEZ AUTORYZOWANE GRUPY.`,
      ],
    },
  },
};
