import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavmenuComponent } from './sidenavmenu.component';

describe('SidenavmenuComponent', () => {
  let component: SidenavmenuComponent;
  let fixture: ComponentFixture<SidenavmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
