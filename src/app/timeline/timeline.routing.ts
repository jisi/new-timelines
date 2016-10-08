import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineComponent} from "./timeline.component";

const TimelineRoutes: Routes = [
  { path: 'timeline/:id', component: TimelineComponent },
];

export const TimelineRouting: ModuleWithProviders = RouterModule.forChild(TimelineRoutes);
