import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testserver',
  templateUrl: './testserver.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
  // styleUrls: ['./testserver.component.css'],
})
export class TestserverComponent implements OnInit {
  serverStatus: string;
  serverId: number;

  constructor() {
    this.serverStatus = Math.random() > 0.2 ? 'online' : 'offline';
  }

  onCheckServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {}
}
