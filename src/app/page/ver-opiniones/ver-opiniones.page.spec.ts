import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerOpinionesPage } from './ver-opiniones.page';

describe('VerOpinionesPage', () => {
  let component: VerOpinionesPage;
  let fixture: ComponentFixture<VerOpinionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerOpinionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
