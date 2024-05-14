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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_19_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDgxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICA5NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWTU5aWFjUjQrUnZnZGJCV2FCKzRjS3lkUDN4cStRV3hSdG1ocjNXQnhTcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI1MDk0NDUxMzIyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjI1NUQ2RDk2RUYyQ0I4QkJEMkEzNTE4NTI5NTE4OEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NzI4NzQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5NDQ1MTMyMjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwNTI2QzU0RjdEMDY4RjJCNjc4RUU0NjgzMEQwNTRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTcyODc0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrODhfSTU1OVI4ZVlQWlFpWmxZNDlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE5OThiN2U3LTg4ZjQtNDAwMi05YTFjLTg5NzA3YWJmMDUyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMjE5LFxuICAgICAgODMsXG4gICAgICA4MixcbiAgICAgIDM4LFxuICAgICAgMTUyLFxuICAgICAgMTQwLFxuICAgICAgMjM4LFxuICAgICAgMTk0LFxuICAgICAgMTc0LFxuICAgICAgNDksXG4gICAgICAxMjQsXG4gICAgICAxMzIsXG4gICAgICA0MCxcbiAgICAgIDI0MCxcbiAgICAgIDE1LFxuICAgICAgMjUsXG4gICAgICA4OSxcbiAgICAgIDQ5LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjIzLFxuICAgICAgNTksXG4gICAgICAxMjAsXG4gICAgICAxNDksXG4gICAgICAxNzUsXG4gICAgICAyNDQsXG4gICAgICAyNTEsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICAxNDUsXG4gICAgICAxMTcsXG4gICAgICAxNTYsXG4gICAgICAyMzUsXG4gICAgICAyNDgsXG4gICAgICA5NyxcbiAgICAgIDQ1LFxuICAgICAgMjE0LFxuICAgICAgMTMzLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tZ3VvRUZFT2ZpajdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTytwc3ptcUxNZjZPbXdLcGJYaTRzZHJpSStIUENuZ0hIaTRFOWNTZ0dHST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjSStsZGxvQm5CM09TVG9WcmFTNVA2akJxcFBHenA4ZkFEdElXWmNYN05wU2RVMlJHRUZHUjVSak1rL3NVazg4ZHBOUkI0ZmFjTWxUVFR2eGFka3VCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwMkRMNGh1UXJPeWZaRFJUODRSNWRNZWE3dHFMSjNNaWRuVHZNdFNkOElBM2xaSHIyN3lsczJzUGY4QjBGZEgzUk40Rlh1V0ZQeThLaDJKUlVIcy9pdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ0NTEzMjI0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU4NzA4Mzc3NzM1MzkyOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+YjlN0YWNoYV9fX19fQm958J+YjlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5NDQ1MTMyMjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU3Mjg3NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUGlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlQaS5qc29uIjogIntcImtleURhdGFcIjpcImhwL3ZZeXJDUXM3OExkeG9xOFZrT1lIdU5HSkVQTHdZQnA5RG5OcmhOcTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM0NTIyODg3MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1NzI4NzQ4NjY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
