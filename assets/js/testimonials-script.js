function showImg(id) {
        for ( i = 1; i < 10; i++) {
            var imageHide = document.getElementById( "testimonials-img" + i );
            if (imageHide != null)
                imageHide.className = 'hide';
        }
        var imageShow = document.getElementById( "testimonials-img" + id );
        if (imageShow != null)
            imageShow.className = 'show';
}
