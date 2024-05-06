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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+263 77 148 4051]/g, 'SUHAIL_07_31_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA4LFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM4LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdCMzg1U3phMDJUbGlvVW1KNU13ay9mSWZCY3phWlRlc3NXRjZTL1FYd0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzcxNDg0MDUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NjVDRTE4MTY5N0MyNkQ5OTAyQTNCNUNENEY5MDI5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5ODA2OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3NzE0ODQwNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE3QjgyRDY4RDUyMzYwRkMzMDQ5QkQ0QzI0OTBFMjU1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDk4MDY5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4d2w0UWFDMVF1U09jcEZ6WDlDYjNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY2MWEzOTMxLTNkYmItNDMyOC1iOGE2LTVmNDQ3YTEwMDIyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxOCxcbiAgICAgIDMsXG4gICAgICAyNTQsXG4gICAgICAxMjMsXG4gICAgICAyMDIsXG4gICAgICAxOTgsXG4gICAgICAyMjUsXG4gICAgICAxODIsXG4gICAgICA5MSxcbiAgICAgIDE4LFxuICAgICAgMTk3LFxuICAgICAgMTY5LFxuICAgICAgNzQsXG4gICAgICAxOTIsXG4gICAgICAyMDAsXG4gICAgICAxNzgsXG4gICAgICA1MyxcbiAgICAgIDUxLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTkxLFxuICAgICAgMjAsXG4gICAgICA0NCxcbiAgICAgIDEzMSxcbiAgICAgIDI3LFxuICAgICAgMTg5LFxuICAgICAgMTg0LFxuICAgICAgMjExLFxuICAgICAgMTI4LFxuICAgICAgMjU1LFxuICAgICAgMTc5LFxuICAgICAgMTYzLFxuICAgICAgMTIwLFxuICAgICAgMTY1LFxuICAgICAgMTE5LFxuICAgICAgMjE0LFxuICAgICAgMjA2LFxuICAgICAgODQsXG4gICAgICA2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZR1JDV0pTUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzcxNDg0MDUxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2Nzc2NjE4NzM0MDAzMDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1PSEFNTUVEIFNBTEFI4pq94pq94pq94pq9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZaenJRQkVOS080ckVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5c0Z6MWRSQUhnK1FXK3N4emlXSUpiQk9SOEgrMkhsTHlBV1ZZa1FKVVhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklHTUowWTh5REpJYTZERDBLZ3VYc0hDQjZqWEZUaFZkT3Y0M2NnRXRycWpSMjQxV0VQUDZ1V2hxeUR6NEJPYjdDcWRQcGhEMmpMcmhFNXRPSjJhZEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBlOTBGbG5uSXNZd0h2UmhIOEZoaE1qcjdVV0NuZlJhWm9acnN5MmRpY3Z5Y3dkYm1LRWU1YjhVZjkwVWRYY1pZTUVDNEtscEtXZXJvL1I4YktuNmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3MTQ4NDA1MToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDk4MDY5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDZJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTzFVUGVmTHpqN0p4ZDR1T2w5WTBVYzg0cisrNjF5VXowQVlxVHV6Uytudz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzg3Njg1NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDk4MDY5NTI1OFwifSIKfQ==') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


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
