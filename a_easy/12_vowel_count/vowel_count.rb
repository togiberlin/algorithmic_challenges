def VowelCount(str)
  str.scan(/[aeiou]/).length
end

# keep this function call here
puts VowelCount(STDIN.gets)
