import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: require('./sample.component.html'),
  styles: [require('./sample.component.css')]
})
export class SampleComponent implements OnInit {
  title: string = 'Home Page';
  body: string = 'This is the about home body';
  message: string;


  ngOnInit() {
  }

}
