import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JudgeComponent } from './judge/judge.component';
import { GymnastComponent } from './gymnast/gymnast.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormJudgeComponent } from './form-judge/form-judge.component';
import { JudgeDetailsComponent } from './judge-details/judge-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'gymnasts', component: GymnastComponent },
  { path: 'judges', component: JudgeComponent },
  { path: 'form-judge', component: FormJudgeComponent },
  { path: 'judge-details/:id', component: JudgeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
