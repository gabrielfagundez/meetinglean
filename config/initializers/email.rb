email_config =  YAML.load(File.read('config/email.yml'))[Rails.env] if File.exist?('config/email.yml')
email_config ||= {}

ActionMailer::Base.smtp_settings = {
    address:              'smtp.gmail.com',
    port:                 587,
    user_name:            ENV['GMAIL_USERNAME'] || email_config['username'],
    password:             ENV['GMAIL_PASSWORD'] || email_config['password'],
    authentication:       'plain',
    enable_starttls_auto: true
}