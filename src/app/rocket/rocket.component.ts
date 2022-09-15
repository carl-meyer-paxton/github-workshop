import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
