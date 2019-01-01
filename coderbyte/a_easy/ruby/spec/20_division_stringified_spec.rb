require_relative '../20_division_stringified/division_stringified.rb'

describe '#division_stringified' do

  it "5 and 2 should return '3'" do
    expect(division_stringified(5, 2)).to eq('3')
  end

  it "6874 and 67 should return '103'" do
    expect(division_stringified(6874, 67)).to eq('103')
  end

  it "123456789 and 10000 should return '12,346'" do
    expect(division_stringified(123_456_789, 10_000)).to eq('12,346')
  end

end
