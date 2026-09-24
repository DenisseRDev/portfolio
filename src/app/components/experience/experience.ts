import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  languageService = inject(LanguageService);
}
