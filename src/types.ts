import { App } from '@slack/bolt';
import { StringIndexed } from '@slack/bolt/dist/types/helpers';
import { User} from '@slack/web-api/dist/response/UsersLookupByEmailResponse'
import { ChatPostMessageArguments } from '@slack/web-api/dist/methods'

type AppType = App<StringIndexed>;
type AppUser = User;

type Sotrudnik = {
  name: string;
  email: string;
  birthday: string;
}

type Sotrudniki = {
[key: string]: Sotrudnik;
}

type Data = {
rukovoditel: string;
sotrudniki: Sotrudniki
}

type Message = Pick<ChatPostMessageArguments, 'text' | 'blocks'>;

enum ScheduleIds {
  birthdays = 'birthdays'
}

export type {
  AppType,
  AppUser,
  Data,
  Sotrudniki,
  Message,
}

export {
  ScheduleIds
}