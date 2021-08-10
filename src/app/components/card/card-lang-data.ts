export interface ICard {
  header: string;
  shortTest: string;
  img: string;
  rout?: string;
  buttonText: string;
}

export interface ICardContent {
  title: string;
  description: string;
  cards: ICard[];
}

export const cardContent: { [x: string]: ICardContent } = {
  PL: {
    title: 'Nasza oferta',
    description: 'Sprawdz czym sie zajmujemy',
    cards: [
      {
        header: 'DRZWI AUTOMATYCZNE',
        shortTest: `
      W naszej ofercie do nabycia znajdą Państwo drzwi automatyczne oraz
      systemy do nich firm: GEZE oraz ESCO.`,
        img: 'oferta-1.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'DRZWI WEJŚCIOWE I WEWNĘTRZNE',
        shortTest: `
        W naszej ofercie do nabycia znajdą Państwo szeroki asortyment
        drzwi zwykłych. Zapewniamy serwis i montaż.`,
        img: 'oferta-2.jpg',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'BRAMY GARAŻOWE',
        shortTest: `
        W naszej ofercie do nabycia znajdą Państwo bramy garażowe firm:
        Wiśniowski, Krispol, Wayne-Dalton.`,
        img: 'oferta-3.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'ROLETY ZEWNĘTRZNE I WEW.',
        shortTest: `
        Oferujemy montaż oraz serwis rolet.`,
        img: 'oferta-4.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'SYSTEMY ODDYMIANIA',
        shortTest: `
        Oferujemy montaż i serwis systemów oddymiania, pożarowych a także
        zabezpieczeń pożarowych.`,
        img: 'oferta-5.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'BRAMY PRZEMYSŁOWE',
        shortTest: `
        Oferujemy szeroką gamę bram przemysłowych.`,
        img: 'oferta-6.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'USŁUGI NAPRAWCZE',
        shortTest: `
        Oferujemy szeroki zakres usług serwisowych mdz. innymi z zakresu
        stolarki otworowej, naprawy zamków.`,
        img: 'oferta-7.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
      {
        header: 'CAŁA OFERTA',
        shortTest: `
        Sprawdz cała wachlaż naszych usług.`,
        img: 'oferta-8.jpg',
        rout: '/oferta',
        buttonText: 'czytaj wiecej',
      },
    ],
  },
  EN: {
    title: 'Our offer',
    description: 'Check what we do',
    cards: [
      {
        header: 'AUTOMATIC DOORS',
        shortTest: `
      In our offer you will find automatic doors and
      systems for them: GEZE and ESCO.`,
        img: 'oferta-1.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'ENTRY AND INTERIOR DOORS',
        shortTest: `
      In our offer you will find a wide range of
      ordinary doors. We provide service and installation.`,
        img: 'oferta-2.jpg',
        buttonText: 'read more',
      },
      {
        header: 'GARAGE DOORS',
        shortTest: `
      In our offer to purchase you will find garage doors from companies:
      Wiśniowski, Krispol, Wayne-Dalton.`,
        img: 'oferta-3.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'EXTERNAL AND INTERNAL SHUTTERS.',
        shortTest: `
      We offer installation and service of roller shutters.`,
        img: 'oferta-4.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'SMOKE EXTRACTION SYSTEMS',
        shortTest: `
      We offer installation and service of smoke and heat exhaust systems as well as
      fire protection systems.`,
        img: 'oferta-5.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'INDUSTRIAL GATES',
        shortTest: `
      We offer a wide range of industrial doors.`,
        img: 'oferta-6.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'EPAIR SERVICES',
        shortTest: `
      We offer a wide range of services, among others in the field of
      woodworking, repairing locks.`,
        img: 'oferta-7.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
      {
        header: 'THE WHOLE OFFER',
        shortTest: `
      Check out our full range of services.`,
        img: 'oferta-8.jpg',
        rout: '/oferta',
        buttonText: 'read more',
      },
    ],
  },
};
