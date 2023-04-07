/**
 * Use require.context so that Webpack will resolve the svgs when building
 * instead of `import`
 * 
 * Call reqSvgs.keys() to return a list of string then take svg's name
 * from the path to get the key (eg. C, CPP)
 * 
 * return {svg's name: file}
 */
const reqSvgs = require.context('../../../public/images/icons', true, /\.svg$/); 
const svgs = reqSvgs
    .keys()
    .reduce((images: any, path: string) => {
        const key = path.substring(path.lastIndexOf('/')+1,path.lastIndexOf('.'));
        images[key] = reqSvgs(path);
        return images;
      }, {});

export default svgs;