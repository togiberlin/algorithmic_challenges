require_relative '../08_check_nums/check_nums.rb'

describe '#check_nums' do

  it "when num1 = 3 and num2 = 122, return 'true'" do
    expect(check_nums(3, 122)).to eq(true)
  end

  it "when num1 = 67 and num2 = 67, return '-1'" do
    expect(check_nums(67, 67)).to eq(-1)
  end

  it "when num1 = 5 and num2 = 1, return 'false'" do
    expect(check_nums(5, 1)).to eq(false)
  end

end
