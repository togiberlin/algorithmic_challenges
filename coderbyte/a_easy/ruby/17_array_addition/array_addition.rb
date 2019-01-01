def array_addition_i(arr)
  largest_number = arr.max
  arr.delete(largest_number)

  arr.repeated_combination(arr.length)
     .to_a
     .map { |ary| ary.uniq.inject(:+) }.include? largest_number
end
