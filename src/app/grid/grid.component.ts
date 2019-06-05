import { Component } from '@angular/core';
import { PostService, Post } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  posts$: Observable<Post[]>;

  constructor (private _postService: PostService){
  	this.posts$ = this._postService.combinePostsAndCategory$;
  }

}
