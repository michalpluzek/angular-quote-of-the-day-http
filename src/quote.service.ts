import { Quote } from "./quote.model";

export class QuoteService {
  public getQuoteOfTheDay(): Quote {
    return {
      line: "Lepiej zaliczać się do niektórych, niż do wszystkich.",
      author: "Andrzej Sapkowski",
    };
  }
}
