---
title: Adding Images to Kata Descriptions
kind: recipe
---

Currently, it's not possible to attach any files or additional assets to a kata, but many authors would like to illustrate their descriptions with images. There are plans to introduce the possibility of uploading and attaching files to descriptions. However, until attaching images is implemented, authors have to resort to other techniques, each with advantages and disadvantages.

:::note
Images used to be necessary to present equations and formulas. Since support for KaTeX was introduced into Codewars, it's no longer the case. Math formulas can be embedded into descriptions using [Codewars Support for Math Typesetting][markdown-extension-math].
:::


## Avoid Images

While eye-catching and potentially helpful, images used in kata descriptions often cause problems:

- Some authors mistakenly think that illustrative images may be used in place of a clear and concise description. However, images may become unavailable over time for various reasons, so they should never contain information critical to understanding the kata not mentioned elsewhere in the description.
- Images incur additional maintenance costs. Descriptions can be easily updated, but images have to be replaced on each modification. When a description is modified but an image is not, they become out of sync.
- Images cause problems with layout. It's difficult to get their size right, they look differently for users with different screen sizes, resolutions, or screen orientations. An image can appear to look nice on a computer screen, but can break things for mobile users.
- Authors often miss the fact that images can look bad when combined with theming. When an image looks good when viewed with a dark theme, it can look really bad in light mode, and vice versa.
- Images are subject to licensing, copyright, and intellectual property rights. Authors happen to use images they are not allowed to, or fail to give proper credit.

However, if you are sure that adding an image to a kata description is a good idea, there are some options available.


## ASCII-art

ASCII-art is able to represent surprisingly many concepts, being quite simple at the same time. It's easy to add to the description, all it takes is to surround a block of characters with code markdown:

~~~
```
+----------+    +-------+             +-------+
|          |    | inner |             |       |
|   head   +--->+ node  +---> ... +-->+ tail  |
|          |    |       |             |       |
+----------+    +-------+             +-------+
```
~~~

Drawing ASCII images can be supported by a variety of tools (for example, [ASCIIflow](http://asciiflow.com/)). It can be sufficient for representing simple charts and diagrams, but won't be enough for more detailed or colorful images.


## Using an Image Hosting Service

To use this method, an image has to be uploaded to some third party hosting service, and referred to with appropriate Markdown:

`![image title](http://path.to/image.jpg)`

Adding images this way is easy to do, and does not require a lot of Markdown which would inflate the description significantly. It also works for all types of images supported by browsers.

However, the downside is that this requires an external hosting service. Some services do not allow for linking uploaded images directly or put some other limitations on access to them. Additionally, externally-hosted images are a dependency that is difficult to control and manage. These images cannot be easily updated and can expire or become unavailable.


## Using Data URLs

In addition to images referenced by URL, Markdown supports image data embedded into a document with a _data URL_, much like `<img>` elements:

`![image title](data:<mediatype>;<encoding>,<data>)`

Data URLs do not require a third-party hosting service, as the image data is embedded directly into a kata description.

But this method has a series of disadvantages. The encoded image data is usually very large, inflating the description terribly. Therefore, it works well only for small images. The MIME type matching the image format has to be looked up. Browsers differ in requirements and interpretation of MIME types, encodings, and details of data URL formats. Some browsers require the data to be URL encoded, while others do not. To encode image data as Base-64, gzip, or URL, additional tools need to be used.

### Examples

- `![image title](data:image/gif;base64,Base64 encoded data)` - a Base64 encoded GIF image
- `![image title](data:image/svg+xml;base64,Base64 encoded data)` - a Base64 encoded SVG XML image
- `![image title](data:image/svg+xml;utf8,URL encoded SVG XML)` - an URL encoded SVG XML image

### Tools

There are many online tools available which can convert an image to Base64 (for example [this one](https://www.motobit.com/util/base64-decoder-encoder.asp)), or generate a data URL from an image file, for example converters available on [BASE64 Guru](https://base64.guru/converter/encode/image) or [ezgif.com](https://ezgif.com/image-to-datauri). 


## Inlining SVG

Codewars allows a safe subset of HTML in Markdown including `<svg>`, so it's possible to use SVG images directly within a kata description.

The image markup can be pasted directly into the kata editor without additional processing or encoding, and usually it's more readable than encoded image data.
But still, even simple-looking SVGs often require a significant amount of code, inflating the kata description. However, they can be minified or optimized with some additional tools (for example [SVGOMG][svgomg]), or by removing unnecessary parts of markup and Metadata. Additionally, the results of mixing HTML with Markdown are ill-defined and subject to change.
Make sure to prevent images from becoming too large by using `width/height` attributes, `style` attributes, or a wrapper element with `style`.


[svgomg]: https://jakearchibald.github.io/svgomg/
[markdown-extension-math]: /references/markdown/extensions/#math-typesetting
