def letter_capitalize(str)
  str.split.map { |word| word.capitalize }.join(' ')
end
