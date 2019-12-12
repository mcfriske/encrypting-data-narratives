import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SettingsModal } from '../settings/settings.modal';
import {MatDialog, MatDialogConfig} from "@angular/material";
import * as _ from 'lodash';

export class Group {
  name: string;
  length: number;
  regex: string;
  id: number;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  @Output() onChange: any = new EventEmitter();
  @Output() onCreate: any = new EventEmitter();
  @Input() groups;
  

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(group) {
    var create = false;

    if (!group) {
      group = new Group();
      create = true;
    }

    const dialogRef = this.dialog.open(SettingsModal, 
      {data: {data: group, type:'group' }});

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {return null}
      if (!create) {
        this.groups[result.id] = result;
        var obj: any = {};
        obj.result = _.cloneDeep(result);
        this.onChange.emit(obj);
      } else {
        this.onCreate.emit(result);
      }

    });
  }

}
