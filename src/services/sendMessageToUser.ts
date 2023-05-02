import { AppType, AppUser, Message } from "../types";

type Props = { 
  app: AppType, 
  user: AppUser,
  message: Message,
}

export const sendMessageToUser = async ({ app, user, message }: Props ) => {
  try {
    const conversation = await app.client.conversations.open({
      users: user.id
    });

    if(!conversation.channel?.id) {
      return;
    }

    await app.client.chat.postMessage({
      channel: conversation.channel.id,
      ...message,
    });
  } catch (error) {
    console.error(error);
  }
}