const Medium = require("./../medium");
const sinon = require("sinon");

Medium.fetch = () => {
  throw new Error("fetch ne peut pas etre utilisé dans un test");
};

describe("medium tests suite", () => {
  it("should return flatten feeds from medium and remove doublons", () => {
    const stubFetchFeeds = sinon.stub(Medium, "fetch").resolves({
      feeds: [
        {
          creator: "Eric Elliott",
          title: "The position is not the point.",
          isoDate: new Date(),
          guid: "https://medium.com/p/efe12408c33"
        }
      ]
    });

    return Medium.getAll().then(feeds => {
      expect(stubFetchFeeds.calledThrice).toEqual(true);
      expect(feeds.length).toEqual(1);
      stubFetchFeeds.restore();
    });
  });

  it("should order feeds by date", () => {
    const getDate = (sub = 0) => new Date(Date.now() - sub * 1000);
    const stubFetchFeeds = sinon.stub(Medium, "fetch").resolves({
      feeds: [
        {
          creator: "Eric Elliott",
          title: "The position is not the point.",
          isoDate: getDate(),
          guid: "https://medium.com/p/efe12408c33"
        },
        {
          creator: "Eric Elliott",
          title: "Hello",
          isoDate: getDate(1000),
          guid: "https://medium.com/p/efe128c33"
        },
        {
          creator: "Eric Elliott",
          title: "Hello",
          isoDate: getDate(10000000),
          guid: "https://medium.com/p/efeazzz128c33"
        }
      ]
    });

    return Medium.getAll().then(feeds => {
      expect(stubFetchFeeds.calledThrice).toEqual(true);
      expect(feeds.length).toEqual(2);
      expect(feeds[0].guid).toEqual("https://medium.com/p/efe12408c33");
      stubFetchFeeds.restore();
    });
  });
});
