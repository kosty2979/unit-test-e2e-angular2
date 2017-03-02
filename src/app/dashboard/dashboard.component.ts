import { Component, EventEmitter } from '@angular/core';
import { Mission } from './mission.object';
import { Headers, Http } from '@angular/http';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.template.html'
})
export class Dashboard {
    missionEmitter: EventEmitter<Mission[]> = new EventEmitter<Mission[]>();
    missions: Array<Mission> = [];
    completedMission: Mission;
    updateMissions() {        
        if (this.missions) { this.missions.splice(0); }
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.get('http://35.160.96.5:8000/dashboard-missions/', {headers: headers}).subscribe(
            response => {
                response.json().forEach(mission => this.missions.push(new Mission(mission)));
            },
            error => console.error(error.json().message)
        );
        this.missionEmitter.emit(this.missions);
    }
    completeMission(mission: Mission) {
        if (mission != null) {
            this.completedMission = mission;
        }
    }

    constructor(private http: Http) {}
}
