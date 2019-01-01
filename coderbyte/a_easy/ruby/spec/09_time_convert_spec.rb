require_relative '../09_time_convert/time_convert.rb'

describe '#time_convert' do

  it "126 should return '2:6'" do
    expect(time_convert(126)).to eq('2:6')
  end

  it "45 should return '0:45'" do
    expect(time_convert(45)).to eq('0:45')
  end

  it "63 should return '1:3'" do
    expect(time_convert(63)).to eq('1:3')
  end

end
