### Mimecraft

### Description
Helper for mime type detection by filename or mime type. Has build in types to support typescript. Works in node and in the web.

MimeTypes are included from the official IANA: [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml)

### Install

#### install with yarn
```
yarn add mimecraft
```


#### install with npm
```
npm install mimecraft
```

### API

### TypeScript
#### create instance
```typescript

   const MimeType: IMimeTypesUtils = new MimeTypesUtils();
   MimeType.mimetype.getMimeTypeForFileExtension("pdf");
```

#### inject mimetype service
```typescript

   @injectMimeType
   class Test {
   		public mimetype!: IMimeTypesUtils;
   }

   const test = new Test();
   test.mimetype.getMimeTypeForFileExtension("pdf");
```
#### resolve by file extension
```typescript
	MimeType.mimetype.getMimeTypeForFileExtension("pdf");
```
Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```

#### resolve file extension by mime type
```typescript
	MimeType.mimetype.getFileExtensionForMimeType("application/pdf");
```

Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```
#### fallback
Ask for mime type or extension that is not included in this lib you will receive: 
```
{ extension: '', type: '' }
```

### JavaScript
#### create instance
```javascript

   const MimeType = new MimeTypesUtils();
   MimeType.mimetype.getMimeTypeForFileExtension("pdf");
```

#### inject mimetype service
```javascript

   @injectMimeType
   class Test {
   		public mimetype;
   }

   const test = new Test();
   test.mimetype.getMimeTypeForFileExtension("pdf");
```

#### resolve by file extension
```javascript
	MimeType.mimetype.getMimeTypeForFileExtension("pdf");
```
Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```
#### resolve file extension by mime type
```javascript
	MimeType.mimetype.getFileExtensionForMimeType("application/pdf");
```

Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```

#### fallback
Ask for mime type or extension that is not included in this lib you will receive: 
```
{ extension: '', type: '' }
```

### Hint
You can always ask with "pdf" or ".pdf" for example. 

Happy using =) 