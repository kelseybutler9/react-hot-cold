import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
      shallow(<Feedback />);
  });

  it('Renders feedback', () => {
      const feedback = 'feedback ran';

      const wrapper = shallow(<Feedback feedback={feedback}/>);
      expect(wrapper.contains(feedback)).toEqual(true);
    });
});
