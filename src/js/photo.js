/**
 * Photo - custom object type.
 * @param {File} file
 * @constructor
 */
var Photo = function(file) {
    'use strict';

    this.file = file;
};


/**
 * Invoke callback after finishing file reading.
 * @param {Function} callback
 */
Photo.prototype.getImageAsBase64 = function(callback) {
    'use strict';

    var fileReader = new FileReader();

    if (this.file.type.match(/image.*/)) {
        fileReader.readAsDataURL(this.file);
    }

    fileReader.addEventListener('loadend', function() {
        callback(fileReader.result);
    });
};


/**
 * Invoke callback after creating photo thumbnail.
 * @param {String} data - Base64 encoded image
 * @param {Number} width - thumbnail width
 * @param {Number} height - thumbnail height
 * @param {Function} callback
 */
Photo.prototype.getThumbAsBase64 = function(data, width, height, callback) {
    'use strict';

    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        image = new Image();

    canvas.width = width;
    canvas.height = height;
    image.src = data;

    ctx.drawImage(image, 0, 0, width, height);

    callback(canvas.toDataURL());
};