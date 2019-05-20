require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

#carowners
sarah = CarOwner.new('sarah')
joe = CarOwner.new('joe')
hoots = CarOwner.new('hoots')


#mechanics
mechanic1 = Mechanic.new('mechanic1', 'new')
mechanic2 = Mechanic.new('mechanic2', 'vintage')
mechanic3 = Mechanic.new('mechanic3', 'fancy')
mechanic4 = Mechanic.new('mechanic4', 'fancy')


#cars
car1 = Car.new('bmw', 'x5', 'new', sarah, mechanic1)
car2 = Car.new('jag', 'e-type', 'vintage', joe, mechanic2)
car3 = Car.new('porsche', 'cayenne', 'fancy', hoots, mechanic3)
car4 = Car.new('audi', 'a5', 'new', sarah, mechanic1)




binding.pry
