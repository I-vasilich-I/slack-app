import { AppType } from "../types";
import { usersDB as users } from "../users";

export const findUserByEmail = async (app: AppType, email: string) => {
  if (users.has(email)) {
    return users.get(email);
  }

  try {
    const { user, ok } = await app.client.users.lookupByEmail({ email });
    if (!ok || !user) {
      return null;
    }

    users.set(email, user);
    return user;
  } catch (error) {
    console.error('Unable to find user', error);
    return null
  }
}

