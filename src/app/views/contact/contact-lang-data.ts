export interface IContact {
  header: string;
  subHeader: string;
  hAddress: string;
  address: string[];
  hPhone: string;
  phones: string[];
  hEmial: string;
  emails: string[];
  hOpen: string;
  hours: string[];
  form: {
    name: string;
    email: string;
    temat: string;
    message: string;
    error: string;
  };
  police: string;
  policeError: string;
  buttonText: string;
  headerMap: string;
  subHeaderMap: string;
}

export const contactContent: { [x: string]: IContact } = {
  PL: {
    header: 'kontakt',
    subHeader: 'Skontaktuj sie z nami',
    hAddress: 'Nasz adres',
    address: [
      'Mokry Dwór',
      'ul. Starodworska 4',
      '50-458 Wrocław',
      'NIP: 899-109-04-96',
    ],
    hPhone: 'Zadzwoń do nas',
    phones: ['+48 601 95 56 56', '+48 607 766 901', '+48 601 956 901'],
    hEmial: 'Napisz do nas',
    emails: [
      'stolarka@animo.wroclaw.pl',
      'animos.marcin@gmail.com',
      'animo@animo.wroclaw.pl',
    ],
    hOpen: 'Godziny otwarcia',
    hours: ['Poniedziałęk-Piątek', '8:00-16:00'],
    form: {
      name: 'Twoje imie i nazwisko',
      email: 'Twoje email',
      temat: 'Temat wiadomosci',
      message: 'Wiadomość',
      error: 'To pole jest wymagane',
    },
    police: `
    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
    złożenia mi zapytania ofertowego lub oferty, zgodnie z ustawą z
    dnia 29.08.1997r. o ochronie danych osobowych (Dz. U. z 2002
    roku, nr 101, poz. 926 tekst jednolity z późniejszymi zmianami).
    `,
    policeError:
      'Przed wysłaniem wiadomości prosze wyrazic zgode na przetworzenie danych',
    buttonText: 'Wyślij wiadomość',
    headerMap: 'Znajdz nas',
    subHeaderMap: 'Sprawdz jak do nas dojechać',
  },
  EN: {
    header: 'CONTACT',
    subHeader: 'Contact Us',
    hAddress: 'Address',
    address: [
      'Mokry Dwór',
      'ul. Starodworska 4',
      '50-458 Wrocław',
      'NIP: 899-109-04-96',
    ],
    hPhone: 'Call Us',
    phones: ['+48 601 95 56 56', '+48 607 766 901', '+48 601 956 901'],
    hEmial: 'Email Us',
    emails: [
      'stolarka@animo.wroclaw.pl',
      'animos.marcin@gmail.com',
      'animo@animo.wroclaw.pl',
    ],
    hOpen: 'Open Hours',
    hours: ['Monday-Friday', '8:00-16:00'],
    form: {
      name: 'Your name',
      email: 'Your email',
      temat: 'Subject',
      message: 'Message',
      error: 'This field is required',
    },
    police: `
    I agree to the processing of my personal data in order to
    submitting me an inquiry or an offer, in accordance with the Act of
    29.08.1997r. on the protection of personal data (Journal of Laws of 2002
    No. 101, item 926 uniform text with later changes).
    `,
    policeError:
      'Please give your consent to the processing of your data before sending the message',
    buttonText: 'Send Message',
    headerMap: 'Find us',
    subHeaderMap: 'Check how to get to us',
  },
};
