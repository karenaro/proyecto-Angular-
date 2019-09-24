import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Body } from '@angular/http/src/body';
import {pipe, Observable, from} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {observable} from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { resolve } from 'url';
import { reject } from 'q';
import { RequestOptions } from 'https';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;
  urlWebApi :'http://localhost:3000/'

  constructor(public http : Http) {
    console.log('Hello HttpProvider Provider');
   }

  getJsonData(){
    this.headersPost = new Headers({
      'Content-Type':'',
      'Access-Control-Allow-Origin':'*',
      'auth': '',
      'password':''
    });
    return this.http.get('http://localhost:3000/'}


  //headers
  private headersRES(): Headers{
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'aplication/json');
    myHeaders.append('access_token', localStorage.getItem('token'));
    return myHeaders;
  }

  public obtenerProductos(): Observable<any> {
  
    return this.http.get(this.urlWebApi, {headers: this.headersRES()}).pipe(
      map(responsive => {
        return responsive.json();
      }), pipe(catchError(this.handleError))
    )

  }

  autenticarService(data: string){
    //this.http.get(this.urlWebApi + 'articles').subscribe(data => {
    console.log('metodo en uso... ' + data)
    
    } 
  //)}

  private handleError(error: Response){
    const setError  = (error ['_body '])? JSON.parse(error ['_body']): error.statusText
    const json = {
      Error: setError,
      Resultado: [],
      EsExitoso:false,
      Status: error.status
    };
    return Observable.throw(json);
}


}


