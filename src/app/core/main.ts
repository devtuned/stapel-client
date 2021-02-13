import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { appConfiguration } from '../../../config/application/env'
import { AppModule } from '../module/app/app.module'

if (appConfiguration.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
