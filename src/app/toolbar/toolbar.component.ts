import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'super-memory-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  logo = require('../../assets/logo.svg');
  title = 'SUPER MEMORY GAME';

  navigation = [
    { link: '/high-scores', label: 'High Scores' },
    { link: '/game', label: 'Start New Game' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
