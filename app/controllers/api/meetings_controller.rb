class Api::MeetingsController < ApplicationController

  def index
    render json: Meeting.order('start_time DESC').all
  end

  def show
    meeting = Meeting.includes(:meeting_agendas).find(params[:id])
    render json: {
      id: meeting.id,
      name: meeting.name,
      description: meeting.description,
      agenda: meeting.meeting_agendas,
      private_notes: meeting.private_notes,
      meeting_decisions: meeting.meeting_decisions,
      meeting_open_issues: meeting.meeting_open_issues,
      meeting_action_items: meeting.meeting_action_items,
      summary: meeting.meeting_summaries
    }
  end

end