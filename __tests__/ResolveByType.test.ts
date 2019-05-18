import "reflect-metadata";
import {IMimeTypesUtils, MimeTypesUtils, injectMimeType} from "../src";

describe("test get file extension by mimetime", () => {
    test("resolve by create new instance from mimetype", () => {
        const MimeType: IMimeTypesUtils = new MimeTypesUtils();
        expect(MimeType.getMimeTypeForFileExtension("pdf")).toMatchObject({ extension: 'pdf', type: 'application/pdf' });
    });

    test("resolve for unknow extension", () => {
        const MimeType: IMimeTypesUtils = new MimeTypesUtils();
        expect(MimeType.getMimeTypeForFileExtension("pdf22")).toMatchObject({ extension: '', type: '' })
    });

    test("resolve by use decorator for class", () => {
        @injectMimeType
        class Test {
            public mimetype!: IMimeTypesUtils;
        }

        const test = new Test();
        expect(test.mimetype).toBeDefined();
        expect(test.mimetype.getMimeTypeForFileExtension("pdf")).toMatchObject({ extension: 'pdf', type: 'application/pdf' });
    })
});