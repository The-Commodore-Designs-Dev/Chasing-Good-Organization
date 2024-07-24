import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {
  private backendUrl = 'https://client1cg.thecommodoredesigns.com';
  private endpoint = '';

  constructor(private http: HttpClient) { }

  getPosts(){
    this.endpoint = `${this.backendUrl}/wp-json/wp/v2/posts`;
    return this.http.get(this.endpoint);
  }

  getSinglePost(id: number){
    this.endpoint = `${this.backendUrl}/wp-json/wp/v2/posts/${id}`;
    return this.http.get(this.endpoint);
  }

  getSinglePage(id: number){
    this.endpoint = `${this.backendUrl}/wp-json/wp/v2/pages/${id}`;
    return this.http.get(this.endpoint);
  }
}
