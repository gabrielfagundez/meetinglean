class Api::MeetingSummariesController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_summary = MeetingActionItem.create(meeting_id: meeting.id, description: params[:meeting_summary][:description])
    render json: meeting_summary.to_json
  end

  def update
    meeting_summary = MeetingActionItem.find(params[:id])
    meeting_summary.description = params[:meeting_summary][:description]
    meeting_summary.meeting_id = params[:meeting_summary][:meeting_id]
    meeting_summary.save

    render json: meeting_summary.to_json
  end

end