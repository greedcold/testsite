# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
source 'https://rubygems.org'

ruby '2.1.3'
gem 'rack-contrib'

gem "middleman", "~>3.3.10"

gem "bootstrap-sass", :require => false

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

gem "thin"

gem "jquery-middleman"
# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
gem "tzinfo-data", platforms: [:mswin, :mingw]

gem 'rails_12factor', group: :development
group :development do
   gem "heroku"
   gem "watchr"
   gem "rb-fsevent"
end
