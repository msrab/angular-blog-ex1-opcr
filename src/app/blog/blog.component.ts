import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postContent : string;
  @Input() postDate : Date;
  @Input() postLike : integer;

  constructor() { }

  ngOnInit() {
  }

  like(){
  	this.postLike++;
  }

  dontLike(){
  	this.postLike--;
  }

  getBg(){
  	if (this.postLike > 0) {
  		return 'green';
  	}
  	else if(this.postLike < 0){
  		return 'red';
  	}
  	else
  		return 'white';
  }

}
