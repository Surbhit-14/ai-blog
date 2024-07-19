import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent {
  e : string = '';
 info : any;
  start(){
    const sendername = "none"
    const email = this.e;
    const message = "subscribe"

  
  if(email !== ''){
    this.information(sendername, email, message)
    }
  }
  information(sendername: string, email: string, message: string){
    this.info = {
        sendername : sendername,
        email : email,
        message : message,
        to : "surbhitportfolio@outlook.com",
    }
 this.emailsender()  
}
emailsender(){
emailjs.init("F3yafNlM2P2cI51th");

var serviceID = "service_31f6kxo"
var templateID = "template_xp7p8f8"

emailjs.send(serviceID, templateID, this.info).then( res => {
    alert("Message sent successfully")
}).catch()

}


}




