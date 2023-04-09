/**
 * @param reqMedia An media object got from require.context()
 * 
 * @method get() Return an object of media path
 * 
 * @return object {media's name: file path}
 */
class ImportMedia {
    private reqMedia: __WebpackModuleApi.RequireContext;

    public constructor(reqMedia: __WebpackModuleApi.RequireContext) {
        this.reqMedia = reqMedia;
    }

    public get() {
        const tmp = this.reqMedia
            .keys()
            .reduce((images: any, path: string) => {
                const key = path.substring(path.lastIndexOf('/')+1,path.lastIndexOf('.'));
                images[key] = this.reqMedia(path);
                return images;
            }, {});
        return tmp;
    }
}

export default ImportMedia;