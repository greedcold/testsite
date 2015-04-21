# Modified version of TryStatic, from rack-contrib
# https://github.com/rack/rack-contrib/blob/master/lib/rack/contrib/try_static.rb

# Serve static files under a `build` directory:
# - `/` will try to serve your `build/index.html` file
# - `/foo` will try to serve `build/foo` or `build/foo.html` in that order
# - missing files will try to serve build/404.html or a tiny default 404 page

require File.expand_path("../rack_try_static", __FILE__)

use ::Rack::TryStatic,
  :root => "build",
  :urls => ["/"],
  :try => [".html", "index.html", "/index.html"]

run lambda { [404, {"Content-Type" => "text/plain"}, ["File not found!"]] }
