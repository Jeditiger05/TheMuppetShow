import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMupettsComponent } from './my-mupetts/my-mupetts.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

const routes: Routes = [
  {path: 'my-muppetts', component: MyMupettsComponent},
  {path: 'my-pets', component: MyPetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
