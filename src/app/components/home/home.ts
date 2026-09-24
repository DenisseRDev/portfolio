import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  languageService = inject(LanguageService);

}
