const db = require("../models");
const findUserByEmailAndPassword = require("../src/models/user/findUserByEmailAndPassword");
const findDefaultFeeds = require("../src/models/feed/findDefaultFeeds");
const insertUserToFeed = require("../src/models/user-to-feed/insertUserToFeed");

const email = "fake@jsjitsu.com";
const password = "supersecret";

module.exports = {
  up: async () => {
    const [user, feeds] = await Promise.all([
      findUserByEmailAndPassword.execute({ email, password }),
      findDefaultFeeds.execute()
    ]);

    await insertUserToFeed.execute({
      user_id: user.id,
      feed_id: feeds[0].id
    });
  },

  down: async () => {
    const { id } = await findUserByEmailAndPassword.execute({
      email,
      password
    });

    return db.user_to_feed.destroy({
      where: {
        id
      }
    });
  }
};
