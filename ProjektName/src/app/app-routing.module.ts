import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'impressum', component: ImpressumComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'content', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
