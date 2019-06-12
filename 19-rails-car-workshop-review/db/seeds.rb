# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Car.destroy_all
Brand.destroy_all
Owner.destroy_all
Mechanic.destroy_all

Brand.create [
    { :name => 'audi' },
    { :name => 'vw' },
    { :name => 'fiat' },
    { :name => 'volvo' },
    { :name => 'bmw' },
    { :name => 'vauxhall' },
    { :name => 'jeep' },
    { :name => 'lada' },
    { :name => 'mini' },
    { :name => 'ford' },
    { :name => 'alfa romeo' },
    { :name => 'aston martin' },
    { :name => 'chevrolet' },
    { :name => 'dodge' },
    { :name => 'honda' },
    { :name => 'hyundai' },
    { :name => 'mazda' },
    { :name => 'mercedes' },
    { :name => 'land rover' },
    { :name => 'nissan' },
    { :name => 'tesla' },
    { :name => 'renault' }
]

Mechanic.create [
    { :name => 'sam' },
    { :name => 'dan' },
    { :name => 'nico' },
    { :name => 'joe' }
]

Owner.create [
    { :name => 'ian' },
    { :name => 'sarah' },
    { :name => 'jo' },
    { :name => 'lucy' },
    { :name => 'stu' },
    { :name => 'sofia' },
    { :name => 'mani' },
    { :name => 'gabe' }
]

$miles = (1000..1000000).to_a

def random_mileage
    $miles.sample
end

50.times do 
    Car.create(:owner => Owner.all.sample, :brand => Brand.all.sample, :mechanic => Mechanic.all.sample, :mileage => random_mileage )
end
