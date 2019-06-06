# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cupcake.create([
    { name: 'cookies and cream', price: 1.2, topping: 'cookies and cream'},
    { name: 'oreo', price: 1.1, topping: 'oreos'},
    { name: '99 problems but biscoff aint one', price: 1.1, topping: 'biscoff'},
    { name: 'red velvet', price: 1.7, topping: 'cream cheese'},
    { name: 'soup', price: 1.7, topping: 'disgusting'}
])