import { Component, Input } from '@angular/core';
import { Posts } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
 @Input()
 post?: Posts;

 constructor(public ps: PostsService) {

 }

 addToPrefer(){
  this.ps.aggiungiAiPreferiti(this.post!)
 }
}
