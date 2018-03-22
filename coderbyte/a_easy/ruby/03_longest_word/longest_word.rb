def longest_word(sen)
  if !sen.include? ' '
    sen
  else
    sen.gsub!(/[^0-9A-Za-z]/, ' ').split.max_by(&:length)
  end
end
