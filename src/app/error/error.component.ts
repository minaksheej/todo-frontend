import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage='some error occured!! contact support team at ***----***!!'
  constructor() { }

  ngOnInit() {
  }

}
