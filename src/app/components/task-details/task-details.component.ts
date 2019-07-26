import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/task';
import { TaskDataService } from 'src/app/services/task-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  newTask: Task = new Task();
  tasks: Task[];

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  deleteTask(id:number) {
    this.taskDataService.deleteTask(id).subscribe(t=>
      this.router.navigate(["list"]));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taskDataService
        .getTask(+params["id"])
        .subscribe(t => (this.newTask = t));
    })
  }

}
