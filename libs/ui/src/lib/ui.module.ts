import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: NavbarComponent
  }
];
@NgModule({
  imports: [CommonModule, TranslocoModule, RouterModule.forChild(routes)],
  providers: [],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
})
export class UiModule { }
