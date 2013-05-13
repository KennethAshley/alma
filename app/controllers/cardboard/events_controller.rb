class Cardboard::EventsController < Cardboard::AdminController

  def self.icon
    # see http://fortawesome.github.io/Font-Awesome/ for more icon options
    "icon-calendar"
  end

  def permitted_strong_parameters
    [:image, :title, :location, :date, :body]
  end
end