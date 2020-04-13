import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/services';
import { IWeatherForecast } from '../../models';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  public userProperties: string[] = [];

  public weatherForecasts: IWeatherForecast[];
  public weatherApiErrorMessage: string;

  public get isAuthorized$(): Observable<boolean> {
    return this.oicd.getIsAuthorized();
  }

  public constructor(
    private oicd: OidcSecurityService,
    private httpService: HttpService) { }

  ngOnInit(): void {
    this.oicd.getUserData().subscribe(data => {
      this.userProperties = [];
      const props = Object.getOwnPropertyNames(data);

      if (!data) {
        this.userProperties.push('No data');
      } else {
        props.forEach(prop => {
          this.userProperties.push(prop + ': ' + data[prop]);
        });
      }
    });
  }

  public callClientApi(): void {
    this.httpService.get$<IWeatherForecast[]>('weatherforecast').subscribe(sr => {
      this.weatherForecasts = sr;
    },
      (error: any) => {
        this.weatherApiErrorMessage = error.message;
      });
  }
}
