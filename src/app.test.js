import React from 'react';
//import { mount } from './enzyme';
import Component from './app';
import { renderHook, act } from '@testing-library/react-hooks'
import { expect } from 'chai'
import { render, fireEvent, waitForElement } from '@testing-library/react'

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', async () => {
    const { debug, getByText } = render(<Component />);
    await waitForElement(() => getByText('todos'))
    console.log(Object.keys(container))
    console.log(waitForDomChange) 
    console.log(debug())
  });
});
