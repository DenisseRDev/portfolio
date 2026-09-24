import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-education',
  styleUrl: './education.css',
  templateUrl: './education.html',
})
export class Education {
  languageService = inject(LanguageService);
}
