const sharp = require('sharp');

sharp('nombre-image.png')
    .resize(80)
    .grayscale()
    .toFile('imagen.saliente.png');