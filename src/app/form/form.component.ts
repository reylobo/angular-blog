import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post.service';
import { Observable } from 'rxjs'; 
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private _postService: PostService) { }
  	name = new FormControl('');




  ngOnInit() {
  }

}
