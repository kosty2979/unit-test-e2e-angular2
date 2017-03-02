  
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MoveMissionService } from '../move-mission.service';
import { Mission } from '../mission.object';



@Component({
    selector: 'live-missions',
    outputs: ['preflightClickEmitter', 'deleteMissionClickEmitter', 'updateMissionsEmitter'],
    template: require('./live-missions.component.html'),
})
export class LiveMissionsComponent implements OnInit, OnDestroy {
    @Output() completedMission: EventEmitter<Mission> = new EventEmitter<Mission>();

    missions: Array<Mission> = [];

    constructor(private missionService: MoveMissionService) {}

    @Input()
    set mission(mission: Mission) {
        this.missions.push(mission);
    }

    ngOnInit() {
        this.missionService.getService().subscribe(mission => {
            this.missions.push(mission);
            }
        );
    }

    ngOnDestroy() {
        this.missionService.getService().unsubscribe();
    }
    
    completeMission(mission: Mission) {
        this.removeMission( mission );
        this.completedMission.emit(mission);

    }

    abortMission(mission: Mission) {
       this.removeMission( mission )
    }

    removeMission(mission: Mission):void{
        let index = this.missions.indexOf( mission );
        if ( index > -1 ){
            this.missions.splice( index, 1 )
        }
    }


}
