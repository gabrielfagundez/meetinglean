class AddMeetingSummaryTable < ActiveRecord::Migration
  def change
    create_table :meeting_summaries do |t|
      t.string :description
      t.string :meeting_id

      t.timestamps null: false
    end
  end
end
