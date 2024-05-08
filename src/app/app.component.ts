// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component } from "@angular/core";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
    template: `<div>
                <input type="button" id="quotes" (click)="setPart($event)" value="Quotes" class="submitButton">
                <input type="button" id="links" (click)="setPart($event)" value="Links" class="submitButton">
                <input type="button" id="bio" (click)="setPart($event)" value="Biography" class="submitButton">
                <div [ngSwitch]="part">
                <ng-template ngSwitchCase="quotes"><quotes-comp></quotes-comp></ng-template>
                <ng-template ngSwitchCase="links"><links-comp></links-comp></ng-template>
               
                
                <ng-template ngSwitchDefault><bio-comp></bio-comp></ng-template>
                </div>
               
              
              </div>`,
             
  styleUrls: ['./app.style.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
  part: string = "bio";

  setPart(event: any) {
    this.part = event.target.id;
  }
}
