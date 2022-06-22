import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onomatopia: string[] = [];

  onReceiveNewOnomatopia(event: string){
    this.onomatopia.push(event);
  }
}
