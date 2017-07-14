import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Item } from './item';
import { Category } from './category';

@Injectable()
export class ApiService {

  constructor( private http: Http,) { }

  getItems(): Observable<Item[]> {
    let headers = new Headers();
    	  headers.append('Content-Type', 'application/json; charset=utf-8'); 
    let ApiUrl = '/api/item';

    return this.http
                    .get(ApiUrl, { headers: headers })
                    .map((response: Response) => <Item[]> response.json())
                    //.do(response => console.log(response))
                    .catch(this.handleError);
  }

  saveItem(item: Item): Observable<any> {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8'); 
    const body = JSON.stringify(item);
    let ApiUrl = '/api/item';

    return this.http
                    .post(ApiUrl, body, { headers: headers })
                    .map((response: Response) => response.json())
                    .do(response => console.log(response.ok))
                    .catch(this.handleError);
  }

  updateItem(item: Item): Observable<any> {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8'); 
    const body = JSON.stringify(item);
    let ApiUrl = '/api/item';

    return this.http
                    .put(ApiUrl, body, { headers: headers })
                    .map((response: Response) => response.json())
                    .do(response => console.log(response.ok))
                    .catch(this.handleError);
  }

  deleteItem(item: Item): Observable<any> {
    let body = JSON.stringify(item);
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
    let options = new RequestOptions({ 
    		                  body: body,
    		                  method: RequestMethod.Delete,
    		                  headers: headers
                      });	
    let ApiUrl = '/api/item';

    return this.http
                    .request(ApiUrl, options)
                    .map((response: Response) => response.json())
                    .do(response => console.log(response.ok))
                    .catch(this.handleError);
  }

  getCategories(): Observable<Category[]>  {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8'); 
    let ApiUrl = '/api/category';

    return this.http
                    .get(ApiUrl, { headers: headers })
                    .map((response: Response) => <Category[]>response.json())
                    //.do(response => console.log(response))
                    .catch(this.handleError);

  }

  saveCategory(item: Category): Observable<any> {
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8'); 
    const body = JSON.stringify(item);
    let ApiUrl = '/api/category';

    return this.http
                    .post(ApiUrl, body, { headers: headers })
                    .map((response: Response) => response.json())
                    .do(response => console.log(response.ok))
                    .catch(this.handleError);
  }

  deleteCategory(item: Category): Observable<any> {
    let body = JSON.stringify(item);
    let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
    let options = new RequestOptions({ 
                          body: body,
                          method: RequestMethod.Delete,
                          headers: headers
                      }); 
    let ApiUrl = '/api/category';

    return this.http
                    .request(ApiUrl, options)
                    .map((response: Response) => response.json())
                    .do(response => console.log(response.ok))
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;

    return Observable.throw(msg);
  }
}
