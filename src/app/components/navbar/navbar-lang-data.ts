interface INavItem {
  name: string;
  route: string;
  children?: INavItem[];
}

export const navbarContent: { [x: string]: INavItem[] } = {
  PL: [
    {
      name: 'Strona Główna',
      route: '/',
    },
    {
      name: 'Oferta',
      route: '/oferta',
    },
    {
      name: 'O firmie',
      route: '/firma',
    },
    {
      name: 'Reference',
      route: '/referencje',
    },
    {
      name: 'Blog',
      route: '/blog',
      children: [
        {
          name: 'Czy da się mieszkać w kontenerach',
          route: '/blog/1',
        },
        {
          name: 'Czy warto inwestować w domy na wodzie',
          route: '/blog/2',
        },
        {
          name: 'Przygotowania do remontu krok po kroku',
          route: '/blog/3',
        },
        {
          name: 'Jak uniknąć błędów przy układaniu płytek ceramicznych',
          route: '/blog/4',
        },
      ],
    },
    {
      name: 'Kontakt',
      route: '/kontakt',
    },
  ],
  EN: [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Offer',
      route: '/oferta',
    },
    {
      name: 'About us',
      route: '/firma',
    },
    {
      name: 'References',
      route: '/referencje',
    },
    {
      name: 'Blog',
      route: '/blog',
      children: [
        {
          name: 'Is it possible to live in containers',
          route: '/blog/1',
        },
        {
          name: 'Is it worth investing in homes on the water',
          route: '/blog/2',
        },
        {
          name: 'Preparing for a renovation step by step',
          route: '/blog/3',
        },
        {
          name: 'How to avoid mistakes when installing ceramic tiles',
          route: '/blog/4',
        },
      ],
    },
    {
      name: 'Contact',
      route: '/kontakt',
    },
  ],
};
