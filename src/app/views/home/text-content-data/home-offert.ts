export interface IHomeContentOffert {
  cardTitle: string;
  cardBody: string;
  cardImgSrc: string;
  cardButton: string;
}

export const homeOffert: { [x: string]: IHomeContentOffert[] } = {
  PL: [
    {
      cardTitle: 'DRZWI AUTOMATYCZNE',
      cardBody: `W naszej ofercie do nabycia znajdą Państwo drzwi automatyczne oraz systemy do nich firm: GEZE oraz ESCO.`,
      cardImgSrc: 'offers-1.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'DRZWI WEJŚCIOWE I WEWNĘTRZNE',
      cardBody: `W naszej ofercie do nabycia znajdą Państwo szeroki asortyment drzwi zwykłych. Zapewniamy serwis i montaż.`,
      cardImgSrc: 'offers-2.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'BRAMY GARAŻOWE',
      cardBody: `W naszej ofercie do nabycia znajdą Państwo bramy garażowe firm: Wiśniowski, Krispol, Fart, Big Tor, Ditex.`,
      cardImgSrc: 'offers-3.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'ROLETY ZEWNĘTRZNE I WEW.',
      cardBody: `Oferujemy montaż oraz serwis rolet.`,
      cardImgSrc: 'offers-4.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'SYSTEMY ODDYMIANIA',
      cardBody: `Oferujemy montaż i serwis systemów oddymiania, pożarowych a także zabezpieczeń pożarowych...`,
      cardImgSrc: 'offers-5.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'BRAMY PRZEMYSŁOWE',
      cardBody: `Oferujemy szeroką gamę bram przemysłowych.`,
      cardImgSrc: 'offers-6.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'USŁUGI NAPRAWCZE',
      cardBody: `Oferujemy szeroki zakres usług serwisowych mdz. innymi z zakresu stolarki otworowej, naprawy zamków...`,
      cardImgSrc: 'offers-7.png',
      cardButton: 'Czytaj wiecej',
    },
    {
      cardTitle: 'CAŁA OFERTA',
      cardBody: '',
      cardImgSrc: 'offers-8.png',
      cardButton: 'Zobacz teraz',
    },
  ],
};
