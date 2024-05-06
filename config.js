const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Steph-Allisonmd:Hungerallgames_1@cluster0.tkzaa2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_03_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MixcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OCxcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMdUFzMC9FcFhId2lpUnJqRHFXc2RsaFZEUTMvQXppdUFZckwzcTFNTU9BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTEwODA4MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNzI2NEIzOEJCQzNDNTc4OEQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNTAxMTQxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkS2EtMDRYa1FrR3pIUUhYMERyNUtRXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzMTNhZjQ5LTUxNTQtNGMxMy1iZmQyLTQyY2MwZDNiNGM0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAyNTEsXG4gICAgICAxNzEsXG4gICAgICAxMCxcbiAgICAgIDEzMyxcbiAgICAgIDcwLFxuICAgICAgMTgsXG4gICAgICAxMzEsXG4gICAgICAyMzIsXG4gICAgICAzMyxcbiAgICAgIDI1MCxcbiAgICAgIDE3LFxuICAgICAgMTgzLFxuICAgICAgMTgyLFxuICAgICAgMTAzLFxuICAgICAgMTM2LFxuICAgICAgMjM1LFxuICAgICAgMjA0LFxuICAgICAgMTcyLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMjYsXG4gICAgICAyMjQsXG4gICAgICAyMjcsXG4gICAgICAyMzksXG4gICAgICA2NSxcbiAgICAgIDEwMixcbiAgICAgIDY2LFxuICAgICAgODUsXG4gICAgICAxNTcsXG4gICAgICA0MixcbiAgICAgIDMxLFxuICAgICAgMjI0LFxuICAgICAgMjQ2LFxuICAgICAgMjQyLFxuICAgICAgOTEsXG4gICAgICAyMTAsXG4gICAgICAyMzIsXG4gICAgICA1NyxcbiAgICAgIDE2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMbzg1SU9FTXYrNDdFR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSW42R0xvV0ZHeExxUVpxSlVHTnBpaStwTXZ6bFJwM3F6b2NOSElqb2hSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJubHpwR25YUHowNklIZitoOVphcmJsemlweGVSeUVIS2lvNStKdzJ5VEx1R1Y1SytNNVhMeit1S2cvMW15VmN6U3lPYnpVU3Q5aWNJWFpIQ2xDWHZoUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBTXBmaVF0M0hORmhxUUlPOWhmaEQ1b20zUC9wcGRnZ214VlFLYjF2ajNYZWcyNmRocjBNWTNxZThPV00raGpxZFB2SUk5aFFaakw4SXlkUUl0RXZEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTEwODA4MjQ6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTM5MTQ1MjczMzU1NToxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5GB77iP8J+Rge+4j/Cfq7Xwn4+9XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDUxMDgwODI0OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTAxMTQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9Kc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0pzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNmJzQkV6WU83Nld6UkdHWnVVQTgySTlnLzJZNnZLai85VlRnM1VBSDdWWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzk3NzQyNjQyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUwMTE0MDg4NDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Allisonmd",
  ownername:process.env.OWNER_NAME|| "It'x Steph-Allison",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ALLISON"  ).toUpperCase(),



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
