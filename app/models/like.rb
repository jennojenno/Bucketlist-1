class Like < ActiveRecord::Base
  attr_accessible :item_id, :user_id
  belongs_to :user
  belongs_to :todo_item

end
