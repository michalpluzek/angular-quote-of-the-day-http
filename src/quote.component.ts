import { Component } from "@angular/core";
import { Quote } from "./quote.model";
import { QuoteService } from "./quote.service";

@Component({
  selector: "quote-app",
  template: `
    <p>
      <em>{{ quote?.line }}</em>
    </p>
    <p>{{ quote?.author }}</p>
  `,
})
export class QuoteComponent {
  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.getQuoteOfTheDay().then((quote) => (this.quote = quote));
  }
}
