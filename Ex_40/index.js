function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Taylor Swift", "Folklore");
var album2 = make_album("Kendrick Lamar", "Good Kid, M.A.A.D City");
var album3 = make_album("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band", 13);
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
