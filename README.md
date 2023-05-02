# Slack App

## Project information

The mock data is stored in the `data.json` file.  

```ts
export const getData = async (): Promise<Data[]> => {
  /**
   * in test task there would be a POST request, 
   * though why it should be POST instead of GET is unclear
   * const data = await axios.post('http://test.test/?getbd')
   * return data;
   */

  const filePath = resolve(__dirname, '../../data.json');
  const data = await readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
```

The list of slack bot token scopes required for the app to work:

- [chat:write](https://api.slack.com/scopes/chat:write)
- [im:write](https://api.slack.com/scopes/im:write)
- [users:read](https://api.slack.com/scopes/users:read)
- [users:read.email](https://api.slack.com/scopes/users:read.email)

## How to run the project

Clone repository

```bash
git clone https://github.com/I-vasilich-I/slack-app.git
```

Go to `slack-app` folder

```bash
cd ./slack-app
```

Install dependencies

```bash
npm install
```

Change file name and fill in variables

```string
.env.example -> .env
```

Start the app

```bash
npm run start
```
