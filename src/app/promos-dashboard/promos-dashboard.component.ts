import { Component, OnInit } from '@angular/core';
import { PromoDashboardService } from './promos-dashboard.service';

@Component({
  selector: 'app-promos-dashboard',
  templateUrl: './promos-dashboard.component.html',
  styleUrls: ['./promos-dashboard.component.css']
})
export class PromosDashboardComponent implements OnInit{
  promos: any[] = [];
  clients: any[] = [];

  constructor(private promoDashboardService: PromoDashboardService) { }

  ngOnInit(): void { 
    this.promoDashboardService.promos().subscribe(promos => this.promos = promos);
    this.promoDashboardService.clients().subscribe(clients => this.clients = clients);
  }

}
