import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ColorizeMvsCsService } from '../../services/colorize-mvs-cs.service';

import { ConflictBar } from '../../models';

@Component({
  selector: 'app-conflict-bar',
  templateUrl: './conflict-bar.component.html',
  styleUrls: ['./conflict-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConflictBarComponent implements OnInit {
  @Input() conflictBar: ConflictBar;

  constructor(
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  ngOnInit() {
  }

}
