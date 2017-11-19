import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SelectYourAppsPage } from '../pages/select-your-apps/select-your-apps';
import { ProfilPage } from '../pages/profil/profil';
import { SettingsPage } from '../pages/settings/settings';
import { DiscussionPage } from '../pages/discussion/discussion';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSelectYourApps(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SelectYourAppsPage);
  }goToProfil(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilPage, {
        'userid': params.userid
    });
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToDiscussion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DiscussionPage);
  }
}