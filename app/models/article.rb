class Article < ActiveRecord::Base
  image_accessor :image
  scope :featured, where(:featured => true).order('date DESC')
  scope :not_featured, where(:featured => false).order('date DESC')
end
