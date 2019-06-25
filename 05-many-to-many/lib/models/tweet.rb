# TWEET CLASS
# * message property
# * user property
# * class method called all that returns all the tweets
# * username method that returns the name of the user it belongs to
class Tweet
  attr_accessor(:message, :user)
  @@all = []

  def initialize(message:, user:)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def username
    @user.username
  end

  def likes
    Like.all.select { |like| like.tweet == self }
  end

  def users_who_liked_this
    likes.map { |like| like.user }
  end

end
