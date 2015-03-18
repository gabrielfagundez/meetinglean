class Api::MeetingPrivateNotesController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_private_note = MeetingPrivateNote.create(meeting_id: meeting.id, description: params[:meeting_private_note][:description])
    render json: meeting_private_note.to_json
  end

  def update
    meeting_private_note = MeetingPrivateNote.find(params[:id])
    meeting_private_note.description = params[:description]
    meeting_private_note.meeting_id = params[:meeting_id]
    meeting_private_note.save

    render json: meeting_private_note.to_json
  end

end