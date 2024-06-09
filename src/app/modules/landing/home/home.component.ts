import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Subscription, interval } from 'rxjs';
import { CountdownComponent } from '../../../shared/components/countdown/countdown.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent ,CountdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class LandingHomeComponent implements OnInit, OnDestroy{
  private subscription!: Subscription;

  companyCount = signal(0);
  employeeCount = signal(0);
  personsCount = signal(0);
  public showScrollToTopButton = signal<boolean>(false)

  private activeRoute : ActivatedRoute = inject(ActivatedRoute);
  section : string = '/';
  scrollHeight = signal(0);

  ngOnInit(): void {

    this.activeRoute.fragment.subscribe( (value)=>{
      this.jumpToSection(value);
    }) 
    this.subscription =  interval(5).subscribe( x => {
      this.increaseCount();
      this.increaseEmployCount();
      this.increasePersonCount();
    })
  }

  private increaseCount() : void {
    if(this.companyCount() < 373){
      this.companyCount.update( v => v +1);
    }
  }

  private increaseEmployCount() : void {
    if(this.employeeCount() < 70000){
      this.employeeCount.update( v => v +1);
    }
  }

  private increasePersonCount() : void {
    if(this.personsCount() < 90000){
      this.personsCount.update( v => v +1);
    }else{
      this.subscription.unsubscribe();
    }
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrollHeight.set(number);
    if (number >= 400 && window.innerWidth > 400) {
      this.showScrollToTopButton.set(true);
    } else {
      this.showScrollToTopButton.set(false);
    }

    /**if(number >= 2000){
      //console.log(number);
      this.subscription =  interval(1000).subscribe( x => {
        this.increaseCount();
      })
    }*/
  }

  // Navigate to selected section
  jumpToSection(section:any){
    if(!section){
        return
    }
    this.section = section;
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }

  // Scroll to top
  scrollToTop(){
    window.scrollTo(
      {
          top: 0,
          behavior: 'smooth'
      }
    )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
