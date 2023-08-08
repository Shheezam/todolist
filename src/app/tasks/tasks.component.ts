import { Component } from '@angular/core';
import { Task } from '../task';
import { TASKS } from '../sampletasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks = TASKS;
  newTaskTitle = '';
  hideSelected = false;

  addTask() {
    this.tasks.push({title: this.newTaskTitle, isChecked: false});
    this.newTaskTitle = '';
  }

  onClickToggle() {
    this.hideSelected = !this.hideSelected;
  }

  }
