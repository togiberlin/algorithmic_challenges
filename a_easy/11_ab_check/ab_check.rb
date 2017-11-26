def ab_check(str)
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
