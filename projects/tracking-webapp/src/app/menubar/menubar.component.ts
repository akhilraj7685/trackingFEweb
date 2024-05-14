import { Component } from '@angular/core';
import { ComponentcommonService } from '../services/componentcommon.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {


constructor(private commonService:ComponentcommonService){}

  toggleme(){
    this.commonService.toggleSideNav();
    
  }
}
