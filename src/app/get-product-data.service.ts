import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProductDataService {

  constructor(private http: HttpClient) { }

private jsonPath = "./assets/ProductData.json";

getPosts() {
 return this.http.get(this.jsonPath);
}

createPost(post : any) {
 return this.http.post(this.jsonPath, JSON.stringify(post))
}

addProduct(post : any) {​​

  return this.http.post('./assets/ProductData.json', JSON.stringify(post))

}​​

// updatePost(post){
//  return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
// }

deletePost(id: any) {
 return this.http.delete(this.jsonPath + '/' + id);
}
}

