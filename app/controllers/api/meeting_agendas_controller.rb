class Api::MeetingAgendasController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    MeetingAgenda.create(meeting_id: meeting.id, description: params[:meeting_agenda][:description])
    render json: meeting.full_json_data
  end

  def update
    meeting_agenda = MeetingAgenda.find(params[:id])
    meeting_agenda.description = params[:meeting_agenda][:description]
    meeting_agenda.meeting_id = params[:meeting_agenda][:meeting_id]
    meeting_agenda.save

    render json: Meeting.find(params[:meeting_agenda][:meeting_id]).full_json_data
  end

end