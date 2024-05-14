import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentcommonService {

  @Output() toggleSideNavEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }


  toggleSideNav(){
    console.log("toggle clicked");
    this.toggleSideNavEvent.emit("drawer");
  }
}
