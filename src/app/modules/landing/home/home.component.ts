import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { Subscription, interval } from 'rxjs';
import { CountdownComponent } from '../../../shared/components/countdown/countdown.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { PricePipe } from '../../../shared/pipes/price.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent ,CountdownComponent, PricePipe],
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
  count: number = 0;

  ngOnInit(): void {
    this.activeRoute.fragment.subscribe( (value)=>{
      this.jumpToSection(value);
    }) 
    this.subscription =  interval(0.0005).subscribe( x => {
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
    if(this.employeeCount() < 1000){
      this.employeeCount.update( v => v +1);
    }else{
      this.employeeCount.set(70000);
    }
  }

  private increasePersonCount() : void {
    if(this.personsCount() < 1000){
      this.personsCount.update( v => v +1);
    }else{
      this.personsCount.set(490584)
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
    //this.animateHeader(this.scrollHeight())
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

  animateHeader(height:number){
    if(height >=850 && height <= 2089){

      this.section = 'about';

    }else if(height >= 2090 && height <=3500){

      this.section = 'services'

    }else if(height >= 4400 ){
      this.section = 'contact'
    }else{

      this.section = 'hero';
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
