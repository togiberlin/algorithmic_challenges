def ab_check(str)
  bools = []

  for n in 0..str.length - 1 do
    if str[n] == 'a' && str[n + 4] == 'b' || str[n] == 'b' && str[n + 4] == 'a'
      bools << true
    else
      bools << false
    end
  end

  bools.include? true
end
