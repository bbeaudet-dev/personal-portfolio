const fs = require('fs');
const path = require('path');
const https = require('https');

const extensions = [
  {
    name: 'errorlens',
    publisher: 'usernamehw',
    version: '3.11.1'
  },
  {
    name: 'bracketlens',
    publisher: 'usernamehw',
    version: '1.0.0'
  },
  {
    name: 'code-spell-checker',
    publisher: 'streetsidesoftware',
    version: '2.20.0'
  },
  {
    name: 'vscode-tailwindcss',
    publisher: 'bradlc',
    version: '0.10.0'
  },
  {
    name: 'path-intellisense',
    publisher: 'christian-kohler',
    version: '2.8.4'
  },
  {
    name: 'indent-rainbow',
    publisher: 'oderwat',
    version: '8.3.0'
  },
  {
    name: 'vscode-peacock',
    publisher: 'johnpapa',
    version: '4.0.0'
  },
  {
    name: 'folder-path-color',
    publisher: 'alexanderte',
    version: '1.0.0'
  },
  {
    name: 'vscode-custom-css',
    publisher: 'be5invis',
    version: '6.0.0'
  },
  {
    name: 'bookmarks',
    publisher: 'alefragnani',
    version: '13.3.0'
  },
  {
    name: 'todo-tree',
    publisher: 'Gruntfuggly',
    version: '0.0.226'
  },
  {
    name: 'githistory',
    publisher: 'donjayamanne',
    version: '0.6.19'
  },
  {
    name: 'rest-client',
    publisher: 'humao',
    version: '0.25.0'
  },
  {
    name: 'postman-for-vscode',
    publisher: 'Postman',
    version: '0.0.1'
  },
  {
    name: 'es7-react-js-snippets',
    publisher: 'dsznajder',
    version: '4.4.3'
  },
  {
    name: 'remote-containers',
    publisher: 'ms-vscode-remote',
    version: '0.323.0'
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllIcons() {
  const outputDir = path.join(process.cwd(), 'public', 'images', 'extensions');

  for (const ext of extensions) {
    const url = `https://${ext.publisher}.gallerycdn.vsassets.io/extensions/${ext.publisher}/${ext.name}/${ext.version}/1679509977427/Microsoft.VisualStudio.Services.Icons.Default`;
    const filepath = path.join(outputDir, `${ext.name}.png`);
    
    try {
      await downloadImage(url, filepath);
    } catch (error) {
      console.error(`Error downloading ${ext.name}:`, error.message);
    }
  }
}

downloadAllIcons().catch(console.error); 