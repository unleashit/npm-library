import '@unleashit/modal/dist/modal.css';

import Modal from '@unleashit/modal';
import React, { useState } from 'react';

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
        praesentium quisquam repudiandae impedit architecto sapiente consequatur voluptate
        vitae quis? Pariatur ad fuga fugiat, nostrum ipsa officia eveniet debitis ipsum
        assumenda labore maiores aspernatur soluta mollitia fugit itaque. Aut repellendus
        dolorum voluptatem at quam quasi nostrum, labore placeat aliquid est eveniet
        aliquam! Explicabo, a minima! Nostrum numquam ab, unde, aut temporibus odit, animi
        sunt officiis rerum a nobis minima maxime nemo quas. Dolor sed consequuntur
        voluptate qui explicabo est placeat ipsum enim modi sint, eos illum, unde iure eum
        atque, excepturi ipsam! Quas voluptatibus suscipit dolor delectus tenetur
        necessitatibus beatae alias vitae maxime? Aliquid, error pariatur architecto
        maxime velit eligendi? Inventore ex similique omnis dicta nulla nobis nam non
        itaque! Accusamus reiciendis esse temporibus explicabo porro voluptatum cupiditate
        sed asperiores, ullam suscipit?
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam
          praesentium quisquam repudiandae impedit architecto sapiente consequatur
          voluptate vitae quis? Pariatur ad fuga fugiat.
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
