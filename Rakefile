require 'rake'
require 'date'
require 'pathname'
require 'fileutils'
require 'active_support/all'

namespace :post do

  desc "Create a new post template"
  task :new do
    unless ENV["TITLE"]
      raise "ERROR: e.g. rake gen:post TITLE='post file name'"
    end

    title = ENV['TITLE']
    date  = ENV['DATE'] || Date.today.to_s

    filename  = "#{date}-#{title.downcase.gsub(/\s+/, "-")}.markdown"
    directory = File.expand_path('_posts/', File.dirname(__FILE__))
    post_path = File.join(directory, filename)

    if File.exist?(post_path)
      raise "ERROR: post file '#{post_path}' already exists"
    end

    File.write post_path, <<-EOF.strip_heredoc
      ---
      layout: post
      title:  "#{title}"
      date:   #{date} 23:00:00 +0800
      ---
    EOF

    puts "Created #{post_path}"
  end

  
end
