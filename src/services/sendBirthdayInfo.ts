import { findUserByEmail, getData, prepareMessage, sendMessageToUser } from ".";
import { AppType } from "../types";

export const sendBirthdaysInfo = async (app: AppType) => {
  const data = await getData();
  
  if (!data) {
    return;
  }

  await Promise.all(data.map(async ({ sotrudniki, rukovoditel }) => {
    const sotrudnikiArray = Object.values(sotrudniki);
    // if no sotrudniki - no need to send message.
    if (!sotrudnikiArray.length) {
      return;
    }

    const user = await findUserByEmail(app, rukovoditel);
    
    if (!user) {
      return;
    }

    const message = prepareMessage(sotrudniki);

    await sendMessageToUser({ app, user, message });
  }));
}