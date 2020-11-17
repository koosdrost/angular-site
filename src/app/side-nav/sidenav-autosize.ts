import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {ProjectService} from "../project.service";
import {ThemePalette} from "@angular/material/core";

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize',
  templateUrl: 'sidenav-autosize.html',
  styleUrls: ['sidenav-autosize.css'],
})
export class SidenavAutosize {
  showSidebar = false;
  version: string = environment.VERSION;
  isChecked = false;
}


