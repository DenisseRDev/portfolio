import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  menuOpen = false;

  languageService = inject(LanguageService);

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

}
