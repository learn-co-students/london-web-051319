class Sushi < ActiveRecord::Base

    def formatted_price
        "£#{self.price.to_s.ljust(4, '0')}"
    end
end
