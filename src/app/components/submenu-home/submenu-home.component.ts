import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-submenu-home',
  templateUrl: './submenu-home.component.html',
  styleUrls: ['./submenu-home.component.scss']
})
export class SubmenuHomeComponent {

  public activeButton = signal('Resumen');
  public buttons =  signal([
    { name: 'Resumen' },
    { name: 'Autoejecución' },
    { name: 'Radiografía' }
  ]);

  public setActiveButton(buttonName: string): void {
    this.activeButton.set(buttonName);
  }
}
