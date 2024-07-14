export interface Issue {
  issueNo: number;
  title: string;
  description: string;
  priority: 'niski' | 'wysoki';
  type: 'Funkcja' | 'Usterka' | 'Dokumentacja';
  completed?: Date;
}
