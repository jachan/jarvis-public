Rails.application.routes.draw do
    # Root is /
    root to: 'home#index'

    namespace :api do
        # All routes under here will have to be prefixed with /api
        namespace :v1 do
            # All routes under here will have to be prefixed with /api/v1
            resources :temperature, only: [:index, :create]

            # This line above will create two routes
            # GET /api/v1/tempatures
            # POST /api/v1/tempatures
        end
      end
end
