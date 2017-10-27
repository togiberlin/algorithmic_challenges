def ABCheck(str)
  bools = []

  for n in 0..str.length-1 do
    if str[n] == 'a'
      if str[n+4] == 'b'
        bools << 'true'
      else
        bools << 'false'
      end
    end
  end

  if bools.include? 'true'
    true
  else
    false
  end
end

# keep this function call here
puts AlphabetSoup(STDIN.gets)
