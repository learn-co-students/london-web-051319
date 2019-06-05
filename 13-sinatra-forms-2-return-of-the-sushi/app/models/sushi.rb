class Sushi < ActiveRecord::Base

    belongs_to :fish

    def formatted_price
        "£#{self.price.to_s.ljust(4, '0')}"
    end
end
