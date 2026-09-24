import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Skills,
    Experience,
    Education,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cv-web');
}
