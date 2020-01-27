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

    let addedPosts = 0
    let postIdCounter = 2 + addedPosts
    
    const commentIdCounter = () => {
        counter = 0
        for(let post of posts) {
            counter += post.comments.length
        }
        return counter
    }

    const getPosts = () => {return posts}

    const addPost = (newText) => {
        let newPostIdNum = postIdCounter + 1 
        const newPost = {
            text: newText,
            id: `p${newPostIdNum}`,
            comments: []
        }
        addedPosts++
        posts.push(newPost)
    }

    const removePost = (postID) => {
        for(let post in posts) {
            if (posts[post].id == postID) {
                posts.splice(post, 1)
            }
        }
    }

    const addComment = (newText, postID) => {
        let newCommentIdNum = commentIdCounter() +1
        const newComment = {
            id: `c${newCommentIdNum}`,
            text: newText
        }
        for(let post in posts) {
            if(posts[post].id == postID) {
                posts[post].comments.push(newComment)
            }
        }
    }

    const removeComment = (postID, commentID) => {
        for(let post in posts) {
            if(posts[post].id == postID) {
                for(let comment in posts[post].comments) {
                    if(posts[post].comments[comment].id == commentID) {
                        posts[post].comments.splice(comment, 1)
                    }
                }
            }
        }
    }

    return {postIdCounter, commentIdCounter, getPosts, addPost, removePost, addComment, removeComment}

}

// const tweeter = Tweeter()


// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//// {id: "c6", text: "Haha second place what a joke."}
