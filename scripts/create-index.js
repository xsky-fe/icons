const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const [source] = process.argv.slice(2);

(async () => {
  console.log('Building index.ts file.')
  const list = await readdir(source);
  // fail in svgr index generator if icon name is index in any case
  const names = list
    .filter(file => file.toLowerCase() !== 'index.ts')
    .map (file => path.basename(file, '.tsx'));
  const exports = names.map(name => `import ${name} from './${name}';`);
  const content = exports.join('\n');
  const exportDefault = `export default {\n${names.map(n => `  ${n}`).join(',\n')}\n}`;
  await writeFile(path.join (source, 'index.ts'),  content + '\n' + exportDefault);
  console.log('index.ts file build success.')
})();

