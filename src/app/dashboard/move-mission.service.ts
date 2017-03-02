/**
 * Created by user on 2/2/2017.
 */

import { Mission } from './mission.object';
import { EventEmitter } from '@angular/core';

export class MoveMissionService {

    private missionEmitter: EventEmitter<Mission> = new EventEmitter<Mission>();
    constructor() {}

    public sendMission(mission: Mission) {
        this.missionEmitter.emit(mission);
    }
    public getService(): EventEmitter<Mission> {
        return this.missionEmitter;
    }

}
