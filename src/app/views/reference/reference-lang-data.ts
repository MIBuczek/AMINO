export interface ISingleReferecne {
  img: string;
  comment: string;
}

export interface IReferenceContent {
  sideBarImg: string;
  sideBarTitle: string;
  sideBarText: string;
  sideBarRout: string;
  sideBarBtn: string;
  subHeader: string;
  header: string;
  reference: ISingleReferecne[];
}

export const referenceContent: { [x: string]: IReferenceContent } = {
  PL: {
    sideBarImg: 'sell.svg',
    sideBarTitle: 'Nasza Oferta',
    sideBarText: `Oferujemy szeroką gamę produktów znanych i cenionych
      producentów okien, drzwi, rolet i systemów fotowoltaicznych.`,
    sideBarRout: '/oferta',
    sideBarBtn: 'oferta',
    subHeader: 'REFERENCEJ',
    header: 'Sprawdz co o nasz mowią nasi klienci',
    reference: [
      {
        img: 'arkady.jpg',
        comment: `Firma Animo to niewątpliwi specjaliści w swojej dziedzinie.
        Bogata oferta, szybki i profesjonalny montaż, doskonały kontakt z przedstawicielami.
        Śmiało możemy powiedzieć, że jesteśmy zadowolonymi klientami.`,
      },
      {
        img: 'astra.jpg',
        comment: `Profesjonalne podejście do klienta to w dzisiejszych czasach podstawa
        prawidłowych relacji biznesowych. Animo stanowi moim zdaniem wzór dla niejednej
        firmy w branży drzwi i bram.`,
      },
      {
        img: 'auchan.jpg',
        comment: `Firma bez większych problemów poradziła sobie z ogromnym zamówieniem,
        jakie złożył jej Auchan. Przyznam, że spodziewałem się komplikacji, gdyż bardzo często
        zdarzają się one przy tego typu zamówieniach, lecz zostałem naprawdę mile zaskoczony.
        Współpraca jaką udało nam się nawiązać z pewnością będzie utrzymywana, ponieważ tacy
        profesjonaliści jak Animo są nam potrzebni.`,
      },
      {
        img: 'efl.jpg',
        comment: `100% zadowolenia! To pierwsze co ciśnie mi się na usta, kiedy wspominam współpracę
        z firmą Animo. Klient jest traktowany naprawdę profesjonalnie i obsłużony kompleksowo.
        Nasze zamówienie na pewno nie jest ostatnim.`,
      },
      {
        img: 'ikea.jpg',
        comment: `Jako duży klient, nasza firma miała naprawdę ogromne wymagania i dość ścisłe terminy
        realizacji. Firma Animo nie zawiodła naszych oczekiwań. Jej produkty sprawdzają się świetnie i są
        wciąż niezawodne, pomimo ich ogromnej i często ciężkiej eksploatacji. Serwis działa niezawodnie,
        dzięki czemu nie musimy martwić się praktycznie o nic. Jednym słowem – pełen profesjonalizm!`,
      },
      {
        img: 'leclerc.jpg',
        comment: `Obiekty handlowe i hale magazynowe niewątpliwie potrzebują produktów niezawodnych i przede
        wszystkim trwałych. Takie właśnie są produkty Animo. Nowoczesna automatyzacja i rozwiązania rodem z
        przyszłości zdecydowanie usprawniają niejeden aspekt prac wykonywanych na naszych obiektach.`,
      },
      {
        img: 'leroy.jpg',
        comment: `Firma Animo wykazała się przede wszystkim profesjonalnym podejściem do nas i naszych potrzeb,
        których zrozumienie stanowi nierzadko duży problem w tego typu branży. Nie zawiedliśmy się i jesteśmy
        przekonani, iż skorzystanie z usług tej firmy nie było błędem.`,
      },
      {
        img: 'mercedes.jpg',
        comment: `Bramy przemysłowe, które zaoferowała nam firma Animo, należą do jednych z najbardziej
        nowoczesnych z jakimi przyszło nam się spotkać. Uwagę należy zwrócić także na ich niezawodność i
        gotowość do pracy nawet w najtrudniejszych warunkach atmosferycznych.
        Mimo mocnej eksploatacji nie doświadczyliśmy do tej pory ani jednej awarii. Oby tak dalej!`,
      },
      {
        img: 'spolem.jpg',
        comment: `Szybka realizacja, bezproblemowe podejście do indywidualnego zapotrzebowania i przede wszystkim profesjonalizm.
        Te określenia pasują do firmy Animo w stu procentach. Przed nami kolejne zamówienia, których realizację z
        pewnością powierzymy tej firmie.`,
      },
      {
        img: 'arkena.jpg',
        comment: `Niezawodny sprzęt, charakteryzujący się odpornością na wzmożoną eksploatację – to oferuje Animo i tego właśnie potrzebowaliśmy!
        Miłe i odpowiedzialne podejście do kontrahenta, jakie charakteryzuję te firmę, z pewnością wpłynie na naszą dalsza współpracę.`,
      },
    ],
  },
  EN: {
    sideBarImg: 'sell.svg',
    sideBarTitle: 'Our Offer',
    sideBarText: `We offer a wide range of products from well-known and respected
    manufacturers of windows, doors, roller shutters and photovoltaic systems.`,
    sideBarRout: '/oferta',
    sideBarBtn: 'offer',
    subHeader: 'REFERENCE',
    header: 'Check what our customers say about us',
    reference: [
      {
        img: 'arkady.jpg',
        comment: `Animo company are undoubted specialists in their field.
        A rich offer, quick and professional installation, excellent contact with representatives.
        We can confidently say that we are satisfied customer`,
      },
      {
        img: 'astra.jpg',
        comment: `A professional approach to the customer is nowadays the basis
        of good business relations. Animo is, in my opinion, a model for many
        companies in the door and gate industry.`,
      },
      {
        img: 'auchan.jpg',
        comment: `The company managed without any major problems with a huge order
        placed by Auchan. I must admit that I expected complications, because very often they
        They happen very often with this type of orders, but I was really pleasantly surprised.
        The cooperation we managed to establish will certainly be maintained, because such
        professionals like Animo are needed.`,
      },
      {
        img: 'efl.jpg',
        comment: `100% satisfaction! This is the first thing that comes to my lips when I recall cooperation
        with Animo company. The customer is treated really professionally and served comprehensively.
        Our order is certainly not the last.`,
      },
      {
        img: 'ikea.jpg',
        comment: `As a large customer, our company had really huge requirements and quite strict deadlines
        deadlines. Animo did not disappoint our expectations. Its products are performing well and are
        still reliable, despite their huge and often heavy use. The service works reliably,
        thanks to which we do not have to worry about practically anything. In a word - full professionalism!`,
      },
      {
        img: 'leclerc.jpg',
        comment: `Commercial buildings and warehouses undoubtedly need products that are reliable and above all
        and above all durable. This is exactly what Animo products are. Modern automation and solutions straight from
        future definitely improve many aspects of the work performed in our facilities.`,
      },
      {
        img: 'leroy.jpg',
        comment: `Above all, Animo demonstrated a professional approach to us and our needs,
        understanding of which is often a big problem in this type of industry. We were not disappointed and we are
        convinced that using the services of this company was not a mistake.`,
      },
      {
        img: 'mercedes.jpg',
        comment: `The industrial gates offered by the Animo company are among the most
        modern that we have come across. Attention should also be paid to their reliability and
        readiness to work even in the most difficult weather conditions.
        Despite heavy use we have not experienced a single failure so far. Let's keep it up!`,
      },
      {
        img: 'spolem.jpg',
        comment: `Quick implementation, trouble-free approach to individual needs and above all professionalism.
        These terms fit the Animo company in a hundred percent. We have more orders ahead of us, the implementation of which
        We will certainly entrust the realization of our next orders to this company.`,
      },
      {
        img: 'arkena.jpg',
        comment: `Reliable equipment, characterized by resistance to heavy exploitation - this is what Animo offers and this is what we needed!
        Nice and responsible approach to the contractor, which characterizes this company, will certainly influence our further cooperation.`,
      },
    ],
  },
};
