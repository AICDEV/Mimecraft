import "reflect-metadata";
import {Container} from "inversify";
import { IMimeTypesUtils } from "./IMimetypesUtils";
import { MIMETYPETYPES } from "./MimeTypeTypes";
import { MimeTypesUtils } from "./MimeTypesUtils";

const mimeTypeContainer = new Container();
mimeTypeContainer.bind<IMimeTypesUtils>(MIMETYPETYPES.IMimeTypesUtils).to(MimeTypesUtils).inSingletonScope();
export {mimeTypeContainer};
