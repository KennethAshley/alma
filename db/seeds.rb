# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

AdminUser.create(:email => 'k@k.com', :password => 'kenneth', :password_confirmation => 'kenneth')

3.times do
  Event.create title: Faker::Lorem.sentence, location: Faker::Address.city, body: Faker::Lorem.paragraph, date: Date.today, image: File.open(File.join(Rails.root, 'public', 'seeds', 'test.gif'))
  Article.not_featured.create title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, date: Date.today, image: File.open(File.join(Rails.root, 'public', 'seeds', 'test.gif'))
end

  Article.featured.create title: Faker::Lorem.sentence, body: Faker::Lorem.paragraph, date: Date.today, image: File.open(File.join(Rails.root, 'public', 'seeds', 'test.gif'))
