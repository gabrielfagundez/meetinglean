class Meeting < ActiveRecord::Base

  has_many :meeting_agendas
  has_many :meeting_private_notes
  has_many :meeting_summaries
  has_many :meeting_decisions
  has_many :meeting_open_issues
  has_many :meeting_action_items

  belongs_to :user

  def full_json_data
    start_time = self.start_time.strftime('%A, %B %-d, %Y - %H:%M') if start_time.present?
    {
        id: self.id,
        name: self.name,
        start_time: start_time,
        started: self.started,
        finished: self.finished,
        meeting_agendas: self.meeting_agendas.order('created_at ASC').all,
        meeting_private_notes: self.meeting_private_notes.order('created_at ASC'),
        meeting_decisions: self.meeting_decisions.order('created_at ASC'),
        meeting_open_issues: self.meeting_open_issues.order('created_at ASC'),
        meeting_action_items: self.meeting_action_items.order('created_at ASC'),
        meeting_summaries: self.meeting_summaries.order('created_at ASC')
    }.to_json
  end

end