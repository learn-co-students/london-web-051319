class App

  def wrap_html (content)
    "<!DOCTYPE html>
    <html lang=\"en\">
      <head>
        <title>051319</title>
      </head>
      <body>
      #{content}
      </body>
      </html>
      "
  end

  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    instructor_names = ['sam','jo','sarah','sofia']
    
    if req.path == '/'
      resp.write('welcome to the awesome homepage')
      resp.status = 200
    elsif req.path == '/051319'
      resp.write('welcome to mod 2, choose your cohort name')
      resp.status = 200
    elsif req.path == '/instructors'
      resp.write(self.wrap_html instructor_names.join(', '))
      resp.status = 200
    else
      resp.write('404 page not found')
      resp.status = 404
    end

    resp.finish
  end
end
