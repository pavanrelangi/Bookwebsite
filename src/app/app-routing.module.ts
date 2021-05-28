import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"aboutus",component:AboutusComponent},
{path:"home",component:HomeComponent},
{path:"home/:id",component: DetailsComponent},

{path:"contactus",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
