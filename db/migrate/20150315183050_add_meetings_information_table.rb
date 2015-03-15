class AddMeetingsInformationTable < ActiveRecord::Migration
  def change
    create_table :meeting_decisions do |t|
      t.string :description
      t.string :meeting_id
    end
    create_table :meeting_open_issues do |t|
      t.string :description
      t.string :meeting_id
    end
    create_table :meeting_action_items do |t|
      t.string :description
      t.string :meeting_id
    end
  end
end
