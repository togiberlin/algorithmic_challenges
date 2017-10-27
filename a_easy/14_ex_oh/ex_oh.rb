def ExOh(str)
  str.scan(/[x]/).length == str.scan(/[o]/).length
end

# keep this function call here
puts ExOh(STDIN.gets)
