import { Component, Input } from "@angular/core";
class Links {
  link: string;
  

  constructor(link: string) {

      this.link = link;
     
  }
}
@Component({
    selector: 'links-comp',
    template: 	`<ng-content></ng-content>
                <div class="div">
                    <h3>Links</h3>
                    <ul>
                        <li *ngFor="let allLinks of links">
                          <a [href]="allLinks.link">{{ allLinks.link }}</a>
                        </li>
                    </ul>
                  <input [(ngModel)]="newLink" (keyup.enter)="addLink()" placeholder="Enter a new link" class="allInput"/>
                    
                </div>`,
             
    styleUrls: ['./app.style.css']
})
export class LinksComponent {
  @Input() link:string;
  newLink: string;

  links: Links[] =
  [
      { link: "https://en.wikipedia.org/wiki/Bill_Gates;"},
      { link: "https://www.gatesfoundation.org/;" },
      { link: "https://www.gatesnotes.com/;"  },
      { link: "https://twitter.com/billgates."  }
      
  ];
  addLink() {
    if (this.newLink) {
      this.links.push(new Links(this.newLink));
      this.newLink = ''; 
    }
  }
}
  