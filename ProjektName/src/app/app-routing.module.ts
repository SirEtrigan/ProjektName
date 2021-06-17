import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './login/login.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';

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
  },
  {
    path: '', component: ContentComponent
  },
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'admin', component:AdminComponent,
    canActivate:[AuthGuardService],
    children:[
      {path:'all-blogs', component:AllBlogsComponent},
      {path:'add-blog', component:AddBlogComponent},
      {path:'update-blog/:id',component:UpdateBlogComponent}
    ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
