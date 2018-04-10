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
  impactChartPercentageValue: number;
  private pieChart: AmChart;

  constructor(
    private amChartService: AmChartsService,
    private commonService: CommonService,
    private colorizeMvsCsService: ColorizeMvsCsService
  ) { }

  public ngOnInit() {
    this.impactChartPercentageValue = Math.round(this.sdiMemberCount * 100 / this.totalMemberCount);
  }

  public ngAfterViewInit() {
    /**
     * @param titleField Determine the key name of the title field of dataProvider
     * @param valueField Determine the key name of the value field of dataProvider
     * @param colors Define colors of every pieces of chart
     * @param labelEnabled If true, show up labels when hovered
     * @param radius Define chart radius in percentage
     * @param innerRadius Define inner chart radius in percentage
     * For more information about dataProvider, addClassNames, and allLabels,
     * please visit https://docs.amcharts.com/3/javascriptcharts/AmChart
     */
    this.pieChart = this.amChartService.makeChart('chartdiv', {
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
      colors: ['#90d1ff', '#e1e8ee'],
      labelsEnabled: false,
      labelRadius: 5,
      fontSize: 9,
      addClassNames: true,
      allLabels: [{
        y: '30%',
        align: 'center',
        size: 60,
        text: this.impactChartPercentageValue,
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
