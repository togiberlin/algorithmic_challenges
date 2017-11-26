def second_great_low(arr)
  arr.uniq!
  arr.sort!

  if arr.length > 3
    second_lowest_index = arr.index(arr.min) + 1
    second_greatest_index = arr.index(arr.max) - 1
    "#{arr[second_lowest_index]} #{arr[second_greatest_index]}"
  elsif arr.length == 3
    "#{arr[1]} #{arr[1]}"
  elsif arr.length == 1
    "#{arr[0]} #{arr[0]}"
  else
    "#{arr[0]} #{arr[1]}"
  end
end
