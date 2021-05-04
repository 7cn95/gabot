const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

  /////////////////////////////////
  const TOKEN = process.env.TELEGRAM_TOKEN || '1766261594:AAHM3rTWk7cclDE-k0LOdJ8KhC1Qy2CUwVI';
  const TelegramBot = require('node-telegram-bot-api');
  //const request = require("request");
  //const os = require("os");
  const grtest = "-467915990";
  const git = "-1001377351458";
  const grit = "-1001293310963";
  const apiw ="https://api.openweathermap.org/data/2.5/weather?q=basra&appid=b09e577d404588c53ec044641b104683";
  const meetjson = require("./meet.json");
  const options = {
    webHook: {
      // Port to which you should bind is assigned to $PORT variable
      // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
      port: process.env.PORT
      // you do NOT need to set up certificates since Heroku provides
      // the SSL certs already (https://<app-name>.herokuapp.com)
      // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
    }
  };
  // Heroku routes from port :443 to $PORT
  // Add URL of your app to env variable or enable Dyno Metadata
  // to get this automatically
  // See: https://devcenter.heroku.com/articles/dyno-metadata
  const url = process.env.APP_URL || 'https://i7cnbota.herokuapp.com:443';
  const bot = new TelegramBot(TOKEN, {polling:true});
  
  
  // This informs the Telegram servers of the new webhook.
  // Note: we do not need to pass in the cert, as it already provided
  bot.setWebHook(`${url}/bot${TOKEN}`);
  
  
  // Just to ping!
  bot.on("message", msg => {
    const chatId = msg.chat.id;
    const username = msg.from.username;
    //console.log(msg);
    //console.log(msg.chat.id);
    if (msg.chat.username && msg.from.username != "i7cni") {
      console.log("////////////////////////////");
      console.log("msg: " + msg.text);
      console.log(
        username + " " + msg.from.first_name + " " + msg.from.last_name
      );
      console.log("\n");
      bot.sendMessage(grtest, `${msg.text}\n @${msg.from.username}`);
    }
    switch (msg.text) {
      case "رابط نظم معلومات":
      case "رابط نظم":
      case "رابط علياء":
        bot.sendMessage(chatId, meetjson.meet[0]);
        break;
      case "رابط هياكل":
      case "رابط هياكل عملاقة":
        bot.sendMessage(chatId, meetjson.meet[1]);
        break;
      case "رابط تكنولوجيا":
      case "رابط اسعد":
      case "رابط تكنو":
        bot.sendMessage(chatId, meetjson.meet[2]);
        break;
      case "رابط رياضه":
      case "رابط لياقه":
        bot.sendMessage(chatId, meetjson.meet[3]);
        break;
      case "رابط تطبيقات":
      case "رابط دنيا":
        bot.sendMessage(chatId, meetjson.meet[4]);
        break;
      case "رابط برمجه":
      case "رابط البرمجه":
      case "رابط برمجة":
      case "رابط البرمجة":
        bot.sendMessage(chatId, meetjson.meet[5]);
        break;
    }
    switch (msg.text) {
      case "بوت غادر":
        // bot.sendMessage(chatId,"");
        if (username == "i7cni") {
          bot.sendMessage(chatId, "اوك يلا باي ");
          bot.leaveChat(chatId, { polling: true });
        }
        break;
    }
  });
  ////////////////
  bot.onText(/\/movie (.+)/, (msg, match) => {
    var movie = match[1];
    var chatId = msg.chat.id;
    request(
      `http://www.omdbapi.com/?apikey=1291361&t=${movie}`,
      (error, response, body) => {
        console.log("working");
        if (!error && response.statusCode == 200) {
          bot
            .sendMessage(chatId, "_Looking for _" + movie + "...", {
              parse_mode: "Markdown"
            })
            .then(msg => {
              var res = JSON.parse(body);
              bot.sendPhoto(chatId, res.Poster, {
                caption: "Title: " + res.Title + "\nYear: " + res.Year
              });
            });
        }
      }
    );
  });
  bot.onText(/\/weather (.+)/, (msg, match) => {
    var weather = "basra";
    var chatId = msg.chat.id;
    request(
      `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=b09e577d404588c53ec044641b104683`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          bot
            .sendMessage(chatId, "الطقس حاليا بالبصرة", {
              parse_mode: "Markdown"
            })
            .then(msg => {
              var res = JSON.parse(body);
              var kel = res.main.temp;
              var wtype = res.weather[0].main;
              var temp = parseFloat(kel) - 273.15;
              switch (wtype) {
                case "Clear":
                  wtype = " صافي مشمس ☀️";
                  break;
                case "Rain":
                  wtype = " ممطر 🌧🌦";
                  break;
                case "Clouds":
                  wtype = " غائم ⛅️🌤";
                  break;
                case "Dust":
                  wtype = " غبار 🌫️🌬️";
                  break;
              }
  
              bot.sendMessage(chatId, temp + "°C \n" + wtype);
              console.log(os.t);
            });
        } else {
          console.log(error);
        }
      }
    );
  });
  bot.onText(/\/اعلان (.+)/, (msg, match) => {
    var chatId = msg.chat.id;
    var echo = match[1];
    //var echo2=match[2];
    if (msg.chat.username == "i7cni") {
      console.log("done");
      bot.sendMessage(grit, `${echo} .`);
    }
    //bot.sendMessage(chatId,echo);
  });
  setInterval(() => {
    ///////////////////////////
    let date_ob = new Date();
    //تستدعاء التاريخ
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    //console.log(year + "-" + month + "-" + date);
    //استدعاء الوقت
    let hours = date_ob.getHours() + 3;
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    //معرفة احنه باي يوم
    const dayValue = new Date(`${month} ${date}, ${year}`);
    const day1 = dayValue.getDay(); //الاحد =0 الى السبت = 6
    ///////////////////////////////////////////////
    //تمب لارسال روابط الميت يوم بيوم
    //السبت
    if (day1 == 5 && hours == 14 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة اللياقة البدنية \n](${
          meetjson.meet[3]
        })`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    if (day1 == 5 && hours == 16 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة البرمجة  \n](${meetjson.meet[6]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    if (day1 == 5 && hours == 18 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة اساسيات نظم المعلومات  \n](${meetjson.meet[0]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    ////////الاحد
    //////ثنين
    if (day1 == 1 && hours == 14 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة تكنولوجيا  \n](${meetjson.meet[2]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    if (day1 == 1 && hours == 16 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة تطبيقات  \n](${meetjson.meet[4]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    //////ثلاثاء
    /////اربعاء
    if (day1 == 3 && hours == 14 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة هياكل متقطعة محاضرة الاستاذة الراقية حوراء  \n](${meetjson.meet[1]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }if (day1 == 3 && hours == 16 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة اساسيات نظم المعلومات  \n](${meetjson.meet[0]})`,
        {
          parse_mode: "Markdown"
        }
      );
   
    }if (day1 == 3 && hours == 18 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة هياكل متقطعة محاضرة الاستاذة الراقية حوراء  \n](${meetjson.meet[1]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }if (day1 == 3 && hours == 19 && minutes == 20 && seconds == 2) {
      console.log(hours + ":" + minutes + ":" + seconds);
      bot.sendMessage(
        grit,
        `[انتبااااه تحضرو رح تبدي محاضرة البرمجة  \n](${meetjson.meet[5]})`,
        {
          parse_mode: "Markdown"
        }
      );
    }
    /////////////خميس

    //////////////////////////////////////////////
    if (hours == 7 && minutes == 25 && seconds == 1) {
      request(apiw, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          var res = JSON.parse(body);
          var kel = res.main.temp;
          var wtype = res.weather[0].main;
          var temp = parseFloat(kel) - 273.15;
          switch (wtype) {
            case "Clear":
              wtype = " صافي  ☀️";
              break;
            case "Rain":
              wtype = " ممطر 🌧🌦";
              break;
            case "Clouds":
              wtype = " غائم ⛅️🌤";
              break;
            case "Dust":
              wtype = " غبار 🌫️🌬️";
              break;
          }
          bot.sendMessage(
            grit,
            `صباح الخير على الجميع  🌹 💜\n ❁اتمنى لكم يوم ممتع❁ \n   ❀❀❀❀❀❀ \n ♡اليوم درجة الحرارة ${temp} °C والجو ${wtype} \n  ✵✵✵✵✵✵ \n استمتعو باوقاتكم ꨄ`
          );
        }
      });
    }
  
    ///////////////////////////////////
  }, 1000);
  //