Bucketlist::Application.routes.draw do
  resources :comments, :only => [:create]
  resources :todo_items, :only => [:index, :show, :create]

  root :to => 'todo_items#index'


  # root :to => 'welcome#index'

  
end
