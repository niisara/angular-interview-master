import { Component } from '@angular/core';
import { AppConsts } from './shared/app-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideMenu: boolean = false;
  config: string = AppConsts.remoteServiceBaseUrl
}
