import { Component, inject, OnInit } from '@angular/core';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { CollapseComponent } from '../../components/collapse/collapse.component';
import { InfoComponent } from '../../components/info/info.component';
import { HostComponent } from '../../components/host/host.component';
import { StarsComponent } from '../../components/stars/stars.component';
import { TagComponent } from '../../components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodate',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CarrouselComponent,
    CollapseComponent,
    InfoComponent,
    HostComponent,
    StarsComponent,
    TagComponent,
    FontAwesomeModule,
  ],

  template: `
    <!-- @if (dataAccommodate) { -->
    <div class="App">
      <div class="carrousel_imgs">
        <app-carrousel
          [slides]="dataAccommodate?.pictures"
          [numberLength]="total"
        >
        </app-carrousel>
      </div>
      <div class="containerInfo">
        <div class="containerTagInfo">
          <app-info
            [title]="dataAccommodate?.title"
            [location]="dataAccommodate?.location"
          ></app-info>
          <app-tag [tags]="dataAccommodate?.tags"> </app-tag>
        </div>

        <div class="containerHostStars">
          <div class="host">
            <app-host
              [name]="dataAccommodate?.host.name"
              [picture]="dataAccommodate?.host.picture"
            >
            </app-host>
          </div>
          <div class="star">
            <app-stars *ngFor="let star of stars" [color]="star.color">
            </app-stars>
          </div>
        </div>
      </div>
      <div class="collapseHosing">
        <app-collapse
          [title]="description"
          [text]="dataAccommodate?.description"
        ></app-collapse>

        <app-collapse
          [title]="equipements"
          [equipements]="dataAccommodate?.equipments"
        ></app-collapse>
      </div>
    </div>
    <!-- }@else{
   
    <h1> hello </h1>
    } -->
  `,
  styleUrl: './accommodate.component.scss',
})
export class AccommodateComponent implements OnInit {
  data: any[] = [];
  filteredData: any = null;
  description = 'description';
  equipements = 'Équipements';
  id: string | null = '';
   
  dataAccommodate: any = null;
  stars: any = null;
  color = 'red';
  total: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getAllDatas().subscribe((data) => {
      this.data = data;
      console.log({ data });
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id');

        console.log('ID from URL:', this.id);
        this.filteredData = data.filter((item) => item.id === this.id);

        console.log('Filtered Data:', this.filteredData);
        //verifier que filteredData nai pas vide

        this.dataAccommodate = this.filteredData[0];
        console.log(this.dataAccommodate);
        
        //star//
       
        if (this.dataAccommodate) {
          const rating: number = this.dataAccommodate.rating || 0;
          const colorStars = {
            grey: '#f6f6f6',
            red: '#ff6060',
          };

          this.stars = Array(5)
            .fill(0)
            .map((_, index) => {
              return {
                color: index < rating ? colorStars.red : colorStars.grey,
              };
            });
        }
        this.total = this.dataAccommodate?.pictures.length;
        ///user
        const user = data.some((post) => post.id === this.id);
        console.log(user)
       if (user === false){
       
          // Navigate to 404 page if data is not found
          this.router.navigate(['/**']);
        
       }
      });
    });
  }
}
