import { config } from "dotenv";
import { Message } from "node-telegram-bot-api";
import express, { Express, Request, Response } from "express";

config();

const botKey: string = process.env.BOT_KEY;
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hola");
});

app.post("/webhook", async (req: Request, res: Response) => {
  console.log(req.body);

  const msg = req.body;

  if (!msg?.chat?.id) {
    console.error("Invalid message format, 'chat.id' not found.");
    return
  }

  const chatId = msg.chat.id;
  //const messageText = msg.text;

  try {
    await fetch(`https://api.telegram.org/bot${botKey}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: "hey"
      })
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
