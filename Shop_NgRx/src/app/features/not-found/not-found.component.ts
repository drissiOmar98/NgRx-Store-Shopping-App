import { Component } from '@angular/core';
import {ChevronRight, LucideAngularModule} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  standalone: true,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  protected readonly ChevronRight = ChevronRight;
}
