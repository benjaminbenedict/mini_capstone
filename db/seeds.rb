# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({ name: "ben", email: "ben@test.com", password: "password" })
User.create!({ name: "peter", email: "peter@test.com", password: "password" })

Supplier.create!({ name: "Fia Flora", email: "Fia.Flora@gmail.com", phone_number: "666-6666" })
Supplier.create!({ name: "Logee's Greenhouse", email: "Logee.greehouse@gmail.com", phone_number: "420-6969" })
Supplier.create!({ name: "Gabriella Plants", email: "Gabriella.Plants@gmail.com", phone_number: "666-2005" })

plant_1 = Product.new({ name: "Pink Princess", price: 299, description: "It's a philodendron but with pink!", supplier_id: 2, quantity: 20 })
plant_1.save
plant_2 = Product.new({ name: "anthurium crystallinum", price: 70, description: "Heart shaped velvety leaves", supplier_id: 1, quantity: 20 })
plant_2.save
plant_3 = Product.new({ name: "Monstera Albo", price: 599, description: "It's a Monstera but with some white!", supplier_id: 3, quantity: 20 })
plant_3.save
plant_4 = Product.new({ name: "Philodendron Melanochrysum", price: 100, description: "Velvety leaves with a green back", supplier_id: 2, quantity: 20 })
plant_4.save
plant_5 = Product.new({ name: "Philodendron Gloriosum", price: 65, description: "ground creeping with velvety leaves", supplier_id: 1, quantity: 20 })
plant_5.save
plant_6 = Product.new({ name: "Begonia Maculata", price: 35, description: "Green angle wing shaped leaves with a red back and white pokadots", supplier_id: 3, quantity: 20 })
plant_6.save

Product.create!({ name: "philodendron painted lady", price: 55, description: "it p cool bruh", supplier_id: 3, quantity: 20 })

Image.create!({ url: "https://cdn11.bigcommerce.com/s-uemzj79jf9/images/stencil/160w/products/1751/3835/Philodendron_Pink_Princess_pic1__74307.1596558792.jpg?c=2", product_id: 1 })
Image.create!({ url: "https://i.redd.it/bmplyankjbc41.jpg", product_id: 2 })
Image.create!({ url: "https://i.pinimg.com/originals/a9/96/2e/a9962e9f18cb6fc75a41667da5437b7c.jpg", product_id: 3 })
Image.create!({ url: "https://cdn.shopify.com/s/files/1/0340/4903/2323/products/Philodendron_melanochrysum..._grande.jpg?v=1606591871", product_id: 4 })
Image.create!({ url: "https://garden.org/pics/2014-09-25/mjsponies/8cdc9a.jpg", product_id: 5 })
Image.create!({ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6NlIcfAIBa6E5LwOE5QXCLyLH8JfShQdng&usqp=CAU", product_id: 6 })
Image.create!({ url: "https://indoorsplant.com/wp-content/uploads/2020/04/IMG-2208.jpg", product_id: 7 })
Image.create!({ url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fleur_de_Philodendron_erubescens_%28face%29.jpg/1200px-Fleur_de_Philodendron_erubescens_%28face%29.jpg", product_id: 1 })
Image.create!({ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMZvfdGNZNMq7y9JvPSUPzlLnR5qG5QHN8g&usqp=CAU", product_id: 1 })

Category.create!({ name: "Philodendron" })
Category.create!({ name: "Ariod" })
Category.create!({ name: "Rare" })

CategoryProduct.create!({ category_id: 1, product_id: 1 })
CategoryProduct.create!({ category_id: 2, product_id: 1 })
CategoryProduct.create!({ category_id: 3, product_id: 1 })
CategoryProduct.create!({ category_id: 2, product_id: 2 })
CategoryProduct.create!({ category_id: 3, product_id: 2 })
CategoryProduct.create!({ category_id: 1, product_id: 3 })
CategoryProduct.create!({ category_id: 3, product_id: 3 })
CategoryProduct.create!({ category_id: 1, product_id: 4 })
CategoryProduct.create!({ category_id: 1, product_id: 5 })
CategoryProduct.create!({ category_id: 3, product_id: 6 })
CategoryProduct.create!({ category_id: 1, product_id: 7 })
CategoryProduct.create!({ category_id: 2, product_id: 7 })
