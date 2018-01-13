const Rss = require("./../rss");
const sinon = require("sinon");
const feedsData = require("./__data__/feed.json");

Rss.fetchFeeds = () => {
  throw new Error("fetchFeeds ne peut pas etre utilise dans un test");
};

describe("rss tests suite", () => {
  it("should return feeds from source", () => {
    const stubFetchFeeds = sinon.stub(Rss, "fetchFeeds").resolves(feedsData);
    return Rss.fetchSource(
      "Hacker News",
      "https://news.ycombinator.com/rss"
    ).then(source => {
      expect(source.name).toEqual("Hacker News");
      expect(source.feeds).toHaveLength(30);
      expect(source.description).toBeTruthy();
      expect(source.link).toBeTruthy();
      expect(source.title).toBeTruthy();
      stubFetchFeeds.restore();
    });
  });

  it("should catch an error", () => {
    const stubFetchFeeds = sinon
      .stub(Rss, "fetchFeeds")
      .rejects({ message: "Error" });
    return Rss.fetchSource().catch(error => {
      expect(error.message).toEqual("Error");
      stubFetchFeeds.restore();
    });
  });
});
