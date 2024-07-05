import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowRegisterEventsComponent } from './show-register-events/show-register-events.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewEventComponent,
    AddEventComponent,
    ShowRegisterEventsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
