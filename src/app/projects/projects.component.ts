import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  message = 'project-default';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    console.log("init: " + this.message);
    this.projectService.currentMessage.subscribe(message => this.message = message);
  }

  selectProject(message:string) {
    this.projectService.changeMessage(message);
  }

}
