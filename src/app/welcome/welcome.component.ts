import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-memory-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  deckSizes: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { }

  ngOnInit() {
  }
}
