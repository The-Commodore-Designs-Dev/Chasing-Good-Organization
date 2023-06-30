import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfig {
    
    public static config: Object = null;
    constructor(private http: HttpClient) {}

    public getConfig(key: any): any {
        if (AppConfig.config && AppConfig.config[key as keyof Object]) {
            AppConfig.config[key as keyof Object];
        } else {
            return null;
        }
    }

    public load() {
        this.http.get('assets/config/globalconfig.json').pipe(map(data => {
            return data;
        })).subscribe((data)=> {
            AppConfig.config = data;
        })
    }
}