import { Issue } from '../app/issue';

export const issues: Issue[] = [
  {
    issueNo: 1,
    title:  'Dodać weryfikację adresu e-mail w formularzu rejestracji',
    description: 'Sprawdzić poprawność adresu e-mail wprowadzonego w formularzu rejestracji użytkownika',
    priority: 'wysoki',
    type: 'Funkcja'
  },
  {
    issueNo: 2,
    title:  'Pokazywać dane adresu klienta',
    description: 'Dodać w liście klientów kolumnę, w której wyświetlane będą ich dane adresowe',
    priority: 'niski',
    type: 'Funkcja'
  },
  {
    issueNo: 3,
    title:  'Eksportowanie do CSV nie działa.',
    description: 'Podczas eksportowania raportu do formatu CSV zgłaszany jest błąd.',
    priority: 'wysoki',
    type: 'Usterka'
  },
  {
    issueNo: 4,
    title:  'Ustawienia regionalne dla poszczególnych użytkowników',
    description: 'Dodać możliwość konfiguracji ustawień regionalnych dla bieżącego użytkownika',
    priority: 'niski',
    type: 'Funkcja'
  },
  {
    issueNo: 5,
    title:  'Samouczek dodawania nowych klientów',
    description: 'Utworzyć samouczek na temat dodawania nowego klienta do aplikacji',
    priority: 'wysoki',
    type: 'Dokumentacja'
  },
];
