import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { profile } from '../../data/profile';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {

  languageService = inject(LanguageService);
  profile = profile;
}
