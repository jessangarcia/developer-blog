const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'link/linkpost.html',
        user_id: 2
    },
    {
        title: 'consectetuer adipiscing elit.',
        post_content: 'ooga/booga.html',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        post_content: 'zelda/zelda.html',
        user_id: 4
    },
    {
        title: 'dolor sit amet, consectetuer adipiscing elit.',
        post_content: 'google/google.html',
        user_id: 5
    },
    {
        title: 'dolor consectetuer adipiscing elit.',
        post_content: 'twitter/twitter.html',
        user_id: 3
    },
    {
        title: 'Pellentesque eget nunc.',
        post_content: 'hello/helloworld.html',
        user_id: 2
    },
    {
        title: 'Duis ac nibh.',
        post_content: 'test/test.html',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_content: 'morepost/post.html',
        user_id: 3
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;