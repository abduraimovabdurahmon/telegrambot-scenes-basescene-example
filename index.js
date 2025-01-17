// Dotenv ni ishga tushirish
require('dotenv').config();
// Telegraf kutubxonasini import qilish
const {Telegraf} = require('telegraf');
// LocalSession kutubxonasini import qilish. Bu kutubxona userlarning har bir qadamini saqlash uchun ishlatiladi
const LocalSession = require('telegraf-session-local')

// stage ni import qilish
const stage = require("./stage");


// Botni yaratish
const bot = new Telegraf(process.env.BOT_TOKEN);


// LocalSessionni ishlatish uchun database yaratish yoki mavjud bo'lsa uni chaqirish
const localSession = new LocalSession({
    database: 'form.json',
});

// LocalSessionni middleware sifatida ishlatish
bot.use(localSession.middleware());


// stageni ishlatish
bot.use(stage.middleware({}));


// botga user start bosganida
bot.start((ctx)=>{
    ctx.reply("Assalomu alaykum! Botimizga xush kelibsiz");
    ctx.scene.enter("fish");
});


// Botni ishga tushirish
bot.launch();