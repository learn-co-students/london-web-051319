class Tweet
  attr_accessor :message, :username, :id

  def self.all
    sql = "SELECT * FROM tweets;"
    results = DB[:conn].execute(sql)
    hydrate(results)
  end

  def self.hydrate(results)
    results.map { |result| Tweet.new(result)}
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
  end

  def save
    if !self.id
      sql = "INSERT INTO tweets (message, username) VALUES (?, ?);"
      DB[:conn].execute(sql, self.message, self.username)
    else
      sql = "UPDATE tweets SET message = ?, username = ? WHERE id = ?;"
      DB[:conn].execute(sql, self.message, self.username, self.id)
    end
  end

  def self.destroy(id)
    sql = "DELETE FROM tweets WHERE id = ?"
    DB[:conn].execute(sql, id)
  end

end
