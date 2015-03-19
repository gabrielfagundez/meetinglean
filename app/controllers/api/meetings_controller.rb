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

  def create
    render json: Meeting.create(name: 'Meeting Name', start_time: DateTime.now).full_json_data
  end

  def update
    meeting = Meeting.find_by_id(params[:id])
    if meeting
      meeting.name = params[:name] if params[:name].present?
      meeting.started = true if params[:started].present? && params[:started] == 'true'
      meeting.save!
      update_related_item(meeting, params[:meeting_agendas], MeetingAgenda) if params[:meeting_agendas].present?
      update_related_item(meeting, params[:meeting_private_notes], MeetingPrivateNote) if params[:meeting_private_notes].present?
      update_related_item(meeting, params[:meeting_decisions], MeetingDecision) if params[:meeting_decisions].present?
      update_related_item(meeting, params[:meeting_open_issues], MeetingOpenIssue) if params[:meeting_open_issues].present?
      update_related_item(meeting, params[:meeting_action_items], MeetingActionItem) if params[:meeting_action_items].present?
      update_related_item(meeting, params[:meeting_summaries], MeetingSummary) if params[:meeting_summaries].present?

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
        klass.create(meeting_id: meeting.id, description: item[:description])
      end
    end
  end

end