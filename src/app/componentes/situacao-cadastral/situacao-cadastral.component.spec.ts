import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoCadastralComponent } from './situacao-cadastral.component';

describe('SituacaoCadastralComponent', () => {
  let component: SituacaoCadastralComponent;
  let fixture: ComponentFixture<SituacaoCadastralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacaoCadastralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacaoCadastralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
