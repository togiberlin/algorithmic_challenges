require_relative '../19_second_great_low/second_great_low.rb'

describe '#second_great_low' do
  it "[1, 42, 42, 180] should return '42 42'" do
    expect(second_great_low([1, 42, 42, 180])).to eq('42 42')
  end

  it "[4, 90] should return '90 4'" do
    expect(second_great_low([4, 90])).to eq('4 90')
  end
end
