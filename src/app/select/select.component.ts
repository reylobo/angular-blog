import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  constructor(private _postService: PostService) { }

  onClick(category: string) {
  	this._postService.selectCategory(category);
  }

}
