import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  @Input() admin!: { name: string; lastName: string; };

  constructor(
    ) {
    }

  ngOnInit(): void {
  }
}
