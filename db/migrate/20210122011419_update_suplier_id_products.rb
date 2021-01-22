class UpdateSuplierIdProducts < ActiveRecord::Migration[6.0]
  def change
    rename_column :products, :suplier_id, :supplier_id
  end
end
