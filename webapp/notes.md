- When using subscriptions to get the data of an http request and there is an error that states:

```sh
    Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Object'.
    No index signature with a parameter of type 'string' was found on type 'Object'.
```

- Then you should look at where you are defining the array you are pushing the data too.

```typescript
export class AppComponent implements OnInit {
    ...
    posts: String[] = []; //<-- At first I was thinking the key is what the type of posts needed to be but then realized what was being pushed was the data object not the key string.
    posts: Object[] = []; //<-- This fixes that error and compiles successfully.

    constructor(private http: HttpClient) {
        ...
    }

  ngOnInit() {

    this.http.get('https://client1cg.thecommodoredesigns.com/wp-json/wp/v2/posts').subscribe(data => {
      for(let key in data){
        if(data.hasOwnProperty(key)){
          this.posts.push(data); //<--
        }
      }

      console.log(this.posts);
    })
  }

    ...
}
```
