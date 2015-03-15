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
      summary: meeting.meeting_summaries
    }
  end

end