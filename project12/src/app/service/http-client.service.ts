import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Registration{

  constructor(
      public firstname :String, 
      public lastname:String,
      public email: String,
      public password:String,
      private  address:String,
      private  Contact:Number){}
      }


export class Submit{
constructor(
public firstname :String, 
public lastname:String,
public email: String,
public password:String,
private  address:String,
private  Contact:Number){}
}

export class SignIn{
  constructor(
      public email :String,
      public password:String
  ){}
}

export class Paycash{
  constructor(
      public name :String,
      public address:String,
      public city:String, 
      public zipcode:Number
  ){}
}

export class grocery{
  constructor(
    public fid:Number,
    public fname:String,
    public fprice:Number,
    public fweight:Number,
    public category:String
  ){}
}

export class cart{
  constructor(
    public uid: Number,
    public fid: Number,
    public cartid: Number,
    //
    public quantity: number,
    public fname :String,
    public fprice: number,
    public fweight: Number,
    public total:number
  ){}

  
}

export class SubmitFeedback{

  constructor(
  
  public email: String,
  
  public comments: String
  ){}
  
  }

export class HttpClientService {
  Onsubmit(paybycash: Paycash) {
    throw new Error("Method not implemented.");
  }
  orderMail() {
    return this.httpClient.get<Boolean>("http://localhost:8080/sendmail");
    return this.httpClient.get<Boolean>("http://localhost:8080/feedbackmail")
  }

  submitfeedback(feedback)
  {
  console.log("test call");
  return this.httpClient.post<SubmitFeedback>("http://localhost:8080/feedback",feedback)
  .subscribe(data=>{
  console.log(data)
  })
  
  }
  updateQuantity(cl :cart) {
    console.log(cl.fid)
    console.log(cl.quantity)
    return this.httpClient.post<number>("http://localhost:8080/updatequantity",cl);
  }
  getDetails() {
    return this.httpClient.get<cart[]>("http://localhost:8080/getdetails");
  }
  addtocart(cl: cart) {
    console.log(cl.fname);
    return this.httpClient.post<Boolean>("http://localhost:8080/addtocart",cl);
  }
  fruit() {
    return this.httpClient.get<grocery[]>("http://localhost:8080/fruit");
  }
  packaged() {
    return this.httpClient.get<grocery[]>("http://localhost:8080/packaged");
  }
  misc() {
    return this.httpClient.get<grocery[]>("http://localhost:8080/misc");
  }
  cereal() {
    return this.httpClient.get<grocery[]>("http://localhost:8080/cereal");
  }
  constructor(private httpClient:HttpClient , private router : Router){ }




  registeruser(signup)
  
  {
  console.log("test call");
  return this.httpClient.post<Submit>("http://localhost:8080/register",signup)
  .subscribe(data=>{
  console.log(data)
  alert("success register")
     })
  }

  public signinuser(signin){
return this.httpClient.post<SignIn>("http://localhost:8080/login",signin);

}
}
