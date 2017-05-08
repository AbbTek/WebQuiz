import { DemoService } from './../../services/demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less'],
  providers: [DemoService]
})
export class DefaultComponent implements OnInit {
  serverTime: Date;

  constructor(private demoService: DemoService) { }

  getTimeFromServer(): void {
    this.demoService.getTime().subscribe((result) => {
      this.serverTime = result.ServerTime;
    });
  }

  ngOnInit() {
    this.getTimeFromServer();
  }
}
