import React from 'react';
import icons from '../src/';
import styled from 'styled-components';
import lodash from 'lodash';

interface Props {
  title?: string,
}

type IconProps = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

const Title = styled.h2`
  text-align: center;
  padding: 26px 0 10px 0;
`

const UL = styled.ul`
  text-align: center;
`;
const LI = styled.li`
  vertical-align: top;
  width: 120px;
  display: inline-block;
  text-align: center;
  background-color: rgba(0,0,0,.02);
  border-radius: 3px;
  padding: 29px 0 10px 0;
  margin-right: 10px;
  margin-top: 10px;
  transition: all .6s ease;
  font-size: 21px;
  line-height: 21px;
  padding-bottom: 20px;
  color: #6b58c4;
  :hover {
    color: #fff;
    background-color: #6b58c4;
  }
  svg {
    fill: currentColor;
  }
  p {
    font-size: 12px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const App = ({ title }: Props) => (
  <div>
    <Title>{title}</Title>
    <UL>
      {Object.keys(icons).map((key: string, index) => {
        const Icon: IconProps = icons[key];
        const name = lodash.kebabCase(key);
        return (
          <LI key={index}>
            <Icon />
            <p>
              <a title="download" href={`https://raw.githubusercontent.com/xsky-fe/icons/master/assets/${name}.svg`} download>{name}</a>
            </p>
          </LI>
        )
      })}
    </UL>
  </div>
)

export default App;