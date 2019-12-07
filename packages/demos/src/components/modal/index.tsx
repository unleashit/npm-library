import React, { Component } from 'react';
import Modal from '@unleashit/modal';

// import '@unleashit/modal/dist/modal.css';

class ModalDemo extends Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.openModal} type="button">
          open sesame!
        </button>
        <p style={{ marginBottom: '2.5rem', color: '#aaaaaa' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam
          praesentium quisquam repudiandae impedit architecto sapiente consequatur
          voluptate vitae quis? Pariatur ad fuga fugiat, nostrum ipsa officia eveniet
          debitis ipsum assumenda labore maiores aspernatur soluta mollitia fugit itaque.
          Aut repellendus dolorum voluptatem at quam quasi nostrum, labore placeat aliquid
          est eveniet aliquam! Explicabo, a minima! Nostrum numquam ab, unde, aut
          temporibus odit, animi sunt officiis rerum a nobis minima maxime nemo quas.
          Dolor sed consequuntur voluptate qui explicabo est placeat ipsum enim modi sint,
          eos illum, unde iure eum atque, excepturi ipsam! Quas voluptatibus suscipit
          dolor delectus tenetur necessitatibus beatae alias vitae maxime? Aliquid, error
          pariatur architecto maxime velit eligendi? Inventore ex similique omnis dicta
          nulla nobis nam non itaque! Accusamus reiciendis esse temporibus explicabo porro
          voluptatum cupiditate sed asperiores, ullam suscipit? Nobis quasi tenetur fuga
          aut ad culpa? Corporis earum harum delectus illo soluta accusamus commodi,
          voluptate quae similique provident nam distinctio quidem quaerat assumenda,
          alias architecto deserunt magnam laborum numquam eaque unde ut voluptatum sed
          dolore! Tenetur minus aut illum maxime doloribus suscipit! Blanditiis maxime,
          unde nesciunt, assumenda, doloremque sunt quas eum molestias necessitatibus
          autem fuga eos velit dolor. Consequatur natus minima, ipsa quaerat fuga
          architecto sunt, consectetur laudantium quibusdam magni saepe, amet quos! Ea
          placeat maxime porro atque accusamus modi aspernatur possimus cupiditate, sint,
          earum esse officiis similique est ratione! Quasi alias nemo aliquid vitae
          incidunt dignissimos natus facilis mollitia sunt sed iure ipsum fuga cumque
          atque possimus obcaecati quo reprehenderit repudiandae optio dicta, ullam totam.
          Corporis minima doloremque mollitia, dolore, incidunt dolorum optio ad aperiam
          culpa sapiente cupiditate odio eaque, cum saepe ex beatae. Aut vero cumque
          porro, eligendi suscipit cupiditate illum beatae illo sequi veniam in qui
          quibusdam autem maiores officiis provident! Ipsa ea ullam soluta at consequuntur
          est modi illum perferendis beatae laboriosam, officiis adipisci minima corrupti
          voluptas fugit autem animi rerum, tempora esse alias velit. Maiores nulla velit
          ex voluptatum ad possimus eveniet ipsam corrupti, neque eaque placeat architecto
          accusantium ea explicabo aperiam aut minus veniam enim rerum ullam laborum
          doloremque facilis facere. Officia sit dolores quisquam adipisci. Ex nihil
          adipisci mollitia dolores exercitationem aperiam nostrum perferendis. Ex tempore
          incidunt, vitae ducimus hic officia! Veritatis doloribus eaque tempore
          laboriosam sequi error atque earum a accusantium molestias. Nostrum molestias,
          magnam dicta reiciendis vel provident quaerat sed praesentium non voluptatum!
          Corrupti consequuntur molestias alias voluptatibus sequi accusantium nostrum
          voluptates quis id dolores? Aliquam, harum eius eum consectetur quas, earum
          voluptates nulla sint dignissimos exercitationem ut, qui recusandae! Nam
          voluptatibus rerum a, praesentium deserunt ullam aliquid doloribus corporis
          itaque incidunt in assumenda excepturi repellendus illo nulla iusto natus ipsam
          non quo. Perferendis facilis voluptatem optio! Quasi consequuntur magnam fuga
          delectus explicabo fugiat quas, totam quibusdam vitae deleniti tempore quae
          soluta. Repudiandae atque eligendi quae unde expedita, reiciendis, iusto,
          quaerat eos accusamus minima doloremque sit ipsa. Reprehenderit beatae commodi
          labore deleniti quis, dolor ad blanditiis. Eius odio explicabo, quam fuga
          dolores beatae sed sequi ex harum! Totam similique dolorum quo deserunt at nam
          ex ut, officiis labore nisi molestiae vel reprehenderit impedit iste temporibus
          libero odit recusandae quibusdam repellat fugiat! Eos dolores, eum
          exercitationem pariatur at molestiae nobis sed esse natus? Aut recusandae, alias
          rerum explicabo officia itaque quibusdam quo cumque libero? Rem eos voluptas
          consequuntur explicabo corrupti quos tenetur voluptates nemo aliquam debitis,
          repudiandae modi assumenda, repellat temporibus totam recusandae iusto neque
          sequi quae repellendus saepe sint laudantium voluptatibus? Assumenda corporis
          suscipit accusamus sint tempore explicabo eos sapiente exercitationem laborum
          eaque, error illum ea! Voluptatem asperiores repellat magnam in accusamus.
          Voluptatibus est eius repellendus rem. Explicabo quam cum aperiam dicta nisi non
          quas? Rerum eaque minus quod ut iusto harum voluptatum fugiat esse hic nobis
          repellendus doloremque laboriosam itaque, modi aliquam earum impedit nam quos
          nulla maxime sint nostrum voluptates rem! Veritatis quas commodi blanditiis
          mollitia, nesciunt dolor distinctio, similique dolores, amet perspiciatis iure
          saepe aperiam exercitationem repellat! Impedit dolores, deleniti saepe sit
          voluptates recusandae! Molestias quisquam, hic corrupti aliquam iure dolore
          porro sapiente maxime odit aperiam dolores nesciunt vitae placeat sed qui
          maiores illum eveniet, quod alias culpa harum velit itaque. Maiores sequi eaque
          harum omnis est eum amet, quo modi distinctio aliquam quia dolor, dolorem
          assumenda qui quis sit et at minus sint dolorum tempora magni ipsum saepe!
          Quisquam animi laboriosam perspiciatis quod molestias dicta cum quasi delectus
          vero dolore hic officiis laborum distinctio vel itaque sed ut doloribus magnam,
          magni et quas doloremque dolorum quae a. Dolorem rem labore sit dolore debitis
          porro esse, dolores in accusantium vero, neque fugit sequi voluptas. Vitae
          cumque laborum quam alias facilis ut minus architecto sed, dolores officia,
          error dicta quaerat! Iusto voluptate similique eaque mollitia voluptatibus, odit
          quam sequi? Dicta sequi inventore quidem placeat provident, vitae laudantium
          temporibus? Maiores iste laboriosam at, rerum eveniet suscipit omnis perferendis
          magni placeat porro dolores optio, qui sed error laborum corporis quam! Eos
          illum temporibus fugiat labore. Placeat consequatur voluptate sed ab aperiam.
          Dolorem ut porro nihil vitae nisi? Id expedita alias earum distinctio fugit quia
          sapiente atque voluptatem iusto officia! Incidunt, accusamus eum numquam impedit
          aspernatur fuga deserunt iure odit! Ipsum mollitia expedita delectus voluptatum
          quidem, perspiciatis cupiditate quam qui nostrum officia doloremque commodi
          molestias vel consequatur architecto. Illum quo iusto pariatur cupiditate vel
          expedita suscipit quos officiis laborum eligendi esse, cum placeat delectus
          eveniet voluptate ex, sit aspernatur natus beatae fuga at accusamus reiciendis
          debitis. Reprehenderit quam deleniti esse error quod iusto, voluptate
          exercitationem ducimus maiores omnis at, non recusandae architecto modi atque
          amet labore itaque nemo maxime voluptatibus enim fugit? Tenetur voluptatibus
          delectus explicabo consectetur quibusdam laboriosam quis itaque voluptate
          voluptates. Eligendi officiis asperiores modi vero quae natus mollitia nesciunt
          eveniet labore ipsa magni, doloremque consequatur neque voluptatem veritatis quo
          architecto aut aperiam aliquam rem perferendis. Porro delectus unde reiciendis,
          nostrum id provident non adipisci soluta sint, perspiciatis at. Cum qui
          asperiores tempora sunt, quidem laudantium, non, sit necessitatibus optio
          voluptatum vel. Nam, quibusdam culpa molestias repellendus unde sequi tempora
          temporibus velit laboriosam deleniti quam ratione dolorum laborum doloribus
          praesentium odit, numquam accusantium. Accusamus, obcaecati beatae! Nam.
        </p>
        {this.state.modalOpen && (
          <Modal closeBtn={false}>
            <p>I am a modal!</p>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ModalDemo;
