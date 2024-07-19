import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  like : number = Number(localStorage.getItem('like'));
  dis : number = Number(localStorage.getItem('dis'));;
  disablebtn : boolean = false; 
  
  upadatelike(){
    
    this.like = this.like + 1;
    localStorage.setItem("like", this.like.toString());
  }
  updatedis(){
    this.dis = Number(localStorage.getItem('dis'));
    this.dis = this.dis + 1;
    localStorage.setItem("dis", this.dis.toString());
  }
  disable(){
    this.disablebtn = true;
    this.like = Number(localStorage.getItem('like'));
    this.dis = Number(localStorage.getItem('dis'));
  }
  reset(){
    localStorage.clear();
  }
}
