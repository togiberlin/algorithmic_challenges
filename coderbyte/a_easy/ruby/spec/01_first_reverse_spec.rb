require_relative '../01_first_reverse/first_reverse.rb'

describe 'first_reverse' do
  context 'given \'Coderbyte\'' do
    let(:input) { 'Coderbyte' }

    it 'returns \'etybredoC\'' do
      expect(first_reverse(input)).to eq('etybredoC')
    end
  end

  context 'given \'I Love Coding\'' do
    let(:input) { 'I Love Coding' }

    it 'returns \'gnidoC evoL I\'' do
      expect(first_reverse(input)).to eq('gnidoC evoL I')
    end
  end

  context 'given \'h333llLo\'' do
    let(:input) { 'h333llLo' }

    it 'returns \'oLll333h\'' do
      expect(first_reverse(input)).to eq('oLll333h')
    end
  end

  context 'given \'Yo0\'' do
    let(:input) { 'Yo0' }

    it 'returns \'0oY\'' do
      expect(first_reverse(input)).to eq('0oY')
    end
  end

  context 'given \'thisiscool\'' do
    let(:input) { 'thisiscool' }

    it 'returns \'loocsisiht\'' do
      expect(first_reverse(input)).to eq('loocsisiht')
    end
  end

  context 'given \'commacomma!\'' do
    let(:input) { 'commacomma!' }

    it 'returns \'!ammocammoc\'' do
      expect(first_reverse(input)).to eq('!ammocammoc')
    end
  end

  context 'given \'123456789\'' do
    let(:input) { '123456789' }

    it 'returns \'987654321\'' do
      expect(first_reverse(input)).to eq('987654321')
    end
  end

  context 'given \'lettersz!23z\'' do
    let(:input) { 'lettersz!23z' }

    it 'returns \'z32!zsrettel\'' do
      expect(first_reverse(input)).to eq('z32!zsrettel')
    end
  end

  context 'given \'aq\'' do
    let(:input) { 'aq' }

    it 'returns \'qa\'' do
      expect(first_reverse(input)).to eq('qa')
    end
  end
end
