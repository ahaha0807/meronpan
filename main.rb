require 'sinatra'
require 'sinatra/reloader'

# View ページ用ルーティング
get '/' do
  File.read(File.join('public/dist', 'index.html'))
end

get '/meronpan' do
  File.read(File.join('public/dist', 'index.html'))
end
8
get %r{/meronpan/create/?} do
  File.read(File.join('public/dist', 'create.html'))
end

get '/meronpan/:id' do |id|
  File.read(File.join('public/dist', 'show.html'))
end

# API 用ルーティング
require './logic/index'
get '/api/v1/meronpans' do
  index = Index.new
  index.getData
end

require './logic/show'
get '/api/v1/meronpan/:id' do |id|
  show = Show.new
  show.getData(id)
end

require './logic/create'
require 'json'
post '/api/v1/meronpan' do
  # POSTされたデータ取得
  request.body.rewind
  data = JSON.parse(request.body.read, {symbolize_names: true})

  create = Create.new
  create.postData(data)
end