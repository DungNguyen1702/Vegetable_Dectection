'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dishes",
      [
         //1-3 Apple
          {
            name: "Salad Táo với Hạt Giống Bí Ngô và Dầu Giấm Táo",
            ingredients: 
            `
              - Táo cắt lát
              - Hạt giống bí ngô
              - Rau sống (lá xà lách, rau củ khác)
              - Dầu giấm táo
            `,
            nutrition: 
            `
              - Cung cấp vitamin C, chất xơ, khoáng chất từ rau củ
              - Dầu giấm táo giàu axit acetic có thể hỗ trợ quá trình tiêu hóa
            `,
            fruit_id: 1
          },
          {
            name: "Bánh Táo Nướng với Mật Ong và Quế",
            ingredients: 
            `
              - Táo cắt lát
              - Bánh táo
              - Mật ong
              - Bột quế
            `,
            nutrition: 
            `
              - Táo cung cấp vitamin C và chất xơ
              - Mật ong chứa nhiều khoáng chất và có tác dụng chống vi khuẩn
            `,
            fruit_id: 1
          },
          {
            name: "Nước Ép Táo với Gừng",
            ingredients: 
            `
              - Táo cắt lát
              - Gừng tươi
              - Đường hoặc mật ong (tùy chọn)
            `,
            nutrition: 
            `
              - Nước ép táo là nguồn vitamin và khoáng chất
              - Gừng có tác dụng chống viêm và hỗ trợ tiêu hóa
            `,
            fruit_id: 1
          },
          // 4-6 Banana
          {
            name: "Chuối Hấp Nước Cốt Dừa",
            ingredients: 
            `
              - Chuối chín
              - Nước cốt dừa
            `,
            nutrition: 
            `
              - Cung cấp potassium, vitamin C từ chuối
              - Dầu cốt dừa chứa axit béo lành mạnh
            `,
            fruit_id: 2
          },
          {
            name: "Salad Táo với Hạt Giống Bí Ngô và Dầu Giấm Táo",
            ingredients: 
            `
              - Chuối chín
              - Bột chiên giòn
              - Đường
            `,
            nutrition: 
            `
              - Chuối là nguồn kali và vitamin B6
              - Bột chiên giòn cung cấp năng lượng
            `,
            fruit_id: 2
          },
          {
            name: "Chuối Xào Tôm",
            ingredients: 
            `
              - Chuối chín
              - Tôm tươi
              - Rau sống (lá xà lách, cà rốt)
            `,
            nutrition: 
            `
              - Tôm là nguồn protein và khoáng chất
              - Chuối cung cấp vitamin và khoáng chất
            `,
            fruit_id: 2
          },
          //7-9 Bean
          {
            name: "Mì Xào Rau Củ với Đậu Hủ Non",
            ingredients: 
            `
              - Mì
              - Đậu hủ non
              - Rau củ (cà rốt, bắp cải, ớt...)
            `,
            nutrition: 
            `
              - Protein từ đậu hủ non
              - Vitamin và khoáng chất từ rau củ
            `,
            fruit_id: 3
          },
          {
            name: "Salad Đậu Mè (Đậu Ngũ Vị)",
            ingredients: 
            `
              - Đậu mè (đậu ngũ vị)
              - Mè trắng
              - Rau sống (lá xà lách, cà rốt)
            `,
            nutrition: 
            `
              - Đậu mè chứa nhiều protein và khoáng chất
              - Mè trắng cung cấp chất béo lành mạnh
            `,
            fruit_id: 3
          },
          {
            name: "Canh Đậu Hủ Non Nấu Nước Dừa",
            ingredients: 
            `
              - Đậu hủ non
              - Nước dừa
              - Cà rốt, nấm, hành tây
            `,
            nutrition: 
            `
              - Đậu hủ non cung cấp protein và canxi
              - Nước dừa chứa acid béo lành mạnh
            `,
            fruit_id: 3
          },
          // 10-12 Bitter Gourd
          {
            name: "Canh Mướp Đắng với Tôm",
            ingredients: 
            `
              - Mướp đắng
              - Tôm
              - Cà chua, hành, tỏi
            `,
            nutrition: 
            `
              - Mướp đắng chứa nhiều vitamin và khoáng chất
              - Tôm là nguồn protein tốt và các chất khoáng
            `,
            fruit_id: 4
          },
          {
            name: "Mướp Đắng Xào Thịt Gà",
            ingredients: 
            `
              - Mướp đắng
              - Thịt gà
              - Ớt, hành, tỏi
            `,
            nutrition: 
            `
              - Mướp đắng giúp kiểm soát đường huyết và tăng cường hệ tiêu hóa
              - Thịt gà là nguồn protein thấp chất béo
            `,
            fruit_id: 4
          },
          {
            name: "Mướp Đắng Nướng với Tỏi và Ớt",
            ingredients: 
            `
              - Mướp đắng
              - Tỏi, ớt
              - Dầu olive
            `,
            nutrition: 
            `
              - Mướp đắng có tính chất chống oxi hóa
              - Tỏi và ớt giúp cải thiện hệ miễn dịch
            `,
            fruit_id: 4
          },
          // 13-15 Bottle Gourd
          {
            name: "Canh Bầu Nấu Tôm",
            ingredients: 
            `
              -Bầu cắt lát
              -Tôm tươi
              -Rau mùi, hành tây
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Bầu là nguồn khoáng chất và chất xơ tốt cho đường huyết
              -Tôm cung cấp protein, vitamin B12, và khoáng chất như sắt
            `,
            fruit_id: 5
          },
          {
            name: "Bầu Xào Tỏi",
            ingredients: 
            `
              -Bầu cắt sợi
              -Tỏi băm
              -Dầu ăn
              -Gia vị: Muối, tiêu
            `,
            nutrition: 
            `
              -Bầu có thể hỗ trợ giảm cân và cung cấp nước
              -Tỏi có tác dụng kháng khuẩn và giảm cholesterol
            `,
            fruit_id: 5
          },
          {
            name: "Xôi Bầu",
            ingredients: 
            `
              -Bầu xanh nấu chín
              -Gạo nếp
              -Dầu dừa
              -Đậu xanh luộc
            `,
            nutrition: 
            `
              -Bầu chứa nước nhiều và giúp cung cấp khoáng chất
              -Gạo nếp là nguồn tốt của carbohydrate và năng lượng
            `,
            fruit_id: 5
          },
          // 16-18 Brinjal(CaTim)
          {
            name: "Cà Tím Xào Thịt Bò",
            ingredients: 
            `
              -Cà tím cắt dài
              -Thịt bò xào
              -Ớt, tỏi, tiêu
              -Gia vị: Nước tương, dầu ăn
            `,
            nutrition: 
            `
              -Cà tím chứa nhiều chất chống ô nhiễm và vitamin C
              -Thịt bò cung cấp protein, sắt, zinc
            `,
            fruit_id: 6
          },
          {
            name: "Cà tím cắt lát",
            ingredients: 
            `
              -Mỡ hành
              -Gia vị: Muối, tiêu
            `,
            nutrition: 
            `
              -Cà tím giàu chất chống ô nhiễm và vitamin A
              -Mỡ hành có thể giúp tăng hương vị và chất dinh dưỡng
            `,
            fruit_id: 6
          },
          {
            name: "Cà Tím Xào Tỏi Giòn",
            ingredients: 
            `
              -Cà tím cắt vuông
              -Tỏi phi thơm
              -Dầu ăn
              -Gia vị: Muối, tiêu
            `,
            nutrition: 
            `
              -Cà tím chứa chất chống ô nhiễm và vitamin C
              -Tỏi có tác dụng chống vi khuẩn và hỗ trợ hệ tiêu hóa
            `,
            fruit_id: 6
          },
          // 19-21 Broccoli

         
          
      ],
      { batchSize: 120 }
  );
},

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Dishes", null, { batchSize: 120 });
},
};
