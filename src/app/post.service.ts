import { Injectable } from '@angular/core';
import { combineLatest, pipe, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Post {
	id: number;
	title: string;
	category: string;
	shortDescription: string;
	publishedAt: string;
	image: string;
	comments: [{
		id: number; 
		content: string;
		author: string;
	}]
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

	private apiURL = 'https://private-c3edb-postsmock.apiary-mock.com/posts';
  
	posts$: Observable<Post[]>;
	categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('all');
	selectedCategory$: Observable<string> = this.categorySubject.asObservable();
	combinePostsAndCategory$: Observable<Post[]>;

  constructor(private _http: HttpClient) { 
  	this.getPosts();
  	this.combinePostsAndCategory$ =
  	 combineLatest(this.posts$, this.selectedCategory$).pipe(
  	 	 map(this.filterPosts.bind(this))
  	 	);
  }

  filterPosts([posts, category]){
  	console.log(posts);
  	if (category === 'all') {
  		return posts;
  	}
  	return posts.filter(post => post.category === category);
  }

  public selectCategory(category: string){
  	this.categorySubject.next(category);
  }

  getPosts(){
  	this.posts$ = this._http.get<Post[]>(this.apiURL);	
  }

}
