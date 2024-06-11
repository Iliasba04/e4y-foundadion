import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CountdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  
  @Input({required : true}) currentSection : string = "";
  @Input({required:true}) scrollHeight : number = 0;
  
  toggled = signal<boolean>(false);
 
  toggle(){
    this.toggled.update( v => v = !v);
  }
}
 