import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Title from '../components/Title.jsx';
import Highlights from '../components/Highlights.jsx';
import Description from '../components/Description.jsx';
import Contact from '../components/Contact.jsx';
import Amenities from '../components/Amenities.jsx';
import SleepingArrangements from '../components/SleepingArrangements.jsx';


describe('render all components in <App />', () => {
  test('should check if Title component renders', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should check if Highlights component renders', () => {
    const wrapper = shallow(<Highlights />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should check if Description component renders', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should check if Description component renders', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should check if Amenities component renders', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper.exists()).toBe(true);
  });

  test('should check if Sleeping Arrangements component renders', () => {
    const Type_Of_Beds = [
      'sofa_bed',
      'twin_bed',
      'queen_bed',
      'king_bed'
    ]
    const wrapper = shallow(<SleepingArrangements sleepingArrangements ={Type_Of_Beds}/>);
    expect(wrapper.exists()).toBe(true);
  })
});

