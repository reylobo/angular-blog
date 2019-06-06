import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post.service';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private _postService: PostService) { }

  




  ngOnInit() {
  	console.log(this.posts$);
  }

}
