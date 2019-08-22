import { Component, OnInit } from '@angular/core';
import { HttpClientService, cart } from '../service/http-client.service';

@Component({
  selector: 'app-cereal',
  templateUrl: './cereal.component.html',
  styleUrls: ['./cereal.component.css']
})
export class CerealComponent implements OnInit {

  cereal:String[];
  constructor(
    private httpClientService :HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.cereal()
    .subscribe(response=>this.handleSuccessfulResponse(response)

    );
  }


  handleSuccessfulResponse(response)
{
  console.log(response)
    this.cereal=response;
}

addtocart(cl: cart){
  console.log(cl.fname);
    this.httpClientService.addtocart(cl).subscribe(response=>{
      alert("successfully added to cart");
    })
  }
}
