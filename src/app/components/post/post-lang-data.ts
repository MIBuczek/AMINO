export interface IPost {
  id: number;
  header: string;
  date: string;
  img: string;
  textBody: { [x: string]: string | string[] }[];
  tags: string[];
}

export const postsContent: { [x: string]: IPost[] } = {
  PL: [
    {
      id: 1,
      header: 'Czy da się mieszkać w kontenerach?',
      date: 'Jan 1, 2020',
      img: 'containers.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: ` Od kilku lat zauważalny jest nowy trend w architekturze – Polacy
        powoli odchodzą od klasycznego budownictwa i stawiają na proste,
        ekologiczne, a przy tym niebanalne rozwiązania. Mieszkanie w
        kontenerze? Choć dla wielu osób wciąż brzmi to abstrakcyjnie,
        konstrukcje te mają coraz większe grono zwolenników. I wbrew
        ogólnemu wyobrażeniu w niczym nie przypominają one popularnych
        baraków robotniczych. Wręcz przeciwnie – pozwolą w krótkim czasie
        i bez dużych nakładów finansowych stworzyć wyjątkowe, stylowe
        lokum.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Kontenery przestają być kojarzone z placem budowy czy też
        obiektami letniskowymi. Mogą być z powodzeniem wykorzystywane jako
        całoroczne domki mieszkalne – oczywiście po uprzednim odpowiednim
        przygotowaniu. Są one wyposażone zarówno w kuchnię, jak i
        łazienkę. Zapewniają wszystko, co jest potrzebne do codziennego
        funkcjonowania, tzn. instalacje elektryczne oraz
        wodno-kanalizacyjne, a także oświetlenie. Panują tu dokładnie
        takie same, a czasem nawet i lepsze warunki niż w tradycyjnych
        domach czy mieszkaniach. Nie muszą się Państwo także obawiać o
        temperaturę wewnątrz – dzięki ociepleniu ścian, a także ogrzewaniu
        elektrycznemu we wnętrzu panują odpowiednie warunki nawet podczas
        mroźnej zimy. Izolacja termiczna zabezpieczy także przed
        nadmiernym nagrzewaniem wnętrza podczas upalnych dni letnich.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Wykończenie płytami gipsowo-kartonowymi lub fermacell, które można
        następnie pomalować na dowolny kolor. Można także zrezygnować
        częściowo ze ścian i zamiast nich wstawić duże elementy
        przeszklone, które nie tylko wpłyną na estetykę konstrukcji, ale i
        ułatwią dostęp naturalnego światła i promieni słonecznych. Pomogą
        także w optycznym powiększeniu przestrzeni, co z pewnością docenią
        osoby, które obawiają się małych, zamkniętych przestrzeni. Wnętrza
        można dowolnie urządzić przy wykorzystaniu drewna, szkła czy
        stali, co pozwoli na aranżację według indywidualnych preferencji.
        Dzięki odpowiedniemu projektowi we wnętrzu w ogóle nie będzie
        widać, że domek powstał z kontenera!`,
        },
        {
          type: 'PARAGRAPH',
          content: `Nie ma też obaw, że dom z kontenera będzie straszyć z zewnątrz –
        dzięki odpowiedniemu wykończeniu może przemienić się z surowej
        konstrukcji zarówno w nowoczesny, jak i przytulny domek. Co
        więcej, domki te można w każdej chwili powiększać o dodatkowe
        pomieszczenia, dostawiając kolejne moduły. W ten sposób można
        stworzyć wystarczającą przestrzeń mieszkalną dla większej liczby
        osób, co nie byłoby możliwe w przypadku kawalerki czy też ciasnego
        mieszkania 2-pokojowego.
        `,
        },
        {
          type: 'HEADER',
          content: 'Kwestie formalne',
        },
        {
          type: 'PARAGRAPH',
          content: `Postawienie tradycyjnego domu związane jest z szeregiem wymogów
        stawianych między innymi przez prawo budowlane. W przypadku
        kontenerów mieszkalnych formalności nie są aż tak czasochłonne –
        postawienie kontenera nie wymaga bowiem aż tylu zezwoleń (czasem
        wystarczy jedynie zgłoszenie do odpowiedniej jednostki w lokalnym
        urzędzie). Należy jednak pamiętać, że pozwolenie na budowę od
        władz lokalnych będzie wymagane w sytuacji, gdy kontener będzie
        użytkowany w danym miejscu przez okres powyżej 180 dni.
        `,
        },
      ],
      tags: ['Kontener', 'Kreatywnie', 'Dom'],
    },
    {
      id: 2,
      header: 'Czy warto inwestować w domy na wodzie?',
      date: 'Jan 1, 2020',
      img: 'home-water.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Niegdyś można było o nich tylko pomarzyć. Rozwój technologii sprawił,
          że dziś dom na wodzie wcale nie musi być odległą mrzonką i jest możliwy do wykonania.
          Niestandardowe lokum to przede wszystkim wyjątkowe widoki na co dzień, bliskość przyrody,
          a także synonim luksusu i prestiżu społecznego.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Dom na wodzie musi być zaprojektowany i wykonany przez fachowców z doświadczeniem w
          tego typu realizacjach. Od tego bowiem zależy bezpieczeństwo jego użytkowania.
          Konstrukcja musi być przede wszystkim lekka i charakteryzować się dużą wypornością,
          a przy tym niezwykłą odpornością na działanie wilgoci. Nowość zawsze budzi obawy.
          Dlatego przedstawimy Państwu zarówno zalety, jak i wady domów na wodzie, by sami mogli
          Państwo ocenić, czy warto inwestować w ten rodzaj konstrukcji.`,
        },
        {
          type: 'LIST',
          headerList: 'Zalety',
          items: [
            'do wzniesienia takiego domu nie potrzebujemy działki (co oznacza znaczną oszczędność pieniędzy)',
            'dom na wodzie może być mobilny, a to oznacza, że w każdej chwili możemy zmienić otoczenie i sąsiadów',
            'w domu na wodzie można mieszkać przez cały rok (dzięki ogrzewaniu, a także ociepleniu konstrukcji)',
            'zapewnia odpowiednie warunki mieszkaniowe (wyposażony także w kuchnię i łazienkę)',
            'bezpieczeństwo podczas powodzi (możemy mieć pewność, że konstrukcja utrzyma się na powierzchni wody i nie zostanie zalana)',
            'nie jest wymagane pozwolenie na budowę',
            'piękne widoki i bliskość natury nawet w centrum miasta',
            'unikalny, przyciągający uwagę design',
            'możliwość wyposażenia w kominek, co pozwoli na znaczne obniżenie kosztów ogrzewania (przy ogrzewaniu elektronicznym)',
            'budynki mogą być samowystarczalne dzięki wyposażeniu w zbiorniki na wodę i nieczystości, a także butle gazowe i własne kolektory słoneczne',
            'możliwość kupna zarówno gotowego obiektu, jak i wykonanego według indywidualnego projektu.',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Wady',
          items: [
            'brak stałego adresu i możliwości zameldowania w domu na wodzie (zazwyczaj domy na wodzie są wpisane do rejestru jako jachty)',
            'dość wysoka cena wynikająca ze stosowanych technologii',
            'brak czytelnych regulacji prawnych odnośnie domów na wodzie (co oznacza większe trudności przy załatwianiu formalności)',
            ' możliwe trudności przy podłączeniu niektórych mediów',
            'brak możliwości uzyskania kredytu hipotecznego z banku na dom na wodzie (w rozumieniu prawa konstrukcja ta nie jest domem)',
            'duże ryzyko wkradania się wilgoci do konstrukcji domu (dlatego stosuje się okna PCV lub aluminium, a nie np. drewniane, które mogłyby zacząć pęcznieć pod wpływem wilgoci)',
            'zejście do domu po trapie (co może być nieco niewygodne)',
            'niemałe koszty utrzymania w przypadku ogrzewania elektrycznego',
            'wybór miejsca związany jest z pewnymi ograniczeniami – musimy sprawdzić, czy w wybranym miejscu nie zaplanowano budowy linii brzegowej albo czy nie jest ono objęte ochroną konserwatora zabytków',
            'konieczne jest uzyskanie prawa do terenu, a także uiszczenie opłat za cumowanie oraz korzystanie z danego odcinka linii brzegowej.',
          ],
        },
      ],
      tags: ['Dom', 'Woda', 'Pieniadze', 'Inwestycja'],
    },
    {
      id: 3,
      header: 'Przygotowania do remontu krok po kroku',
      date: 'Jan 1, 2020',
      img: 'renovation.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Remont domu czy mieszkania to poważne przedsięwzięcie i wymaga
          odpowiedniego przygotowania. Pozwoli to oszacować koszty, rozsądnie rozplanować
          wydatki, zakupić odpowiednie materiały, wynająć rzetelną ekipę bądź też ustalić
          harmonogram samodzielnych prac. Dzięki temu remont zostanie wykonany sprawnie i bez
          większych niespodzianek! Pamiętajmy jednak, że zawsze należy liczyć się z dodatkowymi
          kosztami, dlatego warto uwzględnić w budżecie pewną rezerwę finansową na ten cel.`,
        },
        {
          type: 'HEADER',
          content: 'Na sam początek',
        },
        {
          type: 'PARAGRAPH',
          content: `Przede wszystkim musimy dokładnie określić, co chcemy zmienić bądź naprawić.
           W tym celu należy sporządzić projekt roboczy z uwzględnieniem planów mieszkania.
           Następnie ustalamy kolejność działań jak np. zdarcie tapet, skucie tynków,
           poprowadzenie nowej instalacji wodno-kanalizacyjnej bądź elektrycznej, itp.
           Pozwoli to na porządek podczas prac i jasne określenie priorytetów, co usprawni remont.
           Przy opracowywaniu harmonogramu działań warto uwzględnić pory roku – niektóre prace
           najlepiej wykonywać podczas cieplejszych pór roku, ponieważ wymagają częstego wietrzenia pomieszczeń
           czy też szybkiego osuszania tynków. Warto tak rozplanować prace, by na okres zimowy pozostały
           czynności związane na przykład z wykończeniem wnętrza.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Zatrudniając ekipę remontową, warto upewnić się, że znajdują się w niej osoby
            posiadające odpowiednie kwalifikacje i uprawnienia (ma to szczególne znaczenie przy pracach
                związanych z wszelkiego rodzaju instalacjami). Przy wyborze wykonawcy nie należy kierować się
                głównie ceną usług – warto zaczerpnąć opinii znajomych czy też sprawdzić referencje.
                Nie warto również oszczędzać na materiałach – należy zrobić dokładne rozeznanie na rynku
                i zainwestować w materiały wysokiej jakości, które zapewnią nie tylko spektakularny, ale i
                trwały efekt. Zakupy należy poprzedzić dokładnymi pomiarami i obliczeniami oraz konsultacjami
                z ekipą remontową. Zadbajmy też o odpowiedni zapas materiałów, by uniknąć sytuacji,
                gdy zabraknie ich w trakcie remontu i nie będzie możliwy ich zakup np. z powodu braku
                asortymentu w hurtowniach.`,
        },
        {
          type: 'HEADER',
          content: 'Tuż przed rozpoczęciem remontu',
        },
        {
          type: 'PARAGRAPH',
          content: `Gdy już mamy wszystko rozplanowane, należy odpowiednio przygotować mieszkanie,
            by mogła do niego wkroczyć ekipa remontowa. Należy tak zorganizować przestrzeń, by nie
            utrudniała pracy. Najlepiej wynieść meble, a jeśli nie jest to możliwe – odpowiednio je
            przestawić. By uniknąć przykrych niespodzianek w postaci zabrudzeń czy uszkodzeń pozostawionych przedmiotów,
            należy je dokładnie zabezpieczyć na przykład przy użyciu folii malarskiej oraz taśmy. Zabezpieczyć należy
            nie tylko meble czy żyrandole, ale również drzwi, okna, parapety czy też pozostawione sprzęty.
            Zaleca się jednak wyniesienie sprzętów AGD oraz RTV, ponieważ dostanie się kurzu i pyłów do układów elektronicznych
            może negatywnie wpłynąć na ich funkcjonowanie. Jeśli mamy zwierzęta domowe, warto pomyśleć o zapewnieniu im lokum tymczasowego
            np. u kogoś z rodziny, ponieważ obecność ekipy oraz hałasy spowodowane remontem mogą okazać się dla nich wyjątkowo stresujące.
            Przy pracach o większym zakresie może być konieczne także całkowite opuszczenie mieszkania przez domowników.`,
        },
      ],
      tags: ['Remont', 'Hint'],
    },
    {
      id: 4,
      header: 'Jak uniknąć błędów przy układaniu płytek ceramicznych?',
      date: 'Jan 1, 2020',
      img: 'rails.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Układanie płytek ceramicznych wymaga wyjątkowej precyzji, cierpliwości,
            a także wprawy. Tylko dzięki odpowiedniej wiedzy, staranności i umiejętnościom można
            uzyskać zadowalający efekt końcowy. Tutaj nie ma miejsca na pośpiech i improwizację – okładzina
            z płytek musi być trwała i estetyczna, a często zdarza się, że mają z tym problem nawet
            zatrudnieni przez nas fachowcy.`,
        },
        {
          type: 'HEADER',
          content: 'Przygotowanie podłoża',
        },
        {
          type: 'PARAGRAPH',
          content: `Tutaj nie ma miejsca na pośpiech i metodę „na oko”. Zaprawy klejowe muszą być
            przygotowywane wedle ściśle określonych przez producenta proporcji wody i suchej mieszanki,
            które są podane na etykiecie. W przeciwnym razie możemy uzyskać zaprawę o pogorszonych
            właściwościach typu przyczepność. Następnie należy ją dokładnie wymieszać i odczekać chwilę,
            zanim przystąpimy do dalszych prac. Należy również pamiętać o jej odpowiednim nakładaniu
            zarówno na podłoże, jak i spód płytek.`,
        },
        {
          type: 'HEADER',
          content: 'Rozplanowanie i układanie płytek',
        },
        {
          type: 'PARAGRAPH',
          content: `Układanie płytek powinno być poprzedzone dokładnym rozplanowaniem ich układu
            oraz obliczeniami. Często konieczne jest bowiem przycięcie płytek, dlatego warto wcześniej
            o tym pomyśleć, by nie obniżyło to estetyki wykończenia (najlepiej, by zostały przyklejone
                w miejscach mniej widocznych). Są dwie opcje rozpoczęcia układania płytek – zaczynamy całą
                płytką od krawędzi ściany bądź od osi ściany. Pierwszy rząd układamy na listwach pomocniczych,
                a dla zachowania równych odstępów wkładamy pomiędzy płytki krzyżyki dystansowe. Warto też
                używać poziomicy i sprawdzać płaszczyznę, by móc na bieżąco korygować ewentualne odchyły płytek.
                Przy użyciu gumowego młotka można je też docisnąć do podłoża, co da pewność równomiernego
                rozłożenia kleju pod spodem i zwiększenia przyczepności. Podczas prac korzystamy z takich narzędzi
                jak poziomica, krzyżyki dystansowe, specjalne narzędzia do cięcia płytek, kielnia prostokątna,
                sznur do trasowania, młotek gumowy, packa zębata, listwy pomocnicze.`,
        },
        {
          type: 'HEADER',
          content: 'Fugowanieu',
        },
        {
          type: 'PARAGRAPH',
          content: `Układanie płytek to niezwykle czasochłonna i męcząca czynność wymagająca wyjątkowej precyzji
            oraz skupienia. Dlatego by nie zniweczyć trudu włożonego w ich ułożenie, należy dołożyć szczególnych
            starań do ich wykończenia. Często popełnianym błędem jest zbyt szybkie fugowanie. Zdecydowanie odradzamy
            pośpiech, ponieważ jeśli przystąpimy do fugowania zanim klej dobrze wyschnie, mogą pojawić się wyjątkowo
            nieestetyczne przebarwienia. W zależności od użytego kleju może on schnąć nawet i 24 godziny – szczegółowe
            informacje na ten temat zawsze są podane na opakowaniu. Tak jak w przypadku klejowej, tak i przy zaprawie
            fugowej bardzo ważne jest również przygotowanie według instrukcji producenta. Próby zaoszczędzenia i uzyskania
            większej ilości zaprawy poprzez dolanie większej ilości wody sprawi, że zaprawa straci swoje właściwości.`,
        },
      ],
      tags: ['Błedy', 'Hint', 'Remont'],
    },
  ],
  EN: [
    {
      id: 1,
      header: 'Is it possible to live in containers?',
      date: 'Jan 1, 2020',
      img: 'containers.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `        Poles are slowly abandoning the classic construction and opt for simple,
          Poles are slowly abandoning classic construction and prefer simple, ecological and at the same time original solutions. Living in a
          container? Although for many people it still sounds abstract,
          these constructions have a growing number of supporters. And contrary to
          the general perception they do not resemble in any way the popular
          workers' barracks. On the contrary - in a short time and without
          and without large financial outlays to create a unique, stylish
          dwelling.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Containers are no longer associated with construction sites or
          summer buildings. They can be successfully used as
          year-round dwelling houses - of course after previous appropriate
          preparation. They are equipped with both a kitchen and a bathroom.
          bathroom. They provide everything that is necessary for everyday
          functioning, i.e. electrical and plumbing installations
          plumbing, as well as lighting. The conditions are exactly
          The same, and sometimes even better conditions than in traditional houses or
          You don't have to worry about the risk of damage to your home. You also do not have to worry about
          the temperature inside - thanks to the insulation of the walls, as well as
          The walls are insulated and heated electrically, the interior
          cold winters. Thermal insulation will also protect against
          excessive heating of the interior during hot summer days.`,
        },
        {
          type: 'PARAGRAPH',
          content: `Finish with gypsum or fermacell panels which can be
          painted in any color you wish. It is also possible
          partially from the walls and instead of them insert large
          glazed elements, which not only affect the aesthetics of the structure, but also
          facilitate access of natural light and sunrays. They will help
          also in optically enlarging the space, which will certainly be appreciated by
          people who are afraid of small, closed spaces. Interiors
          can be freely arranged with the use of wood, glass or
          steel, which will allow you to arrange according to individual preferences.
          With the right design in the interior will not be at all
          that the house was made of container!`,
        },
        {
          type: 'PARAGRAPH',
          content: `There is also no need to worry that the house from the container will be scary from the outside.
          With the right finish, it can turn from a raw structure
          construction into both a modern and cozy house. What
          Moreover, these houses can be expanded at any time with additional
          rooms at any time by adding more modules. In this way you can
          create enough living space for more people, which would not be
          This would not be possible with a studio apartment or a cramped
          or a cramped two-room apartment.
        `,
        },
        {
          type: 'HEADER',
          content: 'Formal issues',
        },
        {
          type: 'PARAGRAPH',
          content: `Building a traditional house is connected with a number of requirements
          requirements imposed, among others, by construction law. In case of
          living containers the formalities are not so time-consuming -
          erecting a container does not require so many permits (sometimes
          Sometimes it is enough to notify the appropriate unit in the local office).
          local office). It should be remembered, however, that a building permit from
          However, you should remember that a building permit from the local authorities will be required in a situation
          used in a given place for more than 180 days.
        `,
        },
      ],
      tags: ['Container', 'Creative', 'Home'],
    },
    {
      id: 2,
      header: 'Is it worth investing in homes on the water?',
      date: 'Jan 1, 2020',
      img: 'home-water.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Once you could only dream about them. The development of technology has made it possible,
          Today a house on the water does not have to be a distant dream and it is possible to achieve.
          A non-standard dwelling is, above all, an exceptional view every day, closeness to nature,
          and also a synonym for luxury and social prestige.`,
        },
        {
          type: 'PARAGRAPH',
          content: `A house on the water must be designed and built by professionals with experience in
          of this type of realizations. This is because the safety of its use depends on it.
          The structure must be primarily lightweight and characterized by high buoyancy,
          and at the same time unusual resistance to moisture. Novelty always raises concerns.
          That is why we will present you both advantages and disadvantages of houses on water, so you can
          assess for yourself whether it is worth investing in this type of construction.`,
        },
        {
          type: 'LIST',
          headerList: 'Advantages',
          items: [
            `We don't need a plot of land to build such a house (which means significant savings of money)`,
            'A house on water can be mobile, which means that we can change our surroundings and neighbors at any time',
            'You can live in a house on water all year round (thanks to heating and insulating the structure)',
            'Provides adequate housing conditions (also equipped with a kitchen and bathroom)',
            'Safety during flooding (we can be sure that the structure will stay afloat and will not be flooded))',
            'No construction permit required',
            'Beautiful views and closeness to nature even in the city center',
            'Unique, eye-catching design',
            'Possibility to equip with a fireplace, which will significantly reduce heating costs (with electronic heating)',
            'Buildings can be self-sufficient with water and waste tanks, as well as gas cylinders and their own solar panels',
            'Possibility to buy a ready-made object as well as one made according to an individual project',
          ],
        },
        {
          type: 'LIST',
          headerList: 'Wady',
          items: [
            'No permanent address and no possibility to register in a house on the water (usually houses on the water are registered as yachts)',
            'Quite high price resulting from the technologies used',
            'Lack of clear legal regulations concerning houses on water (which means greater difficulties in dealing with formalities)',
            'Possible difficulties in connecting some utilities',
            // tslint:disable-next-line: max-line-length
            'Lack of possibility to obtain a mortgage from a bank for a house on water (according to the law this structure is not a house)',
            `high risk of moisture creeping into the structure of the house (that's why PVC or aluminum windows are used and not, for example,
             wooden ones, which could start to swell under the influence of moisture)`,
            'Going down the gangway to the house (which can be a bit uncomfortable)',
            'Not inconsiderable maintenance costs in the case of electric heating',
            'The choice of location is associated with certain restrictions - we must check whether the chosen site is not planned for the construction of a shoreline or whether it is not under the protection of the conservator of monuments',
            'It is necessary to obtain the right to the land, as well as to pay fees for mooring and the use of a given section of the shoreline.',
          ],
        },
      ],
      tags: ['Home', 'Wather', 'Money', 'Investitionen'],
    },
    {
      id: 3,
      header: 'Preparing for a renovation step by step',
      date: 'Jan 1, 2020',
      img: 'renovation.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Renovating a house or an apartment is a serious undertaking and requires
          appropriate preparation. This will allow you to estimate costs, reasonably plan expenses, purchase
          purchase appropriate materials, hire a reliable team or establish a schedule of work on your own.
          schedule the works on your own. Thanks to that the renovation will be done efficiently and without
          bigger surprises! However, remember that you should always take into account additional
          costs, that is why it is worth to include a certain financial reserve in the budget for this purpose.`,
        },
        {
          type: 'HEADER',
          content: 'Just for starters',
        },
        {
          type: 'PARAGRAPH',
          content: `First of all, we need to determine exactly what we want to change or repair.
          For this purpose, you need to draw up a working project taking into account the plans of the apartment.
          Then we determine the order of activities such as removing wallpaper, scraping off plaster,
          running a new plumbing or electrical system, etc.
          This will allow for order during the works and a clear determination of priorities, which will improve the renovation.
          When preparing the schedule of activities, it is worth taking into account the time of the year - some works are
          are best performed during warmer seasons of the year because they require frequent ventilation of rooms
          or quick drying of plaster. It is worth to plan the works in such a way that the following activities are left for the winter
          activities related to, for example, interior finishing.`,
        },
        {
          type: 'PARAGRAPH',
          content: `When hiring a renovation team, it is worth making sure that the team consists of people
          with appropriate qualifications and licenses (this is especially important for works related to
          related to all kinds of installations). When choosing a contractor you should not be guided
          mainly the price of the services - it is worth getting friends' opinions or checking references.
          It is also not worth saving on materials - do a thorough research on the market and invest
          and invest in high quality materials that will provide not only a spectacular, but also
          lasting effect. Purchases should be preceded by accurate measurements and calculations and consultations
          with the renovation team. We should also take care of an appropriate stock of materials in order to avoid situations when they run out during the renovation,
          when they run out during the renovation and it will not be possible to buy them e.g. due to lack of assortment in warehouses.
          of assortment in wholesalers.`,
        },
        {
          type: 'HEADER',
          content: 'Just before the renovation began',
        },
        {
          type: 'PARAGRAPH',
          content: `When you have everything planned out, you need to properly prepare the apartment,
          so that the renovation team can enter it. The space should be organized in such a way that it does
          make the work difficult. It is best to remove the furniture, and if this is not possible - properly
          rearrange them. To avoid unpleasant surprises in the form of dirt or damage to items left behind,
          protect them carefully with, for example, painter's foil and tape. It is necessary to protect
          not only furniture or chandeliers, but also doors, windows, window sills and left-over equipment.
          It is recommended, however, to remove household appliances and audiovisual equipment, because the ingress of dust into electronic circuits may adversely affect their functioning.
          may adversely affect their functioning. If you have pets, it is worth thinking about providing them with temporary accommodation
          For example, at the home of a family member, because the presence of the crew and the noise caused by the renovation can be extremely stressful for them.
          In case of larger scope of works, it may be necessary for the household members to leave the apartment completely.`,
        },
      ],
      tags: ['Renovation', 'Hint'],
    },
    {
      id: 4,
      header: 'How to avoid mistakes when installing ceramic tiles?',
      date: 'Jan 1, 2020',
      img: 'rails.jpg',
      textBody: [
        {
          type: 'PARAGRAPH',
          content: `Laying ceramic tiles requires exceptional precision, patience,
          and skill. Only with the right knowledge, care and skills can you
          to achieve a satisfactory final effect. There is no room for haste and improvisation here - the tiling has to be
          from tiles must be durable and aesthetic, and it often happens that even the specialists
          often have problems with that even the specialists employed by us.`,
        },
        {
          type: 'HEADER',
          content: 'Substrate preparation',
        },
        {
          type: 'PARAGRAPH',
          content: `There is no room for haste and the "by eye" method. Adhesive mortars must be
          prepared according to the proportions of water and dry mix specified by the manufacturer,
          which are specified on the label. Otherwise, you can get a mortar with impaired
          adhesion properties. Then mix it thoroughly and wait for a while,
          before proceeding to further work. Also remember to apply the mortar properly
          on both the substrate and the bottom of the tiles.`,
        },
        {
          type: 'HEADER',
          content: 'Laying out and tiling',
        },
        {
          type: 'PARAGRAPH',
          content: `Laying the tiles should be preceded by careful planning of the layout
          and calculations. It is often necessary to cut the tiles, so it is worth
          It is therefore worth thinking about it beforehand so as not to lower the aesthetics of the finishing (it is best if they were glued in less visible
          in less visible places). There are two options when it comes to starting tiling - you start with
          tiles from the edge of the wall or from the axis of the wall. The first row is placed on the auxiliary strips,
          In order to maintain equal spacing, insert distance crosses between tiles. It is also worth
          level and check the plane in order to be able to correct any possible deviation of the tiles on an ongoing basis.
          Using a rubber mallet, you can also press them to the surface, which will ensure even
          spread the adhesive underneath and increase adhesion. While working, we use such tools as
          such as spirit level, distance crosses, special tools for cutting tiles, rectangular trowel,
          rope for marking out, rubber hammer, tooth pack, auxiliary strips.`,
        },
        {
          type: 'HEADER',
          content: 'Groutingu',
        },
        {
          type: 'PARAGRAPH',
          content: `Laying tiles is an extremely time-consuming and tiring activity that requires exceptional precision
          and concentration. Therefore, in order not to undermine the effort put in their laying, you should
          efforts to finish them. A common mistake is grouting too quickly. We strongly advise against
          haste because if we start grouting before the glue has dried properly, unsightly discolorations may appear.
          unsightly discolorations may appear. Depending on the type of adhesive used, it may take up to 24 hours for the adhesive to dry - detailed
          detailed information on this subject is always provided on the package. As with adhesive mortar, preparation of the grout is also very important.
          preparation according to the manufacturer's instructions is also very important. Attempts to save and obtain
          trying to save and obtain more grout by adding more water will cause the grout to lose its properties.`,
        },
      ],
      tags: ['Mistakes', 'Hint', 'Renovation'],
    },
  ],
};
