class Client < ActiveRecord::Base

  has_and_belongs_to_many :clients
  has_many :projects

end
