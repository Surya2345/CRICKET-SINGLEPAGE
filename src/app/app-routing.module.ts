import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
import { BlogsComponent } from './blogs/blogs.component';



const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'player',component: PlayerComponent},
  {path:'shop',component: ShopComponent},
  {path:'contact',component: ContactComponent},
  {path:'signup',component: SignupComponent},
  {path:'blogs',component: BlogsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
