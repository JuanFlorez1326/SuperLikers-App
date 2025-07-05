import { Component, inject, OnInit, signal } from '@angular/core';
import { KpisService } from 'src/app/services/kpis.service';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent {

  private kpisService = inject(KpisService);

  ngOnInit(): void {
    this.getKpis();
  }

  public getKpis(): void {
    this.kpisService.getKpis().subscribe({
      next: (response) => {
        console.log('KPI Response:', response);
      }, error: (error) => {
        console.error('Error fetching KPIs:', error);
      }
    });
  }
}
