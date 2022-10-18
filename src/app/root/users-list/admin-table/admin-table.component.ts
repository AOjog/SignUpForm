import { Component, OnInit, Input } from '@angular/core';
import {Admin} from "../../../Interfaces/admin";

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  @Input() adminList!:Admin;

  constructor() { }

  ngOnInit(): void {}

}
