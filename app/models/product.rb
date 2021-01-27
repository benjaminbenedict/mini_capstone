class Product < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :price, numericality: { greater_than: 0 }
  validates :description, presence: true
  validates :description, length: { in: 2..225 }

  has_many :orders
  has_many :category_products
  has_many :categories, through: :category_products

  def is_discounted?
    if self.price < 60
      return true
    else
      return false
    end
  end

  def tax
    tax_price = self.price.to_f * 0.09
    return tax_price
  end

  def total
    full_price = self.price.to_f * 1.09
    return full_price
  end

  def supplier
    Supplier.find_by(id: supplier_id)
  end

  def images
    Image.where(product_id: id)
  end
end
