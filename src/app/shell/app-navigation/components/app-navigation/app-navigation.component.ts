import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})

export class AppNavigationComponent {
  public get versionDescription(): string {
    return environment.version;
  }

  public isRouterLoading = false;
}
