Rails.application.routes.draw do
  get 'shoe/new'
  root 'home#index'
  namespace :api do
    namespace :v1 do
      get 'tables/:id', to: 'tables#index'
      get 'table/:id', to: 'tables#show'
      get 'shoe/new'
      get 'table_types/index'
      get 'table_type/:id', to: 'table_types#show'
      get 'table/:id/join/:username', to: 'tables#join'
      get 'table/:id/deal', to: 'tables#deal'
      get 'table/:id/hit/:username', to: 'tables#hit'
    end
  end
  get '/*path' => 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
