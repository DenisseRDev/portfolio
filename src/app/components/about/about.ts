import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  languageService = inject(LanguageService);
}
