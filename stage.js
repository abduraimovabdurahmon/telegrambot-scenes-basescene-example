// Stageni import qilish
const {Scenes: {Stage}} = require("telegraf");

// Familiya ism va sharif sceneni import qilish
const fish = require("./scenes/fish");
// Telefon raqam sceneni import qilish
const phone = require("./scenes/phone");

// scenelar asosida stage yaratish
const stage = new Stage([
    fish,
    phone
]);

// stageni export qilish
module.exports = stage;