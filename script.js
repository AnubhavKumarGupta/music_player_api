const mainDiv = document.getElementById('results');
const input = document.getElementById('search-input');

let currentAudio = null; // Keep track of the currently playing audio

const fetchData = () => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(input.value)}&entity=song`)
        .then((res) => res.json())
        .then((data) => displaydata(data.results))
        .catch((err) => console.error('Error fetching songs:', err));
};

document.getElementById('search-button').addEventListener('click', fetchData);

const displaydata = (songs) => {
    mainDiv.textContent = ''; // Clear previous results

    songs.forEach((song) => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        const songImg = document.createElement('img');
        songImg.src = song.artworkUrl100;
        songImg.alt = song.collectionName;

        const songTitle = document.createElement('h3');
        songTitle.textContent = song.trackName;

        const songArtist = document.createElement('p');
        songArtist.textContent = `Artist: ${song.artistName}`;

        const songAlbum = document.createElement('p');
        songAlbum.textContent = `Album: ${song.collectionName}`;

        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        const audioSource = document.createElement('source');
        audioSource.src = song.previewUrl;
        audioSource.type = 'audio/mpeg';
        audioElement.appendChild(audioSource);

        // Add event listener to handle play/pause
        audioElement.addEventListener('play', () => {
            if (currentAudio && currentAudio !== audioElement) {
                currentAudio.pause();
                currentAudio.currentTime = 0; // Reset the previously playing audio
            }
            currentAudio = audioElement; // Update the current audio
        });

        songDiv.append(songImg, songTitle, songArtist, songAlbum, audioElement);
        mainDiv.append(songDiv);
    });
};
