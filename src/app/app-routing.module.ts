import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
{path:'', component: HomePageComponent},
{path:'landingcontact', component: LandingPageComponent},
{path:'productos', component: ProductListComponent},
{path:'contact', component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }