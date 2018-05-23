/*showImg(id) kommer fra onclick fra HTML'en*/
function showImg(id) {
		/*Stmnt 1 => Sætter en variable før "loop'en" starter*/ 
		/*stmnt 2 => Længden af "loop'en" (i<5 fordi der kun er 4 elementer)*/
		/*stmnt 3 => Returnerer værdien før inkrementeringen */
        for ( i = 1; i < 5; i++) {
			/*Variablen indeholder en reference til elementet der har et ID bestående af "testimonial-img" + værdien i*/
            var imageHide = document.getElementById( "testimonials-img" + i );
			/*Hvis variablen "imageHide" ikke er lig med ingenting*/
            if (imageHide != null)
				/*Skal den hente class'en "hide"*/
                imageHide.className = 'hide';
        }
		/*Variablen indeholder en reference til elementet der har et ID bestående af "testimonial-img" + id'en fra showImg(id)*/
        var imageShow = document.getElementById( "testimonials-img" + id );
		/*Hvis variablen "imageShow" ikke er lig med ingenting*/
        if (imageShow != null)
			/*Skal den vise class'en "show"*/
            imageShow.className = 'show';
}
