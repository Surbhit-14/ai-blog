import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  private gai : GoogleGenerativeAI;
  private text : string = '';
  private mess : BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.gai = new GoogleGenerativeAI("");
  }

  async generateText(promt: string){
    const model = this.gai.getGenerativeModel({model: "gemini-pro"});
    const result = await model.generateContent(promt);
    const response = await result.response;
    this.text = response.text();
    console.log(this.text);
    this.mess.next({mes : this.text});
    }

    public resend() : Observable<any> {
      return this.mess.asObservable();
    }
}
