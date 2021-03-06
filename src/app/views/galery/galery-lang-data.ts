export interface IGallery {
  header: string;
  description: string;
  buttonText: string;
  images: string[];
}

export const galeryContent: { [x: string]: IGallery } = {
  PL: {
    header: 'Galeria',
    description: 'Sprawdz niektóre z naszych realizacji',
    buttonText: 'zobacz',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
    ],
  },
  EN: {
    header: 'Gallery',
    description: 'Check out some of our projects',
    buttonText: 'view',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
    ],
  },
};
