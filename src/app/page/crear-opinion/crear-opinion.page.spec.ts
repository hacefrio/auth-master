import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearOpinionPage } from './crear-opinion.page';

describe('CrearOpinionPage', () => {
  let component: CrearOpinionPage;
  let fixture: ComponentFixture<CrearOpinionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearOpinionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
