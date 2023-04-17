import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postData: Post[] = [];
  latestData: Post[] = [];
  dataByCategory: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadFeaturedPosts();
    this.loadLatestCreatedAt();
    console.log("Post Data " + this.postData);
    // this.loadPostsDataByCategory('hu5F6pSJiDSlY2k6V2D3')
  }

  loadFeaturedPosts() {
    this.postService.loadPostsFeaturedData().subscribe(data => {
      this.postData = data
    })
  }

  loadLatestCreatedAt() {
    this.postService.loadLatestCreatedAt().subscribe(data => {
      this.latestData = data
    });
  }

  loadPostsDataByCategory(categoryId: string) {
    this.postService.loadPostsDataByCategory(categoryId).subscribe(data =>
      // console.log(data)
      this.dataByCategory = data
    )
  }

}
