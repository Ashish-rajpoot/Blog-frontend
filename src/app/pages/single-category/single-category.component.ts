import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interface/posts';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
postDataByCategoryId : Post[] = [];
category:string = '';
isCategoryAvailable : boolean = false;
  

  constructor(private postService: PostService, private route: ActivatedRoute, private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadPostsDataByCategory(params['id']);
    });
  }

  loadPostsDataByCategory(categoryId: string){
    this.postService.loadPostsDataByCategory(categoryId).subscribe(data=>{
      this.postDataByCategoryId = data;
      if(data.length > 0){
        this.isCategoryAvailable = true;
        this.postDataByCategoryId.forEach(val=>{
          this.category = val.category['category'];
          console.log(this.category);
        })
      }else{
        this.category = `No Post available for the category`;
      }
    })
  }

}
