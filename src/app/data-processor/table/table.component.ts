import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: any;
  @Input() displayedColumns: string[];
  @Input() data;
  @Input() grouping;
  dataCopy = [];
  dataSourceCopy: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() highlights;

  constructor() { }

  ngOnInit() {
    if (this.grouping) {
      var regex = this.grouping.regex;
      var re = new RegExp(regex, 'gi');
      for (var i in this.data) {
        // console.log(i, this.data[i]);
        var row = this.data[i];
        var contains = []
        for (var j in row) {
          var value = row[j]
          var match = value.match(re);
          // console.log(match);
          if (match != null) {
            contains.push(true);
          } else {
            contains.push(false);
          }
        }
        // console.log(contains);
        if (contains.some(v => v === true)) {
          this.dataCopy.push(row);
        }
      }

      if (this.dataCopy != []) {
        this.data = this.dataCopy;
      }

    }
    
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

}
