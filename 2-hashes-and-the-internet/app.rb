require "rest-client"
require "pry"
require "json"

# Take a search term from the user
def get_user_input
  puts "Please enter a search term"
  gets.chomp
end
# Make a request to the API with that search term
def make_request(search_term)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{search_term}")
  final_response = JSON.parse(response)
end

def get_books(information)
  information["items"]
end

def get_title(book)
  book["volumeInfo"]["title"]
end

def run
  user_input = get_user_input
  response = make_request(user_input)
  books = get_books(response)
  books.each do |book|
    puts "This book is called: #{get_title(book)}"
  end
  return
end
binding.pry
# Output the title of every book we get back
