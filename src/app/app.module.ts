
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// tslint:disable-next-line: import-spacing
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { GymnastComponent } from './gymnast/gymnast.component';
import { JudgeComponent } from './judge/judge.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormJudgeComponent } from './form-judge/form-judge.component';
import { JudgeDetailsComponent } from './judge-details/judge-details.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    GymnastComponent,
    JudgeComponent,
    HomePageComponent,
    FormJudgeComponent,
    JudgeDetailsComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
