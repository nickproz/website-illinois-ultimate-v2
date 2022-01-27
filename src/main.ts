import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
/*
 Our application code
*/

// Turns off assertions and other checks within the framework if we are in production
if (process.env.ENV === 'prod') {
    enableProdMode();
}
// Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
