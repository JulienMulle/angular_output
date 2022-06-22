import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {

  @Output()
  sendOnotopiaToParent: EventEmitter<string> = new EventEmitter();
  
  newOnomatopia: string = "";

  constructor() { };

  ngOnInit(): void {
  }
  
  createOnomatopia(): void {
    this.sendOnotopiaToParent.emit(this.newOnomatopia);
  }
}
