import { TokenService } from './../token.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpOptions } from './http-options';
import { isArray, isEmpty } from "lodash";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MensagemService } from '../mensagem.service';
import { RequestOptions } from './request-options';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private httpClient: HttpClient,
        private ngxUiLoaderService: NgxUiLoaderService,
        private mensagemService: MensagemService,
        private tokenService: TokenService
    ) { }

    private buildUrl(endpoint: string) {
        if (endpoint.startsWith('http')) {
            return endpoint;
        }
        return endpoint.startsWith('/') ? environment.URL_API.concat(endpoint) : environment.URL_API.concat('/').concat(endpoint);
    }

    private handleRequest<T>(endpoint: string, request: Observable<T>, requestOptions: Partial<RequestOptions> = {}) {
        return new Promise<T>(resolve => {

            // Instancia o requestOptions para preencher valores default
            requestOptions = new RequestOptions(requestOptions);

            if (requestOptions.wantLoader()) {
                if (requestOptions.backgroundLoader) {
                    this.ngxUiLoaderService.startBackground(endpoint);
                } else {
                    this.ngxUiLoaderService.start(endpoint);
                }
            }

            request.subscribe(
                (response) => {
                    this.ngxUiLoaderService.stop(endpoint);
                    resolve(response);
                },
                error => {

                    if (requestOptions.handleError) {
                        this.mensagemService.mensagemErroRequisicao(error, endpoint);
                    }
                    if (requestOptions.wantLoader()) {
                        if (requestOptions.backgroundLoader) {
                            this.ngxUiLoaderService.stopBackground(endpoint);
                        } else {
                            this.ngxUiLoaderService.stop(endpoint);
                        }
                    }

                    resolve(null);
                }
            );
        })
    }

    private getHandledOptions(options?: HttpOptions, requestOptions?: Partial<RequestOptions>) {
        if (isEmpty(requestOptions) || requestOptions.useToken) {
            if (isEmpty(options)) {
                options = new HttpOptions();
            }
            if (isEmpty(options.headers)) {
                options.headers = new HttpHeaders();
            }
            options.headers = options.headers.append('Authorization', 'Bearer ' + this.tokenService.get());
        }
        return options;
    }

    public Get<T>(endpoint: string, options?: HttpOptions, requestOptions?: Partial<RequestOptions>) : Promise<T> {
        return this.handleRequest<T>(
            endpoint,
            this.httpClient.get<T>(
                this.buildUrl(endpoint),
                this.getHandledOptions(options, requestOptions)
            ),
            requestOptions
        );
    }

    public Post<T>(endpoint: string, body?: any, options?: HttpOptions, requestOptions?: Partial<RequestOptions>) {
        return this.handleRequest<T>(
            endpoint,
            this.httpClient.post<T>(
                this.buildUrl(endpoint),
                body,
                this.getHandledOptions(options, requestOptions)
            ),
            requestOptions
        );
    }

    public Put<T>(endpoint: string, body?: any, options?: HttpOptions, requestOptions?: Partial<RequestOptions>) {
        return this.handleRequest<T>(
            endpoint,
            this.httpClient.put<T>(
                this.buildUrl(endpoint),
                body,
                this.getHandledOptions(options, requestOptions)
            ),
            requestOptions
        );
    }

    public Delete<T>(endpoint: string, options?: HttpOptions, requestOptions?: Partial<RequestOptions>) {
        return this.handleRequest<T>(
            endpoint,
            this.httpClient.delete<T>(
                this.buildUrl(endpoint),
                this.getHandledOptions(options, requestOptions)
            ),
            requestOptions
        );
    }

}
