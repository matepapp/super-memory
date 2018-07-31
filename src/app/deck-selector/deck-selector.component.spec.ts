import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSelectorComponent } from './deck-selector.component';

describe('DeckSelectorComponent', () => {
  let component: DeckSelectorComponent;
  let fixture: ComponentFixture<DeckSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
