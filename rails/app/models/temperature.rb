# == Schema Information
#
# Table name: temperatures
#
#  id          :integer          not null, primary key
#  humidity    :float
#  temperature :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Temperature < ApplicationRecord
    # Validations are run whenever the model is saved
    # These validations make sure that humidity and temperature are both included
    validates :humidity, presence: true
    validates :temperature, presence: true
end