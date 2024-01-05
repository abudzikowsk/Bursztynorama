import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionComponent } from './wind-direction.component';

describe('WindDirectionComponent', () => {
  let component: WindDirectionComponent;
  let fixture: ComponentFixture<WindDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindDirectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
