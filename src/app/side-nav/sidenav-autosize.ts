import {Component} from '@angular/core';
import {environment} from "../../environments/environment";


@Component({
  selector: 'sidenav-autosize',
  templateUrl: 'sidenav-autosize.html',
  styleUrls: ['sidenav-autosize.css'],
})
export class SidenavAutosize {
  showSidebar = false;
  version: string = environment.VERSION;
  isChecked = false;
  isLoaded = false;  //TODO: spinner?
}


