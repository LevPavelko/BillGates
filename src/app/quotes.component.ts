import { Component, Input } from "@angular/core";
class Quote {
  quote: string;
  

  constructor(quote: string) {

      this.quote = quote;
     
  }
}
@Component({
    selector: 'quotes-comp',
    template: 	`<ng-content></ng-content>
                <div class="div">
                <h3>Quote</h3>
                <ul>
                  <li *ngFor="let quoteAll of quotes">{{ quoteAll.quote }}</li>
                </ul>
                <input [(ngModel)]="newQuote" (keyup.enter)="addQuote()" placeholder="Enter a new quote" class="allInput"/>
            </div>`,
    styleUrls: ['./app.style.css']
            
})
export class QuotesComponent {
  @Input() quote:string;
  newQuote: string;

  quotes: Quote[] =
  [
      { quote: "«Patience is a key element of success»"},
      { quote: "«If you think your teacher is tough, wait till you get a boss»" },
      { quote: "«Life is not fair — get used to it! »"  },
      { quote: "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»"  },
      { quote: "«Be nice to nerds. Chances are you’ll end up working for one»"  }
  ];
  addQuote() {
    if (this.newQuote) {
      this.quotes.push(new Quote(this.newQuote));
      this.newQuote = ''; 
    }
  }
}
  