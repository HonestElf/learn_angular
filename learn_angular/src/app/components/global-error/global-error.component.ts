import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent implements OnInit {
  errorService: ErrorService;
  constructor(errorService: ErrorService) {
    this.errorService = errorService;
  }

  title = 'aaaaa';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
