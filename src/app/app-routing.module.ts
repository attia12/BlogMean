import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {RegisterComponent} from "./pages/register/register.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {CreatearticleComponent} from "./pages/createarticle/createarticle.component";
import {AboutComponent} from "./pages/about/about.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {AuthorComponent} from "./pages/author/author.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthGuard} from "./service/auth.guard";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'article/:id',component:DetailComponent},
  {path:'create',canActivate:[AuthGuard],component:CreatearticleComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'author/:id',component:AuthorComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
