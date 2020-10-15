const db = require("../models");
const FindUserByEmailAndPassword = require("../src/models/user/FindUserByEmailAndPassword");
const FindDefaultFeeds = require("../src/models/feed/FindDefaultFeeds");
const InsertUserToFeed = require("../src/models/user-to-feed/InsertUserToFeed");

const email = "fake@jsjitsu.com";
const password = "supersecret";

module.exports = {
  up: async () => {
    const [user, feeds] = await Promise.all([
      FindUserByEmailAndPassword.execute({ email, password }),
      FindDefaultFeeds.execute()
    ]);

    await InsertUserToFeed.execute({
      user_id: user.id,
      feed_id: feeds[0].id
    });
  },

  down: async () => {
    const { id } = await FindUserByEmailAndPassword.execute({
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
