class Meeting < ActiveRecord::Base

  has_many :meeting_agendas
  has_many :private_notes
  has_many :meeting_summaries
  has_many :meeting_decisions
  has_many :meeting_open_issues
  has_many :meeting_action_items

  def full_json_data
    {
        id: self.id,
        name: self.name,
        description: self.description,
        agenda: self.meeting_agendas,
        private_notes: self.private_notes,
        meeting_decisions: self.meeting_decisions,
        meeting_open_issues: self.meeting_open_issues,
        meeting_action_items: self.meeting_action_items,
        summary: self.meeting_summaries
    }.to_json
  end

end