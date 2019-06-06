import { Component } from '@angular/core';
import { PostService, Post } from './post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Discovering The World';	
  // posts$: Observable<Post[]>;

  // constructor (private _postService: PostService){
  // 	this.posts$ = this._postService.combinePostsAndCategory$;
  // }
}
