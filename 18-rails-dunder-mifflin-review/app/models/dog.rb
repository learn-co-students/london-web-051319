class Dog < ApplicationRecord
    has_many :employees

    def self.available
        self.all.select {|dog| dog.employees.empty? }
    end

    def employee_names
        self.employees.empty? ? 'no one :(' : self.employees.map(&:name).join(', ')
    end
end
