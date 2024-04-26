// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component } from "@angular/core";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
    template: `<div>
                <bio-comp></bio-comp>
                <quotes-comp></quotes-comp>
                <links-comp></links-comp>
              
              </div>`,
             
  styleUrls: ['./app.style.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
  name = "";
}
