require 'sinatra'
require 'sinatra/reloader'

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/meronpan' do
  File.read(File.join('public', 'index.html'))
end
8
get %r{/meronpan/create/?} do
  File.read(File.join('public', 'create.html'))
end

get '/meronpan/:id' do
  File.read(File.join('public', 'show.html'))
end