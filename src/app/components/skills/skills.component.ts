import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React JS', level: 85 },
        { name: 'HTML/HTML5', level: 95 },
        { name: 'CSS/SCSS', level: 90 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Node JS', level: 75 },
        { name: 'Java', level: 85 },
        { name: 'C/C#', level: 70 },
      ],
    },
    {
      name: 'Mobile & Database',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitLab', level: 85 },
        { name: 'Jira', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'NgRx/RxJS', level: 75 },
        { name: 'Unit Testing', level: 70 },
      ],
    },
  ];
}
