class TodoItemsController < ApplicationController

	def index
		@items = TodoItem.all
		@destinations = Destination.all
	end

	def show
		@item = TodoItem.find(params[:id])
	end

	def create
		@item = TodoItem.new(params[:todo_item])
		@item.save!

		render @item
  end


  def like
  	todo_item = TodoItem.find(params[:id])
  	Like.create(:todo_item_id => todo_item.id, :user => User.first)
  end 

end
