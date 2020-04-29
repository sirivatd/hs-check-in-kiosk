class Student < ApplicationRecord
  include ActionView::Helpers::DateHelper

  # validates :email_address
  validates :first_name, null: false
  validates :last_name, null: false
end
