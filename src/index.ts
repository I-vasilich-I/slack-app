import { App } from '@slack/bolt';
import { config } from 'dotenv';
import scheduleBirthdayMessagesJob from './schedule';

config();

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

scheduleBirthdayMessagesJob(app);

const server = async () => {
  try {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running! ⚡️');
  } catch (error) {
    console.error('Unable to start App', error);
  }
}

server();
