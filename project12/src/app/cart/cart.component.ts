import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, cart } from '../service/http-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


total:number;
  items:String[];

  constructor(
    private router :Router,
    private httpClientService :HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getDetails()
    .subscribe(response=>this.handleSuccessfulResponse(response)

    );
  }


  handleSuccessfulResponse(response)
{
  console.log(response)
    this.items=response;
}

  continue(){
    this.router.navigateByUrl("/home");

  }

  checkout(){
    this.router.navigateByUrl("/order");
  }

  // quantityChanged(cl: cart){

  //   this.httpClientService.updateQuantity(cl)
  //   .subscribe(response=>this.handleSuccessfulResponse(response))

  // }


  onChange(updatedValue: number, cl:cart){
 
  
        this.httpClientService.updateQuantity(cl)
     .subscribe(response=>{
    console.log(response);
   // alert(JSON.stringify(response))
      this.total=response;
    
    })
  }

 

  // add(cl:cart){

 
   
  //   var b=CartComponent.total
  //   var a= cl.fprice;
  //   CartComponent.total = a+b;

  //   console.log("Total"+CartComponent.total);

   
  // }
}
