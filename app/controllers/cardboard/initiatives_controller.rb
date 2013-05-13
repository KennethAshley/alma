class Cardboard::InitiativesController < Cardboard::AdminController

  def self.icon
    # see http://fortawesome.github.io/Font-Awesome/ for more icon options
    "icon-hand-up"
  end

  def permitted_strong_parameters
    [:image, :title, :body, :summary]    
  end
end