const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        post_text: 'link/linkpost.html',
        user_id: 2
    },
    {
        title: 'consectetuer adipiscing elit.',
        post_text: 'ooga/booga.html',
        user_id: 1
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        post_text: 'zelda/zelda.html',
        user_id: 4
    },
    {
        title: 'dolor sit amet, consectetuer adipiscing elit.',
        post_text: 'google/google.html',
        user_id: 5
    },
    {
        title: 'dolor consectetuer adipiscing elit.',
        post_text: 'twitter/twitter.html',
        user_id: 3
    },
    {
        title: 'Pellentesque eget nunc.',
        post_text: 'hello/helloworld.html',
        user_id: 2
    },
    {
        title: 'Duis ac nibh.',
        post_text: 'test/test.html',
        user_id: 4
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_text: 'morepost/post.html',
        user_id: 3
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;