class Sushi < ActiveRecord::Base

    has_many :sushi_ingredients
    has_many :ingredients, through: :sushi_ingredients

    def formatted_price
        "£#{self.price.to_s.ljust(4, '0')}"
    end
end
