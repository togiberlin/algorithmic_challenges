def mean_mode(arr)
  mean = arr.inject(:+) / arr.length
  mode = arr.max_by { |i| arr.count(i) }

  mean == mode ? 1 : 0
end
