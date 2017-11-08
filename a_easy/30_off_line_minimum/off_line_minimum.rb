def OffLineMinimum(strArr)
  last_e = strArr.rindex('E') + 1
  e_count = strArr.count('E')

  strArr.take(last_e).join('').split('E')
    .map do |item|
      item.length > 1 ? item.split(//).map(&:to_i) : item.to_i
    end
    .flatten.min(e_count).join(',')
end

# keep this function call here
puts OffLineMinimum(STDIN.gets)
