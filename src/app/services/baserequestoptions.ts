import { BaseRequestOptions } from '@angular/http';
export class QuickCustomRequestOptions extends BaseRequestOptions {
public auth_token: string;
constructor (customOptions?: any) {
super();
        let user = JSON.parse(localStorage.getItem('user'));
        this.auth_token = user && user.auth_token;
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.auth_token );
    }
}