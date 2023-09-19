class Person
  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String
end
