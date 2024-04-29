// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component,ViewChild } from "@angular/core";
import { LinksComponent } from './links.component'; 
import { QuotesComponent }   from './quotes.component';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
    template: `<div>
                <bio-comp></bio-comp>
                <quotes-comp #quotesComponent></quotes-comp>
                <links-comp #linksComponent></links-comp>
               
              </div>`,
             
  styleUrls: ['./app.style.css']
})


export class AppComponent {
  @ViewChild('linksComponent') linksComponent: LinksComponent;
  @ViewChild('quotesComponent') quatesComponent: QuotesComponent;

  
}
