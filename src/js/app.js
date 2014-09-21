(function() {
    'use strict';

    var fileInput,
        fileUploaded,
        imageTmpl,
        imageListHint;

    imageTmpl = document.querySelector('#imageTmpl');
    imageListHint = document.querySelector('.ImageList-hint');


    /**
     * Callback invoked after files are uploaded.
     * @param {FileList} fileList - uploaded file list
     */
    fileUploaded = function(fileList) {
        var image,
            fileListLength = fileList.length;

        if (fileListLength) {
            for (var i = 0; i < fileListLength; i++) {
                image = new Photo(fileList[i]);

                image.getImageAsBase64(function(data) {
                    image.getThumbAsBase64(data, 150, 150, function(thumb) {
                        var item;

                        imageTmpl.content.querySelector('img').src = thumb;
                        imageTmpl.content.querySelector('a').href = data;

                        item = document.importNode(imageTmpl.content, true);

                        imageListHint.style.display = 'none';

                        PhotoList.addItem(item);
                    });
                });
            }
        }
    };


    /**
     * Initialization of DropArea component.
     */
    DropArea.init('#dropArea');
    DropArea.onDrop(function(event) {
        fileUploaded(event.dataTransfer.files);
    });


    /**
     * Adding event listeners to <input type="file">.
     */
    fileInput = document.querySelector('#fileInput');

    document.querySelector('#fileButton').addEventListener('click', function() {
        fileInput.dispatchEvent(new Event('click'));
    });

    fileInput.addEventListener('change', function() {
        fileUploaded(this.files);
    });


    /**
     * Initialization of PhotoList component.
     */
    PhotoList.init('#imageList');
})();