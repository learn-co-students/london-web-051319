class Mechanic

  attr_reader :name, :specialty

  @@all = []

  def initialize(name, specialty)
    @name = name
    @specialty = specialty
    @@all << self
  end

  def self.all
    @@all
  end

  def cars
    #- Get a list of all cars that a mechanic services
    Car.all.select {|car| car.mechanic == self}
  end

  def owners
    # - Get a list of all the car owners that go to a specific mechanic
    cars.map {|car| car.car_owner}
  end

  def owners_names
    # - Get a list of the names of all car owners who go to a specific mechanic
    # cars.map {|car| car.car_owner.name}
    owners.map {|car_owner| car_owner.name}
  end

end
