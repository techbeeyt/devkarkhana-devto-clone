import { posts } from "../assets/database/posts";
const tagss = [];
posts.map(post =>
    post.tags.forEach((item)=>{
        tagss.push(item);
    })

)
const taggs = [...new Set(tagss)]


export {taggs}