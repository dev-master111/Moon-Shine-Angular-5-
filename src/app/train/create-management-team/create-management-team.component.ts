import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-create-management-team',
  templateUrl: './create-management-team.component.html',
  styleUrls: ['./create-management-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateManagementTeamComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

}
