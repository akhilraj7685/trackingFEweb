import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


 platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.error(err));

// bootstrapApplication(AppComponent, {
//   providers: [provideCharts(withDefaultRegisterables())],
// }).catch((err) => console.error(err));
