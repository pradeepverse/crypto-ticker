import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinElementComponent } from './coin-element.component';

describe('CoinElementComponent', () => {
  let component: CoinElementComponent;
  let fixture: ComponentFixture<CoinElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
