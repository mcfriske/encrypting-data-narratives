import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlighterComponent } from './highlighter/highlighter.component';
import { GroupsComponent } from './groups/groups.component';
import {FormsModule} from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HighlightPipe } from './pipes/highlight.pipe';
import { SettingsModal } from './settings/settings.modal';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [HighlighterComponent, GroupsComponent, HighlightPipe, SettingsModal],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule

  ],
  exports: [
    HighlighterComponent, GroupsComponent, HighlightPipe, 
  ],
  entryComponents: [SettingsModal],
})
export class SharedModule { }
