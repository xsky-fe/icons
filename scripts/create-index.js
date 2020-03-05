const fs = require('fs');
const path = require('path');
const root = path.join(__dirname,'../src');

const fileNameArray = [];
  // 遍历src下文件夹和组件
const readDirSync = (filePath,dirName) => {
  const fileLists = fs.readdirSync(filePath);
  fileLists.map((e,idx) => {
    const info = fs.statSync(filePath + '/' + e);
    if(info.isDirectory()){
      //判断是否文件夹
      console.log(`**********${e}**********`);
      createdDirIndex(filePath + '/' + e);
      //递归遍历文件夹下的文件夹
      readDirSync(filePath + '/' + e,e);   
    }else{
      // 文件夹下的文件
      fileNameArray.push({fileName:e,url:filePath + '/' + e}) 
    }
  })
}
// 创建文件夹下index.ts 文档
const createdDirIndex = (dirPath) => {
  const list = fs.readdirSync(dirPath);
  const names = list
    .filter(file => file.indexOf('.tsx') > 0 )
    .map(file => path.basename(file, '.tsx'));
  const exports = names.map(name => `import ${name} from './${name}';`);
  const content = exports.join('\n');
  const exportDefault = `export default {\n${names.map(n => `  ${n}`).join(',\n')}\n}`;
  fs.writeFileSync(path.join (dirPath, 'index.ts'), content + '\n' + exportDefault);
  console.log(`${dirPath} index.ts file build success.`);
}
//创建src/index.ts 连接到所有图标，便于遮罩页面使用
const createSrcIndex = (list) => {
  console.log('**********SRC/**********');
  const names = list
  .filter(file => file.fileName.indexOf('.tsx') > 0 )
  .map(file => path.basename(file.url, '.tsx'));
  const urls = list
  .filter(file => file.fileName.indexOf('.tsx') > 0 )
  .map(file => file.url = file.url.split('src')[1].split('.tsx')[0]);
  const exports = names.map((name, index) => `import ${name} from '.${urls[index]}';`);
  const content = exports.join('\n');
  const exportDefault = `export default {\n${names.map(n => `  ${n}`).join(',\n')}\n}`;
  fs.writeFileSync(path.join (root, 'index.ts'), content + '\n' + exportDefault);
  console.log('src/index.ts file build success.');
} 

readDirSync(root);
createSrcIndex(fileNameArray);
