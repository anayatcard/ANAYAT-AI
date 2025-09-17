const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUQ4bUxpTzhPVmZrV2wyVXZOWkxDTU5ZU2pnREplZ3laaDB1c2R3ZzdWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVJKNkFadEtFT1NLUFdCeWt6T3JINE1pdlBmMjBCZCs2alowbWI3ejNUTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR216RGU1WG92WHVhdmtOMGNaZFpFdEU3UWllbjJqSjdxWGRrWWk4amtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbkVpeGtTZUpqL2drNUF2elA0K1ZUZEE5ZWFpYzYwZUpVT2Q0R0VYampZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFMK2VzRUhoaXVKMnhYUEVlV0lBcTlwZWZTeTRPY3Q4aEpDUXgzMDhCVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR6Wk1xMjhQVHhIRG9BQlVjMkpWeGhQa1Ntcklza2FhWDBpdjY3ZWdmMUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dsOEFVMXdKQXl3UzFjLzVlWEtpRkQvTmpnZjlXcVVpU1BqUG9iVzJrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lnZU50WkUyT2NUKzNJSGlhRTlWRE4ycTNwRGRpQUc2MHFKd2s0MVdpcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRqWWNQZG5PcnZUL1ZMdm11cStOeWNGYVJrSkMvdllyV2ljYlR1QXpPcFRZR1lHZXRFTEluVVI0ZjhPUm1ZUlJkejh0cGpsRTJ1Rk5lZFY2V3NCS2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6IkRlaXozRVNGVjU0U2RNV0FjTTBOMGZMbVJXaC9hT1MyZ215RTdaaG9rUlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDk4MDExNDUxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExQjJFQTRBQUU5MDEyMDQ5QjcyMUE0RjAwRjY0QzhEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTgxMzI0Nzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ5ODAxMTQ1MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMEZGMzAzMDM5MzNEQkMzMzgwRTg0NkYxREE5OTY3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MTMyNDgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJKUjJWWDEyUSIsIm1lIjp7ImlkIjoiOTIzNDk4MDExNDUxOjE4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIwOTU5ODUxODY0MTgwOjE4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdBeXNRR0VQcnhxOFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoid2pDTS9EcEkwekxQVjBMRnpPR0RJY2dYREhpbXBjZUJKOFhrRWtqTFl5UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWERDd0k3WDBRRE5YWGNrTFFlZnRHeHZJTUVTQ2h4U3BORmpxUE5ZbnBhbDBQb3FzSzhhUks1T05GbTFyWEpISjJ3WnNrMkJWcTdJWTBLRlViTy9xQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IkYrdzNXSGl6aTc1c0RMOFNiQXZDT24weGdZcjE1NkxOSi9mRCtlYVNjSWYwMjI1Mjg4dWliQWRaT1JTS0s0ZkZ3Wm1iS1RMM01IQmorNnpacWI5M2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDk4MDExNDUxOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNJd2pQdzZTTk15ejFkQ3hjemhneUhJRnd4NHBxWEhnU2ZGNUJKSXkyTWsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODEzMjQ3NywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNTNSJ9",
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
