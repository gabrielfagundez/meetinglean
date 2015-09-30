class UsersClients < ActiveRecord::Migration
  def change
    t.integer :client_id
    t.integer :user_id
  end
end
