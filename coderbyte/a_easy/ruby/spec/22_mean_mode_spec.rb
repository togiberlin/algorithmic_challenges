require_relative '../22_mean_mode/mean_mode.rb'

describe '#mean_mode' do

  it '[1, 2, 3] should return 0' do
    expect(mean_mode([1, 2, 3])).to eq(0)
  end

  it '[4, 4, 4, 6, 2] should return 1' do
    expect(mean_mode([4, 4, 4, 6, 2])).to eq(1)
  end

end
