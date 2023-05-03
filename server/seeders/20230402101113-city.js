"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("cities", [
      {
        id: 1,
        country: "Germany",
        name: "Berlin",
        weather: "Unknown",
        image:
          "https://sportishka.com/uploads/posts/2022-04/1650714007_66-sportishka-com-p-berlin-krasivo-foto-70.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        country: "Germany",
        name: "Hamburg",
        weather: "Unknown",
        image:
          "https://sportishka.com/uploads/posts/2022-04/1650611081_25-sportishka-com-p-gamburg-dostoprimechatelnosti-krasivo-foto-26.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        country: "Belarus",
        name: "Minsk",
        weather: "Unknown",
        image: "https://photoclub.by/images/main81/812183_main.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Grodno",
        country: "Belarus",
        weather: "Unknown",
        image:
          "https://sportishka.com/uploads/posts/2022-04/1650476989_8-sportishka-com-p-grodno-dostoprimechatelnosti-krasivo-foto-9.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        country: "Armenia",
        name: "Yerevan",
        weather: "Unknown",
        image: "http://www.lagunaspb.ru/assets/galleries/293/2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Gyumri",
        country: "Armenia",
        weather: "Unknown",
        image:
          "https://sun9-6.userapi.com/impg/fUqPeckfxo0tDfTgjAMkFH8YIjlo6Rh2zbYlFg/b529nnCd6Sw.jpg?size=960x590&quality=95&sign=65df9285ba0b911175531a8870716948&c_uniq_tag=co1AB-0WXRucKvIMEydpCSCOiGrfRdH2rPA2rlQMfjM&type=album",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("cities", null, {});
  },
};