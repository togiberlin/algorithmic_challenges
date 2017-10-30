def NumberAddition(str)
  str.split(/[a-zA-Z\s]+/).map(&:to_i).sum
end

# keep this function call here
puts NumberAddition(STDIN.gets)
