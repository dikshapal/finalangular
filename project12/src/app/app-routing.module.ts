import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PackagedComponent } from './packaged/packaged.component';
import { FruitComponent } from './fruit/fruit.component';
import { CerealComponent } from './cereal/cereal.component';
import { MiscComponent } from './misc/misc.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaycashComponent } from './paycash/paycash.component';
import { PaycardComponent } from './paycard/paycard.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes: Routes = [

  { path:'register', component: RegisterComponent},
  
  
  
  {path:'login',component:LoginComponent},
  
  { path:'', component: WelcomeComponent},

  { path:'home', component: HomeComponent},
  
  { path:'fruit', component: FruitComponent},
  
  
  
  {path:'cereal',component:CerealComponent},
  
  { path:'packaged', component: PackagedComponent},

  { path:'misc', component: MiscComponent},

  { path:'gotocart', component: CartComponent},

  {path:'order', component: OrderComponent},

  {path: 'paycash', component:PaycashComponent},

  {path: 'paycard', component:PaycardComponent},

  {path: 'feedback', component:FeedbackComponent}
  
  ]; 
  
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
