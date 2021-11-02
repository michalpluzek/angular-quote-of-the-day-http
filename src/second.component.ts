import { Component } from "@angular/core";
import { Quote } from "./quote.model";
import { QuoteService } from "./quote.service";

@Component({
  selector: "second-app",
  // providers: [{ provide: QuoteService, useClass: TestService }],
  // providers: [{ provide: QuoteService, useValue: new TestService() }],
  providers: [
    {
      provide: QuoteService,
      useFactory: function () {
        return new QuoteService();
      },
    },
  ],
  template: `
    <p>
      <em>{{ quote.line }}</em>
    </p>
    <p>{{ quote.author }}</p>
  `,
})
export class SecondComponent {
  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.generateRandomQuote(2000, (quote) => (this.quote = quote));
  }
}
