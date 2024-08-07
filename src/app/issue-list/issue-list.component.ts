import {Component, OnInit} from '@angular/core';
import { IssuesService } from "../issues.service";
import { Issue } from "../issue";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  constructor(private issueService: IssuesService) {}

  getIssue() {
    this.issues = this.issueService.getPendingIssues()
  }

  ngOnInit() {
    this.getIssue()
  }
}
