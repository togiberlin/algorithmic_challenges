require_relative '../14_ex_oh/ex_oh.rb'

describe '#ex_oh' do
  it "'xooxxo' should return 'true'" do
    expect(ex_oh('xooxxo')).to eq(true)
  end

  it "'x' should return 'false'" do
    expect(ex_oh('x')).to eq(false)
  end
end
