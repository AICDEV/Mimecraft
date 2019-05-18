import { IMimeTypesUtils } from "../IMimeTypesUtils";
import { mimeTypeContainer } from "../MimeTypeContainer";
import { MIMETYPETYPES } from "../MimeTypeTypes";

// tslint:disable-next-line:typedef
function injectMimeType<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    // tslint:disable-next-line:member-access
    mimetype: IMimeTypesUtils = mimeTypeContainer.get<IMimeTypesUtils>(MIMETYPETYPES.IMimeTypesUtils);
  };
}

export { injectMimeType };
