import React from 'react';
import topNavigationIcons from '../src/topNavigation/';
import surfaceNavigationIcons from '../src/surfaceNavigation/';
import blockStoreIcons from '../src/blockStore/';
import fileStoreIcons from '../src/fileStore/';
import objectStoreIcons from '../src/objectStore/';
import dataProtectionIcons from '../src/dataProtection/';
import cloudIntegrantionIcons from '../src/cloudIntegrantion/';
import resourceManagementIcons from '../src/resourceManagement/';
import monitorManagementIcons from '../src/monitorManagement/';
import recycleBinIcons from '../src/recycleBin/';
import operationIcons from '../src/operation/';
import otherIcons from '../src/other/';
import deleteIcons from '../src/delete/';
import styled from 'styled-components';
import Modal from './Modal';
import lodash from 'lodash';

interface Props {
  title?: string,
}

type IconProps = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

const iconsList = [
  topNavigationIcons,
  surfaceNavigationIcons,
  blockStoreIcons,
  fileStoreIcons,
  objectStoreIcons,
  dataProtectionIcons,
  cloudIntegrantionIcons,
  resourceManagementIcons,
  monitorManagementIcons,
  recycleBinIcons,
  operationIcons,
  otherIcons,
  deleteIcons,
];
const iconsTypeName = [
  '顶导航',
  '测导航',
  '块存储',
  '文件存储',
  '对象存储',
  '数据保护',
  '云集成',
  '资源管理',
  '监控管理',
  '回收站',
  '操作',
  '未分类',
  '即将移除',
];

const Title = styled.h2`
  text-align: center;
  padding: 26px 0 10px 0;
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
`
const H4 = styled.h4`
  min-width: 100px;
  text-align: center;
  align-self: center;
`

const UL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-left: 2px solid #eee;
  margin-bottom: 40px;

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
    cursor: pointer;
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

const App = ({ title }: Props) => {
  const [open, useOpen] = React.useState(false);
  const [currIcon, useIcon] = React.useState('');
  const openModal = (key: string) => {
    useIcon(key);
    useOpen(true);
  };
  const closeModal = () => {
    useIcon('');
    useOpen(false)
  };
  return (
    <>
      <Title>{title}</Title>
      {
        iconsList.map((fileName: object, index) => {
          return (
            <Box key={iconsTypeName[index]}>
              <H4>{iconsTypeName[index]}</H4>
              <UL>
                {Object.keys(fileName).map((key: string, index) => {
                  const Icon: IconProps = fileName[key];
                  const name = lodash.kebabCase(key);
                  return (
                    <LI key={index} onClick={() => openModal(key)}>
                      <Icon />
                      <p>
                        {name}
                      </p>
                    </LI>
                  )
                })}
              </UL>
            </Box>
          )
        })
      }

      <Modal icon={currIcon} open={open} closeModal={closeModal} />
    </>
  )
}

export default App;