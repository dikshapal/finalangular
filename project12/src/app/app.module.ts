import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { HttpClientService } from './service/http-client.service';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { FruitComponent } from './fruit/fruit.component';
import { CerealComponent } from './cereal/cereal.component';
import { PackagedComponent } from './packaged/packaged.component';
import { MiscComponent } from './misc/misc.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { Header2Component } from './header2/header2.component';
import { PaycashComponent } from './paycash/paycash.component';
import { PaycardComponent } from './paycard/paycard.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    FruitComponent,
    CerealComponent,
    PackagedComponent,
    MiscComponent,
    CartComponent,
    OrderComponent,
    Header2Component,
    PaycashComponent,
    PaycardComponent,
    FeedbackComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
