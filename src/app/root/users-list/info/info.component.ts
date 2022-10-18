import {Component, OnInit, Input} from '@angular/core';
import {Admin} from "../../../Interfaces/admin";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  @Input() admin!: Admin;

  constructor(
    ) {
    }

  ngOnInit(): void {
  }
}
