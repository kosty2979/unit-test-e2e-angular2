import { inject, async, TestBed } from '@angular/core/testing';

import { MoveMissionService } from './move-mission.service.ts';
import { testObj } from '../../../config/testObj.ts';
let obj = testObj.slice();

describe('test move service', () => {

this.service  = new MoveMissionService ();

it('method sendMission is defined', () => {
    expect(this.service.sendMission).toBeDefined();
  });

it('method getService is defined', () => {
    expect(this.service.getService).toBeDefined();
  });

it('test missionEmitter', () => {
  let testMission;
  this.service.getService().subscribe(mission => {
        testMission = mission;
        }
    );

  this.service.sendMission( obj[0] );
  expect(testMission).toBe( obj[0] );
  });

});
