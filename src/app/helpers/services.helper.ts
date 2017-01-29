import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

export class ServicesHelper
{
  data: any;
  observable: Observable<any>;

  constructor(private http: Http, private url: string) {}

  getData(): Observable<any>
  {
    if (this.data)
      return Observable.of(this.data);
    else if (this.observable)
      return this.observable;
    else
    {
      this.observable = this.http.request(this.url)
                                .map((res: Response) => res.json())
                                .do(val => {
                                  this.data = val;
                                  this.observable = null;
                                })
                                .share();
      return this.observable;
    }
  }
}
