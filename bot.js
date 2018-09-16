var axios = require('axios');

// To manage Slack interactions
var { CLIENT_EVENTS, RTM_EVENTS, RtmClient, WebClient } = require('@slack/client');
var rtm = new RtmClient(process.env.BOT_TOKEN);
var web = new WebClient(process.env.BOT_TOKEN);

// Log bot name in terminal when RTM connection is authenticated
rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  console.log(rtmStartData.self.name);
});

// 'Hello World' message for the bot
rtm.on(RTM_EVENTS.MESSAGE, (msg) => {
    rtm.sendMessage('HELLO WORLD', msg.channel);
    console.log('SENDING MESSAGE');
    console.log(msg.channel);
    return;
});

axios.get('https://api.dialogflow.com/v1/query', {
      params: {
        v: 20150910,
        lang: 'en',
        timezone: '2017-07-17T14:01:03-0700',
        query: "Schedule a meeting with someone at 5pm on Friday",
        sessionId: 12345
      },
      headers: {
        Authorization: 'Bearer 8eb8bfe705ec42bda62581eb11993637'
      }
}).then(res => {
    console.dir(res.data, {depth:null});
})

rtm.start();
