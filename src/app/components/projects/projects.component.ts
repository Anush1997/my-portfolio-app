import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'NDB NOES ',
      description:
        'Web applications developed for the management of personal transactions for NDB Bank clients. Implemented complex features like new user registration, fund transfer, CRIB, Pawning, Transaction Limit Edit, Settings, Notifications, and localization.',
      technologies: ['Angular', 'Redux', 'NgRx', 'TypeScript', 'SCSS'],
      image: 'assets/banking-project.jpg', // Placeholder
      link: 'https://www.self.lk/',
    },
    {
      title: 'CDB Self ',
      description:
        'Web applications developed for the management of personal transactions for CDB Bank clients. Implemented complex features like calculators, and localization.',
      technologies: ['Angular', 'Redux', 'NgRx', 'TypeScript', 'SCSS'],
      image: 'assets/banking-project.jpg', // Placeholder
      link: 'https://www.self.lk/',
    },
    {
      title: 'Union Bank Internet Banking (UBgo)',
      description:
        'Web applications developed for the management of personal transactions for Union Bank clients. Implemented complex features like calculators, new user registration, and localization.',
      technologies: ['Angular', 'Redux', 'NgRx', 'TypeScript', 'SCSS'],
      image: 'assets/banking-project.jpg', // Placeholder
      link: 'https://www.ubdirect.com/UNIONIB/login.htm',
    },
    {
      title: 'TourDrive',
      description:
        'A web and mobile-based application for managing vehicle tours in the Sri Lankan tourism industry. Handles tour guiding and vehicle management.',
      technologies: ['React JS', 'Flutter', 'Firebase', 'MongoDB', 'Node JS', 'Express JS'],
      image: 'assets/tourdrive-project.jpg', // Placeholder
      link: '#',
    },
  ];
}
