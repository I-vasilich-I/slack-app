import { Message, Sotrudniki } from "../types";

export const prepareMessage = (sotrudniki: Sotrudniki): Message => {
  const rows = Object.values(sotrudniki).reduce((str, { name, email, birthday }) => 
    `${str}- ${name} | ${email} | ${birthday}\n`, '');

  return {
    text: 'Subordinates birthdays',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Subordinates birthdays:',
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: rows,
        }
      }
    ]
  }
}