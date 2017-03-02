

import { inject, async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CompletedMissionsComponent } from './completed-missions.component';
import { testObj } from '../../../../config/testObj.ts';
let obj = testObj.slice();

describe('test component CompletedMission', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedMissionsComponent ],
      imports: [],
      providers: []
    });
  });

  it('create the CompletedMissionsComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture = TestBed.createComponent(CompletedMissionsComponent);
      fixture.componentInstance.missions = obj;
      fixture.detectChanges();
      const component = fixture.componentInstance;
      const element = fixture.nativeElement;
      expect(component).toBeTruthy();
      expect(element.querySelectorAll('th').length).toBe(5);
      expect(element.querySelectorAll('tr').length).toBe(3);
      expect(element.querySelectorAll('td').length).toBe(8);
    });
  }));


  beforeEach(() => {
    this.app = new CompletedMissionsComponent();
  });

  it('missions is defined', () => {
    expect(this.app.missions).toBeDefined();
  });

  it('set mission is working', () => {
    this.app.completedMission = 'Testing' ;
    expect(this.app.missions[0]).toBe('Testing');
  });

});
