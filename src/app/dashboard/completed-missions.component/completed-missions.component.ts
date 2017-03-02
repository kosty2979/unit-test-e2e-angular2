
import { Component, Input } from '@angular/core';
import { Mission } from '../mission.object';


@Component({
    selector: 'completed-missions',
    outputs: ['preflightClickEmitter', 'deleteMissionClickEmitter', 'updateMissionsEmitter'],
    template: require('./completed-missions.component.html'),
})
export class CompletedMissionsComponent {

    missions: Array<Mission> = [];

    constructor() {}

    @Input()
    set completedMission(mission: Mission){
        if (mission != null) {
            this.missions.push(mission);
        }
    }

}
