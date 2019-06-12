class Car < ApplicationRecord
  belongs_to :brand
  belongs_to :owner
  belongs_to :mechanic

  validates :mileage, numericality: { only_integer: true, greater_than: 0 }

  def self.sort_and_filter params
    cars = params[:brand_id] ? Car.where(brand_id: params[:brand_id]) : Car.all
    cars = params[:sort_by] ? (params[:sort_by] == 'ascending' ? cars.order(:mileage).reverse : cars.order(:mileage)) : cars
    cars
  end
end
