import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Software Engineer', 'Frontend Developer', 'Mobile Developer', 'Full Stack Enthusiast'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  waitPeriod = 2000;
  timeoutId: any;

  ngOnInit() {
    this.typeRole();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  typeRole() {
    const current = this.roles[this.roleIndex % this.roles.length];

    if (this.isDeleting) {
      this.currentRole = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.typingSpeed = this.deletingSpeed;
    } else {
      this.currentRole = current.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.typingSpeed = 100;
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      this.isDeleting = true;
      this.typingSpeed = this.waitPeriod;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex++;
      this.typingSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.typeRole(), this.typingSpeed);
  }

  openResume() {
    // Download the resume file
    const link = document.createElement('a');
    link.href = 'assets/Udaya_Anushanka_Resume.pdf'; // Update with your actual filename
    link.download = 'Udaya_Anushanka_Resume.pdf'; // The name for the downloaded file
    link.click();
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
