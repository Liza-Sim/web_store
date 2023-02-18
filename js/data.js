const data = [
  {
    name: "PHONES",
    products: [
      {
        name: "Samsung Galaxy S22",
        diagonal: 6.1,
        price: 29999,
        color: "Green",
        memory: "128GB/8GB",
        processor: "Android",
        main_images: 'images/phones/samsung1.jpg',
        image_arr: ['images/phones/samsung1.jpg', 'images/phones/samsung1.1.jpg', 'images/phones/samsung1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Apple iPhone 13",
        diagonal: 6.1,
        price: 35999,
        color: "Blue",
        memory: "128GB",
        processor: "iOS",
        main_images: 'images/phones/apple1.jpg',
        image_arr: ['images/phones/apple1.jpg', 'images/phones/apple1.1.jpg', 'images/phones/apple1.2.jpg'],
        availability : 0,
      },
      {
        name: "Motorola G32",
        diagonal: 6.5,
        price: 6999,
        color: "Golden",
        memory: "128GB/6GB",
        processor: "Android",
        main_images: 'images/phones/moto1.jpg',
        image_arr: ['images/phones/moto1.jpg', 'images/phones/moto1.1.jpg', 'images/phones/moto1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Samsung Galaxy A53",
        diagonal: 6.5,
        price: 17777,
        color: "Blue",
        memory: "256GB/8GB",
        processor: "Samsung Exynos 1280",
        main_images: 'images/phones/samsung2.jpg',
        image_arr: ['images/phones/samsung2.jpg', 'images/phones/samsung2.1.jpg', 'images/phones/samsung2.2.jpg'],
        availability : 4,
      },
      {
        name: "Apple iPhone 11",
        diagonal: 6.1,
        price: 25499,
        color: "Yellow",
        memory: "128GB/4GB",
        processor: "iOS",
        main_images: 'images/phones/apple2.jpg',
        image_arr: ['images/phones/apple2.jpg', 'images/phones/apple2.1.jpg', 'images/phones/apple2.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Motorola E40",
        diagonal: 6.5,
        price: 4999,
        color: "Black",
        memory: "64GB/4GB",
        processor: "Android",
        main_images: 'images/phones/moto2.jpg',
        image_arr: ['images/phones/moto2.jpg', 'images/phones/moto2.1.jpg', 'images/phones/moto2.2.jpg'],
        availability : 4,
      },
      {
        name: "Nokia G11",
        diagonal: 6.5,
        price: 4799,
        color: "Chocolate",
        memory: "32GB/3GB",
        processor: "Android",
        main_images: 'images/phones/nokia1.jpg',
        image_arr: ['images/phones/nokia1.jpg', 'images/phones/nokia1.1.jpg', 'images/phones/nokia1.2.jpg'],
        availability : 4,
      },
      {
        name: "Xiaomi Redmi Note 11",
        diagonal: 6.43,
        price: 8499,
        color: "Blue",
        memory: "128GB/4GB",
        processor: "Android",
        main_images: 'images/phones/xiaomi1.jpg',
        image_arr: ['images/phones/xiaomi1.jpg', 'images/phones/xiaomi1.1.jpg', 'images/phones/xiaomi1.2.jpg'],
        availability : 0,
      },
      {
        name: "Apple iPhone 14 Pro",
        diagonal: 6.1,
        price: 83999,
        color: "Purple",
        memory: "1TB",
        processor: "iOS",
        main_images: 'images/phones/apple3.jpg',
        image_arr: ['images/phones/apple3.jpg', 'images/phones/apple3.1.jpg', 'images/phones/apple3.2.jpg'],
        availability : 4,
      },
    ],
  },
  {
    name: "LAPTOPS",
    products: [
      {
        name: "MacBook Air 2020",
        diagonal: 13.3,
        price: 42999,
        color: "Gray",
        processor: "Octa-core Apple M1",
        OS: "macOS Big Sur",
        memory: "256GB/8GB",
        main_images: 'images/laptops/mac1.jpg',
        image_arr: ['images/laptops/mac1.jpg', 'images/laptops/mac1.1.jpg', 'images/laptops/mac1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Acer Aspire 7",
        diagonal: 15.6,
        price: 36999,
        color: "Black",
        processor: "Six-core AMD Rizen 5",
        OS: "without OS",
        memory: "512GB/8GB",
        main_images:'images/laptops/aser1.jpg',
        image_arr: ['images/laptops/aser1.jpg', 'images/laptops/aser1.1.jpg', 'images/laptops/aser1.2.jpg'],
        availability : 4,
      },
      {
        name: "Acer Aspire 5",
        diagonal: 15.6,
        price: 21999,
        color: "Silver",
        processor: "Quad Core AMD Rizen 3",
        OS: "without OS",
        memory: "512GB/8GB",
        main_images:'images/laptops/aser2.jpg',
        image_arr: ['images/laptops/aser2.jpg', 'images/laptops/aser2.1.jpg', 'images/laptops/aser2.2.jpg'],
        availability : 0,
      },
      {
        name: "ASUS Laptop X515EA-BQ3231",
        diagonal: 15.6,
        price: 20999,
        color: "Silver",
        processor: "Dual Core Intel Core i3",
        OS: "without OS",
        memory: "512GB/16GB",
        main_images: 'images/laptops/asus1.jpg',
        image_arr: ['images/laptops/asus1.jpg', 'images/laptops/asus1.1.jpg', 'images/laptops/asus1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "ASUS TUF Gaming F15",
        diagonal: 15.6,
        price: 37999,
        color: "Black",
        processor: "Six-core AMD Rizen 5",
        OS: "without OS",
        memory: "512GB/16GB",
        main_images:'images/laptops/asus2.jpg',
        image_arr: ['images/laptops/asus2.jpg', 'images/laptops/asus2.1.jpg', 'images/laptops/asus2.2.jpg'],
        availability : 4,
      },
      {
        name: "Asus Vivobook 15 M1502IA-BQ091",
        diagonal: 15.6,
        price: 28999,
        color: "Blue",
        processor: "8-core AMD Ryzen 7",
        OS: "without OS",
        memory: "512GB/12GB",
        main_images:'images/laptops/asus3.jpg',
        image_arr: ['images/laptops/asus3.jpg', 'images/laptops/asus3.1.jpg', 'images/laptops/asus3.2.jpg'],
        availability : 0,
      },
      {
        name: "Lenovo IdeaPad Gaming 3",
        diagonal: 15.6,
        price: 29999,
        color: "Black",
        processor: "Quad Core Intel Core i5",
        OS: "without OS",
        memory: "256GB/8GB",
        main_images:'images/laptops/lenovo1.jpg',
        image_arr: ['images/laptops/lenovo1.jpg', 'images/laptops/lenovo1.1.jpg', 'images/laptops/lenovo1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Lenovo IdeaPad 5 Pro 16ACH6",
        diagonal: 16.0,
        price: 48888,
        color: "Gray",
        processor: "AMD Ryzen 7 5800H ",
        OS: "Windows 10 Pro",
        memory: "512GB/16GB",
        main_images:'images/laptops/lenovo2.jpg',
        image_arr: ['images/laptops/lenovo2.jpg', 'images/laptops/lenovo2.1.jpg', 'images/laptops/lenovo2.2.jpg'],
        availability : 4,
      },
      {
        name: "Apple MacBook M1 Pro",
        diagonal: 16.2,
        price: 114999,
        color: "Silver",
        processor: "Apple M1 Pro",
        OS: "macOS Montery",
        memory: "512GB/16GB",
        main_images: 'images/laptops/mac2.jpg',
        image_arr: ['images/laptops/mac2.jpg', 'images/laptops/mac2.1.jpg', 'images/laptops/mac2.2.jpg'],
        availability : 4,
      },
    ],
  },
  {
    name: "WATCHES",
    products: [
      {
        name: "Samsung Galaxy Watch 4",
        diagonal: 1.2,
        price: 10799,
        color: "Golden",
        memory: "16GB/1.5GB",
        processor: "Android Wear",
        main_images: 'images/watches/samsungWatch1.1.jpg',
        image_arr:['images/watches/samsungWatch1.1.jpg','images/watches/samsungWatch1.jpg','images/watches/samsungWatch1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Samsung Galaxy Watch 5",
        diagonal: 1.4,
        price: 11999,
        color: "Silver",
        memory: "16GB/1.5GB",
        processor: "Android",
        main_images:'images/watches/samWa2.jpg',
        image_arr: ['images/watches/samWa2.jpg', 'images/watches/samWa2.1.jpg', 'images/watches/samWa2.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Amazfit GTR 4",
        diagonal: 1.43,
        price: 7499,
        color: "Brown",
        memory: "32GB/4GB",
        processor: "Another",
        main_images:'images/watches/amazfitWatch1.jpg',
        image_arr: ['images/watches/amazfitWatch1.jpg', 'images/watches/amazfitWatch1.1.jpg', 'images/watches/amazfitWatch1.2.jpg'],
        availability : 4,
      },
      {
        name: "Xiaomi Watch S1",
        diagonal: 1.43,
        price: 5999,
        color: "Blue",
        memory: "16GB/1.5GB",
        processor: "Android",
        main_images:'images/watches/xiaomiWatch1.jpg',
        image_arr: ['images/watches/xiaomiWatch1.jpg', 'images/watches/xiaomiWatch1.1.jpg', 'images/watches/xiaomiWatch1.2.jpg'],
        availability : 4,
        sale : true,
      },
      {
        name: "Amazfit Bip 3",
        diagonal: 1.69,
        price: 1999,
        color: "Pink",
        memory: "16GB/1.7GB",
        processor: "Android",
        main_images: 'images/watches/amazfitW2.jpg',
        image_arr: ['images/watches/amazfitW2.jpg', 'images/watches/amazfitW2.1.jpg', 'images/watches/amazfitW2.2.jpg'],
        availability : 4,
      },
      {
        name: "Amazfit Bip 3 Pro",
        diagonal: 1.69,
        price: 2499,
        color: "Black",
        memory: "16GB/1.7GB",
        processor: "Android",
        main_images: 'images/watches/amazfitW3.jpg',
        image_arr: ['images/watches/amazfitW3.jpg', 'images/watches/amazfitW3.1.jpg', 'images/watches/amazfitW3.2.jpg'],
        availability : 4,
      },
      {
        name: "Aura X1 Pro",
        diagonal: 1.75,
        price: 1519,
        color: "White",
        memory: "8GB/1.0GB",
        processor: "Android",
        main_images: 'images/watches/auraW1.jpg',
        image_arr: ['images/watches/auraW1.jpg', 'images/watches/auraW1.1.jpg', 'images/watches/auraW1.2.jpg'],
        availability : 4,
      },
      {
        name: "Canyon Badian SW-68",
        diagonal: 1.28,
        price: 1799,
        color: "Black",
        memory: "8GB/1.0GB",
        processor: "Android",
        main_images: 'images/watches/amazfitW3.jpg',
        image_arr: ['images/watches/amazfitW3.jpg', 'images/watches/amazfitW3.1.jpg', 'images/watches/amazfitW3.2.jpg'],
        availability : 4,
      },
      {
        name: "Aura X2 Pro",
        diagonal: 1.75,
        price: 1575,
        color: "Red",
        memory: "16GB/1.6GB",
        processor: "Android",
        main_images: 'images/watches/auraW2.jpg',
        image_arr: ['images/watches/auraW2.jpg', 'images/watches/auraW2.1.jpg', 'images/watches/auraW2.2.jpg'],
        availability : 4,
      },
    ],
  },
  {
    name: "TABLETS",
    products:[
      {
        name: "Apple iPad",
        diagonal: 10.2,
        price: 16999,
        color: "Silver",
        processor: "A13 Bionic",
        OS: "iPadOS",
        memory: "64GB",
        main_images: 'images/tablets/appleAipad1.jpg',
        image_arr: ['images/tablets/appleAipad1.jpg', 'images/tablets/appleAipad1.1.jpg', 'images/tablets/appleAipad1.2.jpg'],
        availability : 4,
      },
      {
        name: "Lenovo Tab M10 Plus",
        diagonal: 10.61,
        price: 12499,
        color: "Gray",
        processor: "Qualcomm Snapdragon 680",
        OS: "Android",
        memory: "128GB/4GB",
        main_images: 'images/tablets/lenovoTab1.1.jpg',
        image_arr: ['images/tablets/lenovoTab1.1.jpg', 'images/tablets/lenovoTab1.jpg', 'images/tablets/lenovoTab1.2.jpg'],
        availability : 4,
      },
      {
        name: "Samsung Galaxy Tab A7",
        diagonal: 8.7,
        price: 6199,
        color: "Gray",
        processor: "MediaTek Helio P22T",
        OS: "Android",
        memory: "32GB/3GB",
        main_images: 'images/tablets/samsungTab1.jpg',
        image_arr: ['images/tablets/samsungTab1.jpg', 'images/tablets/samsungTab1.1.jpg', 'images/tablets/samsungTab1.2.jpg'],
        availability : 4,
      },
      {
        name: "Samsung Galaxy Tab S7",
        diagonal: 12.4,
        price: 23699,
        color: "Silver",
        processor: "Qualcomm Snapdragon 750G",
        OS: "Android",
        memory: "64GB/4GB",
        main_images: 'images/tablets/samsungTab2.jpg',
        image_arr: ['images/tablets/samsungTab2.jpg', 'images/tablets/samsungTab2.1.jpg', 'images/tablets/samsungTab2.2.jpg'],
        availability : 4,
      },
      {
        name: "Lenovo Tab M10 Plus",
        diagonal: 12.4,
        price: 10999,
        color: "Gray",
        processor: "Qualcomm Snapdragon 680",
        OS: "Android",
        memory: "128GB/4GB",
        main_images: 'images/tablets/lenovoTab2.jpg',
        image_arr: ['images/tablets/lenovoTab2.jpg', 'images/tablets/lenovoTab2.1.jpg', 'images/tablets/lenovoTab2.2.jpg'],
        availability : 4,
      },
      {
        name: "Apple iPad Air",
        diagonal: 10.9,
        price: 29999,
        color: "Gray",
        processor: "Apple M1",
        OS: "iPadOS",
        memory: "64GB/8GB",
        main_images: 'images/tablets/appleTab2.jpg',
        image_arr: ['images/tablets/appleTab2.jpg', 'images/tablets/appleTab2.1.jpg', 'images/tablets/appleTab2.2.jpg'],
        availability : 4,
      },
      {
        name: "Xiaomi Redmi Pad",
        diagonal: 10.61,
        price: 8999,
        color: "Gray",
        processor: "MediaTek Helio G99 ",
        OS: "Android",
        memory: "64GB/3GB",
        main_images: 'images/tablets/xiaomiTab1.jpg',
        image_arr: ['images/tablets/xiaomiTab1.jpg', 'images/tablets/xiaomiTab1.1.jpg', 'images/tablets/xiaomiTab1.2.jpg'],
        availability : 4,
      },
      {
        name: "Huawei Matepad",
        diagonal: 10.4,
        price: 10999,
        color: "Gray",
        processor: "Huawei Kirin 710A",
        OS: "HarmonyOS 2.0",
        memory: "128GB/4GB",
        main_images: 'images/tablets/huaweiTab1.jpg',
        image_arr: ['images/tablets/huaweiTab1.jpg', 'images/tablets/huaweiTab1.1.jpg', 'images/tablets/huaweiTab1.2.jpg'],
        availability : 0,
      },
      {
        name: "Xiaomi Mi Pad 5",
        diagonal: 11.0,
        price: 14999,
        color: "Gray",
        processor: "Qualcomm Snapdragon 860",
        OS: "Android",
        memory: "128GB/6GB",
        main_images: 'images/tablets/mixiaomiTab2.jpg',
        image_arr: ['images/tablets/mixiaomiTab2.jpg', 'images/tablets/mixiaomiTab2.1.jpg', 'images/tablets/mixiaomiTab2.2.jpg'],
        availability : 4,
      },
    ]

  }
];
