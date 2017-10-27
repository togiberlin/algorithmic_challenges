def LetterChanges(str)
  str.gsub!(/[a-zA-Z]/) do |char|
    if char == ('z' || 'Z')
      'a'
    else
      (char.ord + 1).chr
    end
  end

  str.tr!('aeiou', 'AEIOU')
end

# keep this function call here
puts LetterChanges(STDIN.gets)
