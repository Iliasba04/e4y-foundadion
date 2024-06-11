import { NgClass } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgClass],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy{
  private subscription!: Subscription;
  public dateNow = new Date();
  public dDay = new Date('2024-06-31T00:00:00');
  public timeDifference: number = 0;
  public days = signal<number>(0);
  public hours = signal<number>(0);
  public minutes = signal<number>(0);
  public seconds = signal<number>(0);

  @Input() scrollHeight : number = 0;

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(x => {
      this.getTimeDifference();
    });
  }
 
  private getTimeDifference(): void {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.converTimes(this.timeDifference);
    if(this.timeDifference === 0){
      this.scrollHeight = 0;
    }
  }

  private converTimes(timeDifference: number): void {
    this.seconds.set(Math.floor((timeDifference) / (1000) % 60));
    this.minutes.set(Math.floor((timeDifference) / (1000 * 60) % 60));
    this.hours.set(Math.floor((timeDifference) / (1000 * 60 * 60) % 24));
    this.days.set(Math.floor((timeDifference) / (1000 * 60 * 60 * 24)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
