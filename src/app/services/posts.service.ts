import { Injectable } from '@angular/core';
import { POSTS } from '../data/posts';
import { Posts } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  ListaPosts: Posts[]= [];


  getPosts(){
    return POSTS as Posts[];
  }

  aggiungiAiPreferiti(post:Posts){
    if (!this.ListaPosts.find(p=> p.id == post.id)) {
      this.ListaPosts.push(post);
    }
  }
  rimuoviDaiPreferiti(id: number) {
    const p = this.ListaPosts.find(p => p.id == id);

    if (p) {
      const i = this.ListaPosts.indexOf(p);
      this.ListaPosts.splice(i, 1);
    }

  }
  pulisciLista(){
  this.ListaPosts.length = 0;
  }


 }