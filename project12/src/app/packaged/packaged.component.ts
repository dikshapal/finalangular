import { Component, OnInit } from '@angular/core';
import { HttpClientService, cart } from '../service/http-client.service';

@Component({
  selector: 'app-packaged',
  templateUrl: './packaged.component.html',
  styleUrls: ['./packaged.component.css']
})
export class PackagedComponent implements OnInit {

  packaged:String[];
  constructor(
    private httpClientService :HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.packaged()
    .subscribe(response=>this.handleSuccessfulResponse(response)

    );
  }


  handleSuccessfulResponse(response)
{
  console.log(response)
    this.packaged=response;
}

addtocart(cl: cart){
  console.log(cl.fname);
    this.httpClientService.addtocart(cl).subscribe(response=>{
      alert("successfully added to cart");
    })
  }
}
