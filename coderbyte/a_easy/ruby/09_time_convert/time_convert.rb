def time_convert(num)
  if num >= 60
    hours = num / 60
    minutes = num % 60
    "#{hours}:#{minutes}"
  else
    '0:' + num.to_s
  end
end
