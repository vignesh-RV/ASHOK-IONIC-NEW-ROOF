import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage {
  public notifications: any[] = [];
  ishidden:any;
  constructor() { }

  ionviewwillenter()  {
    this.subscribe();
  }

  subscribe(){
    let echo = new Echo({
      broadcaster: 'pusher',
      key: '68dd9393102552b560de',
      cluster: 'mt1'
    });
    echo.channel('roof-project')
      .listen('SendNotificationEvent', (e: any[])=>{
         this.notifications.unshift(e);
         this.ishidden=true;
      });
  }
}
