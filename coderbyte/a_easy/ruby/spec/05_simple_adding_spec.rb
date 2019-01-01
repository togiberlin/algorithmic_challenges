require_relative '../05_simple_adding/simple_adding.rb'

describe '#simple_adding' do
  it '12 returns 78' do
    expect(simple_adding(12)).to eq(78)
  end

  it '140 returns 9870' do
    expect(simple_adding(140)).to eq(9870)
  end
end
