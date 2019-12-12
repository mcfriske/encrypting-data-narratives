import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataProcessorComponent } from './data-processor/data-processor.component';

const routes: Routes = [
  {
    path: 'data-processor',
    component: DataProcessorComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
