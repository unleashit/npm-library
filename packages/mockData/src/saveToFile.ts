const saveToFile = (
  data: Record<string, unknown>,
  path: string,
  fileName: string,
): void => {
  if (typeof window !== 'undefined') {
    throw new Error('Saving a file requires a Node environment');
  }

  /* eslint-disable-next-line global-require */
  const fs = require('fs');

  if (fs.existsSync(path)) {
    try {
      fs.writeFileSync(
        `${path}/${fileName}.json`,
        JSON.stringify(data, null, 2),
      );
    } catch (err) {
      throw new Error('Could not write the file');
    }
  } else {
    throw new Error('Invalid file path');
  }
};

export default saveToFile;
