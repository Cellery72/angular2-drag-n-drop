import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DragulaModule } from 'ng2-dragula';
@NgModule({
  imports: [
    BrowserModule,
    DragulaModule,
    RouterModule.forRoot([
      { path: 'home', component: SampleComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' }
    ])
  ],                             // route definitions/modules
  declarations: [
    AppComponent,
    SampleComponent,
  ],                             // components and directives
  bootstrap: [AppComponent],     // root component
  providers: []                              // services
})
export class AppModule { }