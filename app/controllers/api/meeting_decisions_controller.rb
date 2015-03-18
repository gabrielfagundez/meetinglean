class Api::MeetingDecisionsController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_decision = MeetingDecision.create(meeting_id: meeting.id, description: params[:meeting_decision][:description])
    render json: meeting_decision.to_json
  end

  def update
    meeting_decision = MeetingDecision.find(params[:id])
    meeting_decision.description = params[:description]
    meeting_decision.meeting_id = params[:meeting_id]
    meeting_decision.save

    render json: meeting_decision.to_json
  end

end