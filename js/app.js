baguetteBox.run('.list');


// Code Snippet from //
// https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ //
function search_photo() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let photo = document.getElementsByClassName('photos');

    for(i = 0; i < photo.length; i++) {
        if (!photo[i].innerHTML.toLowerCase().includes(input)) {
            photo[i].style.display='none';
        } else {
            photo[i].style.display='list-item';
        }
    }
}
