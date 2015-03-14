class Api::MeetingsController < ApplicationController

  def index
    render json: Meeting.order('start_time DESC').all
  end

  def show
    meeting = Meeting.includes(:meeting_agenda).find(params[:id])
    render json: {
      name: meeting.name,
      description: meeting.description,
      agenda: meeting.meeting_agenda
    }
  end

end