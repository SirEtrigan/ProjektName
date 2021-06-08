import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
<<<<<<< HEAD
    path: 'news', component: NewsComponent 
  },
/*   { 
    path: '', component: NavbarComponent 
  }, */
  { 
    path: 'contact', component: ContactComponent 
=======
    path: '', component: AppComponent 
>>>>>>> fc692a23c916e0c7629289fe5540a5970db1e80c
  },
  { 
    path: 'news', component: NewsComponent 
  },

  // { 
  //   path: 'contact', component: ContactComponent 
  // },
  // { 
  //   path: 'impressum', component: ImpressumComponent 
  // },
  // { 
  //   path: 'about', component: AboutComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
