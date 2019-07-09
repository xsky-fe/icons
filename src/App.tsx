import * as React from 'react';
import icons, { ICONS } from './Icons';

interface Props {
  title?: string,
}

type IconProps = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement

const App = ({ title }: Props) => (
  <div>
    <h2>{title}</h2>
    <div>
      {Object.keys(icons).map((key: ICONS) => {
        const Icon = icons[key];
        return <Icon key={key} />
      })}
    </div>
  </div>
)

export default App;