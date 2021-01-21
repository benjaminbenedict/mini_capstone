class AddSupplierToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :suplier_id, :integer
  end
end
