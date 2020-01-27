const Renderer = function() {

    const renderPosts = function(posts) {
        $("#posts").empty()
        for(let post of posts) {
            const newPost = $(`<div class="post post-text" data-id="${post.id}">${post.text}
            <button class="delete">Delete Post</button><br>
            <input type="text" placeholder="Any comment?" class="comInput">
            <button class="addCom">Comment</button></div>`)
            for(let comment of post.comments) {
                const newComment = $(`<div class="comments" data-id="${comment.id}">
                <i class="fas fa-times-circle delete-comment"></i>${comment.text}</div>`)
                $(newPost).append(newComment)
            }

            $("#posts").append(newPost)
        }
    }
    return {renderPosts}
}
