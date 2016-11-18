class Api::V1::BaseApiController < ApplicationController
    # authentication will go in here
    skip_before_action :verify_authenticity_token
end