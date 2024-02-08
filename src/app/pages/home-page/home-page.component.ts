import { Component } from '@angular/core';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    posts: any = []
    constructor(
        private postData: PostDataService
    ) {
        this.posts = this.postData.posts
    }


}
