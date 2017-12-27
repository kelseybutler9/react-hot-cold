import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
      shallow(<GuessCount />);
  });

  it('Renders the guess count', () => {
      const number = 5;
      const wrapper = shallow(<GuessCount guessCount={number}  />);
      expect(wrapper.text()).toEqual(`You've made ${number} guesses!`);
  });
});
