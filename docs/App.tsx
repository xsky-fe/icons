import * as React from 'react';
import icons, { ICONS } from '../src';
import styled from 'styled-components';

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
`;

const App = ({ title }: Props) => (
  <div>
    <Title>{title}</Title>
    <UL>
      {Object.keys(icons).map((key: ICONS) => {
        const Icon = icons[key];
        return (
          <LI key={key}>
            <Icon />
          </LI>
        )
      })}
    </UL>
  </div>
)

export default App;