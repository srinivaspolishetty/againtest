import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showmenu = false;
  activelink:string;
  title = 'schoolapp';
  togglemenu(event){
    this.showmenu = !this.showmenu;
    if(event !== undefined){
      const target = event.currentTarget;
    const pElement = target.parentElement.parentElement;
    const pclassAttr = pElement.attributes.id;
    this.activelink = pclassAttr.value;
    }
  }
  showhide(){
    this.showmenu = !this.showmenu;
  }
}
