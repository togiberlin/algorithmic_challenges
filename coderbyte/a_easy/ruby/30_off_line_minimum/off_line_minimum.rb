def off_line_minimum(str_arr)
  last_e = str_arr.rindex('E') + 1
  e_count = str_arr.count('E')

  str_arr.take(last_e).join('').split('E')
         .map do |item|
           item.length > 1 ? item.split(//).map(&:to_i) : item.to_i
         end
         .flatten.min(e_count).join(',')
end
