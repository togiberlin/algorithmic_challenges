def letter_count_i(str)
  words = str.split(' ')
  hash_map = Hash.new(0)

  words.each do |word|
    hash_map[word] = count_repeated(word)
  end

  hash_map.values.max > 0 ? hash_map.key(hash_map.values.max) : -1
end

def count_repeated(word)
  hash_map = Hash.new(0)
  word.chars { |letter| hash_map[letter] += 1 }
  hash_map.count { |_x, y| y > 1 }
end
