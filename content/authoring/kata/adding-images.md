---
kind: recipe
---

# Adding Images to Kata Descriptions

Currently, it's not possible to attach any files or additional assets to a kata, but many autors would like to illustrate their descriptions with images. There are plans to indroduce possibility of uploading and attaching files to the descriptions, but until it's implemented, authors have to resort to other techniques. There's a few them, and each of them has its advantages and disadvantages.

## Rule one: avoid images

While eye-catching and potentially helpful, images put in kata descriptions quite often proved to cause problems. They can become problematic in many ways:

- Authors tend to think that an image can be a replacement for a good description. However, kata description should be composed in such a way that when image becomes for some reason unavailable or has to be removed, the problem is still described in sufficient details.
- Images incur additional maintenance cost. Description can be easily updated, but images are not easy to modify and have to be redrawn. When a description is modified but image is not, they become out of sync.
- Images cause problems with layout. It's difficult to get their size right, they look differently for users with different screen sizes, resolutions, or screen orientations. An image can appear to look nice on a computer screen, but can break things for mobile users.
- Authors often miss the fact that images can look bad when combined with theming. When an image looks good when viewed with a dark theme, it can look really bad in light mode, and vice versa.
- Images are a subject to licensing, copyright, and intellectual property rights. Authors happen to use images they are not allowed to, or fail to give a proper credit.

However, if you are sure that adding an image to a kata description is a good idea, there are some options available.


## Externally hosted images

To use this method, an image has to be uploaded to some third party hosting service, and referred to with appropriate Markdown:

`![image title](http://path.to/image.jpg)`

### Pros

- Easy to do,
- Short, does not inflate description,
- Works for all types of images supported by browsers.

### Cons

- Requires external hosting service. Some services do not allow for linking uploaded images directly, or put some other limitations on access to them.
- Externally hosted image is a dependency which is difficult to control and manage. It cannot be easily updated, it can expire after some time, be removed, or simply disappear.


## Inline images with encoded content

Markdown supports not only images pointed by URL, but just like for `<img>` element, image data can be embedded directly into a document with a so-called _data URL_:

`![image title](data:<mediatype>;<encoding>,<data>)`

### Examples

- `![image title](data:image/gif;base64,Base64 encoded data)` - a Base64 encoded GIF image
- `![image title](data:image/svg+xml;base64,Base64 encoded data)` - a Base64 encoded SVG XML image
- `![image title](data:image/svg+xml;utf8,URL encoded SVG XML)` - an URL encoded SVG XML image

### Pros

- Does not require third party hosting service, image data is embedded directly into a kata description.

### Cons

- Encoded image data is usually very large, description is inflated terribly. Therefore, it works well only for small images.
- MIME type matching the image format has to be looked up.
- Browsers differ in requirements for MIME types, encodings, and format of data URL. Some browsers require the data to be URL encoded, while others not. Format of the data URL, names of encodings, and other details can differ between browsers.
- Additional tools are needed to encode image data as Base-64, gzip, or URL.


## SVG in HTML markup

Many Markdown applications, including Codewars GUI, allow you to use HTML tags in Markdown-formatted text. This allows you to use SVG images directly within a kata description, and it will be rendered as an image.

### Pros

- It's quire easy. Image markup just needs to be pasted into the kata editor, it does not require additional processing, encoding, etc.
- At least it should be readable better than encoded image data.

### Cons

- Even simple SVG images can be still large, inflating the description significantly,
- Effects of mixing HTML and Markdown together are not always well defined and can change over time.


