def DashInsert(str)
  array = str.split(//)

  array.each_index do |index|
    if array[index].to_i.odd? && array[index+1].to_i.odd?
      array.insert(index + 1, '-')
    end
  end
end

# keep this function call here
puts DashInsert(STDIN.gets)
