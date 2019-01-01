require_relative '../02_first_factorial/first_factorial.rb'

describe '#first_factorial' do
  it 'returns 24 if the input is 4' do
    expect(first_factorial(4)).to eq(24)
  end

  it 'returns 40320 if the input is 8' do
    expect(first_factorial(8)).to eq(40_320)
  end
end
