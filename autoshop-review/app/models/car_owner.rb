class Car_owner

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    #Get a list of all owners
    @@all
  end

  def cars
    # Get a list of all the cars that a specific owner has
    owners_cars = Car.all.select {|car| car.car_owner == self}
  end

  def mechanics
   # Get a list of all the mechanics that a specific owner goes to
    cars.map {|car| car.mechanic}
  end

  def self.ave_cars_owned
    #  Get the average amount of cars owned for all owners
    ave_cars_owned = Car.all.length/(Car_owner.all.length)
  end

end
