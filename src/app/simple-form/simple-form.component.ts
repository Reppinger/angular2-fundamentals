import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.sass']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onClick(value) {
    console.log(value);
  }
}
