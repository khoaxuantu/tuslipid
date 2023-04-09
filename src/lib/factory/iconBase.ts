import ImportMedia from "./importMedia";


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
const svgs = new ImportMedia(reqSvgs).get();

export default svgs;