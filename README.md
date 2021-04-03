# Lethe

A Twitter bot to trigger a webhook when a new tweet is sent by a user, using  `twit` and `node-fetch`.

You may modify the `body` to customize what is being set to the webhook. Currently, it sends the link to the tweet, with the username and profile picture of the user.

## Setup

0. Clone the repository.

1. Run `npm i`.

2. Create a copy of `cfg.example.json` and `twitcfg.example.json`, and remvoe `example` from the filename. These are your configuration files.

3. Go to the [Twitter Developper Portal](https://developer.twitter.com/en/portal/dashboard), and create an app.

4. Save your API key and API secret key to `twitcfg.json`.

5. In the *Keys And Tokens* tab, generate an access token (read only). Save these to `twitcfg.json`.

6. Add the webhook URL you want the messages to go to in the `webhook_url` field. Add the users you want updates on to the `users` array.

7. Run the bot : `node index.js`.