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

    # respond_to do |format|
    #   if @item.save
    #     format.html { redirect_to @item, notice: 'item was successfully created.' }
    #     format.json { render json: @item, status: :created, location: @item }
    #   else
    #     format.html { render action: "new" }
    #     format.json { render json: @item.errors, status: :unprocessable_entity }
    #   end
    # end
  end
end
