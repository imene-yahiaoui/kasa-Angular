import { Component } from '@angular/core';
import { CollapseComponent } from '../../components/collapse/collapse.component';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../../components/picture/picture.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CollapseComponent, CommonModule, PictureComponent],
  template: `
    <div class="collapse_continer">
      <app-picture [photo]="photo"> </app-picture>
      <div>
        <app-collapse
          *ngFor="let item of aboutData"
          [title]="item.title"
          [text]="item.text"
        ></app-collapse>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  photo = '../../../assets/images/about.png';
  aboutData: any = [];
  url = 'http://localhost:3000/aboutData';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllDatas().subscribe((data: any[]) => {
      this.aboutData = data;
      console.log({ data });
    });
  }

  getAllDatas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
