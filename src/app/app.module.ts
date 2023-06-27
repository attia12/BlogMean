import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthorComponent } from './pages/author/author.component';
import { CreatearticleComponent } from './pages/createarticle/createarticle.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CoverComponent } from './pages/home/cover/cover.component';
import { BlogListComponent } from './pages/home/blog-list/blog-list.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularEditorModule} from "@kolkov/angular-editor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    CreatearticleComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    PrivacyComponent,
    CoverComponent,
    BlogListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      AngularEditorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
