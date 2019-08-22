import { Component, OnInit } from '@angular/core';
import { SubmitFeedback, HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  public feedback :SubmitFeedback = new SubmitFeedback("","");
  constructor(private router: Router,private httpClientService:HttpClientService) { }

  ngOnInit() {
  }


submitfeedback(): void {

  

  console.log(this.feedback);
  
  
  
  this.httpClientService.submitfeedback(this.feedback);
  
  
  
  }


}
