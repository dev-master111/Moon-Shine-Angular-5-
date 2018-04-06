import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ColorizeMvsCsService } from '../../services/colorize-mvs-cs.service';

@Component({
  selector: 'app-conflict-bar',
  templateUrl: './conflict-bar.component.html',
  styleUrls: ['./conflict-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConflictBarComponent implements OnInit {
  @Input() barColor;
  @Input() text;
  @Input() percentage;

  constructor(
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  ngOnInit() {
  }

}
