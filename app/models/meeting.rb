class Meeting < ActiveRecord::Base

  has_many :meeting_agendas
  has_many :meeting_private_notes
  has_many :meeting_summaries
  has_many :meeting_decisions
  has_many :meeting_open_issues
  has_many :meeting_action_items

  def full_json_data
    {
        id: self.id,
        name: self.name,
        description: self.description,
        agenda: self.meeting_agendas.order('created_at DESC').all,
        private_notes: self.meeting_private_notes.order('created_at DESC'),
        meeting_decisions: self.meeting_decisions.order('created_at DESC'),
        meeting_open_issues: self.meeting_open_issues.order('created_at DESC'),
        meeting_action_items: self.meeting_action_items.order('created_at DESC'),
        summary: self.meeting_summaries.order('created_at DESC')
    }.to_json
  end

end