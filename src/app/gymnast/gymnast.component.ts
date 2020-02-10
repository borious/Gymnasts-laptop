import { Component, OnInit, ViewChild, HostListener, ModuleWithComponentFactories } from '@angular/core';
import { Gymnast } from '../gymnast';
import { GymnastService } from '../services/gymnast.service';
import { MdbTableDirective } from 'angular-bootstrap-md';
import * as moment from 'moment';

@Component({
  selector: 'app-gymnast',
  templateUrl: './gymnast.component.html',
  styleUrls: ['./gymnast.component.scss']
})
export class GymnastComponent implements OnInit {
  title = 'List of Gymnasts';
  gymnasts: Gymnast[];
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable: MdbTableDirective;
  previous: string;
  searchText = '';

ageFromDateOfBirth(dateOfBirth:any):number{
return moment().diff(dateOfBirth, 'years');
}

  @HostListener('input')


  focusFunction(){
    if (this.gymnasts !== undefined){
      if (this.mdbTable.getDataSource() === undefined) {
        this.mdbTable.setDataSource(this.gymnasts);
        this.previous = this.mdbTable.getDataSource();
      }
      this.searchItems();
  }
}
  // oninput() {
  //     this.searchItems();
  // }

  constructor(private gymnastService: GymnastService) {}

  ngOnInit() {
    this.getGymnasts();
  }

  getGymnasts(): void {
    this.gymnastService.getGymnasts().subscribe(g => (this.gymnasts = g));
  }

   searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.gymnasts = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.gymnasts = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['firstName',
        'middleName', 'lastName', 'club']);
      this.mdbTable.setDataSource(prev);
    }
    if (this.searchText === '') {
      this.getGymnasts();
    }
  }
}
