import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

import { Motive } from '../../../shared/models';
import { CommonService, ColorizeMvsCsService } from '../../../shared/services';

@Component({
  selector: 'app-motives',
  templateUrl: './motives.component.html',
  styleUrls: ['./motives.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MotivesComponent implements OnInit, AfterViewInit {
  @Input() motives: Motive[];
  @Input() totalMemberCount;
  @Input() sdiMemberCount;
  @Input() pendingSdiInvitationCount;
  percentageValue: number;
  private chart: AmChart;

  constructor(
    private AmCharts: AmChartsService,
    private commonService: CommonService,
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  ngOnInit() {
    this.percentageValue = Math.round(this.sdiMemberCount * 100 / this.totalMemberCount);
  }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      type: 'pie',
      theme: 'none',
      dataProvider: [ {
        title: '',
        value: this.sdiMemberCount
      }, {
        title: '',
        value: this.totalMemberCount - this.sdiMemberCount
      } ],
      titleField: 'title',
      valueField: 'value',
      labelsEnabled: false,
      fontSize: 9,
      colors: ['#90d1ff', '#e1e8ee'],
      addClassNames: true,
      labelRadius: 5,
      allLabels: [{
        y: '30%',
        align: 'center',
        size: 60,
        text: this.percentageValue,
        color: '#000'
      }, {
        x: '-25%',
        y: '45%',
        align: 'center',
        size: 30,
        text: '%',
        color: '#000'
      }],
      radius: '42%',
      innerRadius: '90%'
    });
  }
}
