class User < Person
  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String

  store_in collection: :users
end
