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

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    AssetManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
  ],
  providers: [WebsocketService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
