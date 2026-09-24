import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { RevealOnScroll } from '../../directives/reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  languageService = inject(LanguageService);
}
