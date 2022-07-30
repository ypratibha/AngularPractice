import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName = 'testServer';
  serverCreationStatus = 'Server is not yet created!';
  AllowServer = 'false';
  serverCreated = 'false';
  constructor() {}

  onCreateServer() {
    this.serverCreated = 'true';
    this.serverCreationStatus = `Server got created! ${this.serverName}`;
  }
  ngOnInit(): void {}
}
