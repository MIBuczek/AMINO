export interface IPartner {
  shorter: string;
  description: string;
}

export const partnersContent: { [x: string]: IPartner } = {
  PL: {
    shorter: 'Nasi Klienci',
    description: 'Firmy z którymi współpracujemy',
  },
  EN: {
    shorter: 'Our Customers',
    description: 'Companies we work with',
  },
};

export const images = [
  'auchan.png',
  'biedronka.jpg',
  'castorama.png',
  'energia.jpg',
  'makro.jpg',
  'ue.jpg',
];
