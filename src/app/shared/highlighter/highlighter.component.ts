import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SettingsModal } from '../settings/settings.modal';
import {MatDialog, MatDialogConfig} from "@angular/material";
import * as _ from 'lodash';

export class Highlight {
  name: string;
  color: string;
  regex: string;
  id: number;
}

@Component({
  selector: 'app-highlighter',
  templateUrl: './highlighter.component.html',
  styleUrls: ['./highlighter.component.scss']
})
export class HighlighterComponent implements OnInit {
  @Output() onChange: any = new EventEmitter();
  @Output() onCreate: any = new EventEmitter();
  @Input() highlights;
  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(highlight) {
    var create = false;

    if (!highlight) {
      highlight = new Highlight();
      create = true;
    }

    const dialogRef = this.dialog.open(SettingsModal, 
      {data: {data: highlight, type:'highlight' }});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return null}
      if (!create) {
        this.highlights[result.id] = result;
        var obj: any = {};
        obj.result = _.cloneDeep(result);
        this.onChange.emit(obj);
      } else {
        this.onCreate.emit(result);
      }

    });
  }

}
