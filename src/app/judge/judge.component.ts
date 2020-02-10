import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { JudgeService } from '../services/judge.service';
import { Judge } from '../judge';
import { MdbTableDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeComponent implements OnInit {

  constructor(private judgeService: JudgeService) { }
  title = 'List of Judges';
  judges: Judge[];

  @ViewChild(MdbTableDirective, { static: true })
  mdbTable: MdbTableDirective;
  previous: string;
  searchText = '';

  @HostListener('input')


  focusFunction(){
    if(this.judges !== undefined) {
      if (this.mdbTable.getDataSource() === undefined) {
        this.mdbTable.setDataSource(this.judges);
        this.previous = this.mdbTable.getDataSource();
      }
      this.searchItems();
  }
}


  // oninput() {
  //   if (this.judges !== undefined) {
  //     if (this.mdbTable.getDataSource() === undefined) {
  //       this.mdbTable.setDataSource(this.judges);
  //       this.previous = this.mdbTable.getDataSource();
  //     }
  //     this.searchItems();
  //   }
  // }

  ngOnInit() {
    this.getJudges();

  }

  getJudges(): void {
    this.judgeService.getJudges().subscribe(judges => (this.judges = judges));
  }

  searchItems() {

    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.judges = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.judges = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['firstName',
        'middleName', 'lastName']);
      this.mdbTable.setDataSource(prev);
    }
    if (this.searchText === '') {
      this.getJudges();
    }
  }

}

