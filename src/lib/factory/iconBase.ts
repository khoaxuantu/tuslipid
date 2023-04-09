import ImportMedia from "./importMedia";


/**
 * Use require.context so that Webpack will resolve the svgs when building
 * instead of `import`
 */
const reqSvgs = require.context('../../../public/images/icons', true, /\.svg$/); 
const svgs = new ImportMedia(reqSvgs).get();

export default svgs;