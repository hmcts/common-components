import { Component, OnInit } from '@angular/core';
import { CaseListService} from "../../services/case-list.service";
import {Observable} from 'rxjs';

@Component({
  selector: 'lib-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss']
})
export class CaseListComponent implements OnInit {

    data;

  constructor(private caseListService: CaseListService) { }

  ngOnInit() {
      this.data = this.caseListService.search();
  }

}
