import { Component } from '@angular/core';
import {ChevronRight, LucideAngularModule} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly ChevronRight = ChevronRight;
}
