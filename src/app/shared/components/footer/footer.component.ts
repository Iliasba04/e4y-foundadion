import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  constructor(private analyticsService: AnalyticsService){}
  ngOnInit(): void {
    this.analyticsService.trackEvent('footer loaded', 'footer loaded into view');
  }
}
 