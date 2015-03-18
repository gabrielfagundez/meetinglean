class Api::MeetingDecisionsController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_decision = MeetingActionItem.create(meeting_id: meeting.id, description: params[:meeting_decision][:description])
    render json: meeting_decision.to_json
  end

  def update
    meeting_decision = MeetingActionItem.find(params[:id])
    meeting_decision.description = params[:meeting_decision][:description]
    meeting_decision.meeting_id = params[:meeting_decision][:meeting_id]
    meeting_decision.save

    render json: meeting_decision.to_json
  end

end