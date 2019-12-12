import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

import { DataProcessorComponent } from './data-processor.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [DataProcessorComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})
export class DataProcessorModule { }
