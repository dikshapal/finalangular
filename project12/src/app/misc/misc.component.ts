import { Component, OnInit } from '@angular/core';
import { HttpClientService, cart } from '../service/http-client.service';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.css']
})
export class MiscComponent implements OnInit {

  misc:String[];
  constructor(
    private httpClientService :HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.misc()
    .subscribe(response=>this.handleSuccessfulResponse(response)

    );
  }


  handleSuccessfulResponse(response)
{
  console.log(response)
    this.misc=response;
}

addtocart(cl: cart){
  console.log(cl.fname);
    this.httpClientService.addtocart(cl).subscribe(response=>{
      alert("successfully added to cart");
    })
  }
}
