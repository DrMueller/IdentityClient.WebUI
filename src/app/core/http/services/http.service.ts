import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppSettingsSingletonService } from '../../app-settings/services';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public constructor(
    private httpClient: HttpClient,
    private appSettingsSingleton: AppSettingsSingletonService) { }

  public delete$<T>(relativeUrl?: string | number): Observable<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createOptions();
    return this.httpClient.delete<T>(completeUrl, requestOptions);
  }

  public get$<T>(
    relativeUrl?: string | number,
    params?: HttpParams): Observable<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    let requestOptions = this.createOptions();

    if (params) {
      requestOptions = Object.assign(requestOptions, {
        params
      });
    }

    return this.httpClient.get<T>(completeUrl, requestOptions);
  }

  public post$<T>(relativeUrl: string, body: any): Observable<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createOptions();
    return this.httpClient.post<T>(completeUrl, body, requestOptions);
  }

  public put$<T>(relativeUrl: string, body: any): Observable<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createOptions();
    return this.httpClient.put<T>(completeUrl, body, requestOptions);
  }

  private createCompleteUrl(relativeUrl?: string | number): string {
    let result = this.appSettingsSingleton.instance.serverBaseUrl;

    if (relativeUrl) {
      result += relativeUrl;
    }

    return result;
  }

  private createOptions(): object {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const httpOptions = {
      headers
    };

    return httpOptions;
  }
}
