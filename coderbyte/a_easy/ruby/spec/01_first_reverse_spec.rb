require_relative '../01_first_reverse/first_reverse.rb'

describe Coderbyte do
  describe '.first_reverse' do
    context 'given \'Coderbyte\'' do
      let(:string) { 'Coderbyte' }
      subject { described_class.new(string) }

      it 'returns \'etybredoC\'' do
        expect(subject.first_reverse).to eq('etybredoC')
      end
    end

    context 'given \'I Love Coding\'' do
      let(:string) { 'I Love Coding' }
      subject { described_class.new(string) }

      it 'returns \'gnidoC evoL I\'' do
        expect(subject.first_reverse).to eq('gnidoC evoL I')
      end
    end

    context 'given \'h333llLo\'' do
      let(:string) { 'h333llLo' }
      subject { described_class.new(string) }

      it 'returns \'oLll333h\'' do
        expect(subject.first_reverse).to eq('oLll333h')
      end
    end

    context 'given \'Yo0\'' do
      let(:string) { 'Yo0' }
      subject { described_class.new(string) }

      it 'returns \'0oY\'' do
        expect(subject.first_reverse).to eq('0oY')
      end
    end

    context 'given \'thisiscool\'' do
      let(:string) { 'thisiscool' }
      subject { described_class.new(string) }

      it 'returns \'loocsisiht\'' do
        expect(subject.first_reverse).to eq('loocsisiht')
      end
    end

    context 'given \'commacomma!\'' do
      let(:string) { 'commacomma!' }
      subject { described_class.new(string) }

      it 'returns \'!ammocammoc\'' do
        expect(subject.first_reverse).to eq('!ammocammoc')
      end
    end

    context 'given \'123456789\'' do
      let(:string) { '123456789' }
      subject { described_class.new(string) }

      it 'returns \'987654321\'' do
        expect(subject.first_reverse).to eq('987654321')
      end
    end

    context 'given \'lettersz!23z\'' do
      let(:string) { 'lettersz!23z' }
      subject { described_class.new(string) }

      it 'returns \'z32!zsrettel\'' do
        expect(subject.first_reverse).to eq('z32!zsrettel')
      end
    end

    context 'given \'aq\'' do
      let(:string) { 'aq' }
      subject { described_class.new(string) }

      it 'returns \'qa\'' do
        expect(subject.first_reverse).to eq('qa')
      end
    end
  end
end
