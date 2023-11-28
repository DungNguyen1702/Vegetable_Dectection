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
            name: "Bánh Chuối Chiên Giòn",
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
            name: "Chuối Xào Dừa",
            ingredients: 
            `
              - Chuối chín
              - Bột năng
              - Nước cốt dừa
            `,
            nutrition: 
            `
              - Cốt dừa chứa axit béo lành mạnh
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
            name: "Mướp Đắng xào trứng",
            ingredients: 
            `
              - Mướp đắng
              - Trứng
              - Dầu olive
            `,
            nutrition: 
            `
              - Mướp đắng có tính chất chống oxi hóa
              - Trứng đem lại lượng protein dồi dàu
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
            name: "Bầu nấu trứng vịt lộn",
            ingredients: 
            `
              -Bầu xanh nấu chín
              -Trứng vịt lộn đã luộc
            `,
            nutrition: 
            `
              -Bầu chứa nước nhiều và giúp cung cấp khoáng chất
              -Trứng vịt lộn đem lại đầy đủ dinh dưỡng 
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
          {
            name: "Súp Lơ Cà Rốt Nấu Gà",
            ingredients: 
            `
              -Súp lơ cắt nhỏ
              -Cà rốt cắt sợi
              -Gà luộc
              -Gia vị: Muối, tiêu, hạt nêm
            `,
            nutrition: 
            `
              -Súp lơ cung cấp nhiều vitamin C, K, chất xơ
              -Gà là nguồn protein chất lượng
            `,
            fruit_id: 7
          },
          {
            name: "Salad Súp Lơ với Dầu Giấm Balsamic",
            ingredients: 
            `
              -Súp lơ cắt nhỏ
              -Rau sống (lá xà lách, rút xanh)
              -Dầu giấm balsamic
              -Hạt giống hướng dương
            `,
            nutrition: 
            `
              -Súp lơ là nguồn chất xơ và vitamin C
              -Dầu giấm balsamic có tác dụng chống oxy hóa
            `,
            fruit_id: 7
          },
          {
            name: "Xào Súp Lơ với thịt bò",
            ingredients: 
            `
              -Súp lơ cắt nhỏ
              -Thịt bò nạm
            `,
            nutrition: 
            `
              -Súp lơ là nguồn chất xơ và vitamin C
              -Thịt bò bổ sung chất đạm, protein
            `,
            fruit_id: 7
          },
          // 22-24 Cabbage
          {
            name: "Bắp Cải Luộc với Nước Mắm Trứng Pha và Ớt",
            ingredients: 
            `
              -Bắp cải luộc mềm
              -Nước mắm pha và ớt
              -Trứng luộc
            `,
            nutrition: 
            `
              -Bắp cải là nguồn chất xơ và vitamin K
              -Nước mắm pha và ớt là gia vị tạo hương vị đặc trưng
              -Trứng đem lại nguồn protein dồi dàu
            `,
            fruit_id: 8
          },
          {
            name: "Bắp Cải Xào Thịt Bò",
            ingredients: 
            `
              -Bắp cải xanh cắt sợi
              -Thịt bò xào
              -Ớt, tỏi, tiêu
              -Gia vị: Nước tương, dầu ăn
            `,
            nutrition: 
            `
              -Bắp cải chứa nhiều chất chống ô nhiễm và vitamin C
              -Thịt bò cung cấp protein, sắt, zinc
            `,
            fruit_id: 8
          },
          {
            name: "Gỏi Bắp Cải Xanh với Gia Vị Đặc Biệt",
            ingredients: 
            `
              -Bắp cải xanh cắt sợi
              -Rau sống (cà rốt, rau sống khác)
              -Gia vị: Muối, tiêu, dầu giấm
            `,
            nutrition: 
            `
              -Bắp cải xanh cung cấp nhiều vitamin và chất xơ
              -Dầu giấm có thể hỗ trợ quá trình tiêu hóa và tăng hương vị
            `,
            fruit_id: 8
          },
          //25-27 Caspicum
          {
            name: "Salad Ớt Chuông với Feta và Dầu Ôliu",
            ingredients: 
            `
              -Ớt chuông đỏ và vàng cắt sợi
              -Phô mai Feta
              -Cà chua cắt lát
              -Dầu ôliu
            `,
            nutrition: 
            `
              -Ớt chuông giàu vitamin C và A
              -Feta cung cấp canxi và protein
            `,
            fruit_id: 9
          },
          {
            name: "Ớt Chuông Nhồi Thịt Heo và Rau Củ",
            ingredients: 
            `
              -Ớt chuông màu đỏ
              -Thịt heo băm nhuyễn
              -Rau củ như cà rốt, cần tây
              -Gia vị: Tiêu, hành tỏi
            `,
            nutrition: 
            `
              -Ớt chuông chứa nhiều chất chống ô nhiễm và vitamin C
              -Thịt heo cung cấp protein và các khoáng chất
            `,
            fruit_id: 9
          },
          {
            name: "Ớt Chuông Xào Bò và dứa",
            ingredients: 
            `
              -Ớt chuông màu xanh đỏ
              -Thịt bò nạm
            `,
            nutrition: 
            `
              -Ớt chuông là nguồn chất xơ và vitamin A
              -Thịt bò cung cấp protein
              -Dứa đem lại vitamin B6, C
            `,
            fruit_id: 9
          },
          //28-30 Carrot
          {
            name: "Cà Rốt Xào Trứng",
            ingredients: 
            `
              -Cà rốt cắt sợi
              -Tỏi xào thơm
              -Trứng xào
            `,
            nutrition: 
            `
              -Cà rốt chứa nhiều beta-carotene, giúp duy trì tình trạng sức khỏe của mắt
              -Tỏi có tác dụng chống vi khuẩn và giảm cholesterol
              -Trứng đem lại nguồn protein dồi dàu
            `,
            fruit_id: 10
          },
          {
            name: "Salad Cà Rốt với Hạt Giống Lanh và Dầu Mè",
            ingredients: 
            `
              -Cà rốt gọt sợi
              -Hạt giống lanh
              -Rau sống như rau xanh, cà chua
              -Dầu mè
            `,
            nutrition: 
            `
              -Cà rốt là nguồn vitamin A và chất xơ
              -Hạt giống lanh cung cấp axit béo omega-3 và chất xơ
            `,
            fruit_id: 10
          },
          {
            name: "Xôi Bắp Cải và Cà Rốt",
            ingredients: 
            `
              -Cà rốt và bắp cải xanh nấu chín
              -Gạo nếp
              -Dầu dừa
              -Gia vị: Muối, tiêu
            `,
            nutrition: 
            `
              -Cà rốt và bắp cải cung cấp nhiều vitamin và chất xơ
              -Gạo nếp là nguồn tốt của carbohydrate và năng lượng
            `,
            fruit_id: 10
          },
          //31-33 Cauliflower
          {
            name: "Bông Cải Xào Tỏi và Ớt Hiểm",
            ingredients: 
            `
              -Bông cải tách thành những bông nhỏ
              -Tỏi xào thơm
              -Ớt hiểm cắt lát
              -Gia vị: Muối, tiêu, dầu ăn
            `,
            nutrition: 
            `
              -Bông cải là nguồn vitamin C và chất xơ
              -Tỏi có tác dụng chống vi khuẩn và giảm cholesterol
            `,
            fruit_id: 11
          },
          {
            name: "Bông Cải Nước Canh Dầu Hào",
            ingredients: 
            `
              -Bông cải cắt bông nhỏ
              -Gia vị: Dầu hào, tiêu, nước mắm
              -Hành lá và rau mùi
            `,
            nutrition: 
            `
              -Bông cải cung cấp nhiều vitamin và khoáng chất
              -Dầu hào tăng hương vị và cung cấp chất béo lành mạnh
            `,
            fruit_id: 11
          },
          {
            name: "Cơm Chiên Bông Cải và Hành Tây",
            ingredients: 
            `
              -Bông cải cắt nhỏ
              -Cơm nấu chín
              -Hành tây xào
              -Gia vị: Muối, tiêu, dầu ăn
            `,
            nutrition: 
            `
              -Bông cải cung cấp nhiều chất xơ và vitamin
              -Hành tây là nguồn vitamin C và chất chống ô nhiễm
            `,
            fruit_id: 11
          },
          //34-36 Chilli
          {
            name: "Mực Xào Ớt Cay",
            ingredients: 
            `
              -Mực tươi
              -Ớt đỏ cay
              -Hành tây, tỏi
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Ớt cay chứa capsaicin có tác dụng kích thích tiêu hóa
              -Mực là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 12
          },
          {
            name: "Súp Ớt Cà Chua với Hành Tây và Đậu Hủ",
            ingredients: 
            `
              -Ớt xanh và đỏ cắt sợi
              -Cà chua đỏ cắt lát
              -Hành tây xào
              -Đậu hủ cắt sợi
            `,
            nutrition: 
            `
              -Ớt cung cấp vitamin C và có tác dụng kích thích tiêu hóa
              -Đậu hủ là nguồn protein thực vật và chất xơ
            `,
            fruit_id: 12
          },
          {
            name: "Gỏi Gà và Rau sống với Sốt Ớt Cay",
            ingredients: 
            `
              -Gà luộc, cắt sợi
              -Rau sống như dưa leo, cà rốt
              -Sốt ớt cay
              -Gia vị: Muối, tiêu, dầu giấm
            `,
            nutrition: 
            `
              -Ớt cay có thể tăng cường sự kích thích và chống vi khuẩn
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 12
          },
          //37-39 Coconut
          {
            name: "Nước Dừa Mát Lạnh",
            ingredients: 
            `
              -Nước dừa tươi
              -Đá viên
              -Dầu ăn
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Nước dừa là nguồn nước tự nhiên giàu khoáng chất
              -Có thể cung cấp năng lượng và điện giải
            `,
            fruit_id: 13
          },
          {
            name: "Bánh Đúc lá dứa Nước Cốt Dừa",
            ingredients: 
            `
              -Dừa nước bào nhuyễn
              -Bột nở
              -Đường
              -Bánh đúc lá dứa
            `,
            nutrition: 
            `
              -Dừa nước chứa axit lauric có tác dụng kháng khuẩn
              -Bánh đúc cung cấp năng lượng từ carbohydrate
            `,
            fruit_id: 13
          },
          {
            name: "Mứt dứa",
            ingredients: 
            `
              -Cơm dừa
              -Vani
              -Sữa tươi không đường
            `,
            nutrition: 
            `
              -Nước dừa có thể thay thế nước lươn trong súp, cung cấp hương vị đặc trưng
              -Cơm dừa và vani đem lại chất đạm, chất béo và chiếm 60% lượng mangan hàng ngày
            `,
            fruit_id: 13
          },
          //40-42 Cucumber
          {
            name: "Salad Dưa Leo với Nước Mắm Pha và Hạt Đậu Nành",
            ingredients: 
            `
              -Dưa leo cắt lát
              -Hạt đậu nành nước
              -Rau sống như cà rốt, rau xanh
              -Gia vị: Muối, tiêu
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Dưa leo là nguồn nước và vitamin K
              -Hạt đậu nành cung cấp protein và chất xơ
            `,
            fruit_id: 14
          },
          {
            name: "Dưa Leo Xào Tôm",
            ingredients: 
            `
              -Dưa leo cắt sợi
              -Tôm tươi
              -Ớt đỏ cắt nhỏ
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Dưa leo cung cấp nhiều nước và chất xơ
              -Tôm là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 14
          },
          {
            name: "Dưa Leo Kim Chi",
            ingredients: 
            `
              -Dưa leo cắt sợi
              -Gia vị: Ớt bột, tỏi băm, muối, đường
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Dưa leo là nguồn khoáng chất và vitamin C
              -Kim chi có thể giúp cân bằng vi khuẩn đường ruột
            `,
            fruit_id: 14
          },
          //43-45 Custard apple
          {
            name: "Sinh Tố Mãng Cầu và Sữa Dừa",
            ingredients: 
            `
              -Mãng cầu bóc hạt
              -Sữa dừa tươi
              -Đường (tùy chọn)
              -Mãng cầu cung cấp nhiều vitamin C và chất xơ
            `,
            nutrition: 
            `
              -Sữa dừa là nguồn chất béo lành và nước
              -Mãng cầu cung cấp nhiều vitamin C và chất xơ
            `,
            fruit_id: 15
          },
          {
            name: "Mứt mãng cầu",
            ingredients: 
            `
              -1 quả mãng cầu xiêm chín
              -Giấy bóng gói mứt
              -Đường
            `,
            nutrition: 
            `
              -Mãng cầu cung cấp nhiều chất xơ và vitamin
              -Bổ sung vitamin B, C
            `,
            fruit_id: 15
          },
          {
            name: "Chè Mãng Cầu Sương Sa",
            ingredients: 
            `
              -Mãng cầu bóc hạt
              -Đường cát trắng
              -Nước cốt dừa
              -Đậu phộng rang
            `,
            nutrition: 
            `
              -Mãng cầu chứa nhiều chất xơ và vitamin
              -Nước cốt dừa là nguồn chất béo lành và có hương vị thơm ngon
            `,
            fruit_id: 15
          },
          //46-48 Dates
          {
            name: "Bánh Chà Là với Nhân Hạt Điều và Mật Ong",
            ingredients: 
            `
              -Chà là hạt
              -Nhân hạt điều
              -Mật ong
              -Gia vị: Muối, tiêu
            `,
            nutrition: 
            `
              -Chà là chứa nhiều chất xơ và khoáng chất như kali
              -Hạt điều cung cấp chất béo lành và protein
            `,
            fruit_id: 16
          },
          {
            name: "Smoothie Chà Là với Dưa Hấu và Chuối",
            ingredients: 
            `
              -Chà là hạt
              -Dưa hấu cắt lát
              -Chuối chín
              -Nước dừa
            `,
            nutrition: 
            `
              -Chà là cung cấp năng lượng từ đường tự nhiên
              -Dưa hấu và chuối là nguồn nước và chất xơ
            `,
            fruit_id: 16
          },
          {
            name: "Salad Rau Mầm với Chà Là và Gà",
            ingredients: 
            `
              -Rau mầm như giá đỗ, cần tây
              -Chà là hạt
              -Thịt gà luộc, cắt sợi
              -Gia vị: Muối, tiêu, nước mắm pha
            `,
            nutrition: 
            `
              -Chà là cung cấp nhiều khoáng chất và năng lượng
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 16
          },
          //49-51 Dragon fruit
          {
            name: "Salad Thanh Long với Tôm và Rau sống",
            ingredients: 
            `
              -Thanh long cắt lát
              -300 gam cồi sò điệp
            `,
            nutrition: 
            `
              -Thanh long là nguồn vitamin C và chất xơ
              -Sò điệp cung cấp protein và các khoáng chất
            `,
            fruit_id: 17
          },
          {
            name: "Sinh Tố Thanh Long và Chuối",
            ingredients: 
            `
              -Thanh long bỏ hạt
              -Chuối chín
              -Sữa tươi
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Thanh long chứa nhiều chất chống ô nhiễm và vitamin C
              -Chuối là nguồn năng lượng và chất xơ
            `,
            fruit_id: 17
          },
          {
            name: "Chè Thanh Long Nước Cốt Dừa",
            ingredients: 
            `
              -Thanh long bỏ hạt
              -Nước cốt dừa
              -Đường cát trắng
              -Hạt é
            `,
            nutrition: 
            `
              -Thanh long cung cấp nước và vitamin C
              -Nước cốt dừa là nguồn chất béo lành và có hương vị thơm ngon
            `,
            fruit_id: 17
          },
          //52-54 Egg
          {
            name: "Trứng Chiên Mắm",
            ingredients: 
            `
              -Trứng gà
              -Mắm tôm
              -Dầu ăn
            `,
            nutrition: 
            `
              -Trứng là nguồn protein chất lượng và cholin tốt cho não
              -Mắm tôm cung cấp khoáng chất và hương vị đặc trưng
            `,
            fruit_id: 18
          },
          {
            name: "Bánh Mì Trứng ốp với Rau sống",
            ingredients: 
            `
              -Trứng gà ốp
              -Bánh mì nướng
              -Rau sống như cà rốt, rau xanh
              -Mayonnaise
            `,
            nutrition: 
            `
              -Trứng cung cấp protein và các vitamin như B12
              -Rau sống là nguồn chất xơ và khoáng chất
            `,
            fruit_id: 18
          },
          {
            name: "Canh Trứng cà chua",
            ingredients: 
            `
              -Trứng gà luộc
              -cà chua cắt lát
              -Hành lá, rau mầm
            `,
            nutrition: 
            `
              -Trứng là nguồn protein chất lượng và nhiều vitamin
              -Cà chua cung cấp nước và vitamin C
            `,
            fruit_id: 18
          },
          //55-57 Garlic
          {
            name: "Gà Xào Ớt và Tỏi",
            ingredients: 
            `
              -Gà luộc, cắt sợi
              -Ớt đỏ cắt nhỏ
              -Tỏi băm
              -Gia vị: Muối, tiêu, dầu ăn
            `,
            nutrition: 
            `
              -Tỏi có tác dụng chống vi khuẩn và giảm cholesterol
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 19
          },
          {
            name: "Cơm Chiên Tỏi và Rau Củ",
            ingredients: 
            `
              -Cơm nấu chín
              -Rau củ như cà rốt, bắp cải
              -Tỏi xào thơm
              -Gia vị: Muối, tiêu, dầu ăn
            `,
            nutrition: 
            `
              -Tỏi có tác dụng chống viêm và giảm áp lực máu
              -Rau củ cung cấp nhiều chất xơ và vitamin
            `,
            fruit_id: 19
          },
          {
            name: "Mì Quảng Gà Tỏi",
            ingredients: 
            `
              -Gà nước luộc, cắt sợi
              -Bánh mì quảng
              -Tỏi xào thơm
              -Rau sống như rau xanh, rau mầm
            `,
            nutrition: 
            `
              -Tỏi là nguồn chất chống ô nhiễm và có tác dụng kích thích tiêu hóa
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 19
          },
          //58-60 Grape
          {
            name: "Salad Nho với Phô Mai và Hạt Giống Dẻo",
            ingredients: 
            `
              -Nho cắt đôi
              -Phô mai Gouda
              -Hạt giống dẻo
              -Dầu giấm balsamic
            `,
            nutrition: 
            `
              -Nho chứa nhiều chất chống ô nhiễm và vitamin C
              -Phô mai Gouda cung cấp canxi và protein
            `,
            fruit_id: 20
          },
          {
            name: "Rượu nho",
            ingredients: 
            `
              -Nho tím hoặc đỏ hoặc nho xanh
              -Đường cát
              -Túi vải để lược
            `,
            nutrition: 
            `
              -Nho là nguồn vitamin và chất xơ
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 20
          },
          {
            name: "Bánh Nho và Kem Vanilla",
            ingredients: 
            `
              -Nho cắt đôi
              -Bánh ngọt như bánh muffin
              -Kem vanilla
              -Hạt giống dẻo (tùy chọn)
            `,
            nutrition: 
            `
              -Nho cung cấp nhiều chất chống ô nhiễm và chất xơ
              -Chống oxi hóa và tăng cường hệ miễn dịch
              -Giảm đột quỵ
            `,
            fruit_id: 20
          },
          //61-63 Green lemon
          {
            name: "Nước Chanh Xanh Lọc Dừa",
            ingredients: 
            `
              -Nước chanh xanh
              -Nước dừa tươi
              -Đá viên
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Nước chanh xanh cung cấp vitamin C và chất chống ô nhiễm
              -Nước dừa là nguồn nước tự nhiên và khoáng chất
            `,
            fruit_id: 21
          },
          {
            name: "Muối ớt chanh xanh",
            ingredients: 
            `
              -Chanh xanh cắt lát
              -Sữa đặc
              -Muối, ớt
            `,
            nutrition: 
            `
              -Chanh xanh là nguồn vitamin C và chất xơ
              -Đem lại nguồn dinh dưỡng gồm chất béo, vitamin A và C
            `,
            fruit_id: 21
          },
          {
            name: "Gà Kho Gừng và Chanh Xanh",
            ingredients: 
            `
              -Gà nước cắt miếng
              -Gừng tươi băm nhuyễn
              -Chanh xanh cắt lát
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Chanh xanh cung cấp vitamin C và chất chống ô nhiễm
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 21
          },
          //64-66
          {
            name: "Bánh Mít Nướng với Dầu Dừa",
            ingredients: 
            `
              -Mít bổ hạt
              -Dầu dừa
              -Đường (tùy chọn)
              -Bột mỳ
            `,
            nutrition: 
            `
              -Mít là nguồn vitamin và khoáng chất như kali
              -Dầu dừa cung cấp chất béo lành và hương vị thơm ngon
            `,
            fruit_id: 22
          },
          {
            name: "Canh Mít Nấu Nước Cốt Dừa",
            ingredients: 
            `
              -Mít bổ hạt
              -Nước cốt dừa
              -Gạo nấu chín
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Mít cung cấp nhiều chất xơ và vitamin
              -Nước cốt dừa là nguồn chất béo lành và hương vị đặc trưng
            `,
            fruit_id: 22
          },
          {
            name: "Salad Mít và Dưa Lưới",
            ingredients: 
            `
              -Mít bổ hạt
              -Dưa lưới cắt sợi
              -Rau sống như rau xanh, cà chua
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Mít là nguồn vitamin và chất xơ
              -Dưa lưới cung cấp nước và chất xơ
            `,
            fruit_id: 22
          },
          //67-69 Kiwi
          {
            name: "Sinh Tố Kiwi với Dưa Hấu",
            ingredients: 
            `
              -Kiwi bỏ vỏ, cắt lát
              -Dưa hấu cắt lát
              -Sữa tươi
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Kiwi là nguồn vitamin C và chất xơ
              -Dưa hấu cung cấp nước và vitamin A
            `,
            fruit_id: 23
          },
          {
            name: "Salad Rau Mầm với Kiwi và Hạt Giống Bí Ngô",
            ingredients: 
            `
              -Kiwi bỏ vỏ, cắt sợi
              -Rau mầm như giá đỗ, cần tây
              -Hạt giống bí ngô
              -Dầu giấm mâm xôi
            `,
            nutrition: 
            `
              -Kiwi chứa nhiều chất chống ô nhiễm và chất xơ
              -Rau mầm cung cấp nhiều vitamin và khoáng chất
            `,
            fruit_id: 23
          },
          {
            name: "Kem Kiwi và Mật Ong",
            ingredients: 
            `
              -Kiwi bỏ vỏ, cắt lát
              -Kem vani
              -Mật ong
              -Hạt giống dẻo (tùy chọn)
            `,
            nutrition: 
            `
              -Kiwi là nguồn vitamin C và chất xơ
              -Kem vani cung cấp canxi và chất béo lành
            `,
            fruit_id: 23
          },
          //70-72 Mango
          {
            name: "Sinh Tố Xoài và Nước Cốt Dừa",
            ingredients: 
            `
              -Xoài bỏ vỏ, cắt lát
              -Nước cốt dừa tươi
              -Đường (tùy chọn)
              -Đá viên
            `,
            nutrition: 
            `
              -Xoài là nguồn vitamin A và C, cung cấp năng lượng từ đường tự nhiên
              -Nước cốt dừa là nguồn chất béo lành và hương vị thơm ngon
            `,
            fruit_id: 24
          },
          {
            name: "Salad Xoài và Tôm",
            ingredients: 
            `
              -Xoài bỏ vỏ, cắt sợi
              -Tôm tươi
              -Nước mắm pha
              -Rau sống như cà rốt, rau xanh
            `,
            nutrition: 
            `
              -Xoài cung cấp nhiều chất xơ và vitamin
              -Tôm là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 24
          },
          {
            name: "Xôi Xoài",
            ingredients: 
            `
              -Xoài bỏ vỏ, cắt nhỏ
              -Xôi nếp luộc
              -Hạt giống dẻo
              -Đường cát trắng
            `,
            nutrition: 
            `
              -Xoài là nguồn vitamin C và chất xơ
              -Xôi nếp cung cấp năng lượng từ tinh bột
            `,
            fruit_id: 24
          },
          //73-75 Okra
          {
            name: "Đậu Bắp Xào Tôm",
            ingredients: 
            `
              -Đậu bắp xanh
              -Tôm tươi
              -Cà chua cắt lát
              -Hành tây băm
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Đậu bắp là nguồn chất xơ và vitamin C
              -Tôm cung cấp protein và các khoáng chất
            `,
            fruit_id: 25
          },
          {
            name: "Xào Đậu Bắp với Tỏi và Ớt",
            ingredients: 
            `
              -Đậu bắp xanh
              -Tôm tươi
              -Cà chua cắt lát
              -Hành tây băm
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Đậu bắp là nguồn chất xơ và vitamin C
              -Tôm cung cấp protein và các khoáng chất
            `,
            fruit_id: 25
          },
          {
            name: "Salad Đậu Bắp",
            ingredients: 
            `
              -Đậu bắp xanh luộc chín
              -Ớt chuônt
              -Trứng luộc
            `,
            nutrition: 
            `
              -Đậu bắp cung cấp chất xơ và vitamin C
              -Ớt chuông là nguồn beta-carotene và vitamin A  
              -Trứng cung cấp protein dồi dàu            
            `,
            fruit_id: 25
          },
          //76-78 Onion
          {
            name: "Xào Gà và Hành Tây",
            ingredients: 
            `
              -Gà nước cắt miếng
              -Hành tây cắt sợi
              -Ớt đỏ cắt nhỏ
              -Dầu ăn
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Hành tây chứa nhiều chất chống ô nhiễm và có tác dụng chống viêm
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 26
          },
          {
            name: "Bánh Mì Hamburger với Hành Tây Caramel",
            ingredients: 
            `
              -Bánh mì hamburger
              -Bò băm thành viên
              -Hành tây caramel
              -Mayonnaise
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Hành tây cung cấp vitamin C và chất xơ
              -Bò băm là nguồn protein chất lượng và chất béo lành
            `,
            fruit_id: 26
          },
          {
            name: "Cà Ri Gà với Hành Tây và Cà Rốt",
            ingredients: 
            `
              -Gà nước cắt miếng
              -Hành tây cắt sợi
              -Cà rốt xanh cắt lát
              -Nước cốt dừa
            `,
            nutrition: 
            `
              -Hành tây cung cấp chất xơ và các khoáng chất
              -Gà là nguồn protein chất lượng và chất béo lành
            `,
            fruit_id: 26
          },
          //79-81 Orange
          {
            name: "Sinh Tố Cam và Dâu",
            ingredients: 
            `
              -Cam ép nước
              -Dâu tươi
              -Sữa tươi
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Cam là nguồn vitamin C và chất chống ô nhiễm
              -Dâu cung cấp nhiều chất xơ và vitamin
            `,
            fruit_id: 27
          },
          {
            name: "Salad Cam và Rau sống",
            ingredients: 
            `
              -Cam cắt lát
              -Rau sống như rau xanh, cà chua
              -Hạt giống bí ngô
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Cam cung cấp vitamin C và chất xơ
              -Rau sống là nguồn chất xơ và vitamin
            `,
            fruit_id: 27
          },
          {
            name: "Gà Kho Cam và Mật Ong",
            ingredients: 
            `
              -Gà nước cắt miếng
              -Cam cắt lát
              -Mật ong
              -Hành tây băm
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Cam là nguồn vitamin C và chất chống ô nhiễm
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 27
          },
          //82-84 Papaya
          {
            name: "Salad Dưa Lưới và Cá Ngừ",
            ingredients: 
            `
              -Dưa lưới cắt sợi
              -Cá ngừ tươi
              -Rau sống như rau xanh, cà chua
              -Nước mắm pha
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Dưa lưới là nguồn chất xơ và vitamin A
              -Cá ngừ cung cấp protein và axit béo omega-3
            `,
            fruit_id: 28
          },
          {
            name: "Sinh Tố Dưa Lưới và Chuối",
            ingredients: 
            `
              -Dưa lưới bỏ hạt
              -Chuối chín
              -Sữa tươi
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Dưa lưới cung cấp vitamin C và chất xơ
              -Chuối là nguồn năng lượng và chất xơ
            `,
            fruit_id: 28
          },
          {
            name: "Chè Dưa Lưới và Thạch Dừa",
            ingredients: 
            `
              -Dưa lưới cắt sợi
              -Thạch dừa
              -Đường cát trắng
              -Hạt é
            `,
            nutrition: 
            `
              -Dưa lưới là nguồn chất xơ và vitamin C
              -Thạch dừa cung cấp nước và chất béo lành
            `,
            fruit_id: 28
          },
          //85-87 Peanut
          {
            name: "Bơ Lạc (Bơ Đậu Phộng)",
            ingredients: 
            `
              -Lạc rang
              -Dầu olive
              -Muối và tiêu
              -Hành tây băm
            `,
            nutrition: 
            `
              -Lạc là nguồn chất béo tốt cho tim mạch
              -Dầu olive giàu axit béo không no
            `,
            fruit_id: 29
          },
          {
            name: "Đậu phộng rim tỏi ớt",
            ingredients: 
            `
              -Nước mắm
              -Đậu rang
              -Tỏi ớt
              -Đường
            `,
            nutrition: 
            `
              -Lạc cung cấp protein và chất béo
            `,
            fruit_id: 29
          },
          {
            name: "Salad Gà với Sốt Lạc",
            ingredients: 
            `
              -Gà nướng
              -Rau sống (xà lách, cà rốt)
              -Sốt lạc
              -Hành tây băm
            `,
            nutrition: 
            `
              -Lạc là nguồn protein và chất xơ
              -Salad giúp bổ sung nhiều vitamin và khoáng chất
            `,
            fruit_id: 29
          },
          //88-90 Pineapple
          {
            name: "Sinh Tố Dứa với Nước Dừa",
            ingredients: 
            `
              -Dứa tươi
              -Nước dừa
              -Đá xay nhuyễn
            `,
            nutrition: 
            `
              -Dứa cung cấp vitamin C và manganese
              -Nước dừa giúp cung cấp nước và khoáng chất
            `,
            fruit_id: 30
          },
          {
            name: "Dứa Xào Tôm",
            ingredients: 
            `
              -Dứa chín
              -Tôm tươi
              -Rau sống (ớt, hành tây)
              -Hành tây băm
            `,
            nutrition: 
            `
              -Dứa giàu chất chống oxy hóa
              -Tôm cung cấp protein và các khoáng chất
            `,
            fruit_id: 30
          },
          {
            name: "Salad Dứa và Gà",
            ingredients: 
            `
              -Dứa chín
              -Gà nướng
              -Cà chua cắt lát
              -Rau sống (xà lách, cà rốt)
            `,
            nutrition: 
            `
              -Dứa cung cấp vitamin và enzym giúp tiêu hóa
              -Gà là nguồn protein chất lượng
            `,
            fruit_id: 30
          },
          //91-93 Pomegranate
          {
            name: "Sinh Tố Lựu với Dâu",
            ingredients: 
            `
              -Hạt lựu
              -Dâu tươi
              -Nước
              -Hành tây băm
            `,
            nutrition: 
            `
              -Lựu chứa nhiều chất chống oxi hóa
              -Dâu giàu vitamin C và chất xơ
            `,
            fruit_id: 31
          },
          {
            name: "Salad Rau Mầm với Hạt Lựu",
            ingredients: 
            `
              -Rau mầm (cải xanh, đậu nành)
              -Hạt lựu
              -Sốt dầu giấm
            `,
            nutrition: 
            `
              -Lựu giúp cải thiện sức khỏe tim mạch
              -Rau mầm là nguồn chất xơ và vitamin
            `,
            fruit_id: 31
          },
          {
            name: "Chè Lựu",
            ingredients: 
            `
              -Hạt lựu
              -Đường đen
              -Nước cốt dừa
            `,
            nutrition: 
            `
              -Chè lựu cung cấp năng lượng và chất chống oxi hóa
            `,
            fruit_id: 31
          },
          //94-96 Potato
          {
            name: "Khoai Tây Nướng với Phô Mai",
            ingredients: 
            `
              -Khoai tây
              -Phô mai
              -Dầu olive
            `,
            nutrition: 
            `
              -Khoai tây cung cấp carbohydrate và vitamin C
              -Phô mai là nguồn canxi
            `,
            fruit_id: 32
          },
          {
            name: "Canh Khoai Tây nấu Gà",
            ingredients: 
            `
              -Khoai tây
              -Thịt gà
              -Rau sống (cà rốt, cần tây)
              -Gia vị: Muối, tiêu, nước mắm
            `,
            nutrition: 
            `
              -Khoai tây giàu kali và vitamin B6
              -Thịt gà cung cấp protein và chất béo
            `,
            fruit_id: 32
          },
          {
            name: "Khoai Tây Xào Ớt Chuông và Hành Tây",
            ingredients: 
            `
              -Khoai tây
              -Ớt chuông
              -Hành tây
              -Hành tây băm
            `,
            nutrition: 
            `
              -Khoai tây cung cấp năng lượng và chất xơ
              -Rau sống giàu vitamin và khoáng chất
            `,
            fruit_id: 32
          },
          //97-99 Pumpkin
          {
            name: "Bí Ngô Nướng Mật Ong",
            ingredients: 
            `
              -Bí ngô
              -Mật ong
              -Hạt lanh
            `,
            nutrition: 
            `
              -Bí ngô là nguồn beta-carotene tốt cho thị lực
              -Mật ong chứa nhiều khoáng chất và có tác dụng chống vi khuẩn
            `,
            fruit_id: 33
          },
          {
            name: "Canh Bí Ngô với Tôm",
            ingredients: 
            `
              -Bí ngô
              -Tôm
              -Hành, tỏi, nấm
            `,
            nutrition: 
            `
              -Bí ngô cung cấp vitamin C và kali
              -Tôm cung cấp protein và các khoáng chất
            `,
            fruit_id: 33
          },
          {
            name: "Gà hầm bí đỏ",
            ingredients: 
            `
              -Bí ngô
              -Thịt gà
              -Hành, tiêu
            `,
            nutrition: 
            `
              -Bí ngô giàu chất chống oxi hóa
              -Thịt gà đem lại nhiều protein nhưng ít chất béo
            `,
            fruit_id: 33
          },
          //100-102 Radish
          {
            name: "Salad Củ Cải với Dầu Giấm và Hạt Bí Ngô",
            ingredients: 
            `
              -Củ cải trắng và củ cải đỏ
              -Hạt bí ngô
              -Dầu giấm
              -Hành tây băm
            `,
            nutrition: 
            `
              -Củ cải chứa nhiều vitamin C và chất xơ
              -Hạt bí ngô cung cấp dầu béo không no
            `,
            fruit_id: 34
          },
          {
            name: "Canh Củ Cải nấu Nước Dừa",
            ingredients: 
            `
              -Củ cải trắng
              -Nước dừa
              -Hành tây băm
            `,
            nutrition: 
            `
              -Củ cải giàu kali và canxi
              -Nước dừa là nguồn nước và khoáng chất
            `,
            fruit_id: 34
          },
          {
            name: "Củ Cải Xào Thịt Bò",
            ingredients: 
            `
              -Củ cải trắng
              -Thịt bò
              -Hành, tỏi, ớt
            `,
            nutrition: 
            `
              -Củ cải cung cấp nhiều vitamin và khoáng chất
              -Thịt bò là nguồn protein chất lượng
            `,
            fruit_id: 34
          },
          //103-105 Star Fruit
          {
            name: "Sinh Tố Khế với Dưa Hấu",
            ingredients: 
            `
              -Khế
              -Dưa hấu
              -Nước đậu nành
            `,
            nutrition: 
            `
              -Khế là nguồn vitamin C và chất chống oxi hóa
              -Dưa hấu giúp cung cấp nước và các khoáng chất
            `,
            fruit_id: 35
          },
          {
            name: "Gỏi khế bao tử ngọt",
            ingredients: 
            `
              -Bao tử heo
              -Rau sống (xà lách, cà rốt)
              -Rượu trắng, gừng, giấm
              -Khế
            `,
            nutrition: 
            `
              -Khế giúp hỗ trợ hệ tiêu hóa
              -Chống oxy hóa, cung cấp protein và cung cấp năng lượng cho cơ thể
            `,
            fruit_id: 35
          },
          {
            name: "Khế Xào thịt trâu",
            ingredients: 
            `
              -Khế
              -Thịt trâu
              -Hành, tỏi, ớt
            `,
            nutrition: 
            `
              -Khế giúp làm giảm cảm giác đau và viêm nhiễm
              -Thịt trâu là nguồn protein và canxi
            `,
            fruit_id: 35
          },
          //106-108 Strawberry
          {
            name: "Dâu với Kem Sữa Tươi",
            ingredients: 
            `
              -Dâu tươi
              -Kem sữa tươi
              -Đường trắng
            `,
            nutrition: 
            `
              -Dâu là nguồn vitamin C và chất chống oxi hóa
              -Kem sữa tươi cung cấp canxi và protein
            `,
            fruit_id: 36
          },
          {
            name: "Smoothie dâu với hạt chia",
            ingredients: 
            `
              -Dâu tươi
              -Sữa hạ đường
              -Hạt chia
            `,
            nutrition: 
            `
              -Dâu giúp cải thiện chức năng não
              -Chia seed chứa nhiều chất xơ và omega-3
            `,
            fruit_id: 36
          },
          {
            name: "Dâu Xào Sốt Chocolate Đen",
            ingredients: 
            `
              -Dâu tươi
              -Chocolate đen
              -Đường đen
            `,
            nutrition: 
            `
              -Dâu giúp tăng cường hệ miễn dịch
              -Chocolate đen chứa chất chống oxy hóa
            `,
            fruit_id: 36
          },
          //109-111 Sweet potato
          {
            name: "Khoai Lang Nướng Mật Ong",
            ingredients: 
            `
              -Khoai lang nước cắt lát
              -Mật ong
              -Dầu ô liu
              -Gia vị: Muối, tiêu, hạt tiêu
            `,
            nutrition: 
            `
              -Khoai lang cung cấp vitamin A, chất xơ và năng lượng từ tinh bột
              -Mật ong chứa nhiều khoáng chất và có tác dụng chống vi khuẩn
            `,
            fruit_id: 37
          },
          {
            name: "Canh Khoai Lang và Gà",
            ingredients: 
            `
              -Khoai lang nước cắt sợi
              -Gà nước cắt miếng
              -Hành tây băm
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Khoai lang là nguồn chất xơ và vitamin A
              -Gà là nguồn protein chất lượng và các khoáng chất
            `,
            fruit_id: 37
          },
          {
            name: "Khoai Lang tẩm gừng",
            ingredients: 
            `
              -Khoai lang nước nấu chín
              -Gừng tươi băm nhuyễn
              -Đường cát trắng
              -Hạt giống dẻo
            `,
            nutrition: 
            `
              -Khoai lang cung cấp vitamin A và chất xơ
              -Gừng có tác dụng kích thích tiêu hóa và giảm viêm
            `,
            fruit_id: 37
          },
          //112-114 Tomato
          {
            name: "Salad Cà Chua và Dưa Leo",
            ingredients: 
            `
              -Cà chua cắt lát
              -Dưa leo cắt sợi
              -Hành tây băm
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Cà chua là nguồn vitamin C và chất chống ô nhiễm
              -Dưa leo cung cấp nước và chất xơ
            `,
            fruit_id: 38
          },
          {
            name: "Súp Cà Chua và Hành Tây",
            ingredients: 
            `
              -Cà chua cắt lát
              -Hành tây cắt sợi
              -Thịt gà luộc, cắt nhỏ
              -Gia vị: Muối, tiêu, nước mắmGia vị: Muối, tiêu, thì là, hạt tiêu
            `,
            nutrition: 
            `
              -Cà chua cung cấp vitamin C và chất xơ
              -Hành tây là nguồn chất xơ và vitamin
            `,
            fruit_id: 38
          },
          {
            name: "Mì Ý với Sốt Cà Chua và Thịt Bò Băm",
            ingredients: 
            `
              -Mì Ý nấu chín
              -Sốt cà chua
              -Thịt bò băm
              -Hành tây băm
            `,
            nutrition: 
            `
              -Cà chua cung cấp vitamin C và chất chống ô nhiễm
              -Thịt bò là nguồn protein chất lượng và chất béo lành
            `,
            fruit_id: 38
          },
          //115-117 Watermelon
          {
            name: "Sinh Tố Dưa Hấu và Dưa Lưới",
            ingredients: 
            `
              -Dưa hấu cắt sợi
              -Dưa lưới cắt sợi
              -Sữa tươi
              -Đường (tùy chọn)
            `,
            nutrition: 
            `
              -Dưa hấu cung cấp nước và vitamin A, C
              -Dưa lưới cung cấp nước và chất xơ
            `,
            fruit_id: 39
          },
          {
            name: "Salad Dưa Hấu và Feta",
            ingredients: 
            `
              -Dưa hấu cắt lát
              -Phô mai Feta
              -Rau sống như rau xanh, cà chua
              -Nước mắm pha
            `,
            nutrition: 
            `
              -Dưa hấu cung cấp nước và vitamin A, C
              -Phô mai Feta là nguồn canxi và protein
            `,
            fruit_id: 39
          },
          {
            name: "Chè Dưa Hấu và Sâm Bổ Lượng",
            ingredients: 
            `
              -Trân châu trắng nhỏ
              -Dưa hấu cắt lát
              -Đường cát trắng
              -Hạt é
            `,
            nutrition: 
            `
              -Dưa hấu cung cấp nước và vitamin A, C
              -Bao gồm nhiều khoáng chất thiết yếu cho cơ thể để duy trì nhu cầu hoạt động của cơ thể
            `,
            fruit_id: 39
          },
          //118-120 White Musshroom
          {
            name: "Xào Nấm Trắng với Rau Mầm",
            ingredients: 
            `
              -Nấm trắng cắt lát
              -Rau mầm như giá đỗ, cần tây
              -Nước mắm pha
              -Hành tây băm
            `,
            nutrition: 
            `
              -Nấm trắng là nguồn protein thực vật và nhiều khoáng chất như selen và đồng
              -Rau mầm cung cấp nhiều vitamin và khoáng chất
            `,
            fruit_id: 40
          },
          {
            name: "Bánh Mì Sandwich với Nấm Trắng Nướng và Rau sống",
            ingredients: 
            `
              -Bánh mì sandwich
              -Nấm trắng nướng
              -Mayonnaise
              -Rau sống như cà chua, rau xanh
            `,
            nutrition: 
            `
              -Nấm trắng là nguồn protein thực vật và nhiều khoáng chất
              -Rau sống cung cấp chất xơ và nhiều vitamin
            `,
            fruit_id: 40
          },
          {
            name: "Canh Nấm Trắng và Rau Củ",
            ingredients: 
            `
              -Nấm trắng cắt lát
              -Củ cải cắt sợi
              -Nước dùng
              -Hành tây băm
            `,
            nutrition: 
            `
              -Nấm trắng là nguồn protein thực vật và nhiều vitamin nhóm B
              -Củ cải cung cấp chất xơ và khoáng chất
            `,
            fruit_id: 40
          },
         
          
      ],
      { batchSize: 120 }
  );
},

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Dishes", null, { batchSize: 120 });
},
};
