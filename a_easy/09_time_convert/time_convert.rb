def TimeConvert(num)
  if num >= 60
    hours = num / 60
    minutes = num % 60
    "#{hours}:#{minutes}"
  else
    '0:' + num.to_s
  end
end

# keep this function call here
puts TimeConvert(STDIN.gets)
