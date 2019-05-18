import * as application from "./store/ApplicationTypes.json";
import * as audio from "./store/AudioTypes.json";
import * as font from "./store/FontTypes.json";
import * as image from "./store/ImageTypes.json";
import * as message from "./store/MessageTypes.json";
import * as model from "./store/ModelTypes.json";
import * as multipart from "./store/MultipartTypes.json";
import * as video from "./store/VideoTypes.json";
import * as common from "./store/CommonTypes.json";
import { IMimeType } from "./IMimeType.js";
import { injectable } from "inversify";
import { IMimeTypesUtils } from "./IMimetypesUtils.js";

@injectable()
export class MimeTypesUtils implements IMimeTypesUtils {
    private applicationTypes: Array<IMimeType>;
    private audioTypes: Array<IMimeType>;
    private fontTypes: Array<IMimeType>;
    private imageTypes: Array<IMimeType>;
    private messageTypes: Array<IMimeType>;
    private modelTypes: Array<IMimeType>;
    private multipartTypes: Array<IMimeType>;
    private videoTypes: Array<IMimeType>;
    private commonTypes: Array<IMimeType>;

    constructor() {
        this.applicationTypes = application.types;
        this.audioTypes = audio.types;
        this.fontTypes = font.types;
        this.imageTypes = image.types;
        this.messageTypes = message.types;
        this.modelTypes = model.types;
        this.multipartTypes = multipart.types;
        this.videoTypes = video.types;
        this.commonTypes = common.types;
    }

    // tslint:disable-next-line:cyclomatic-complexity
    public getMimeTypeForFileExtension(extension: string): IMimeType {

        extension = extension.replace(".","").trim();
        const commonIndex = this.filterCommonTypes(extension);
        if(commonIndex > -1) {
            return this.commonTypes[commonIndex];
        }

        const applicationIndex = this.filterApplicationTypes(extension);
        if(applicationIndex > -1) {
            return this.applicationTypes[applicationIndex];
        }

        const audioIndex = this.filterAudioTypes(extension);
        if(audioIndex > -1) {
            return this.audioTypes[audioIndex];
        }

        const fontIndex = this.filterFontTypes(extension);
        if(fontIndex > -1) {
            return this.fontTypes[fontIndex];
        }

        const imageIndex = this.filterImageTypes(extension);
        if(imageIndex > 1 ) {
            return this.imageTypes[imageIndex];
        }

        const messageIndex = this.filterMessageTypes(extension);
        if(messageIndex > -1) {
            return this.messageTypes[messageIndex];
        }

        const modelIndex = this.filterModelTypes(extension);
        if(modelIndex > -1) {
            return this.modelTypes[modelIndex];
        }

        const multipartIndex = this.filterMultipartTypes(extension);
        if(multipartIndex > -1) {
            return this.multipartTypes[multipartIndex];
        }

        const videoIndex = this.filterVideoTypes(extension);
        if(videoIndex > -1) {
            return this.videoTypes[videoIndex];
        }

        return {
            extension: "",
            type: "",
        };
    }

    // tslint:disable-next-line:cyclomatic-complexity
    public getFileExtensionForMimeType(extension: string): IMimeType {

        extension = extension.replace(".","").trim();
        const commonIndex = this.filterCommonTypesByFile(extension);
        if(commonIndex > -1) {
            return this.commonTypes[commonIndex];
        }

        const applicationIndex = this.filterApplicationTypesByFile(extension);
        if(applicationIndex > -1) {
            return this.applicationTypes[applicationIndex];
        }

        const audioIndex = this.filterAudioTypesByFile(extension);
        if(audioIndex > -1) {
            return this.audioTypes[audioIndex];
        }

        const fontIndex = this.filterFontTypesByFile(extension);
        if(fontIndex > -1) {
            return this.fontTypes[fontIndex];
        }

        const imageIndex = this.filterImageTypesByFile(extension);
        if(imageIndex > 1 ) {
            return this.imageTypes[imageIndex];
        }

        const messageIndex = this.filterMessageTypesByFile(extension);
        if(messageIndex > -1) {
            return this.messageTypes[messageIndex];
        }

        const modelIndex = this.filterModelTypesByFile(extension);
        if(modelIndex > -1) {
            return this.modelTypes[modelIndex];
        }

        const multipartIndex = this.filterMultipartTypesByFile(extension);
        if(multipartIndex > -1) {
            return this.multipartTypes[multipartIndex];
        }

        const videoIndex = this.filterVideoTypesByFile(extension);
        if(videoIndex > -1) {
            return this.videoTypes[videoIndex];
        }

        return {
            extension: "",
            type: "",
        };
    }

    private filterCommonTypes(key: string): number {
        return this.commonTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterApplicationTypes(key: string): number {
        return this.applicationTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterAudioTypes(key: string): number {
        return this.audioTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterFontTypes(key: string): number {
        return this.fontTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterImageTypes(key: string): number {
        return this.imageTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterMessageTypes(key: string): number {
        return this.messageTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterModelTypes(key: string): number {
        return this.modelTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterMultipartTypes(key: string): number {
        return this.multipartTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterVideoTypes(key: string): number {
        return this.videoTypes.findIndex((entry: IMimeType) => {
            return entry.extension === key;
        });
    }

    private filterCommonTypesByFile(key: string): number {
        return this.commonTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterApplicationTypesByFile(key: string): number {
        return this.applicationTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterAudioTypesByFile(key: string): number {
        return this.audioTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterFontTypesByFile(key: string): number {
        return this.fontTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterImageTypesByFile(key: string): number {
        return this.imageTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterMessageTypesByFile(key: string): number {
        return this.messageTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterModelTypesByFile(key: string): number {
        return this.modelTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterMultipartTypesByFile(key: string): number {
        return this.multipartTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }

    private filterVideoTypesByFile(key: string): number {
        return this.videoTypes.findIndex((entry: IMimeType) => {
            return entry.type === key;
        });
    }
}
