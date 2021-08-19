export interface IHomeContentValue {
  starter: string;
  header: string;
  content: string;
  hideContent: string[];
}

export const homeValue: { [x: string]: IHomeContentValue } = {
  PL: {
    starter: 'NASZE WARTOŚCI',
    header:
      'Niezawodność, funkcjonalność, solidne wykonanie, terminowość i profesjonalizm – to cechy, które zdecydowanie wyróżniają naszą firmę na rynku.',
    content: `W asortymencie posiadamy produkty pochodzące wyłącznie od renomowanych i cenionych marek,
    które są gwarancją asortymentu wysokiej jakości. Oferujemy m.in. najlepszej klasy żaluzje,
    bramy garażowe, drzwi automatyczne lub wewnętrzne z montażem, a także okna aluminiowe i
    rolety zewnętrzne oraz wewnętrzne.`,
    hideContent: [
      `Z naszą pomocą postawią Państwo również dom kontenerowy, a także dom na
      wodzie. Dzięki współpracy z markami starannie wykonującymi tego typu produkty
      jesteśmy również w stanie zapewnić wyposażenie nowoczesnych, ekologicznych
      obiektów, jakimi są pasywne domy energooszczędne. Animo to również remonty
      domów standardowych czy energooszczędnych, a także serwis drzwi i okien
      aluminiowych oraz bram garażowych. Nasi wykwalifikowani konsultanci są do
      Państwa dyspozycji we Wrocławiu. Tam, oprócz naprawy i ogólnego serwisu
      proponowanych rozwiązań, z przyjemnością udzielą wielu wartościowych porad
      ułatwiających wybór idealnie dopasowanego do Państwa potrzeb produktu (jak na
      przykład łóżko w ścianie, które pozwoli na oszczędność miejsca w małych
      mieszkaniach). Niezależnie, czy będzie to brama garażowa, drzwi wewnętrzne z
      montażem lub automatyczne bądź okna – jesteśmy przekonani, że z naszym
      wsparciem dokonają Państwo dobrego wyboru.
      `,
      `
      Specjalnością naszej firmy jest również montaż rolet oraz żaluzji
      zewnętrznych. Pomożemy także przy doborze rozwiązań, wzbogacając Państwa
      energooszczędne domy pasywne, mając przy tym na uwadze optymalne
      zagospodarowanie dostępnej przestrzeni.
      `,
      `
      Zapraszamy do kontaktu i współpracy mieszkańców Wrocławia i nie tylko. Nasze
      usługi - zarówno serwis bram garażowych, rolet, okien aluminiowych oraz drzwi
      automatycznych, jak i ich montaż - zostały docenione przez klientów
      indywidualnych i przedsiębiorstwa nie tylko z Wrocławia, ale i całej Polski.
      `,
    ],
  },
  EN: {
    starter: 'OUR VALUES',
    header:
      'Reliability, functionality, solid workmanship, punctuality and professionalism - these are the features that definitely distinguish our company on the market.',
    content: `Our range of products is exclusively from reputed and appreciated brands,
      which are the guarantee of high quality assortment. We offer, among others, the best quality blinds,
      garage doors, automatic or internal doors with assembly, as well as aluminium windows and external and internal
      external and internal roller blinds.`,
    hideContent: [
      `With our help you can also build a container house, as well as a house on
      on water. Thanks to cooperation with brands carefully crafting this type of products
      we are also able to provide equipment of modern, ecological
      objects, such as passive energy efficient houses. Animo also means renovations
      standard or energy saving houses, as well as servicing of doors and aluminium
      aluminium doors and windows, as well as garage doors. Our qualified consultants are at your
      Our qualified consultants are at your disposal in Wrocław. There, in addition to repair and general servicing
      repair and general servicing of the proposed solutions, they will be happy to provide valuable advice
      to help you choose the product perfectly suited to your needs (such as
      for example a bed in the wall, which will save space in small apartments).
      apartments). Regardless of whether it is a garage door, internal door with
      installation or automatic doors or windows - we are convinced that with our
      support you will make a good choice.
      `,
      `
      The specialty of our company is also the installation of blinds and shutters
      blinds. We will also help you with the selection of solutions, enriching your
      energy-efficient passive houses, taking into account optimal
      space management.
      `,
      `
      We invite to contact and cooperate with residents of Wroclaw and beyond. Our
      services - both garage doors, roller shutters, aluminum windows and automatic
      installation - have been appreciated by individual customers and
      and enterprises not only from Wrocław but also from the whole Poland.`,
    ],
  },
};

export interface IHomeSingleService {
  title: string;
  body: string;
  img: string;
  buttonText: string;
  rout?: string;
}

export interface IHomeContentServices {
  starte: string;
  header: string;
  offert: IHomeSingleService[];
}

export const homeServices: { [x: string]: IHomeContentServices } = {
  PL: {
    starte: 'NASZE USŁUGI',
    header: 'Zapoznaj sie z nasza kompleksową ofertą',
    offert: [
      {
        title: 'Sprzedaż',
        body: 'Oferujemy szeroką gamę produktów znanych i cenionych producentów okien, drzwi, rolet i systemów fotowoltaicznych.',
        img: 'sell.svg',
        buttonText: 'Oferta',
        rout: '/oferta',
      },
      {
        title: 'Montaż i Serwis',
        body: 'Montaż i serwisowanie drzwi automatycznych, bram garażowych, rolet zewnętrznych i wiele innych.',
        img: 'service.svg',
        buttonText: 'Oferta',
        rout: '/oferta',
      },
      {
        title: 'Zgłoś usterkę',
        body: 'Zajmujemy się naprawą, serwisem oraz doradztwem w zakresie drzwi automatycznych, bram garażowych, rolet oraz systemów oddymiania.',
        img: 'help.svg',
        buttonText: 'Zgłoś',
        rout: undefined,
      },
    ],
  },
  EN: {
    starte: 'OUR SERVICES',
    header: 'Take a look at our comprehensive offer',
    offert: [
      {
        title: 'Sales',
        body: 'We offer a wide range of products from well-known and respected manufacturers of windows, doors, roller shutters and photovoltaic systems.',
        img: 'sell.svg',
        buttonText: 'Offert',
        rout: '/oferta',
      },
      {
        title: 'Installation and service',
        body: 'Installation and service of automatic doors, garage doors, exterior roller shutters and much more.',
        img: 'service.svg',
        buttonText: 'Offert',
        rout: '/oferta',
      },
      {
        title: 'Report a trouble',
        body: 'We repair, service and advise on automatic doors, garage doors, roller shutters and smoke extraction systems.',
        img: 'help.svg',
        buttonText: 'Report',
        rout: undefined,
      },
    ],
  },
};

export interface IHomeContentAbout {
  starter: string;
  header: string;
  content: string;
  img: string;
  buttonText: string;
}

export const homeAbout: { [x: string]: IHomeContentAbout[] } = {
  PL: [
    {
      starter: 'O NAS',
      header:
        'Ponad 20 lat doświadczenie w branży oraz dbanie o zadowolenie Klienta pozwoliło zająć nam znaczącą pozycję na rynku.',
      content: `Firma Animo istnieje od 1992 roku. Jakość naszych usług oraz kwalifikacje pracowników pozwalają na profesjonalne, rzetelne oraz szybkie realizacje. Wychodząc na przeciw oczekiwaniom naszych klientów dopasowujemy ofertę do ich potrzeb.`,
      img: 'about-us.jpg',
      buttonText: 'Czytaj wiecej',
    },
    {
      starter: 'ZAJMUJEMY SIĘ',
      header:
        'Montażem oraz serwisem drzwi automatycznych, bram garażowych, rolet, systemów oddymiania oraz bramami przemysłowymi.',
      content: `Firma Animo oferuje profesjonalne usługi związane z montażem i serwisem szerokiej gamy drzwi, bram, rolet oraz systemów oddymiających. Najnowocześniejsze rozwiązania zapewniają niezawodność i niebywałą żywotność naszych produktów.`,
      img: 'about-door.jpg',
      buttonText: 'Czytaj wiecej',
    },
  ],

  EN: [
    {
      starter: 'ABOUT US',
      header:
        'Over 20 years of experience in the industry and attention to customer satisfaction has allowed us to occupy a significant position in the market.',
      content: `Animo company has existed since 1992. The quality of our services and qualifications of our employees allow for professional, reliable and fast realizations. To meet the expectations of our customers we adjust our offer to their needs.`,
      img: 'about-us.jpg',
      buttonText: 'Read more',
    },
    {
      starter: 'WE DO',
      header:
        'Installation and service of automatic doors, garage doors, roller shutters, smoke removal systems and industrial doors.',
      content: `Animo company offers professional services related to installation and maintenance of a wide range of doors, gates, roller blinds and smoke ventilation systems. State-of-the-art solutions ensure reliability and incredible durability of our products.`,
      img: 'about-door.jpg',
      buttonText: 'Read more',
    },
  ],
};
