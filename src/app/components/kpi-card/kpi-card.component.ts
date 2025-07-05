import { Component, inject, OnInit, signal } from '@angular/core';
import { KpisService } from 'src/app/services/kpis.service';
import { KpisResponse } from 'src/app/interfaces/kpis-response.interface';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
})
export class KpiCardComponent {

  private kpisService = inject(KpisService);
  public kpis = signal<KpisResponse[]>([]);

  ngOnInit(): void {
    this.getKpis();
  }

  public getKpis(): void {
    this.kpisService.getKpis().subscribe({
      next: (response) => {
        this.kpis.set(response);
      }, error: (error) => {
        console.error('Error fetching KPIs:', error);
      }
    });
  }
}
