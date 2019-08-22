import { Component, OnInit } from '@angular/core';
import { HttpClientService ,cart} from '../service/http-client.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  fruits:String[];
  constructor(
    private httpClientService :HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.fruit()
    .subscribe(response=>this.handleSuccessfulResponse(response)

    );
  }


  handleSuccessfulResponse(response)
{
  console.log(response)
    this.fruits=response;
}

addtocart(cl: cart){
console.log(cl.fname);
  this.httpClientService.addtocart(cl).subscribe(response=>{
    alert("successfully added to cart");
  })
}
}
