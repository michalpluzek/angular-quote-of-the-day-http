import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { QuoteComponent } from "./quote.component";
import { QuoteService } from "./quote.service";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, QuoteComponent],
  providers: [QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
