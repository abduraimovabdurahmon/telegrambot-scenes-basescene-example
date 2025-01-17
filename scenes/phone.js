// BaseSceneni import qilish
const {Scenes: {BaseScene}} = require("telegraf");

// scene yaratish va nomlash
const phone = new BaseScene("phone");

// Phone scenega kirilganda ishlaydigan funksiya
phone.enter((ctx)=>{
    try {
        // userga birinchi xabarni yuborish
        ctx.reply("Iltimos pastdagi tugma orqali telefon raqamingizni yuboring", {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: "Telefon raqamni yuborish",
                            request_contact: true
                        }
                    ]
                ]
            }
        });
    } catch (error) {
        console.log(error);
    }
});

// Agar user contact yuborganida ishlaydigan funksiya
phone.on("contact", (ctx)=>{
    try {
        // contextdan phone numberni ajratib olish
        const phone = ctx.message?.contact?.phone_number;

        // phone ni sessionga saqlash
        ctx.session.phone = phone;

        // Keyingi scene'ga o'tish
        ctx.scene.enter("");

    } catch (error) {
        console.log(error);
    }
});


// Agar user boshqa narsa yuborsa
phone.use(ctx=>{
    try {
        ctx.reply("Iltimos telefon raqamingizni pastdagi tugma orqali yuboring.");
    } catch (error) {
        console.log(error);
    }
});


// scene ni export qilish
module.exports = phone;