class AddMeetingsTable < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.string :name
      t.string :description

      t.datetime :start_time
      t.datetime :end_time

      t.timestamps null: false
    end
  end
end
