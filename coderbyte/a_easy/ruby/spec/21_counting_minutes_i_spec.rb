require_relative '../21_counting_minutes_i/counting_minutes_i.rb'

describe '#counting_minutes_i' do

  it "'12:30pm-12:00am' should return 690" do
    expect(counting_minutes_i('12:30pm-12:00am')).to eq(690)
  end

  it "'1:23am-1:08am' should return 1425" do
    expect(counting_minutes_i('1:23am-1:08am')).to eq(1425)
  end

end
