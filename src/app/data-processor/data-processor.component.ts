import { Component, OnInit, ViewChild } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-data-processor',
  templateUrl: './data-processor.component.html',
  styleUrls: ['./data-processor.component.scss']
})
export class DataProcessorComponent implements OnInit {
  csvText: string = '';
  data: any;
  displayedColumns: string[];
  dataSource: any;

  groups: any = [];
  highlights: any =[]

  constructor(private papa: Papa) { }

  ngOnInit() {
  }

  onCSVInput(csvData) {
    // console.log(csvData);
    let result = this.papa.parse(csvData,{
      header: true,
      complete: (result) => {
        console.log(result);
          return result;
      }
    });
    this.data = result.data;
    this.dataSource = new MatTableDataSource(this.data);
    this.displayedColumns = result.meta.fields;
  }

  updateGroups(e:any) {
    console.log(e);
  }

  createGroup(group:any) {
    group.id = this.groups.length;
    this.groups.push(group);
  }

  updateHighlights(e:any) {
    console.log(e);
  }

  createHighlight(highlight:any) {
    highlight.id = this.highlights.length;
    this.highlights.push(highlight);
  }

}
