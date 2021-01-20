# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

plant_1 = Product.new({ name: "Pink Princess", price: 299, image_url: "https://cdn11.bigcommerce.com/s-uemzj79jf9/images/stencil/160w/products/1751/3835/Philodendron_Pink_Princess_pic1__74307.1596558792.jpg?c=2", description: "It's a philodendron but with pink!" })
plant_1.save
plant_2 = Product.new({ name: "anthurium crystallinum", price: 70, image_url: "https://i.redd.it/bmplyankjbc41.jpg", description: "Heart shaped velvety leaves" })
plant_2.save
plant_3 = Product.new({ name: "Monstera Albo", price: 599, image_url: "https://i.pinimg.com/originals/a9/96/2e/a9962e9f18cb6fc75a41667da5437b7c.jpg", description: "It's a Monstera but with some white!" })
plant_3.save
plant_4 = Product.new({ name: "Philodendron Melanochrysum", price: 100, image_url: "https://cdn.shopify.com/s/files/1/0340/4903/2323/products/Philodendron_melanochrysum..._grande.jpg?v=1606591871", description: "Velvety leaves with a green back" })
plant_4.save
plant_5 = Product.new({ name: "Philodendron Gloriosum", price: 65, image_url: "https://garden.org/pics/2014-09-25/mjsponies/8cdc9a.jpg", description: "ground creeping with velvety leaves" })
plant_5.save
plant_6 = Product.new({ name: "Begonia Maculata", price: 35, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6NlIcfAIBa6E5LwOE5QXCLyLH8JfShQdng&usqp=CAU", description: "Green angle wing shaped leaves with a red back and white pokadots" })
plant_6.save
# plant_9 = Product.new({ name: "", price: , image_url: "", description: "" })
# plant_10 = Product.new({ name: "", price: , image_url: "", description: "" })
# plant_11 = Product.new({ name: "", price: , image_url: "", description: "" })
