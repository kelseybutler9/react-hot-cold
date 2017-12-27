import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('clears on a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
          guesses: [12,45,80,99],
          feedback: 'Make another guess',
          correctAnswer: 20
        });

        wrapper.instance().restartGame();

        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

    });

    it('Can make a guess', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
      correctAnswer: 99
    });

    wrapper.instance().makeGuess(30);
    expect(wrapper.state('guesses')).toEqual([30]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().makeGuess(78);
    expect(wrapper.state('guesses')).toEqual([30,78]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(99);
    expect(wrapper.state('guesses')).toEqual([30,78,99]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });

  it('Can provide updates', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({correctAnswer: 95});
    wrapper.instance().makeGuess(30);
    wrapper.instance().makeGuess(15);
    wrapper.instance().makeGuess(75);
    wrapper.instance().generateAuralUpdate();

    expect(wrapper.state('auralStatus')).toEqual(`Here\'s the status of the game right now: You\'re Warm. You\'ve made 3 guesses. In order of most- to least-recent, they are: 30,15,75`);
    });
});
