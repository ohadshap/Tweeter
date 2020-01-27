const Tweeter = function() {
    const posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
 /////////post array ends here///////////

    let postIdCounter = posts.length
    let counter = 6
    
    const commentIdCounter = () =>  ++counter
    

    const getPosts = () =>  posts

    const addPost = (text) => {
        let newPostIdNum = postIdCounter + 1 
        const newPost = {
            text: text,
            id: `p${newPostIdNum}`,
            comments: []
        }
        addedPosts++
        posts.push(newPost)
    }

    const removePost = (postID) => {
        for(let i in posts) {
            if (posts[i].id == postID) {
                posts.splice(i, 1)
            }
        }
    }

    const addComment = (text, postID) => {
        commentIdCounter()
        const comment = {
            id: `c${counter}`,
            text: text
        }
        for(let i in posts) {
            if(posts[i].id == postID) {
                posts[i].comments.push(comment)
            }
        }
    }

    const removeComment = (postID, commentID) => {
        for(let post of posts) {
            if(post.id == postID) {
                for(let i in post.comments) {
                    if(post.comments[i].id == commentID) {
                        post.comments.splice(i, 1)
                    }
                }
            }
        }
    }

    return {postIdCounter, commentIdCounter, getPosts, addPost, removePost, addComment, removeComment}

}
