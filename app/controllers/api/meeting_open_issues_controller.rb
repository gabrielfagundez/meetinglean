class Api::MeetingOpenIssuesController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_open_issue = MeetingActionItem.create(meeting_id: meeting.id, description: params[:meeting_open_issue][:description])
    render json: meeting_open_issue.to_json
  end

  def update
    meeting_open_issue = MeetingActionItem.find(params[:id])
    meeting_open_issue.description = params[:meeting_open_issue][:description]
    meeting_open_issue.meeting_id = params[:meeting_open_issue][:meeting_id]
    meeting_open_issue.save

    render json: meeting_open_issue.to_json
  end

end