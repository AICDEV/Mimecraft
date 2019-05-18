import { IMimeType } from "./IMimeType";

export interface IMimeTypesUtils {
    getMimeTypeForFileExtension(extension: string): IMimeType;
    getFileExtensionForMimeType(mimetype: string): IMimeType;
}
