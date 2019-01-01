def arith_geo(arr)
  arith = []
  geo = []

  [*(0..arr.length - 2)].each do |n|
    arith << arr[n + 1] - arr[n]
    geo << arr[n + 1] / arr[n]
  end

  if arith.uniq.length == 1
    'Arithmetic'
  elsif geo.uniq.length == 1
    'Geometric'
  else
    -1
  end
end
