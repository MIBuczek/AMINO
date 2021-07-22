export interface IMessage {
  name: string;
  email: string;
  temat: string;
  message: string;
  error: string;
}

export interface IModalContent {
  modalTitle: string;
  form: IMessage;
  police: string;
  policeError: string;
  buttonText: string;
}

export const modalContent: { [x: string]: IModalContent } = {
  PL: {
    modalTitle: 'Zgłoś usterkę',
    form: {
      name: 'Twoje imie i nazwisko',
      email: 'Twoje email',
      temat: 'Rodzaj usterki',
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
  },
  EN: {
    modalTitle: 'Report a trouble',
    form: {
      name: 'Your name',
      email: 'Your email',
      temat: 'Trouble topic',
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
  },
};
