import { Component, OnInit, Input } from '@angular/core';

import { CommonService, ColorizeMvsCsService } from '../../../shared/services';

import { ConflictBar, ConflictSequence } from '../../../shared/models';

@Component({
  selector: 'app-conflict',
  templateUrl: './conflict.component.html',
  styleUrls: ['./conflict.component.scss']
})
export class ConflictComponent implements OnInit {
  @Input() leftMemberCount;
  @Input() rightMemberCount;
  conflictBars: ConflictBar[];
  conflictSequences: ConflictSequence[];

  constructor(
    private commonService: CommonService,
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  ngOnInit() {
    this.leftMemberCount = this.commonService.numberWithCommas(this.leftMemberCount);
    this.rightMemberCount = this.commonService.numberWithCommas(this.rightMemberCount);
    this.conflictBars = [
      {
        barColor: 'green',
        mixedText: 'GREEN = Analyze',
        percentage: 29
      },
      {
        barColor: 'blue',
        mixedText: 'BLUE = Accommodate',
        percentage: 28
      },
      {
        barColor: 'red',
        mixedText: 'RED = Assert',
        percentage: 22
      },
      {
        barColor: 'blue-red-gradient',
        mixedText: '[BR] = [Accommodate-Assert]',
        percentage: 8
      },
      {
        barColor: 'red-green-gradient',
        mixedText: '[RG] = [Analyze-Assert]',
        percentage: 6
      },
      {
        barColor: 'blue-green-gradient',
        mixedText: '[BG] = [Accommodate-Analyze]',
        percentage: 3
      },
      {
        barColor: 'blue-red-green-gradient',
        mixedText: '[BRG] = [Accommodate-Assert-Analyze]',
        percentage: 2
      }
    ];

    this.conflictSequences = [
      {
        mixedText: 'B-R-G',
        percentage: 20
      },
      {
        mixedText: 'G-R-B',
        percentage: 13
      },
      {
        mixedText: 'B-G-R',
        percentage: 15
      },
      {
        mixedText: 'G-[BR]',
        percentage: 2
      },
      {
        mixedText: 'B-[RG]',
        percentage: 9
      },
      {
        mixedText: '[BR]-G',
        percentage: 2
      },
      {
        mixedText: 'R-B-G',
        percentage: 18
      },
      {
        mixedText: '[RG]-B',
        percentage: 1.8
      },
      {
        mixedText: 'R-G-B',
        percentage: 5
      },
      {
        mixedText: '[BG]-R',
        percentage: 1
      },
      {
        mixedText: 'R-[BG]',
        percentage: 4
      },
      {
        mixedText: '[BRG]',
        percentage: .2
      },
      {
        mixedText: 'G-B-R',
        percentage: 13
      }
    ];
  }
}
