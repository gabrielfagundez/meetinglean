class UsersClients < ActiveRecord::Migration
  def change
    create_table :users_clients do |t|
      t.integer :client_id
      t.integer :user_id
    end
  end
end
