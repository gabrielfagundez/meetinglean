class Api::MeetingAgendasController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_agenda = MeetingAgenda.create(meeting_id: meeting.id, description: params[:meeting_agenda][:description])
    render json: meeting_agenda.to_json
  end

  def update
    meeting_agenda = MeetingAgenda.find(params[:id])
    meeting_agenda.description = params[:description]
    meeting_agenda.meeting_id = params[:meeting_id]
    meeting_agenda.save

    render json: meeting_agenda.to_json
  end

end