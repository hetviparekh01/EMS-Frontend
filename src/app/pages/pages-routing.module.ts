import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ShowRegisterEventsComponent } from './show-register-events/show-register-events.component';
import { adminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"viewevent/:id",
    component:ViewEventComponent
  },
  {
    path:"addevent",
    component:AddEventComponent,
    canActivate:[adminGuard]
  },
  {
    path:"addevent/:id",
    component:AddEventComponent,
    canActivate:[adminGuard]

  },
  {
    path:"showmyevent",
    component:ShowRegisterEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
