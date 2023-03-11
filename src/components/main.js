const panoImage = document.querySelector('.pano-image')
    const citypano = '../images/alma.jpg'

    const panorama = new PANOLENS.ImagePanorama(citypano)
    const viewer = new PANOLENS.Viewer({
        container:panoImage
    });

    viewer.add(panorama)