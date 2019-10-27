### Mimecraft

### Description
Helper for mime type detection by filename or mime type. Has build in types to support typescript. Works in node and in the web.

MimeTypes are included from the official IANA: [IANA](https://www.iana.org/assignments/media-types/media-types.xhtml)

Tested with node >=12.0 and all actual browsers.

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
   MimeType.getMimeTypeForFileExtension("pdf");
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
	MimeType.getMimeTypeForFileExtension("pdf");
```
Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```

#### resolve file extension by mime type
```typescript
	MimeType.getFileExtensionForMimeType("application/pdf");
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
   MimeType.getMimeTypeForFileExtension("pdf");
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
	MimeType.getMimeTypeForFileExtension("pdf");
```
Output:

```
{ extension: 'pdf', type: 'application/pdf' }
```
#### resolve file extension by mime type
```javascript
	MimeType.getFileExtensionForMimeType("application/pdf");
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

### AFTER CHECKOUT OR CLONE THE PROJECT
After your first checkout or clone please run "yarn install" to install all required dependencies containing in package.json file.

#### folder structure
You will find the following folder structure:

- ./lib (build target folder)
- ./src (source code base on typescript)

#### preconfigured commands
We have the following preconfigured commands that can easily run with yarn [command]: 

- yarn clean (clean the lib folder)
- yarn build (start build job)

### Hint
You can always ask with "pdf" or ".pdf" for example. 

Happy using =) 