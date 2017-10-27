def WordCount(str)
  str.scan(/[ ]/).length + 1
end

# keep this function call here
puts WordCount(STDIN.gets)
