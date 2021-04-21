import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

const loader = ['en', 'fr', 'ar'].reduce((acc, lang) => {
  acc[lang] = () => import(`../i18n/${lang}.json`);
  return acc;
}, {});

@Component({
  selector: 'pocasses-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'navbarScope',
        loader
      }
    }
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
