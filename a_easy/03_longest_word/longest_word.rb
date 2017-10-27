def LongestWord(sen)
  if !sen.include? ' '
    sen
  else
    sen.gsub!(/[^0-9A-Za-z]/, ' ').split.max_by(&:length)
  end
end

# keep this function call here
puts LongestWord(STDIN.gets)
