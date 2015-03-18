class Api::MeetingSummariesController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_summary = MeetingSummary.create(meeting_id: meeting.id, description: params[:meeting_summary][:description])
    render json: meeting_summary.to_json
  end

  def update
    meeting_summary = MeetingSummary.find(params[:id])
    meeting_summary.description = params[:description]
    meeting_summary.meeting_id = params[:meeting_id]
    meeting_summary.save

    render json: meeting_summary.to_json
  end

end