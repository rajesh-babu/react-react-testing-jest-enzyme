import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Counter from './Counter';

describe('My Test suite', ()=>{
  it('check the counter is 0', ()=>{
    const wrapper = shallow(<Counter />);
    const CounterState = wrapper.state().counter;
    expect(CounterState).toBe(0);
  })
});
