require_relative '../17_array_addition/array_addition.rb'

describe '#array_addition_i' do

  it "[5, 7, 16, 1, 2] should return 'false'" do
    expect(array_addition_i([5, 7, 16, 1, 2])).to eq(false)
  end

  it "[3, 5, -1, 8, 12] should return 'true'" do
    expect(array_addition_i([3, 5, -1, 8, 12])).to eq(true)
  end

end
