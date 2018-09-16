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

rtm.start();
