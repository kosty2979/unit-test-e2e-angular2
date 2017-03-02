import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard.component.ts';
import { Widget } from '../layout/widget/widget.directive';
import { IncomingMissionsComponent } from './incoming-missions.component/incoming-missions.component';
import { Mission } from './mission.object';
import { LiveMissionsComponent } from './live-missions.component/live-missions.component';
import {CompletedMissionsComponent} from "./completed-missions.component/completed-missions.component";

export const routes = [
    { path: '', component: Dashboard, pathMatch: 'full' }
];


@NgModule({
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    declarations: [ Dashboard, Widget, IncomingMissionsComponent, LiveMissionsComponent, CompletedMissionsComponent ],
})
export default class DashboardModule {
    emittedMission: Mission;
    completeMission: Mission;

    emitMission($event: Mission): void {
        this.emittedMission = $event;
    }
}
