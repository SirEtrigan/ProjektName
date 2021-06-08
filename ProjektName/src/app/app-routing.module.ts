import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { 
    path: 'news', component: NewsComponent 
  },
/*   { 
    path: '', component: NavbarComponent 
  }, */
  { 
    path: 'contact', component: ContactComponent 
  },
  { 
    path: 'impressum', component: ImpressumComponent 
  },
  { 
    path: 'about', component: AboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
