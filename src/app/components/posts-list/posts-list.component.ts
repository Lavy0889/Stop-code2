import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  post: Posts[] = [];

  constructor(private ps: PostsService){


  }

  ngOnInit(): void {
    this.post = this.ps.getPosts();
  }
}
