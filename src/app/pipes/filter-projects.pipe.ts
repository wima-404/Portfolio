import { Pipe, PipeTransform } from '@angular/core';
import { project } from '../interfaces/project.interface'; 

@Pipe({
  name: 'filterProjects', // L'sm li ghadi nsta3mlo f HTML
  standalone: true,
})
export class FilterProjectsPipe implements PipeTransform {
  transform(projects: project[] | null, selectedTech: string | null): project[] {
    // Ila makanouch projects اولا filter, rje3 kolchi
    if (!projects || !selectedTech || selectedTech.toLowerCase() === 'all') {
      return projects || []; // Rje3 projects اولا array khawi ila kan null
    }

    // Filter projects li fihom technology lmkhtara (case-insensitive)
    const lowerCaseFilter = selectedTech.toLowerCase();
    return projects.filter(project =>
      project.technologies.some(tech => tech.toLowerCase() === lowerCaseFilter)
    );
  }
}