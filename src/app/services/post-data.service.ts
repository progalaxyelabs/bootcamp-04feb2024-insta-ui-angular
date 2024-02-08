import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostDataService {

    posts: any = []


    constructor() {
        this.fetchPosts()


    }


    async fetchPosts() {
        const response = await fetch('http://localhost:3000/posts')
        if (response.ok) {
            let posts: any = await response.json()
            console.log(posts)
            if(posts) {
                this.posts.push(...posts)
            }           
        }
    }

}
