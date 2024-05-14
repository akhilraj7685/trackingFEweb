import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { WebsocketService } from './services/websocket.service';
import { HttpClientModule } from '@angular/common/http';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { SidenavmenuComponent } from './sidenavmenu/sidenavmenu.component';
import { MenubarComponent } from './menubar/menubar.component';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    AssetManagementComponent,
    HomeComponent,
    SidenavmenuComponent,
    MenubarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    MatSidenavModule,MatButtonModule,MatSelectModule,MatFormFieldModule,MatToolbarModule,MatIconModule,MatMenuModule,MatListModule
  ],

  providers: [WebsocketService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}