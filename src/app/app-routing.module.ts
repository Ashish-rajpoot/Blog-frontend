import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'category/:category/:id', component:SingleCategoryComponent},
  {path:'post/:id', component:SinglePostComponent},

  {path:'about',component:AboutUsComponent},
  {path:'terms&condition', component: TermsAndConditionComponent},
  {path:'contect', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
