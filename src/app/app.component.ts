import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularmaterialexamp';
  news: number = 3;
  show: boolean = false;
  open:boolean = false;

  getData() {
    this.show = true;
    setTimeout(() => (this.show = false), 3000);
  }

  openSide(){
    this.open = !this.open;
  }
}
