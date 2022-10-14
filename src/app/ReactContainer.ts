import { Component } from '@angular/core';
import { ReactComponentDirective } from './react-component.directive';
import { ReactRoot } from './ReactRoot';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'react-container',
  standalone: true,
  imports: [HttpClientModule, ReactComponentDirective],
  template: `<div [props]="props" [reactComponent]="ReactRoot">
    React Container
  </div>`,
})
export class ReactContainer {
  props: any = { data: 'dd' };
  ReactRoot = ReactRoot;

  constructor(private httpService: HttpClient) {
    this.props.httpService = httpService;
  } // httpService
}
