const config = require("./cfg.json");
const twitconfig = require("./twitcfg.json");
const fetch = require("node-fetch");

var Twit = require("twit");

var T = new Twit(twitconfig);

T.stream("statuses/filter", { follow: config.users }).on("tweet", function (tweet) {
    console.log(`New tweet by ${tweet.user.name}!`);
    fetch(config.webhook_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: tweet.user.name,
            avatar_url: tweet.user.profile_image_url_https,
            content: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
        }),
    }).then(() => console.log(`Received tweet and posted message in ${Date.now() - tweet.timestamp_ms}ms.`));
});