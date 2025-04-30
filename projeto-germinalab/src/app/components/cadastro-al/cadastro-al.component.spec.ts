import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlComponent } from './cadastro-al.component';

describe('CadastroAlComponent', () => {
  let component: CadastroAlComponent;
  let fixture: ComponentFixture<CadastroAlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
