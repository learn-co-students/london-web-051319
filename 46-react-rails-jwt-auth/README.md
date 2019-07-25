## Backend

# Set up

`rails new security-blog --api --database=postgresql`

`bundle add active_model_serializers`

uncomment `rack-cors` and `bcrypt` from Gemfile

`bundle install`

# Create Models and Controllers

`rails g model User email password_digest`

`rails g controller api/v1/users`

`rails g serializer user`

`rails g model Post title content:text user:references`

`rails g controller api/v1/posts`

`rails g serializer post`

`rails db:create`

`rails db:migrate`

add `has_secure_password` and `has_many :posts` to User

# Build controller functionality

`users#create`

update routes:

```
namespace :api do
    namespace :v1 do
        resources :users, only: [:create]
    end
end
```

run `rails s`

go to `http://localhost:3000` in your browser and run `fetch('http://localhost:3000/api/v1/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({user:{email:'a@a.com',password:'a123'}}) })` in the console

update `UserSerializer` with the attributes you want to include (`:email`)

`posts#create`

update routes with `resources :posts, only: [:create]`

in your browser, run `fetch('http://localhost:3000/api/v1/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({post:{user_id:1,title:'first post',content:'super secure stuff'}}) })`

update `PostSerializer` with the attributes you want to include (`:title, :content, :user`)

create a `user` method on PostSerializer to use the UserSerializer:

```
class PostSerializer < ActiveModel::Serializer
  attributes :id, :user, :title, :content

  def user
    UserSerializer.new(self.object.user)
  end
end
```