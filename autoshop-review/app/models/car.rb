class Car

  attr_reader :make, :model, :classification
  attr_accessor :car_owner, :mechanic

  @@all = []

  def initialize(make, model, classification, car_owner, mechanic)
    @make = make
    @model = model
    @classification = classification
    @car_owner = car_owner
    @mechanic = mechanic
    @@all << self
  end

  def self.all
    @@all
  end

  def self.classifications
    #Get a list of all car classifications
    Car.all.map {|car| car.classification}
  end

  def corresponding_mechanics
    # Get a list of mechanics that have an expertise that matches the car classification
    Mechanic.all.select {|mechanic| mechanic.specialty == self.classification}
  end


end
