import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GeminiService } from './gemini.service';
import { interval } from 'rxjs';
import { HeaderComponent } from "./compponnents/header/header.component";
import { FooterComponent } from "./compponnents/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AI-Blog-WS';

  count : number = 0;
  promt : string = '';
  prompt : string[] = ["write a blog in 500 without any heading just in paragraphs words about any one New Technology News today "];
  lenght : number = this.prompt.length;
  geminiService : GeminiService = inject(GeminiService);
  blogData :any[] = [];
  constructor(){
   this.geminiService.resend().subscribe((res) => {
    if(res){
     this.blogData.push(res);
    }
   })
  }
  ngOnInit(): void {
    const obs$ = interval(10000);
    obs$.subscribe((d) => {
      console.log(d);
      this.sendData(d % this.lenght);
      this.count = d;
    })
    }
    
    sendData(d: number){
    if(this.prompt[d]){
      this.geminiService.generateText(this.prompt[d]);
    }
  }
}