import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { SubscriberserviceService } from '../services/subscriberservice.service';
import { Subscriber } from '../interface/subscriber';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  isExists: boolean = false;
  isSubscribed: boolean = false;
  user : string = "";

  constructor(private subscriberService: SubscriberserviceService, private toasterService: ToastrService) { }
  ngOnInit(): void {
    // this.isExists = true;
  }

  async onSubmit(formValue: any) {
    const subData: Subscriber = {
      name: formValue.name,
      email: formValue.email
    }

     this.subscriberService.checkMail(formValue.email).subscribe((data)=>{
      
      data.forEach((user)=>{
        this.user = user['email'];
      })

      if(this.user == formValue.email) {

      }else if(this.user != formValue.email){

        this.subscriberService.addSub(subData);
      }
    });
  }
}
