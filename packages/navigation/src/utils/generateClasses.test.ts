import { utils } from '@unleashit/common';

import {
  addTemplateClasses,
  getAuthLinkClass,
  mapArrayToClasses,
} from './generateClasses';

const { genClassNames } = utils;
const { clsName } = genClassNames('navigation', {});

describe('Navigation utils', () => {
  it('addTemplateClasses() adds the right classes', () => {
    let classes = addTemplateClasses('clean', undefined, clsName);
    expect(classes).toEqual(' unl-navigation__clean');

    classes = addTemplateClasses('dark-buttons', 'vertical', clsName);
    expect(classes).toEqual(
      ' unl-navigation__dark-buttons unl-navigation__vertical',
    );

    // direction abbreviations are accepted too
    classes = addTemplateClasses('clean', 'vert', clsName);
    expect(classes).toEqual(' unl-navigation__clean unl-navigation__vertical');

    // with css modules
    const cssModule = {
      lightButtons: 'lightBtns__fe23fw',
      vertical: 'vertical__grg32f',
    };
    classes = addTemplateClasses(
      'light-buttons',
      'vertical',
      genClassNames('navigation', cssModule).clsName,
    );
    expect(classes).toEqual(' lightBtns__fe23fw vertical__grg32f');

    // an unknown template adds nothing
    classes = addTemplateClasses(undefined, undefined, clsName);
    expect(classes).toEqual('');
  });

  it('getAuthLinkClass() returns the right css class string', () => {
    let classes = getAuthLinkClass('login', clsName);
    expect(classes).toEqual(' unl-navigation__login-link');

    classes = getAuthLinkClass('logout', clsName);
    expect(classes).toEqual(' unl-navigation__logout-link');

    classes = getAuthLinkClass('signup', clsName);
    expect(classes).toEqual(' unl-navigation__signup-link');

    // with css modules
    const cssModule = {
      loginLink: 'loginLink__fe23fw',
      logoutLink: 'logoutLink__grg32f',
    };
    const modClsName = genClassNames('navigation', cssModule).clsName;
    expect(getAuthLinkClass('login', modClsName)).toEqual(
      ` ${cssModule.loginLink}`,
    );
    expect(getAuthLinkClass('logout', modClsName)).toEqual(
      ` ${cssModule.logoutLink}`,
    );

    // should output empty string if not an accepted link type
    expect(getAuthLinkClass(null, clsName)).toEqual('');
  });

  it('mapArrayToClasses() receives an array and ouputs a string of class names', () => {
    let ary = ['class1', 'class2', 'class3'];
    let classes = mapArrayToClasses(ary);
    expect(classes).toEqual(' class1 class2 class3');

    // if array is empty or undefined, should return an empty string
    ary = [];
    classes = mapArrayToClasses(ary);
    expect(classes).toEqual('');

    classes = mapArrayToClasses(undefined);
    expect(classes).toEqual('');
  });
});
