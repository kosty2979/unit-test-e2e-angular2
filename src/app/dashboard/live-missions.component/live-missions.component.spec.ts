	import { inject, async, TestBed } from '@angular/core/testing';
	import { Component } from '@angular/core';

	import { LiveMissionsComponent } from './live-missions.component.ts';
	import { MoveMissionService } from '../move-mission.service.ts';
	import { testObj } from '../../../../config/testObj.ts';
	let obj = testObj.slice();


	describe('test component LiveMissions', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [ LiveMissionsComponent  ],
				imports: [],
				providers: [MoveMissionService]
			});
		});

		it('create the LiveMissionsComponent ', async(() => {
			let self = this;
			let fixture;
			TestBed.compileComponents().then(() => {
			fixture = TestBed.createComponent(LiveMissionsComponent);
				fixture.componentInstance.missions = obj;
				self.app = fixture.componentInstance;
				fixture.detectChanges();
				const component = fixture.componentInstance;
				const element = fixture.nativeElement;
				expect(component).toBeTruthy();
				expect(element.querySelectorAll('th').length).toBe(6);
				expect(element.querySelectorAll('tr').length).toBe(3);
				expect(element.querySelectorAll('td').length).toBe(10);
				expect(element.querySelectorAll('button').length).toBe(4);
				});
		}));

		it('set mission is working', () => {
			let tmp  = obj[0];
			this.app.mission = tmp;
			expect(this.app.missions[2]).toBe(tmp);
		});

		it('method abortMission is defined', () => {
			expect(this.app.abortMission).toBeDefined();
		});

		it('method abortMission remove mission in the missions', () => {
			this.app.missions = obj;
			let result = obj.length - 1;
			let tmp = obj[0];
			this.app.abortMission(tmp);
			expect(this.app.missions.length).toBe(result);
		});

		it('method completeMission is defined', () => {
			expect(this.app.completeMission).toBeDefined();
		});

		it('method completeMission remove mission in the missions', () => {
			this.app.missions = obj;
			let result = obj.length - 1;
			let tempEvent;
			let tmp = obj[0];

			this.app.completedMission.subscribe(event => {
				tempEvent = event;
			});
			this.app.completeMission(tmp);

			expect(this.app.missions.length).toBe(result);
			expect(tempEvent).toBe(tmp);
		});

	});
