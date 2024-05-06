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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_31_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MyxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5ZE9lUHgrM2pWRE50dmw4cnA4dHhJTUVaT3RpdmdPMVJNOGhYd2RaaTdJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNTIyMDQzMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNUFDQzlDQTlEMzgwMTExRUZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTAwNTg4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKaWpWUjlnYlFfR3I4M21maUJ6SjRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiMzdmNWZlLTk2OTYtNDViMS1iNmMyLWM1OWQ1YzhhMmY5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDYxLFxuICAgICAgMTUwLFxuICAgICAgNDIsXG4gICAgICA3MyxcbiAgICAgIDg0LFxuICAgICAgMTQ0LFxuICAgICAgNTksXG4gICAgICAzOCxcbiAgICAgIDEyOSxcbiAgICAgIDE0NCxcbiAgICAgIDE0MyxcbiAgICAgIDk3LFxuICAgICAgMTM1LFxuICAgICAgMzEsXG4gICAgICAyNTMsXG4gICAgICAzNCxcbiAgICAgIDIwMyxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDEwOSxcbiAgICAgIDExMCxcbiAgICAgIDE4MSxcbiAgICAgIDI0NCxcbiAgICAgIDgzLFxuICAgICAgOTgsXG4gICAgICAxMSxcbiAgICAgIDIwMixcbiAgICAgIDI0MyxcbiAgICAgIDI3LFxuICAgICAgNTcsXG4gICAgICA2NyxcbiAgICAgIDE0OCxcbiAgICAgIDEwMyxcbiAgICAgIDkyLFxuICAgICAgMTgxLFxuICAgICAgMjE0LFxuICAgICAgODgsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2bDhZb0tFTFRUNDdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDQyek1BVFlWYmM2TktoQ2J1K0JybFF5anZZZ0UrUHRseGE4aXJUMklFaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6aC9TSkVwT1hmUkZ2SU5yWXdxR01YWjdDdUFZcWdpaGh2S3UyQUttMEpCYy9ZdTl6N2ZGbElHTllsQW5UYVBZZld5Qjc1WHhTQ2pBYldZWG80MzlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRFNoTnJ0RERqQUROK3hkR2FkMDJsNm9SdFc4Ujl6ZS90clRqbERiR0RWQWsvTFNnNHJXeE5ibjg2N0pHVURlU1ovQStvVFd3dEZHM3g0L1N0Q01nUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTIyMDQzMzI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzc2MDYxNDk5NjM5MTM6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCbGFja29vXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUyMjA0MzMyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTUwMDU4NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQTGFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBMYS5qc29uIjogIntcImtleURhdGFcIjpcIlJaTkhVR01mT1RYZUdUUmhZa3BEYTFrMUJYbnRqSEx6VVAzcmJMc2FGcjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcwNzE5MDQxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE1MDA1ODc5ODk4XCJ9Igp9"  // PUT your SESSION_ID 


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
