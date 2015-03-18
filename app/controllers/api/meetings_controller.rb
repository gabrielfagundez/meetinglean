class Api::MeetingsController < ApplicationController

  def index
    render json: Meeting.order('start_time DESC').all
  end

  def show
    meeting = Meeting.find_by_id(params[:id])
    if meeting.present?
      render json: meeting.full_json_data
    else
      render json: {}
    end
  end

  def update
    meeting = Meeting.find_by_id(params[:id])
    if meeting
      meeting.name = params[:name] if params[:name].present?
      meeting.description = params[:description] if params[:description].present?
      update_related_item(meeting, params[:agenda], MeetingAgenda) if params[:agenda].present?
      update_related_item(meeting, params[:private_notes], PrivateNote) if params[:private_notes].present?
      update_related_item(meeting, params[:meeting_decisions], MeetingDecision) if params[:meeting_decisions].present?
      update_related_item(meeting, params[:meeting_open_issues], MeetingOpenIssue) if params[:meeting_open_issues].present?
      update_related_item(meeting, params[:meeting_action_items], MeetingActionItem) if params[:meeting_action_items].present?
      update_related_item(meeting, params[:summary], MeetingSummary) if params[:summary].present?

      render json: meeting.full_json_data
    else
      render json: {}
    end
  end

  private

  def update_related_item(meeting, items, klass)
    items.each do |item|
      if item[:id].present?
        meeting_agenda = klass.find(item[:id])
        meeting_agenda.description = item[:description]
        meeting_agenda.save
      else
        MeetingAgenda.create(meeting_id: meeting.id, description: meeting_agenda[:description])
      end
    end
  end

end