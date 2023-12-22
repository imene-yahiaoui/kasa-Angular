import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../../components/picture/picture.component';
import { FrameComponent } from '../../components/frame/frame.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PictureComponent, FrameComponent],
  template: `
    <div>
      <app-picture [photo]="photo" [text]="text" [paragraphe]="paragraphe">
      </app-picture>
     
      <div class="container"></div>
      <app-frame
        *ngFor="let item of data"
        [title]="item.title"
        [cover]="item.cover"
      ></app-frame>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photo = '../../../assets/images/headerDesktop.png';
  text = 'Chez vous,';
  paragraphe = 'partout et ailleurs';
  data: any = [];

  dataService: DataService = inject(DataService);
  constructor() {
  
    this.dataService.getAllDatas().subscribe((data) => {
      this.data = data;
      console.log({data})
    });
  }
}
