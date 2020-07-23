import * as React from 'react';
import styled from 'styled-components';


type IconProps = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

const UL = styled.div`
  width: 130px;
  height: 100%;
  border-sizing: border-box;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
`
const LI = styled.div`
  padding: 15px 5px;
  cursor: pointer;
  background: rgba(0,0,0,.01);
  color: #6b58c4;
  font-size: 12px;
  transition: all .2s ease;
  :hover {
    color: #fff;
    background-color: #6b58c4;
    cursor: pointer;
  }
`
interface Props {
    list: Array<string>
}
const Anchor: React.SFC<Props> = props => {
    const { list } = props;
    const scrollToAnchor = (anchorName: string) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    return (
        <UL>
            {list.map((key, index) => {
                return (
                    <LI key={index} onClick={() => scrollToAnchor(`${key}`)}>{key}</LI>
                )
            })
            }
        </UL>
    );
}

export default Anchor;