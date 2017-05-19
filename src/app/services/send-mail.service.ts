import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendMailService {
    constructor (private http: Http) {}

    private sendMailUrl = 'https://vast-wave-52481.herokuapp.com/contact/send-mail';

    sendMail (body: Object): Observable<Message[]> {
        let bodyString = JSON.stringify(body);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: header});

        return this.http.post(this.sendMailUrl, bodyString, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}

export class Message {
    constructor(public name: string, public email: string, public text: string){}
}