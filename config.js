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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+263 78 539 6010]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+263 78 539 6010]/g, '') : "923184474176";




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
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "+263 78 539 6010"  // SESUHAIL_06_12_05_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyLFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVUp5S2t3VnVwM3RicEZaVW1aRlV6WC9VZko4Mi9IQlZCVTJWVDZ1eUs1az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTjVWSDhmSUtULXVXMXNnczluRFRMd1wiLFxuICBcInBob25lSWRcIjogXCJmZmY2NjYyMS00ZjdhLTQxNGEtODVmNC1hNmNhMDBjYTZiOWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjExLFxuICAgICAgMTk0LFxuICAgICAgMjQ4LFxuICAgICAgMzksXG4gICAgICAxNTYsXG4gICAgICAxNDAsXG4gICAgICA1NSxcbiAgICAgIDEwMyxcbiAgICAgIDQxLFxuICAgICAgNSxcbiAgICAgIDg3LFxuICAgICAgMTM1LFxuICAgICAgMjQ4LFxuICAgICAgMjM4LFxuICAgICAgMTQxLFxuICAgICAgNzUsXG4gICAgICA0MCxcbiAgICAgIDIzLFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICAyNCxcbiAgICAgIDMxLFxuICAgICAgMTQsXG4gICAgICAxNzIsXG4gICAgICA5MyxcbiAgICAgIDEwNixcbiAgICAgIDEyMCxcbiAgICAgIDIwOSxcbiAgICAgIDk4LFxuICAgICAgNjYsXG4gICAgICAxOTksXG4gICAgICAxMTcsXG4gICAgICAxMTMsXG4gICAgICAyMjksXG4gICAgICA0MCxcbiAgICAgIDEwMCxcbiAgICAgIDExMyxcbiAgICAgIDQsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUTJTTTZORlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg1Mzk2MDEwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ0ODUxNzg5MDg4MTM6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiREogREVMQk9ZIEFOSUVZIPCfkr3wn5al77iP8J+Su/Cfk7JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPclcrczhERUxlN2diSUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImtDTzR6Wk5Pdm43RGhtcXh3M2MxUVphc3NHdWQrY3h6QS9RZVl4VFVMQUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3o5WGhvR3BRVVdrZDZTU1dRRHlZTnNEV3dSZDFJVmhaYjZsUFMxVCtRbUJwNnFkc1BobGdlbE80VUNNekVBdTZJdHBXQ1VFWjA4cG1laUUycnRsRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnY2NjB2QllsOXBBcWVWLytWOS9zK09GVWNId2lFV0hJbzc0NzFEN2NFNW5DalZIMTNEVlhOUjBGK0lkcmhza1N1aFNRV1pCR24wZHdBa21kR1NMamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg1Mzk2MDEwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1NDk0MzMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0p3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSncuanNvbiI6IHt9Cn0=SSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DELBOY ANIEY",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "DJ DELBOY ANIEY",


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
