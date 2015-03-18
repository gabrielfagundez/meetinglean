class Api::MeetingsController < ApplicationController

  def create
    meeting = Meeting.find(params[:id])
    MeetingAgenda.create(meeting_id: meeting.id, description: params[:description])
  end

  def update
    meeting_agenda = MeetingAgenda.find(params[:id])
    meeting_agenda.description = params[:description]
    meeting_agenda.save
  end

end