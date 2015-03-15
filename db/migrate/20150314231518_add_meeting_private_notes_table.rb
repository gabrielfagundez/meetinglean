class AddMeetingPrivateNotesTable < ActiveRecord::Migration
  def change
    create_table :private_notes do |t|
      t.string :description
      t.string :meeting_id
    end
  end
end
