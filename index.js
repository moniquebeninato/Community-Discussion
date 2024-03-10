// Community forum interaction
const communityForum = {
    topics: [],
    users: [],
    moderators: [],
    posts: []
};

// Functions to interact with the community forum
function createTopic(title, content, author) {
    const newTopic = {
        title: title,
        content: content,
        author: author,
        created_at: new Date(),
        replies: []
    };
    communityForum.topics.push(newTopic);
}

function replyToTopic(topicIndex, content, author) {
    const newReply = {
        content: content,
        author: author,
        created_at: new Date()
    };
    communityForum.topics[topicIndex].replies.push(newReply);
}

function createPost(content, author) {
    const newPost = {
        content: content,
        author: author,
        created_at: new Date()
    };
    communityForum.posts.push(newPost);
}

function addUser(username) {
    communityForum.users.push(username);
}

function addModerator(username) {
    communityForum.moderators.push(username);
}

// Simulate community forum interactions
addUser("User1");
addUser("User2");
addUser("User3");
addModerator("Mod1");
addModerator("Mod2");

createTopic("Introduction", "Welcome to our community forum!", "User1");
createTopic("General Discussion", "Feel free to discuss anything here.", "User2");
replyToTopic(0, "Thank you for the warm welcome!", "User3");
createPost("This forum is awesome!", "User1");
createPost("I agree, it's a great place to share ideas.", "User2");
createPost("As a moderator, I'm here to help.", "Mod1");
createPost("Don't hesitate to reach out if you need assistance.", "Mod2");