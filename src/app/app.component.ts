import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/projects/list',
      icon: 'home'
    },
    {
      title: 'View Orders',
      url: '/purchase',
      icon: 'cart'
    },
    {
      title: 'Message Center',
      url: '/notification',
      icon: 'chatbubbles'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private sideMenuCtrolr: MenuController,
    private common: CommonService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  doLogout(): any{
    this.splashScreen.hide();
    this.sideMenuCtrolr.close();
    this.auth.logout();
  }

  redirect(page, index): any{
    this.selectedIndex = index;
    this.common.redirectTo(page.url);
  }
}
