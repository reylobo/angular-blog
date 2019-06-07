import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService, Post } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  posts$: Observable<Post[]>;
  name= new FormControl('');
  
  
  constructor() { }

  ngOnInit() {
  }

}
