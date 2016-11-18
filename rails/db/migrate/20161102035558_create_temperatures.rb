class CreateTemperatures < ActiveRecord::Migration[5.0]
  def change
    create_table :temperatures do |t|
      t.float :humidity
      t.float :temperature

      t.timestamps
    end
  end
end
