import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  languageService = inject(LanguageService);
}
