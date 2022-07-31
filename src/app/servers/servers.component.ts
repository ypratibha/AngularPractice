import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName: string = '';
  serverCreationStatus: string = 'Server is not yet created!';
  allowServer: boolean = true;
  serverCreated: boolean = false;
  noData: boolean;
  studentNames: string[] = ['harsha', 'vardhan', 'pratibha'];

  dataDelete: string;
  studentList = [
    {
      name: 'harsha',
      age: 29,
      sex: 'M',
    },
    {
      name: 'pratibha',
      age: 27,
      sex: 'F',
    },
    {
      name: 'vishnu',
      age: 25,
      sex: 'M',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    this.studentNames.forEach((student) => {
      console.log(student);
    });
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server got created! ${this.serverName}`;
  }

  onDelete(student, index) {
    this.dataDelete = `Data got deleted for ${student.name}`;
    console.log(student);

    this.studentList.splice(index, 1);
  }

  onAddStudent() {
    this.studentNames.push(this.serverName);
    this.serverName = '';
  }
}
