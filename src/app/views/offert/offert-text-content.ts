export interface IHeader {
  header: string;
  subHeader: string;
}

export const offertHeader: { [x: string]: IHeader } = {
  PL: {
    header: 'Oferta',
    subHeader: 'Sprawdz cały wachlarz naszej oferty',
  },
  EN: {
    header: 'Offert',
    subHeader: 'Check out our entire offert range',
  },
};

export interface INavItem {
  name: string;
  rout: string;
}

export interface INavOffer {
  title: string;
  rout: string;
  subLinks: INavItem[];
}

export const offerContent: { [x: string]: INavOffer[] } = {
  PL: [
    {
      title: 'Montaż i serwis',
      rout: 'montaz',
      subLinks: [
        {
          name: 'Drzwi automatyczne',
          rout: 'drzwi-automatyczne',
        },
        {
          name: 'Bramy garażowe',
          rout: 'bramy-garazowe',
        },
        {
          name: 'Rolety zewnętrzne i wew.',
          rout: 'rolety-zewnetrzne',
        },
        {
          name: 'Bramy przemysłowe',
          rout: 'bramy-przemyslowe',
        },
        {
          name: 'Drzwi drewniane wejściowe i wewnętrzne',
          rout: 'drzwi-drewniane',
        },
        {
          name: 'Systemy oddymiania',
          rout: 'systemy-oddymiania',
        },
        {
          name: 'Okna PVC i Aluminium',
          rout: 'montaz-okna-pcv',
        },
      ],
    },
    {
      title: 'Usługi naprawcze',
      rout: 'uslugi-naprawcze',
      subLinks: [
        {
          name: 'Usługi',
          rout: 'uslugi',
        },
      ],
    },
    {
      title: 'Sprzedaż',
      rout: 'sprzedaz',
      subLinks: [
        {
          name: 'Drzwi zewnętrzne',
          rout: 'drzwi-zewnetrzne',
        },

        {
          name: 'Drzwi wewnętrzne',
          rout: 'drzwi-wewnetrzne',
        },
        {
          name: 'Drzwi automatyczne',
          rout: 'drzwi-automatyczne-sprzedaz',
        },
        {
          name: 'Bramy garażowe',
          rout: 'bramy-garazowe-sprzedaz',
        },
        {
          name: 'Rolety zewnętrzne i wewętrzne',
          rout: 'rolety-zewnetrzne-sprzedaz',
        },
        {
          name: 'Okna PVC i Aluminium',
          rout: 'okna-pcv',
        },
      ],
    },
    {
      title: 'Remonty budowlane',
      rout: 'remonty',
      subLinks: [
        {
          name: 'Malowanie ścian',
          rout: 'malowanie-scian',
        },
        {
          name: 'Układanie płytek',
          rout: 'ukladanie-plytek',
        },
        {
          name: 'Instalacje hydrauliczne i elektr',
          rout: 'instalacje-hydrauliczne',
        },
      ],
    },
    {
      title: 'Domy energooszczędne',
      rout: 'domy',
      subLinks: [
        {
          name: 'Domy kontenerowe',
          rout: 'domy-kontenerowe',
        },
        {
          name: 'Domy na wodzie',
          rout: 'domy-na-wodze',
        },
        {
          name: 'Łóżko w ścianie',
          rout: 'lozko-w-scianie',
        },
      ],
    },
  ],

  EN: [
    {
      title: 'Installation and service',
      rout: 'montaz',
      subLinks: [
        {
          name: 'Automatic doors',
          rout: 'drzwi-automatyczne',
        },
        {
          name: 'Garage doors',
          rout: 'bramy-garazowe',
        },
        {
          name: 'External and internal roller blinds.',
          rout: 'rolety-zewnetrzne',
        },
        {
          name: 'Industrial doors',
          rout: 'bramy-przemyslowe',
        },
        {
          name: 'moke ventilation systems',
          rout: 'systemy-oddymiania',
        },
      ],
    },
    {
      title: 'Repair services',
      rout: 'uslugi',
      subLinks: [
        {
          name: 'Services',
          rout: 'uslugi',
        },
      ],
    },
    {
      title: 'Sales',
      rout: 'sprzedaz',
      subLinks: [
        {
          name: 'Exterior doors',
          rout: 'drzwi-zewnetrzne',
        },
        {
          name: 'Internal doors',
          rout: 'drzwi-wewnetrzne',
        },
        {
          name: 'Automatic doors',
          rout: 'drzwi-automatyczne-sprzedaz',
        },
        {
          name: 'Garage doors',
          rout: 'bramy-garazowe-sprzedaz',
        },
        {
          name: 'External and internal roller blinds',
          rout: 'rolety-zewnetrzne-sprzedaz',
        },
        {
          name: 'PVC and aluminium windows',
          rout: 'okna-pcv',
        },
      ],
    },
    {
      title: 'Building repairs',
      rout: 'remont',
      subLinks: [
        {
          name: 'Painting the walls',
          rout: 'malowanie-scian',
        },
        {
          name: 'Tiling',
          rout: 'ukladanie-plytek',
        },
        {
          name: 'Plumbing and electrical installations',
          rout: 'instalacje-hydrauliczne',
        },
      ],
    },
    {
      title: 'Energy efficient houses',
      rout: 'domy',
      subLinks: [
        {
          name: 'Container homes',
          rout: 'domy-kontenerowe',
        },
        {
          name: 'Houses on the water',
          rout: 'domy-na-wodze',
        },
        {
          name: 'Bed in the wall',
          rout: 'lozko-w-scianie',
        },
      ],
    },
  ],
};

export interface IGallery {
  title: string;
  body: string;
  img: string;
  buttonText: string;
  rout: string;
}

export const offertGaleryContent: { [x: string]: IGallery } = {
  PL: {
    title: 'Galeria',
    body: 'Zobacz na zdjęciach przykłady naszy realizacji',
    img: 'gallery.svg',
    buttonText: 'zobacz',
    rout: 'galeria',
  },
  EN: {
    title: 'Gallery',
    body: 'See on the pictures examples of our realizations',
    img: 'gallery.svg',
    buttonText: 'check',
    rout: 'galeria',
  },
};
