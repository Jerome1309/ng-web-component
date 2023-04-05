import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() textBtn: string = 'Default text';
  @Output() clickEvent = new EventEmitter<string>();

  title = 'angular-web-component';
  data = 'data from web component';
  starWarsData: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStarWarsData().subscribe((res) => {
      console.log(res);
      this.starWarsData = res;
    });
  }

  onClickBtn() {
    this.clickEvent.emit(this.data);
  }
}
