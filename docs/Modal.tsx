import * as React from 'react';
import RCModal from 'react-modal';
import Icons from '../src/';
import Grid from './Grid';
import styled from 'styled-components';
import lodash from 'lodash';

type IconProps = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

const Button = styled.button`
  padding: 5px 16px;
  border-radius: 2px;
  :hover {
    background-color: #6b58c4;
    cursor: pointer;
  }
`
const Body = styled.div`
  text-align: center;
`

const GridContent = styled.div`
  width: 320px;
  height  320px;
  border-bottom: 1px solid rgba(107, 88, 196, .5);
  border-right: 1px solid rgba(107, 88, 196, .5);
  position: relative;
  margin-bottom: 20px;
`
const IconContent = styled.div`
  position: absolute;
  top 0;
  color: #444;
  svg {
    fill: currentColor;
  }
`

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
  }
};

interface Props {
  open: boolean
  closeModal: () => void
  icon: string
}
const Modal: React.SFC<Props> = props => {
  const { open, closeModal, icon } = props;
  const name = lodash.kebabCase(icon);
  const Icon: IconProps = Icons[icon];
  return (
    <RCModal
      appElement={document.body}
      isOpen={open}
      contentLabel="SVG Grid"
      style={customStyles}
      onRequestClose={closeModal}
    >
      <Body>
        <GridContent>
          <Grid />
          {Boolean(icon) && (
            <IconContent>
              <Icon width="320px" height="320px"/>
            </IconContent>
          )}
        </GridContent>
        <p>{name}</p>
        <Button onClick={closeModal}>关闭</Button>
      </Body>
    </RCModal>
  );
}

export default Modal;