
let commentId = 1;
const comments = new Map();

function createComment(text, isReply = false, parentId = null) {
    const template = document.getElementById('commentTemplate');
    const comment = template.content.cloneNode(true);
    const commentElement = comment.querySelector('.comment');
    
    commentElement.dataset.commentId = commentId;
    commentElement.querySelector('.comment-text').textContent = text;
    
    if (isReply) {
        commentElement.classList.remove('comment');
        commentElement.classList.add('reply_comment');
    }

    // Setup like functionality
    const likeContainer = commentElement.querySelector('.like-container');
    const likesCount = likeContainer.querySelector('.likes-count');
    let likes = 0;

    likeContainer.addEventListener('click', () => {
        likes++;
        likesCount.textContent = likes;
        likeContainer.style.color = '#ff0000';
    });

    // Setup reply functionality
    const replyBtn = commentElement.querySelector('.reply-btn');
    const replyContainer = commentElement.querySelector('.reply-input-container');
    const replyInput = commentElement.querySelector('.reply-input');
    const submitReplyBtn = commentElement.querySelector('.submit-reply');

    replyBtn.addEventListener('click', () => {
        replyContainer.style.display = replyContainer.style.display === 'none' ? 'block' : 'none';
    });

    submitReplyBtn.addEventListener('click', () => {
        const replyText = replyInput.value.trim();
        if (replyText) {
            const replyElement = createComment(replyText, true, commentId);
            commentElement.querySelector('.replies-container').appendChild(replyElement);
            replyInput.value = '';
            replyContainer.style.display = 'none';
        }
    });

    // Setup report functionality
    const reportBtn = commentElement.querySelector('.report-btn');
    reportBtn.addEventListener('click', () => {
        alert('Comment reported!');
    });

    comments.set(commentId, {
        id: commentId,
        text,
        likes,
        parentId,
        replies: []
    });

    commentId++;
    return commentElement;
}

function addComment(parentId = null) {
    const input = parentId ? 
        document.querySelector(`[data-comment-id="${parentId}"] .reply-input`) :
        document.getElementById('mainCommentInput');
    
    const text = input.value.trim();
    if (text) {
        const comment = createComment(text, parentId !== null, parentId);
        if (parentId) {
            const parentComment = document.querySelector(`[data-comment-id="${parentId}"]`);
            parentComment.querySelector('.replies-container').appendChild(comment);
        } else {
            document.getElementById('commentsContainer').appendChild(comment);
        }
        input.value = '';
    }
}

// Add some initial comments
document.addEventListener('DOMContentLoaded', () => {
    const initialComments = [
        "Para mi que es mejor el fiat 500",
        
    ];

    initialComments.forEach(text => {
        const comment = createComment(text);
        document.getElementById('commentsContainer').appendChild(comment);
    });
});
 