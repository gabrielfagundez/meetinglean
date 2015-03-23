class MeetingsMailer < ActionMailer::Base
  DEFAULT_EMAIL_FROM = 'meeting_summary@meetlean.com'

  default from: DEFAULT_EMAIL_FROM

  def summary(meeting, recipient)
    mail(subject: meeting.name, to: recipient)
  end

end