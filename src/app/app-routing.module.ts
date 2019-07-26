import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


const routes: Routes = [

  {path: "", redirectTo:"list", pathMatch: "full"},
  {path: "list", component: TaskListComponent},
  {path: "add", component: TaskAddComponent},
  {path: "edit/:id", component: TaskEditComponent},
  {path: "details/:id", component: TaskDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
