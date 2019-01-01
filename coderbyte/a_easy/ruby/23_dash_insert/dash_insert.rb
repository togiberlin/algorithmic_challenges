def dash_insert(str)
  array = str.split(//)

  array.each_index do |index|
    if array[index].to_i.odd? && array[index + 1].to_i.odd?
      array.insert(index + 1, '-')
    end
  end

  array.join('')
end
