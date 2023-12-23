import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [],
  template: `
    <div class="collapse">
      <div class="collapse-title">
        <h6>{{ title }}</h6>
        <div>
          <i
            [style.display]="open"
            class="fa-solid fa-angle-up"
            (click)="toggleCollapse()"
          ></i>

          <i
            [style.display]="open === 'none' ? 'block' : 'none'"
            class="fa-solid fa-angle-down"
            (click)="toggleCollapse()"
          ></i>
        </div>
      </div>
      <div class="collapse-article" [style.display]="open">
        <p>{{ text }}</p>

        <ul>
          {{
            ArryText
          }}
        </ul>
      </div>
    </div>
  `,
  styleUrl: './collapse.component.scss',
})
export class CollapseComponent {
  open: string = 'none';
  toggleCollapse() {
    this.open = this.open === 'none' ? 'block' : 'none';
  }
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() ArryText: string[] = [];
  @Input() equipement: string = '';
}
