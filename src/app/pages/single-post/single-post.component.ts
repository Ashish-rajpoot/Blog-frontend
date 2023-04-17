import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  postData: any = {};
  similarPosts: Post[] = [];
  categoryId : string = "";
  constructor(private postService: PostService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postService.loadPostCount(params['id'])
      this.loadPostByPostId(params['id']);
      // this.loadSimilarPost(params['id']);
    });
  }

  loadPostByPostId(postId: string) {
    this.postService.loadSinglePost(postId).subscribe((data) => {
      this.postData = data;
      this.categoryId =  this.postData.category.categoryId;
      this.loadSimilarPost(this.categoryId)
    });

  }

  loadSimilarPost(categoryId:string){
    this.postService.loadSimilarPost(categoryId).subscribe((data)=>{
      this.similarPosts = data;
      console.log(this.similarPosts.length);
    }) 
  }
}
