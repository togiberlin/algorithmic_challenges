require 'time'

def counting_minutes_i(str)
  # convert to 24-hour format
  array = str.split('-').map do |time|
    Time.strptime(time, '%I:%M%P').strftime('%H:%M')
  end

  # create Time object, calculate difference
  beginning = Time.parse("2018-01-01 #{array[0]} +0100")
  ending =
    Time.parse("2018-01-#{array[0] < array[1] ? 01 : 02} #{array[1]} +0100")

  (ending - beginning).to_i / 3600 # in hours
  (ending - beginning).to_i / 60 # in minutes
end
