import { Component, Input } from '@angular/core';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { PostDataService } from 'src/app/services/post-data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

    @Input() post: any

    constructor(
        private postData: PostDataService
    ) {

        
    }

    
}
