import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMupettsComponent } from './my-mupetts/my-mupetts.component';
import { MyArrayMupettsComponent } from './my-array-mupetts/my-array-mupetts.component';

const routes: Routes = [
  {path: 'my-muppetts', component: MyMupettsComponent},
  {path: 'my-muppett-array', component: MyArrayMupettsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
