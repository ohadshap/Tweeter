const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function() {
    tweeter.addPost(`${$("#input").val()}`)
    $("#input").val('')
    renderer.renderPosts(tweeter.getPosts())
}

$("body").on("click", ".delete", function() {
    let postId = $(this).closest(".post").data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".addCom",  function() {
    let text = $(this).closest(".post").find(".comInput").val()
    let postId = $(this).closest(".post").data().id
    tweeter.addComment(text, postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".delete-comment", function() {
    let commentID = $(this).closest(".comments").data().id
    let postID = $(this).closest(".post").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})

