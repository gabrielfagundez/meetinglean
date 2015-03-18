class AddMeetingPrivateNotesTable < ActiveRecord::Migration
  def change
    create_table :meeting_private_notes do |t|
      t.string :description
      t.string :meeting_id

      t.timestamps null: false
    end
  end
end
