const fs = require('fs');
const translate = require('google-baidu-translate-api');
const languages = eval('(' + fs.readFileSync('./src/locales/zh-CN.js', 'utf8').slice(15) + ')');

async function translateToEnglish (obj, newObj) {
  for (let key of Object.keys(obj)) {
    try {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        let word = await translate(obj[key], 'en');
        newObj[key] = word.dist;
      } else {
        newObj[key] = {}
        await translateToEnglish(obj[key], newObj[key])
      }
    } catch (err) {
      console.log(err);
    }
  }
  return newObj;
}

async function writeEnglish () {
  const english = await translateToEnglish(languages, {});
  const englishFileData = `export default ${JSON.stringify(english, null, 2)}`;
  fs.writeFileSync('./src/locales/en-US.js', englishFileData, 'utf8');
}

writeEnglish();
