export class InMemoryDataService {
  createDb() {
    let heroes = [
      { id: 1, name: '250' },
      { id: 2, name: '33' },
      { id: 3, name: '80' },
      { id: 4, name: '130' },
      { id: 5, name: 'Waliallah' },
      { id: 6, name: 'Zainab' },
      { id: 7, name: 'Arfeen' }
    ];
    return {heroes};
  }
}