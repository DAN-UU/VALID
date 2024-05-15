const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="reubendamilola88@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "SUHAIL_21_19_05_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICA0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZpR0VjMEJTVGJpdENycWg0RkhIWjU2MkpjcGM4TWFHNWN4TFBVdU5DeW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzMzI3MTkzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjkyQTVDNjI4N0E4Q0QwNUY3NDgwM0VBQjRBMEQ1RTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1ODA3OTYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkE2TXoyZGdGU0xtZTJYdTVyZm9kZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTcwOTMwMTItNWExMS00NzQ2LWE2YjUtNGVkMmVkMzA1Nzg4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDIwMyxcbiAgICAgIDIzLFxuICAgICAgMjM5LFxuICAgICAgMjIwLFxuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMTc0LFxuICAgICAgMTIsXG4gICAgICAxODgsXG4gICAgICAyMTQsXG4gICAgICA5OSxcbiAgICAgIDE3NyxcbiAgICAgIDYsXG4gICAgICAyMDUsXG4gICAgICA4MyxcbiAgICAgIDc3LFxuICAgICAgMzcsXG4gICAgICAxMTksXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAxNjAsXG4gICAgICAxMjMsXG4gICAgICA1MCxcbiAgICAgIDcwLFxuICAgICAgMjEwLFxuICAgICAgMjU1LFxuICAgICAgMTA0LFxuICAgICAgNyxcbiAgICAgIDIxOSxcbiAgICAgIDk1LFxuICAgICAgMTMsXG4gICAgICAyNDgsXG4gICAgICAyNyxcbiAgICAgIDE5OCxcbiAgICAgIDgyLFxuICAgICAgMjMyLFxuICAgICAgMzUsXG4gICAgICAxNDAsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFZENzYzRU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzMyNzE5MzU6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTM5Mjc1MjEyMDAyODoxNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOelZxUDRIRU03TmxMSUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJrd1BqTEdlY3BJWmplM2hIOGdLekdGMUxIYUlIb2EvcnBFS0FHbis2bEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGxwWWxoRnZUTFZIUnIwNWJXSXhnc1BhVmRxYTU3a3VJVDZRN1hvWnE5MFpTczNHU2dPckRMWWUySy9zbnZTTHg4L3Via0V4ZTJkalVWSUxMYnRxQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYUdwcFo1SmF5bUxIVzBScndDUk9qb1VGSndLaStHOVR3M2tjYzBoa1VqV003SzZMRy83VTc4czVMb2RUR3FpaDl2dXR3TjExN2ZIVmhZWDE2VjMxaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMzI3MTkzNToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTgwNzk1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURpUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGlRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZW9xcXVsTCtJZXgvcm5mYlZucTdXN2RhcWREYlUxVkJTN1B1dWZQbnEwdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTQzOTU1Njc2LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTc4ODMzODk2MVwifSIKfQ=="
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria,Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349033271935" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349033271935";




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


global.SESSION_ID = process.env.SESSION_ID ||  "2349033271935"  // PUT your SESSION_ID 


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
