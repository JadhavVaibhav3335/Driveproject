import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './home/home';





@NgModule({
  declarations: [
    Home,
 
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { 

    scrollToNextSection() {
    const current = document.querySelector('#services') as HTMLElement;
    const next = current?.nextElementSibling;
    if (next) {
      (next as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }
}
