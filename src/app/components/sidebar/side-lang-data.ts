export interface ISideItem {
  header: string;
  img: string;
  rout: string;
  createdAt: string;
}

export interface ITag {
  title: string;
  active: boolean;
}

export interface ISideContent {
  postItems: ISideItem[];
  tags: ITag[];
}

export const sideContent: { [x: string]: ISideContent } = {
  PL: {
    postItems: [
      {
        header: 'Czy da się mieszkać w kontenerach?',
        img: 'containers.jpg',
        rout: '/blog/1',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'Czy warto inwestować w domy na wodzie?',
        img: 'home-water.jpg',
        rout: '/blog/2',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'Przygotowania do remontu krok po kroku?',
        img: 'renovation.jpg',
        rout: '/blog/3',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'Jak uniknąć błędów przy układaniu płytek ceramicznych?',
        img: 'rails.jpg',
        rout: '/blog/4',
        createdAt: 'Jan 1, 2020',
      },
    ],
    tags: [
      {
        title: 'Inwestycja',
        active: false,
      },
      {
        title: 'Dome',
        active: false,
      },
      {
        title: 'Woda',
        active: false,
      },
      {
        title: 'Remont',
        active: false,
      },
      {
        title: 'Błedy',
        active: false,
      },
      {
        title: 'Kontener',
        active: false,
      },
    ],
  },
  EN: {
    postItems: [
      {
        header: 'Is it possible to live in containers?',
        img: 'containers.jpg',
        rout: '/blog/1',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'Is it worth investing in homes on the water?',
        img: 'home-water.jpg',
        rout: '/blog/2',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'How to prepare for a renovation step by step?',
        img: 'renovation.jpg',
        rout: '/blog/3',
        createdAt: 'Jan 1, 2020',
      },
      {
        header: 'How to avoid mistakes when installing ceramic tiles?',
        img: 'rails.jpg',
        rout: '/blog/4',
        createdAt: 'Jan 1, 2020',
      },
    ],
    tags: [
      {
        title: 'Inwestycja',
        active: false,
      },
      {
        title: 'Dome',
        active: false,
      },
      {
        title: 'Woda',
        active: false,
      },
      {
        title: 'Remont',
        active: false,
      },
      {
        title: 'Błedy',
        active: false,
      },
      {
        title: 'Kontener',
        active: false,
      },
    ],
  },
};
