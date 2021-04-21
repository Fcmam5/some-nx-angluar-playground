import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from "@pocasses/ui";
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { RouterModule } from '@angular/router';
import { TranslocoConfig, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { translocoLoader } from './transloco/transloco.loader';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, HttpClientModule, TranslocoRootModule, RouterModule.forRoot([
    {
      path: '',
      loadChildren: () =>
        import('@pocasses/ui').then(m => m.UiModule)
    }
  ])],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        reRenderOnLangChange: true,
        availableLangs: ['en', 'fr', 'ar'],
        defaultLang: 'en',
        prodMode: false,
      } as TranslocoConfig
    },
    translocoLoader
  ], bootstrap: [AppComponent],
})
export class AppModule { }
