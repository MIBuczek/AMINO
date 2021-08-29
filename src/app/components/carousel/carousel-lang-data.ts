export interface ICaruselContent {
  header: string;
  description: string;
  img: string;
  rout: string;
  query: { [x: string]: string };
  buttonText: string;
}

export const carouselContent: { [x: string]: ICaruselContent[] } = {
  PL: [
    {
      header: 'Drzwi automatyczne',
      description: `W naszej ofercie znajdziecie Państwo pełną ofertę drzwi
      automatycznych oraz systemów drzwiowych.`,
      img: 'drzewi-automatyczne.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'drzwi-automatyczne-sprzedaz' },
      buttonText: 'zobacz wiecej',
    },
    {
      header: 'Bramy garażowe',
      description: `Posiadamy szeroki asortyment drzwi garażowych firm: Wiśniowski,
        Krispol, Fart, Big Tor, Ditex.`,
      img: 'drzewi-garazowe.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'bramy-garazowe-sprzedaz' },
      buttonText: 'zobacz wiecej',
    },
    {
      header: 'Rolety zewnętrzne i wewnętrzne',
      description: `Zapraszamy do zapoznania się z naszą szeroką gamą rolet
        zewnętrznych oraz wewnętrznych.`,
      img: 'rolety.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'rolety-zewnetrzne-sprzedaz' },
      buttonText: 'zobacz wiecej',
    },
  ],
  EN: [
    {
      header: 'Automatic doors',
      description: `In our offer you will find a full range of doors
      automatic doors and door systems.`,
      img: 'drzewi-automatyczne.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'drzwi-automatyczne-sprzedaz' },
      buttonText: 'read more',
    },
    {
      header: 'Garage doors',
      description: `We carry a wide assortment of garage doors by: Wiśniowski,
      Krispol, Fart, Big Tor, Ditex.`,
      img: 'drzewi-garazowe.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'bramy-garazowe-sprzedaz' },
      buttonText: 'read more',
    },
    {
      header: 'External and internal roller blinds',
      description: `We invite you to familiarize yourself with our wide range of roller
      external and internal.`,
      img: 'rolety.jpg',
      rout: '/oferta',
      query: { title: 'sprzedaz', single: 'rolety-zewnetrzne-sprzedaz' },
      buttonText: 'read more',
    },
  ],
};
