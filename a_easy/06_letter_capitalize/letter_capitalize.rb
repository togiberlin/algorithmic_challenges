def LetterCapitalize(str)
  str.split.map { |word| word.capitalize }.join(' ')
end

# keep this function call here
puts LetterCapitalize(STDIN.gets)
