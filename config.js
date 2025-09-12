const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0J1dGRxOVNPajExWGRWUTl1ZE9vUlQxZDBxWXBoT1YyS1FrSGUvRVBuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHI3ZjZiQUd0TS9razM5OEw2c283MW55N1pQTGFVTmVDWnljUjk2RytsQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTk1rRFM0Y2dNSGpiMXpxMW1lOFFZb3hBeGRnaHJ4QXZyMng5SVIrUVd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTS08vYkprMmZ3bzBpakF3NGdwNkFVWDMrb1F0VXc3SnVtaEZVUGlTV0RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1GYjRBVkdMYWNCa0o1ckZaZ1FZQ3haall4bFRTK1piNWt1NStHVUMwWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZwS3hVWTFpRFN0bW0wdWt4cWxDRDlaR1pPdWNlVit1WmZtWmVzVjRyd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUl2REtxVGRjbVd0QXN5OE14bXU4S1J5Q0NyYy93NDVVWVVBaGFFOS8wND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXJQNGNwbFg1Z2dEMUhaVWhYM0pXN2Z2NmNqQjJhVlZjWTJWd0YvK3ZXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlsdHpTaGkyTExSRHJoeWEzUHpxQkx3VmNNS0VFeEhtNnM1QnprbEw3ODJNOEwza1JoVkxzTTRHYkNSQXYyZEJoM0pvQ000TGpSclJ1M1IwSW9QZWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6Ink2Q1ViSHNxMUJ6ZDA2Vmc5clZmdEh0cDRQMTBVeWhsWUQ4YjlsQTJFdlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDk4MDExNDUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRCOENCODRBQTc0Q0Y1OUVFQkY2QTIxNEQzNDg2Q0U1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3MTQ2Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJENzIyRjY4Njg5M0UwMkZFQ0IzQUU2Q0IwQzRGRUIyQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NzE0Njc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0OTgwMTE0NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEE4OUNEQjFEODMzQzdGMkVDQ0I4NDQ5MzVDODA4OUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzcxNDY3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRDZKQUZLS0siLCJtZSI6eyJpZCI6IjkyMzQ5ODAxMTQ1MTo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIwOTU5ODUxODY0MTgwOjRAbGlkIiwibmFtZSI6IktJTkfwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWC95Y1FHRVBDeGtzWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3akNNL0RwSTB6TFBWMExGek9HREljZ1hESGltcGNlQko4WGtFa2pMWXlRPSIsImFjY291bnRTaWduYXR1cmUiOiJ0ZkNLbkNlWThLVFVyRDZlTVRPVmZKWWpvcEpzbHJnVFR6OExyY2VlemI4UjFHU3lvRjJqWHV1alJVLzc0a1NiUU56NXRGL0h4ZW41MUxEdnVpQ2xEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVjZqR0xKTHBFZWZrVzNNOE9sSlJta2ViT0FvQnJxbDllb3dYdEFpZ3pGL3k5UE01TVZNQ1MvRWIva0Z3cjNNZ0U4TitudzVNMGVOTVdnc0RNTFVQaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTgwMTE0NTE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSXdqUHc2U05NeXoxZEN4Y3poZ3lISUZ3eDRwcVhIZ1NmRjVCSkl5Mk1rIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc3MTQ2NzYsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZnEifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ANAYAT-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/rexuf8.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Anayat-ai*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Anayat-ai ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/i08v9p.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
