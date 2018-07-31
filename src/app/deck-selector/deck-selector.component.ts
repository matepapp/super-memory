import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'super-memory-deck-selector',
  templateUrl: './deck-selector.component.html',
  styleUrls: ['./deck-selector.component.scss']
})
export class DeckSelectorComponent implements OnInit {
  @Input() direction: 'row' | 'column';
  deckSizes: number[] = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { }

  ngOnInit() {
  }

}
