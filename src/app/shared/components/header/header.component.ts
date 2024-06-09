import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required : true}) currentSection : string = "";
  @Input({required:true}) scrollHeight : number = 0;
  
  toggled = signal<boolean>(false);

  toggle(){
    this.toggled.update( v => v = !v);
  } 
}
 