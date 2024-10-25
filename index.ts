import { config } from "dotenv";
import TelegramBot, { Message } from "node-telegram-bot-api"; // Import both TelegramBot and Message types

config();

const botKey: string = process.env.BOT_KEY

const bot = new TelegramBot(botKey, { polling: true });

// Use the Message type for the msg parameter
bot.on("message", (msg: Message) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    const userName = msg.chat.first_name
    console.log(`Received message from chatId ${chatId}: ${messageText}`);

    if (messageText === "/start"){
        bot.sendMessage(chatId, `Burger off ${userName}`)
    }
});
