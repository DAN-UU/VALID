const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="victoryifuma@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ VIDALI²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349168099629";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_55_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSWVMZVZkcWVZdnRQa1YxYno4VDdOajlMVFIyaUZ4cE4zZ3Z5cnVrUDhCND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3loTHFyZ2hROWVtMjBJTzhpOElnUVwiLFxuICBcInBob25lSWRcIjogXCI3YWEwODNiMS0zMzdjLTQyOTEtYjU4Yi05YTEzYzViNjAwZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMTczLFxuICAgICAgMzUsXG4gICAgICAyMDcsXG4gICAgICAxNTksXG4gICAgICAxMDQsXG4gICAgICAwLFxuICAgICAgNSxcbiAgICAgIDIwLFxuICAgICAgMTUwLFxuICAgICAgMjQzLFxuICAgICAgMTksXG4gICAgICAyNDEsXG4gICAgICA3NixcbiAgICAgIDk4LFxuICAgICAgMjIwLFxuICAgICAgMTU2LFxuICAgICAgMjI4LFxuICAgICAgMjcsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgODgsXG4gICAgICAyMzMsXG4gICAgICAxNDksXG4gICAgICAyMjUsXG4gICAgICAxMzAsXG4gICAgICAxNTQsXG4gICAgICAxODMsXG4gICAgICA5OCxcbiAgICAgIDE2MyxcbiAgICAgIDc1LFxuICAgICAgMTEsXG4gICAgICA5NyxcbiAgICAgIDExOSxcbiAgICAgIDY3LFxuICAgICAgNjksXG4gICAgICAxMjMsXG4gICAgICAxNTgsXG4gICAgICAxNDAsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0ZFQjdOV1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwOTk2Mjk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWaWMgVmlkYWxpXCIsXG4gICAgXCJsaWRcIjogXCIyNjYwNzcyNTA3MjM4OToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ2w4WVlFRU4yUmhiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlXbGV4NEMzUDRmVW1nSHNRYWR4QlJIcUxLWmNtaThTS0FvN0ZYWmk4SHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT1JVSVVWWURtdkhiR2hzV2UwZ1AyeW4wdmFsalhQVTMrL2p0SjNEZGMzam91eEN3NmFLb0pMdXlzUjlDTGtFenNsazVOdjJud01hU1duanc3elRDQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDRTLytTRUdpeGtnRlZYVHMzZWVvWitzaU5qUmtLWmtjbHZxYUpNTU9FTzMyTGhmcVFtUFhiUnpyMUxvMkJPOGhuVHJ0U2VlS3ZZTmc5WlR4TkVmanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODA5OTYyOToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU1NTQ1MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJUQy5qc29uIjogIntcImtleURhdGFcIjpcImZEa2dlME9QbzE2akNJU1VHQlJmRkNjQzRkYUl0alhUcG0zU21TMXZIU2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA4ODE4MDkwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTA0OTk5MjM5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: vidali-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ vidali²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "VIDALI-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "VIDALI007",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "victory ifuma",
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
