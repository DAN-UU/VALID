const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_53_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICA5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk2LFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhpMVYvSUtMTFczZ2ZhTW1hd2UrQWEyaGxDVENiY0xmTTlhbEw5YzBxeUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFGNFhVbVFlU0RpVU1kbXRCQ0xnZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTRhOGE5NTUtZDFjYy00NjY1LWEwYzItY2FmODY5NWNhMDU0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDEwOSxcbiAgICAgIDIxMCxcbiAgICAgIDI0MyxcbiAgICAgIDEzNCxcbiAgICAgIDIwOCxcbiAgICAgIDk0LFxuICAgICAgMjQzLFxuICAgICAgMTM0LFxuICAgICAgNDgsXG4gICAgICAxMDIsXG4gICAgICA0NSxcbiAgICAgIDM2LFxuICAgICAgMjUyLFxuICAgICAgMTQwLFxuICAgICAgMTc5LFxuICAgICAgODgsXG4gICAgICAxNTYsXG4gICAgICAxMTMsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgMTA1LFxuICAgICAgMjE3LFxuICAgICAgNixcbiAgICAgIDY4LFxuICAgICAgOSxcbiAgICAgIDEzLFxuICAgICAgMTUwLFxuICAgICAgMTI5LFxuICAgICAgMjUwLFxuICAgICAgMTAsXG4gICAgICA3NixcbiAgICAgIDE4NSxcbiAgICAgIDE2NyxcbiAgICAgIDE2NyxcbiAgICAgIDIzNSxcbiAgICAgIDEwMSxcbiAgICAgIDEwMixcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUc3b0xzUEVJU1c1TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCU2hlSzhyQ0RWdEI2c0RwbGdrNEpvT2dCLzdHL29LTjBGUlpBQ1FhTkhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxTYm53ZDFCVStXK0djaW1qZ0VJUEpyMGExeUVhMGNIUGxRK2QwOHVrWVhha2xVYndKclphOElVU2k1WnVWallHNHhLemFOTnZsajMxZHNWemlxZkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklJQ1ZMOExFU045NXNLczJWRUdzQWdua3JIZTl2c1I5MmNQTEQrVHJkbUdQK1VuT3B5TDJmV3REYjRsQ3lDYk5oSllOZ3JNTHpTd0paaHpYZ1MwcUNRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NTg0NjM4MDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc3MTI0NTM1MTc3MzIyOjI3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInRpbW15eSEh8J+lt1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NTg0NjM4MDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MDE0NDA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTJrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNMmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Ym9sK05uQzgvUEVWWlpYbjYzYjQwWkk4eU15WjBwV241M0FVc28zT1RnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNTA3OTU2NDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTAxNDQxMjA2MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
