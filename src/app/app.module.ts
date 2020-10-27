import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterGaurd } from './gaurds/route-gaurd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './http-interceptor/http.interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { APP_DATA } from './constants/app.properties';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './pages/login/login.component';
import { AppMaterialModules } from './shared/modules/app.material.module';
import { NotificationPage } from './pages/notification/notification.page';
import { PurchaseComponent } from './pages/purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotificationPage,
    PurchaseComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

    NgxSpinnerModule,
    
    HttpClientModule,
    
    IonicModule.forRoot(),
    ToastrModule.forRoot(APP_DATA.TOASTER_DEFAULTS as any),
    AppRoutingModule,

    AppMaterialModules
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RouterGaurd,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
