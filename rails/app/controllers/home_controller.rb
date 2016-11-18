class HomeController < ApplicationController
  def index
    @temperature = Temperature.last


    respond_to do |format|
        format.html # render index.html.erb
    end
  end
end