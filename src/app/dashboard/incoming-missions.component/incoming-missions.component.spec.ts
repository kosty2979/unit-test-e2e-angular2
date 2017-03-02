  import { inject, async, TestBed } from '@angular/core/testing';
  import { Component } from '@angular/core';

  import { IncomingMissionsComponent } from './incoming-missions.component';
  import { MoveMissionService } from '../move-mission.service.ts';
  import { testObj } from '../../../../config/testObj.ts';
  let obj = testObj.slice();

  describe('test component IncomingMissions', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [IncomingMissionsComponent],
        imports: [],
        providers: [MoveMissionService]
      });
    });

    it('create the IncomingMissionsComponent ', async(() => {
      let self = this;
      let fixture;
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(IncomingMissionsComponent);
        fixture.componentInstance._missions = obj;
        self.app = fixture.componentInstance;
        fixture.detectChanges();
        const component = fixture.componentInstance;
        const element = fixture.nativeElement;
        expect(component).toBeTruthy();
        expect(element.querySelectorAll('th').length).toBe(6);
        expect(element.querySelectorAll('tr').length).toBe(3);
        expect(element.querySelectorAll('td').length).toBe(10);
        expect(element.querySelectorAll('button').length).toBe(2);
      });
    }));

    it('_missions is defined', () => { 
      expect(this.app._missions).toBeDefined();
    });

    it('set _mission is working', () => {
      this.app.missions = obj ;
      expect(this.app._missions).toBe(obj);
    });

    it('method preflightClick is defined', () => {
      expect(this.app.preflightClick).toBeDefined();
    });

    it('method preflightClick remove mission in the _missions', () => {
      this.app._missions = obj;
      let testMission = null;
      let result = obj.length - 1;
      let tmp = obj[0];
      expect(this.app._missions.length).toBe(obj.length);
      this.app.missionService.getService().subscribe(mission => {
        testMission = mission;
      }
    );
      this.app.preflightClick(tmp);
      expect(this.app._missions.length).toBe(result);
      expect(testMission).toBe(tmp);

    });

  });
