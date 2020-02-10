import { Component, OnInit } from '@angular/core';
import { Judge } from '../judge';
import { ActivatedRoute } from '@angular/router';
import { JudgeService } from '../services/judge.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-judge-details',
  templateUrl: './judge-details.component.html',
  styleUrls: ['./judge-details.component.scss']
})
export class JudgeDetailsComponent implements OnInit {

  judge:Judge;
  constructor(private judgeService: JudgeService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit() {
  this.getJudge();
  }

getJudge(): void{
  const id = +this.route.snapshot.paramMap.get('id');
    this.judgeService.getJudge(id)
      .subscribe(judge => this.judge = judge);
}
 goBack(): void {
    this.location.back();
  }

}
