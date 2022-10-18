import { Component, OnInit, Input } from '@angular/core';
import {Admin} from "../../../Interfaces/admin";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  @Input() adminList!:Admin;

  constructor() { }

  ngOnInit(): void {}

}
