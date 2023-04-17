import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/posts';
import { Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  

  @Input() postData: Post[]  | any;

  constructor(private postService: PostService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    // })
  }

  
}
