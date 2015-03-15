class Meeting < ActiveRecord::Base

  has_many :meeting_agendas
  has_many :private_notes
  has_many :meeting_summaries

end