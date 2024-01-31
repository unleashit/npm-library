## Modal

[![NPM](https://img.shields.io/npm/l/@unleashit/navigation.svg)](https://github.com/unleashit/npm-library/blob/master/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@unleashit/modal.svg)](https://www.npmjs.com/package/@unleashit/modal)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@unleashit/modal.svg)](https://bundlephobia.com/result?p=@unleashit/modal)

Customizable React modal component. Optional animation support when adding/removing from DOM.

![modal component](https://raw.githubusercontent.com/unleashit/npm-library/master/packages/modal/modal.png)

### Install

```
npm install @unleashit/modal
```

Required peer dependencies: react.

### Example

```javascript
const ModalDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const btnStyle = {
    padding: '14px 34px',
    border: 0,
    backgroundColor: '#f2f2f2',
    cursor: 'pointer',
  };

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam
        praesentium quisquam repudiandae impedit architecto sapiente consequatur
        voluptate vitae quis? Pariatur ad fuga fugiat, nostrum ipsa officia
        eveniet debitis ipsum assumenda labore maiores aspernatur soluta
        mollitia fugit itaque. Aut repellendus dolorum voluptatem at quam quasi
        nostrum, labore placeat aliquid est eveniet aliquam! Explicabo, a
        minima! Nostrum numquam ab, unde, aut temporibus odit, animi sunt
        officiis rerum a nobis minima maxime nemo quas. Dolor sed consequuntur
        voluptate qui explicabo est placeat ipsum enim modi sint, eos illum,
        unde iure eum atque, excepturi ipsam! Quas voluptatibus suscipit dolor
        delectus tenetur necessitatibus beatae alias vitae maxime? Aliquid,
        error pariatur architecto maxime velit eligendi? Inventore ex similique
        omnis dicta nulla nobis nam non itaque! Accusamus reiciendis esse
        temporibus explicabo porro voluptatum cupiditate sed asperiores, ullam
        suscipit?
      </p>
      <button className="modalBtn" onClick={toggleModal} type="button">
        open sesame!
      </button>

      <Modal
        size="medium"
        isOpen={modalOpen}
        onClose={toggleModal}
        header="Important Message"
        footer={() => <footer>Important! Please Read!</footer>}
        overlayColor="rgba(0,0,0,.8)"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          numquam praesentium quisquam repudiandae impedit architecto sapiente
          consequatur voluptate vitae quis? Pariatur ad fuga fugiat.
        </p>
        <div>
          <button type="button" style={btnStyle} onClick={toggleModal}>
            OK
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalDemo;
```

### CSS

Basic namespaced (BEM) css can be imported: `import '@unleashit/modal/dist/modal.css'`. CSS Module support is baked in. If you use CSS Modules you can `import '@unleashit/modal/dist/modal.module.css'` or import your own custom module targeting the internal classes and pass to the `cssModule` prop. Please see CSS in the main readme of the repo for more info.

### API

```typescript
// for customer header/footer components
interface ModalProps {
  title?: string;
}

export interface Props {
  isOpen: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  onClose?: () => void;
  closeOnOverlayClick?: boolean;
  animationSupport?: boolean;
  animationCloseTimeout?: number;
  header?: React.FC<ModalProps> | React.ReactElement | string;
  footer?: React.FC<ModalProps> | string;
  overlayColor?: string;
  closeBtn?: boolean;
  cssModule?: { [key: string]: string };
  children?: React.ReactNode;
}
```

### Props

| Name                  | Type                                                         | Description                                                                                   | default                |
| --------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ---------------------- |
| isOpen                | boolean                                                      | show or hide the modal                                                                        | required               |
| size                  | 'small' &#124; 'medium' &#124; 'large' &#124; 'full'         | size of modal                                                                                 | medium                 |
| onClose               | () => void                                                   | state changing function to call when closing modal                                            | () => undefined (noop) |
| closeOnOverlayClick   | boolean                                                      | close the modal when user clicks overlay                                                      | true                   |
| animationSupport      | boolean                                                      | use timeouts on modal open/close to support dom animation                                     | true                   |
| animationCloseTimeout | number                                                       | length of timeout                                                                             | 300                    |
| header                | React.FC<ModalProps> &#124; React.ReactElement &#124; string | optional header component or string                                                           | n/a                    |
| footer                | React.FC<ModalProps> &#124; React.ReactElement &#124; string | optional footer component or string                                                           | n/a                    |
| overlayColor          | string                                                       | color for the overlay                                                                         | no color               |
| closeBtn              | boolean                                                      | show the default close icon                                                                   | true                   |
| cssModule             | { [key: string]: string }                                    | CSS Module object that optionally replaces default. Class names need to match expected names. | undefined              |
| children              | React Children                                               | content of the modal                                                                          | n/a                    |
