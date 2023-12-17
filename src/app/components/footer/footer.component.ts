import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <div class="footer">
  <img src={{LogoFooter}} alt=" logo kasa"/>
  <p>© 2020 Kasa. All rights reserved</p>
</div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  LogoFooter="../../../assets/images/logoFooter.png"
}
