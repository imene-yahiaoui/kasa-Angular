import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [],
  template: `
  <a routerLink to="/" >
  <div class="frame">
    <div class="containerFrame">
      <img src="{{ cover }}"alt="{{ title }}"/>
      <p>{{ title }}</p>
    </div>
    <div class="middle"> </div>
  </div>
</a>
  `,
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  @Input() title: string = '';
  @Input() cover : string = '';
  // @Input() id: string='';
}
