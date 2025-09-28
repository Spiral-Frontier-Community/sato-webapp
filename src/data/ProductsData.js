// ProductsData.js - Demo data for products
export const ProductsData = [
   {
      id: 1,
      name: "หวานใจสาโท",
      shortDescription: "สาโทขนาด 330 มล. - 3 รสชาติเด็ด",
      image: "/src/assets/product1.jpg",
      story: "หวานใจลาโทเป็นขนมไทยโบราณที่สืบทอดกันมาหลายชั่วอายุคน ด้วยรสชาติที่หวานหอมและเนื้อสัมผัสที่นุ่มละมุน ทำให้เป็นที่ชื่นชอบของคนไทยทุกเพศทุกวัย",
      fullStory: "หวานใจลาโทเป็นขนมไทยโบราณที่สืบทอดกันมาหลายชั่วอายุคน ด้วยรสชาติที่หวานหอมและเนื้อสัมผัสที่นุ่มละมุน ทำให้เป็นที่ชื่นชอบของคนไทยทุกเพศทุกวัย ขนมชนิดนี้ผลิตจากวัตถุดิบคุณภาพสูงและสูตรดั้งเดิมที่ปรับปรุงให้เหมาะสมกับคนรุ่นใหม่ โดยยังคงรักษาเอกลักษณ์และรสชาติดั้งเดิมไว้",
      productImage: "/src/assets/product1-detail.jpg",
      variants: [
         {
            id: 11,
            name: "รสดั้งเดิม",
            description: "รสชาติหวานหอมแบบดั้งเดิม",
            image: "/src/assets/product1-variant1.jpg"
         },
         {
            id: 12,
            name: "รสพานิลลา",
            description: "หวานหอมกลิ่นพานิลลา",
            image: "/src/assets/product1-variant2.jpg"
         },
         {
            id: 13,
            name: "รสมะพร้าว",
            description: "หอมกลิ่นมะพร้าวสดใส",
            image: "/src/assets/product1-variant3.jpg"
         }
      ],
      ingredients: [
         { id: 1, name: "มะพร้าว", position: "left" },
         { id: 2, name: "น้ำตาลปี๊บ", position: "right" },
         { id: 3, name: "แป้งข้าวเจ้า", position: "left" },
         { id: 4, name: "ใบเตย", position: "right" }
      ],
      tastes: [
         "หวานหอมจากมะพร้าวแท้",
         "เนื้อสัมผัสนุ่มละมุน",
         "กลิ่นหอมของใบเตยธรรมชาติ",
         "รสชาติกลมกล่อมไม่เลี่ยน",
         "หวานหอมแบบไทยแท้"
      ]
   },
   {
      id: 2,
      name: "หวานใจสายใส",
      shortDescription: "Functional Drink 0%",
      image: "/src/assets/product2.jpg",
      story: "หวานใจฮายโลเป็นเครื่องดื่มเพื่อสุขภาพที่ผสมผสานระหว่างรสชาติดั้งเดิมและสารอาหารที่มีประโยชน์ ให้ความสดชื่นและพลังงานตลอดวัน",
      fullStory: "หวานใจฮายโลเป็นเครื่องดื่มเพื่อสุขภาพที่ผสมผสานระหว่างรสชาติดั้งเดิมและสารอาหารที่มีประโยชน์ ให้ความสดชื่นและพลังงานตลอดวัน ด้วยส่วนผสมจากธรรมชาติและเทคโนโลยีการผลิตที่ทันสมัย ทำให้ได้เครื่องดื่มที่มีคุณภาพสูงและดีต่อสุขภาพ",
      productImage: "/src/assets/product2-detail.jpg",
      variants: [
         {
            id: 21,
            name: "รสมิกซ์เบอร์รี่",
            description: "หอมหวานจากผลไม้รวม",
            image: "/src/assets/product2-variant1.jpg"
         },
         {
            id: 22,
            name: "รสมะม่วง",
            description: "หวานหอมจากมะม่วงสุก",
            image: "/src/assets/product2-variant2.jpg"
         },
         {
            id: 23,
            name: "รสส้มโอ",
            description: "สดชื่นจากส้มโอหวาน",
            image: "/src/assets/product2-variant3.jpg"
         },
         {
            id: 24,
            name: "รสกีวี่",
            description: "เปรี้ยวหวานจากกีวี่แท้",
            image: "/src/assets/product2-variant4.jpg"
         }
      ],
      ingredients: [
         { id: 5, name: "วิตามินซี", position: "left" },
         { id: 6, name: "โคลลาเจน", position: "right" },
         { id: 7, name: "สารสกัดผลไม้", position: "left" },
         { id: 8, name: "น้ำผึ้งแท้", position: "right" },
         { id: 9, name: "แร่ธาตุ", position: "left" }
      ],
      tastes: [
         "สดชื่นจากผลไม้แท้",
         "หวานหอมจากน้ำผึ้งธรรมชาติ",
         "รสชาติกลมกล่อมไม่เลี่ยน",
         "ให้พลังงานยาวนาน",
         "ดื่มง่ายไม่เหม็นคาว"
      ]
   },
   {
      id: 3,
      name: "เซตรักหมักเอง",
      shortDescription: "Sweetheart Brew Kit - ชุดต้มรักของหวานใจ",
      image: "/src/assets/product3.jpg",
      story: "เซตรักษาผักเฮงเป็นชุดเครื่องดื่มสมุนไพรที่คัดสรรมาเพื่อสุขภาพและความเป็นอยู่ที่ดี ด้วยสูตรโบราณที่ผสมผสานกับเทคโนโลยีสมัยใหม่",
      fullStory: "เซตรักษาผักเฮงเป็นชุดเครื่องดื่มสมุนไพรที่คัดสรรมาเพื่อสุขภาพและความเป็นอยู่ที่ดี ด้วยสูตรโบราณที่ผสมผสานกับเทคโนโลยีสมัยใหม่ ช่วยเสริมสร้างสุขภาพและความแข็งแกร่งให้กับร่างกาย ด้วยสารสกัดจากสมุนไพรไทยแท้ที่มีคุณประโยชน์สูง",
      productImage: "/src/assets/product3-detail.jpg",
      variants: [
         {
            id: 31,
            name: "สมุนไพรดั้งเดิม",
            description: "สมุนไพรไทยแท้โบราณ",
            image: "/src/assets/product3-variant1.jpg"
         },
         {
            id: 32,
            name: "สมุนไพรผสม",
            description: "ผสมสมุนไพรหลากหลาย",
            image: "/src/assets/product3-variant2.jpg"
         },
         {
            id: 33,
            name: "สมุนไพรพรีเมี่ยม",
            description: "สมุนไพรคุณภาพสูง",
            image: "/src/assets/product3-variant3.jpg"
         }
      ],
      ingredients: [
         { id: 10, name: "ฟ้าทะลายโจร", position: "left" },
         { id: 11, name: "ขมิ้นชัน", position: "right" },
         { id: 12, name: "มะขามป้อม", position: "left" },
         { id: 13, name: "กิ่งแก่นใหญ่", position: "right" }
      ],
      tastes: [
         "รสชาติสมุนไพรแท้",
         "ขมเล็กน้อยตามธรรมชาติ",
         "หอมกลิ่นสมุนไพรไทย",
         "ให้ความสดชื่น",
         "ดื่มง่ายไม่มีกลิ่นแปลก"
      ]
   }
];

export default ProductsData;