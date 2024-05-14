import { Component, ElementRef, ViewChild, isStandalone } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComponentcommonService } from '../services/componentcommon.service';

@Component({
  selector: 'app-sidenavmenu',
  templateUrl: './sidenavmenu.component.html',
  styleUrl: './sidenavmenu.component.css'
})
export class SidenavmenuComponent {

  @ViewChild('drawer')
  input!: any;

    constructor(private commonService:ComponentcommonService){
       this.commonService.toggleSideNavEvent.subscribe({
        next:(data:any)=>{
          this.input.toggle();
        }
      })        
    }


}
