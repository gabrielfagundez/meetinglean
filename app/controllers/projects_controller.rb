class ProjectsController < ApplicationController

  def index
    @projects = []
  end

  def show
    @project = Project.first
  end

end
