import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });
  it('Renders guesses list', () => {
    const guesses = [15,37,60];
    const wrapper = shallow(<GuessList guesses={guesses}/>)
    const list = wrapper.find('li');
    expect(list.length).toEqual(values.list);
    list.forEach((item, index) => {
      expect(list.at(index).text()).toEqual(item.toString());
    });
  });
})
