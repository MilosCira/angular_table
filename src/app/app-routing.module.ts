import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from './services/data.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
