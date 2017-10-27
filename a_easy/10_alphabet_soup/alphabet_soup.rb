def AlphabetSoup(str)
  str.split(//).sort!.join('')
end

# keep this function call here
puts AlphabetSoup(STDIN.gets)  
