class Api::V1::TemperatureController < Api::V1::BaseApiController

    # GET /api/v1/temperature
    def index
        # TODO: don't query ALL of them, lets paginate them later
        @temperatures = Temperature.order(created_at: :desc)

        respond_to do |format|
            format.json { render json: @temperatures }
        end
    end

    # POST /api/v1/temperature
    def create
        @temperature = Temperature.new(temperature_params)


        if @temperature.save
            respond_to do |format|
                format.json { render json: @temperature }
            end
        else
            respond_to do |format|
                format.json { render json: @temperature.errors }
            end
        end
    end

    protected

    def temperature_params
        params.require(:temperature).permit(:humidity, :temperature)
    end
end