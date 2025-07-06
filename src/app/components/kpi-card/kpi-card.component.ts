import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonRange } from '@ionic/angular/standalone';
import { Component, inject, signal } from '@angular/core';
import { KpisService } from 'src/app/services/kpis.service';
import { Entry } from 'src/app/interfaces/kpis-response.interface';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss'],
  imports: [
    IonRange,
    FormsModule, 
    CommonModule
  ],
})
export class KpiCardComponent {

  private kpisService = inject(KpisService);
  
  public kpis = signal<Entry[]>([]);
  public selectedFilter: string = 'cartones';

  ngOnInit(): void {
    this.getKpis();
  }

  public getKpis(): void {
    this.kpisService.getKpis().subscribe({
      next: (response) => {
        this.kpis.set(response.data.entries);
      }, error: (error) => {
        console.error('Error fetching KPIs:', error);
      }
    });
  }

  public getAboveCoreBeyondBeerPercentage(): string {
    let aboveCore = 0;
    let beyondBeer = 0;

    if (this.selectedFilter === 'cartones') {
      aboveCore = parseFloat(this.kpis()[4]?.data['above_core_avance_actual_cartones']);
      beyondBeer = parseFloat(this.kpis()[4]?.data['beyond_beer_avance_actual_cartones']);
    } else {
      aboveCore = parseFloat(this.kpis()[4]?.data['above_core_avance_actual_hectolitros']);
      beyondBeer = parseFloat(this.kpis()[4]?.data['beyond_beer_avance_actual_hectolitros']);
    }

    return ((aboveCore + beyondBeer) / 2).toFixed(0);
  }

  public getKpiPercentage(kpiName: string = 'volumen'): string {
    let meta = 0;
    let avance = 0;

    if (this.selectedFilter === 'cartones') {
      meta = parseFloat(this.kpis()[4]?.data[`${kpiName}_meta_mes_cartones`]);
      avance = parseFloat(this.kpis()[4]?.data[`${kpiName}_avance_actual_cartones`]);
    } else {
      meta = parseFloat(this.kpis()[4]?.data[`${kpiName}_meta_mes_hectolitros`]);
      avance = parseFloat(this.kpis()[4]?.data[`${kpiName}_avance_actual_hectolitros`]);
    }

    return ((avance / meta) * 100).toFixed(0);
  }

}