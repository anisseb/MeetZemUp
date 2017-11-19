import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DiscussionPage } from '../discussion/discussion';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = DiscussionPage;
  tab3Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
