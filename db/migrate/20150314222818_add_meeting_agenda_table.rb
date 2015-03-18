class AddMeetingAgendaTable < ActiveRecord::Migration
  def change
    create_table :meeting_agendas do |t|
      t.string :description
      t.string :meeting_id

      t.timestamps null: false
    end
  end
end
