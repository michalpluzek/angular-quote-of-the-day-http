import { Quote } from "./quote.model";

export class QuoteService {
  private quotes: Quote[] = quotes2;

  private getRandomQuote(): Quote {
    const randomIndex: number = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
  public generateRandomQuote(delay: number, callback: (quote: Quote) => void) {
    callback(this.getRandomQuote());
    setInterval(() => callback(this.getRandomQuote()), delay);
  }
}

const quotes2: Quote[] = [
  {
    line: "Lepiej zaliczać się do niektórych, niż do wszystkich.",
    author: "Andrzej Sapkowski",
  },
  {
    line: "To, że milczę, nie znaczy, że nie mam nic do powiedzenia.",
    author: "Jonathan Carroll",
  },
  {
    line: "Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła",
    author: "Wisława Szymborska",
  },
  {
    line: "Książki są lustrem: widzisz w nich tylko to co, już masz w sobie.",
    author: "Carlos Ruiz Zafón",
  },
];
