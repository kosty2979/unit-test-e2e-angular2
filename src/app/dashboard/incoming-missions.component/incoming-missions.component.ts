
import { Component, EventEmitter, Input } from '@angular/core';
import { Mission } from '../mission.object';
import { MoveMissionService } from '../move-mission.service';


@Component({
    selector: 'incoming-missions',
    outputs: ['preflightClickEmitter', 'deleteMissionClickEmitter', 'updateMissionsEmitter'],
    template: require('./incoming-missions.component.html'),
})
export class IncomingMissionsComponent {

    _missions: Array<Mission> = [];
    @Input()
    set missions(missions: Array<Mission>){
        this._missions = missions;
    }

    preflightClickEmitter: EventEmitter<Mission> = new EventEmitter<Mission>();

    deleteMissionClickEmitter: EventEmitter<Mission> = new EventEmitter<Mission>();

    updateMissionsEmitter: EventEmitter<Array<Mission>> = new EventEmitter<Array<Mission>>();

    constructor(private missionService: MoveMissionService) {}

    preflightClick(mission: Mission) {
        // Emit click on route delete button
        this._missions.splice(this._missions.indexOf(mission), 1);
        // this.preflightClickEmitter.emit(mission);
        this.missionService.sendMission(mission);
    }

    cancelIncomingMission(mission: Mission) {
        // Emit click on route delete button
        this.deleteMissionClickEmitter.emit(mission);
    }

}
