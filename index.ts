import { config } from "dotenv";
import { Message } from "node-telegram-bot-api";
import express, { Express, Request, Response } from "express";
import { roastFunc } from "./extras/roasts.js";

config();

const botKey: string = process.env.BOT_KEY;
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/webhook", async (req: Request, res: Response) => {
  const msgOBJ: Message = req.body.message;
  const chatId: number = msgOBJ.chat.id;
  const message: string = msgOBJ.text;
  const firstName: string = msgOBJ.from.first_name;

  let name: string;

  if (msgOBJ.from.last_name !== "") {
    name = `${firstName} ${msgOBJ.from.last_name}`;
  } else {
    name = firstName;
  }

  const reply: string = roastFunc(name, message);

  try {
    await fetch(`https://api.telegram.org/bot${botKey}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: reply
      })
    });

    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
