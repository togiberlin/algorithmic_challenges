require_relative '../11_ab_check/ab_check.rb'

describe '#ab_check' do
  it "'after badly' should return 'false'" do
    expect(ab_check('after badly')).to eq(false)
  end

  it "'Laura sobs' should return 'true'" do
    expect(ab_check('Laura sobs')).to eq(true)
  end
end
