# USER CLASS
# * username property
# * tweets property
# * post_tweet that will create a new tweet and add it to that user's tweets collection
class User
  attr_accessor(:username)

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    tweet = Tweet.new(message: message, user: self)
  end

  def like_tweet(tweet)
    Like.new(user: self, tweet: tweet)
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end


end
