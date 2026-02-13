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
      role: 'Associate Software Engineer',
      period: 'January 2026 - Present',
      description:
        'Actively engaged in development processes as an Angular Frontend developer for the NDB NEOS Internet Banking Project.',
      achievements: [
        'Gained extensive experience in software development and integration processes.',
        'Learned and implemented Internationalization (i18n) and Localization.',
        'Enhanced User Experience (UX) and implemented Unit Testing.',
        'Developed key features: New User Registration, Loan & Deposit Calculators, Promotions, FAQ, Contact Us, Demo Tour, etc.',
      ],
    },
    {
      company: 'Epic Lanka (Pvt) Ltd',
      role: 'Software Engineer - Trainee',
      period: 'August 2024 - December 2025',
      description:
        'Actively engaged in development processes as an Angular Frontend developer for the Union Bank and CDB Internet Banking Project. Contributed to the BOC project as well.',
      achievements: [
        'Gained extensive experience in software development and integration processes.',
        'Learned and implemented Internationalization (i18n) and Localization.',
        'Enhanced User Experience (UX) and implemented Unit Testing.',
        'Developed key features: New User Registration, Loan & Deposit Calculators, Promotions, FAQ, Contact Us, Demo Tour, etc.',
      ],
    },
    {
      company: 'Epic Lanka (Pvt) Ltd',
      role: 'Software Engineer - Intern',
      period: 'August 2023 - August 2024',
      description:
        'Actively engaged in development processes as an Angular Frontend developer for the Union Bank and CDB Internet Banking Project.',
      achievements: [
        'Gained extensive experience in software development and integration processes.',
        'Learned and implemented Internationalization (i18n) and Localization.',
        'Enhanced User Experience (UX) and implemented Unit Testing.',
        'Developed key features: New User Registration, Loan & Deposit Calculators, Promotions, FAQ, Contact Us, Demo Tour, etc.',
      ],
    },
  ];
}
