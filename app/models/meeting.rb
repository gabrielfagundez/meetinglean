class Meeting < ActiveRecord::Base

  has_many :meeting_agendas
  has_many :private_notes
  has_many :meeting_summaries
  has_many :meeting_decisions
  has_many :meeting_open_issues
  has_many :meeting_action_items

end