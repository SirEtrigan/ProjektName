import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion'; 

import { PasswordComponent } from './password/password.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';
import { BlogSiteComponent } from './blog-site/blog-site.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { JwtModule } from '@auth0/angular-jwt';
import { TagComponent } from './tag/tag.component';

import { AlertDialogBodyComponent } from './alert-dialog-body/alert-dialog-body.component';
import { FormsModule } from '@angular/forms';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';

//import { Routes, RouterModule } from '@angular/router' ;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    PasswordComponent,
    ContentComponent,
    FooterComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    ImpressumComponent,
    HomeComponent,
    BlogSiteComponent,

    BlogDetailsComponent,
    TagComponent,

    AlertDialogBodyComponent,
    AllBlogsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    TextFieldModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatExpansionModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    MatGridListModule
   // RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
