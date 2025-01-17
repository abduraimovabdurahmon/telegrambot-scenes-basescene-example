// BaseSceneni import qilish
const {Scenes: {BaseScene}} = require("telegraf");

// scene yaratish va nomlash
const fish = new BaseScene("fish");

// scene ichiga kirganda ishlaydigan funksiya
fish.enter(async (ctx)=>{
    try {
        ctx.reply("Iltimos F.I.SH ni kiriting");
    } catch (error) {
        console.log(error);
    }
});

// user matn yuborganida.
fish.on("text", (ctx)=>{
    try {
        // textni o'zgaruvchiga saqlab olish.
        const text = ctx.message.text;

        // textni ichida 3 ta so'z borligini tekshirish.
        if(text.split(" ").length < 3){
            return ctx.reply("Iltimos ismingiz familiyangiz va sharifingizni ajratib yozing.")
        }

        // sessiaga fishni saqlash
        ctx.session.fish = text;

        // keyingi scenege o'tish
        ctx.scene.enter("phone");

    } catch (error) {
        console.log(error)
    }
});

// Agar user matndan boshqa narsa yuborsa
fish.use((ctx)=>{
    try {
        ctx.reply("Iltimos ism familiya va sharifingizni matn ko'rinishida yuboring!");
    } catch (error) {
        console.log(error);     
    }
});



module.exports = fish;