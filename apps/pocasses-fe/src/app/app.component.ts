import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'pocasses-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pocasses-fe';
  constructor(private translocoService: TranslocoService) { }

  change(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}
