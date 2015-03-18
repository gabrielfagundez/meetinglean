class Api::MeetingActionItemsController < ApplicationController

  def create
    meeting = Meeting.find(params[:meeting_id])
    meeting_action_item = MeetingActionItem.create(meeting_id: meeting.id, description: params[:meeting_action_item][:description])
    render json: meeting_action_item.to_json
  end

  def update
    meeting_action_item = MeetingActionItem.find(params[:id])
    meeting_action_item.description = params[:description]
    meeting_action_item.meeting_id = params[:meeting_id]
    meeting_action_item.save

    render json: meeting_action_item.to_json
  end

end