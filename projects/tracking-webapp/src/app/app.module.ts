import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { GooglemapComponent } from './googlemap/googlemap.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
