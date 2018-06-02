import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import {
  init,
  expectInputAttribute,
  expectInputReferenceToBeSet,
  focusAndSetInputValue,
  isInputFocused,
  focusInput,
  clickSuggestionsContainer,
  blurInput,
  clickSuggestionsContainerAndDontFocus,
  clickTextarea,
  focusTextArea
} from '../helpers';
import AutosuggestApp from './AutosuggestApp';

describe('isInputFocused', () => {
  beforeEach(() => {
    init(TestUtils.renderIntoDocument(<AutosuggestApp />));
  });

  it('1', () => {
    focusInput();
    expect(isInputFocused()).to.equal(
      true,
      'must be focused after focusInput()'
    );
  });

  it('2', () => {
    expect(isInputFocused()).to.equal(false);
    clickSuggestionsContainer();
    expect(isInputFocused()).to.equal(true);
    blurInput();
    expect(isInputFocused()).to.equal(
      false,
      'should be unfocused after blurInput()'
    );
  });

  it('3', () => {
    expect(isInputFocused()).to.equal(false);
    clickSuggestionsContainerAndDontFocus();
    expect(isInputFocused()).to.equal(false);
    focusInput();
    expect(isInputFocused()).to.equal(
      true,
      'should be focused after focusInput()'
    );
  });

  it('4', () => {
    clickSuggestionsContainer();
    expect(isInputFocused()).to.equal(true);
    clickTextarea();
    expect(isInputFocused()).to.equal(false, 'should be unfocused');
  });

  it('5', () => {
    clickSuggestionsContainer();
    expect(isInputFocused()).to.equal(true);
    blurInput();
    clickTextarea();
    expect(isInputFocused()).to.equal(false, 'should be unfocused');
  });
});
