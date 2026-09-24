import { Injectable, signal } from '@angular/core';

import { en } from '../data/en';
import { es } from '../data/es';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = signal<Language>('en');

  translations = {
    en,
    es
  }

  toggleLanguage(): void {
    this.language.update(current =>
      current === 'en' ? 'es' : 'en'
    );
  }

  setLanguage(language: Language): void {
    this.language.set(language);
  }

  get translation() {
    return this.translations[this.language()];
  }
}
