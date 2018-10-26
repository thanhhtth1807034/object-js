// var arrayTubes = new Array(
//     {
//         id: 'UCXao7aTDQM',
//         title: 'Tháng Tư Là Lời Nói Dối Của Em',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'dns2WLu8Su8',
//         title: 'Người Tình Mùa Đông',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'XyjhXzsVdiI',
//         title: 'Tình Thôi Xót Xa',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'nrpjNgZCdlM',
//         title: 'Tái Bút Anh Yêu Em',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'LVQxfALfTe4',
//         title: 'Người con gái ta thương',
//         author: 'Hà Anh Tuấn'
//     },
//     {
//         id: 'A8u_fOetSQc',
//         title: 'Nơi ấy bình yên',
//         author: 'Hà Anh Tuấn'
//     }
// );
// var idMyTube = document.getElementById('myTubes');
// if (idMyTube != null){
//     for (var i = 0; i < arrayTubes.length; i++) {
//         var itemTube = '<div class="tube-item">';
//                 itemTube += '<iframe width="660" height="355" src="https://www.youtube.com/embed/'+ arrayTubes[i].id +'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
//                 itemTube += '<h3>' + arrayTubes[i].title + '</h3>';
//             itemTube += '</div>';
//         idMyTube.innerHTML += itemTube;
//     }
// }


document.getElementById('icon').onclick =function () {
    searchYoutube();
}
document.getElementById('keyword').onkeypress = function (event) {
    if (event.keyCode === 13) {
        searchYoutube();
    }
}
function searchYoutube() {
    var keyword = document.getElementById('keyword').value;
    var YOUTUBE_API = 'https://content.googleapis.com/youtube/v3/search?q=' + keyword +'&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                videoItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem;
            }
            document.getElementById("myTubes").innerHTML = content;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();

}





