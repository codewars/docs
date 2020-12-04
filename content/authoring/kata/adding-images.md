---
kind: recipe
---

# Adding Images to Kata Descriptions

Currently, it's not possible to attach any files or additional assets to a kata, but many authors would like to illustrate their descriptions with images. There are plans to introduce the possibility of uploading and attaching files to descriptions, but until it's implemented, authors have to resort to other techniques. There are a few of them, and each of them has its advantages and disadvantages.

## Rule one: avoid images

While eye-catching and potentially helpful, images put in kata descriptions quite often proved to cause problems. They can become problematic in many ways:

- Some authors mistakenly think that illustrative images may be used in place of a clear and concise description. However, images may become unavailable over time for various reasons, so they should never contain information critical to understanding the kata not mentioned elsewhere in the description.
- Images incur additional maintenance costs. Descriptions can be easily updated, but images have to be replaced on each modification. When a description is modified but an image is not, they become out of sync.
- Images cause problems with layout. It's difficult to get their size right, they look differently for users with different screen sizes, resolutions, or screen orientations. An image can appear to look nice on a computer screen, but can break things for mobile users.
- Authors often miss the fact that images can look bad when combined with theming. When an image looks good when viewed with a dark theme, it can look really bad in light mode, and vice versa.
- Images are subject to licensing, copyright, and intellectual property rights. Authors happen to use images they are not allowed to, or fail to give proper credit.

However, if you are sure that adding an image to a kata description is a good idea, there are some options available.


## Externally hosted images

To use this method, an image has to be uploaded to some third party hosting service, and referred to with appropriate Markdown:

`![image title](http://path.to/image.jpg)`

### Pros

- Easy to do,
- Short, does not inflate description,
- Works for all types of images supported by browsers.

### Cons

- Requires an external hosting service. Some services do not allow for linking uploaded images directly, or put some other limitations on access to them.
- Externally hosted images is a dependency which is difficult to control and manage. It cannot be easily updated, it can expire after some time, be removed, or simply disappear.


## Inline images with encoded content

Markdown supports not only images referenced by URL, but just like for `<img>` elements, image data can be embedded directly into a document with a so-called _data URL_:

`![image title](data:<mediatype>;<encoding>,<data>)`

### Examples

- `![image title](data:image/gif;base64,Base64 encoded data)` - a Base64 encoded GIF image
- `![image title](data:image/svg+xml;base64,Base64 encoded data)` - a Base64 encoded SVG XML image
- `![image title](data:image/svg+xml;utf8,URL encoded SVG XML)` - an URL encoded SVG XML image

### Pros

- Does not require third party hosting service, image data is embedded directly into a kata description.

### Cons

- Encoded image data is usually very large, description is inflated terribly. Therefore, it works well only for small images.
- The MIME type matching the image format has to be looked up.
- Browsers differ in requirements for MIME types, encodings, and data URL formats. Some browsers require the data to be URL encoded while others do not. The formats of data URLs, names of encodings, and other details differ between browsers.
- Additional tools are needed to encode image data as Base-64, gzip, or URL.


## SVG in HTML markup

Many Markdown applications, including Codewars GUI, allow you to use HTML tags in Markdown-formatted text. This allows you to use SVG images directly within a kata description, and it will be rendered as an image.

### Pros

- The image markup can be pasted directly into the kata editor without additional processing or encoding.
- More readable than encoded image data

### Cons

- Simple-looking SVGs often require a significant amount of code anyway, inflating the kata description.
- The results of mixing HTML with Markdown are ill-defined and subject to change.
