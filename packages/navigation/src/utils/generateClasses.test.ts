import {
  addTemplateClasses,
  getAuthLinkClass,
  mapArrayToClasses,
} from './generateClasses';

describe('Navigation utils', () => {
  it('addTemplateClasses() adds the right classes', () => {
    let classes = addTemplateClasses('clean', undefined, {});
    expect(classes).toEqual(' unl-navigation__container--clean');

    classes = addTemplateClasses('dark-buttons', 'vertical', {});
    expect(classes).toEqual(
      ' unl-navigation__container--dark-btns unl-navigation__container--vertical',
    );

    // with css modules
    const cssModule = {
      lightButtons: 'lightBtns__fe23fw',
      vertical: 'vertical__grg32f',
    };
    classes = addTemplateClasses('light-buttons', 'vertical', cssModule);
    expect(classes).toEqual(' lightBtns__fe23fw vertical__grg32f');

    // is template is 'none' and isn't vertical, should return an empty string
    classes = addTemplateClasses('none', undefined, {});
    expect(classes).toEqual('');
  });

  it('getAuthClasses() returns the right css class string', () => {
    let classes = getAuthLinkClass('login', {});
    expect(classes).toEqual(' unl-navigation__login-link');

    classes = getAuthLinkClass('logout', {});
    expect(classes).toEqual(' unl-navigation__logout-link');

    // with css modules
    const cssModule = {
      loginLink: 'loginLink__fe23fw',
      logoutLink: 'logoutLink__grg32f',
    };
    classes = getAuthLinkClass('login', cssModule);
    expect(classes).toEqual(` ${cssModule.loginLink}`);

    classes = getAuthLinkClass('logout', cssModule);
    expect(classes).toEqual(` ${cssModule.logoutLink}`);

    // should output empty string if not an accepted link type
    classes = getAuthLinkClass(null, {});
    expect(classes).toEqual('');
  });

  it('mapArrayToClasses() receives an array and ouputs a string of class names', () => {
    let ary = ['class1', 'class2', 'class3'];
    let classes = mapArrayToClasses(ary);
    expect(classes).toEqual(' class1 class2 class3');

    // if array is empty or undefined, should return an empty string
    ary = [];
    classes = mapArrayToClasses(ary);
    expect(classes).toEqual('');
  });
});
