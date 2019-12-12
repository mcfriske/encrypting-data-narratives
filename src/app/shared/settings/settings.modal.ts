import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.modal.html',
  styleUrls: ['./settings.modal.scss']
})
export class SettingsModal implements OnInit {
  type: string;
  data: any;
  currentColor = 'yellow';

  colors = ['yellow', 'lime', 'cadetblue', 'lightgreen', 'magenta', 'crimson']
  constructor(private dialogRef: MatDialogRef<SettingsModal>,
             @Inject(MAT_DIALOG_DATA) public object: any) { }

  ngOnInit() {
    // console.log(this.object)
    this.type = this.object.type;
    this.data = this.object.data;
    this.data.color = 'yellow';
  }

  onNoClick(type): void {
    if (type != null) {
      this.dialogRef.close(this.data);
    } else {
      this.dialogRef.close();
    }
  }

  close() {
    this.onNoClick(null);
  }

  save() {
    this.onNoClick('save');
  }

}
