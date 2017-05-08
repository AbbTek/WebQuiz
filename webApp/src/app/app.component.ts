import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router) { }

  isActive(instruction: string): boolean {
    instruction = instruction === '' ? '/' : instruction;
    return this.router.url === instruction;
  }
}
