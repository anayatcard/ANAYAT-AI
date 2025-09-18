const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZJRzh0ZDVYK2FTc1JBdXkzMk1iVkZrNVdnTU1jazlZUVhiQng0RjFXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTQrdU1wZ3R5Zkdxc01ndkkrdENWSzdTQXgvb21yenN6WmVYMktLTHlRQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSkJxU3dKaWs1Z3RvVjJvSzNwM0d3OUVwd0h5aVgraHVCbHpxVWd6aTNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUUhEb21yMTBKQzRqNWxDYUxpZnlvcUsvR3ZmMFVVZ2JPdGJsdVdFOVFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKOWFtZGRSNExid3RqRE1CRXdMYXBCZmRCc1dhdWxwTnVnSXM0OTl6bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ3RDg4dEhiQkNYckxkdDk5YTRNeW84UDFKb1VYY2FiRjNvR3puelJWaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1sSEU2ZjVJTTlmeHZyK1lEM2kwSHlEQVNYb012UUVYb3hBKzNaRWozYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXBtaFgyQlFIc2E4dEFTV0ZiLzlMOUxWRlVWamFyQjdFYnMrSEJkZ29nWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNWeDhwSFNNYVJWK3R4T2pNNU9naUZUWHRQRGN4eTJacTQ5dDNoWSs4Y2ZCakRhNU14SVhhT1dFV2F0c3VwWkRDQlZzK21qcER4cno1T2hwU3pJT0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJPL1cyT25YM2txNlpHa05RSnA0bGhjK3F5alZWRzl0QnliWnZMaUIyRkVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEQzNFNEQyMkEwOUJGODJFMzZENEVFNTgxMjJFNDk5MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MjE2MzI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0OTgwMTE0NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjgwQjNFRTQwNzNGMDQ4RDI0OENEMkJBNkVCNUVEMzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODIxNjMyNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRlZXTUhZV1YiLCJtZSI6eyJpZCI6IjkyMzQ5ODAxMTQ1MToyMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMDk1OTg1MTg2NDE4MDoyMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lXQXlzUUdFUDJBc2NZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndqQ00vRHBJMHpMUFYwTEZ6T0dESWNnWERIaW1wY2VCSjhYa0VrakxZeVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJEUWdZKzQwWFphL2J6WWE2L0YzeE1hQkp6N29MQzhNMFJ0RCtTcENQcjExMm1NMisxVXpjMU0walZkQzRBa3pkb0JQUlh3WnNzam9FRnJRUTNySEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKYUs2dkhsREJDNWRwK0pDOGVmMDBRTStMSGhWeGpmYzZEU1ZLS0RuUlN4blE5Q1praEwxTis5Nm5BQkg4NTdUVWhEUUYxN1pwdW9yNHEzV1RUT2tCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ5ODAxMTQ1MToyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjSXdqUHc2U05NeXoxZEN4Y3poZ3lISUZ3eDRwcVhIZ1NmRjVCSkl5Mk1rIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgyMTYzMjAsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPNUIifQ==",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
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
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
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
