import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../project.service";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  message = 'project-default';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.currentMessage.subscribe(message => this.message = message);
  }

}
