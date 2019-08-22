import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService ,Paycash} from '../service/http-client.service';

@Component({
  selector: 'app-paycash',
  templateUrl: './paycash.component.html',
  styleUrls: ['./paycash.component.css']
})
export class PaycashComponent implements OnInit {

  public paybycash :Paycash=new Paycash("","","",null);


  constructor(private router:Router, private httpClientService :HttpClientService) { }

  ngOnInit() {
  }

 Onsubmit( ){





    this.httpClientService.orderMail()
    .subscribe(response=>this.handleSuccessfulResponse()
    );

    this.router.navigateByUrl('/feedback');
    alert("inpaycash");
  }
  handleSuccessfulResponse(){
    alert(true);
}
}
