import { Component, OnInit } from '@angular/core';
import { TaskDataService } from 'src/app/services/task-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editTask: Task = new Task();

  saveTask(){
    this.taskDataService.editTask(this.editTask)
    .subscribe(t => this.router.navigate(["list"]));
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.taskDataService.getTask(+param["id"])
      .subscribe(t => (this.editTask = t));
    })
  }

}
