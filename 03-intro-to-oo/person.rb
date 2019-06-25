require "pry"
class Person
  attr_accessor(:name, :date_of_birth)

  @@all = []

  def initialize(name: , date_of_birth:)
    self.name = name
    self.date_of_birth = date_of_birth
    @@all << self
  end

  def say_hello
    puts "Hi, my name is #{self.name}"
  end

  def self.all
    @@all
  end
  #
  # def name
  #   @name
  # end
  #
  # def name=(new_name)
  #   @name = name
  # end

end
binding.pry
