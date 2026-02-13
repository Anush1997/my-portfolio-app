import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Epic Lanka (Pvt) Ltd',
      role: 'Software Engineer - Intern',
      period: 'August 2023 - Present',
      description:
        'Actively engaged in development processes as an Angular Frontend developer for the Union Bank and CDB Internet Banking Project. Contributed to the BOC project as well.',
      achievements: [
        'Gained extensive experience in software development and integration processes.',
        'Learned and implemented Internationalization (i18n) and Localization.',
        'Enhanced User Experience (UX) and implemented Unit Testing.',
        'Developed key features: New User Registration, Loan & Deposit Calculators, Promotions, FAQ, Contact Us, Demo Tour, etc.',
      ],
    },
  ];
}
