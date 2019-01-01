def simple_adding(num)
  if num <= 1
    num
  else
    [*(1..num)].reduce(:+)
  end
end
