const Jimp = require('jimp')

const DEFAULT_IMAGE_QUALITY = 50
const DEFAULT_IMAGE_DIMENSIONS = { height: 400, width: 400 }
/**
 * Compress images (resize and save them with 100% quality).
 * @param imageBlob image URL from URL.createObjectURL()
 * @return newImage object type file
 */
async function resizeImage(
  imageBlob,
  imageName,
  imageDimensions = DEFAULT_IMAGE_DIMENSIONS,
) {
  let newImage = await Jimp.read(imageBlob)

  const jimpAuto = Jimp.AUTO
  if (newImage.bitmap.width >= newImage.bitmap.height) {
    newImage.resize(imageDimensions.width, jimpAuto)
  } else {
    newImage.resize(jimpAuto, imageDimensions.height)
  }

  newImage
    .grayscale()
    .quality(DEFAULT_IMAGE_QUALITY)
    .getBuffer(newImage.getMIME(), (err, src) => {
      const blob = new Blob([src], { type: newImage.getMIME() })
      const blobAsFile = new File([blob], imageName, {
        type: newImage.getMIME(),
      })

      newImage = blobAsFile
    })

  return newImage
}

export default {
  resize: resizeImage,
}
