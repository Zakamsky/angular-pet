import { Component } from '@angular/core';

export interface  Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';

  posts: Post[] = [
    {
      title: "Want to learn Angular",
      text: "i am on my way!",
      id: 1,
    },
    {
      title: "stile Want to learn Angular",
      text: "yet another lesson",
      id: 2,
    }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

}
