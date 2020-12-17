import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
