const mainDiv = document.getElementById('results'); // The div where we will display the results
const input = document.getElementById('search-input'); // The input field where the user will enter the search term

let currentAudio = null; // Keep track of the currently playing audio

const fetchData = () => { // Fetch data from the iTunes API 
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(input.value)}&entity=song`) // Fetch the data
        .then((res) => res.json()) // Parse the JSON data
        .then((data) => displaydata(data.results)) // Display the data
        .catch((err) => console.error('Error fetching songs:', err)); // Handle any errors
};

document.getElementById('search-button').addEventListener('click', fetchData); // Add event listener to the search button

const displaydata = (songs) => { // Display the data on the page
    mainDiv.textContent = ''; // Clear previous results

    songs.forEach((song) => { // Loop through the songs and create a div for each song to display the data on the page 
        const songDiv = document.createElement('div'); // Create a div for the song data 
        songDiv.classList.add('song'); // Add a class to the div for styling 

        const songImg = document.createElement('img'); // Create an img element to display the song artwork 
        songImg.src = song.artworkUrl100; // Set the src attribute of the img element to the artwork URL
        songImg.alt = song.collectionName; // Set the alt attribute of the img element to the collection name 

        const songTitle = document.createElement('h3'); // Create an h3 element to display the song title 
        songTitle.textContent = song.trackName; // Set the text content of the h3 element to the track name

        const songArtist = document.createElement('p'); // Create a p element to display the song artist
        songArtist.textContent = `Artist: ${song.artistName}`; // Set the text content of the p element to the artist name

        const songAlbum = document.createElement('p'); // Create a p element to display the song album
        songAlbum.textContent = `Album: ${song.collectionName}`; // Set the text content of the p element to the collection name

        const audioElement = document.createElement('audio'); // Create an audio element to play the song preview
        audioElement.controls = true; // Add controls to the audio element
        const audioSource = document.createElement('source'); // Create a source element to specify the audio source
        audioSource.src = song.previewUrl; // Set the src attribute of the source element to the preview URL
        audioSource.type = 'audio/mpeg'; // Set the type attribute of the source element to the audio type
        audioElement.appendChild(audioSource); // Append the source element to the audio element

        // Add event listener to handle play/pause
        audioElement.addEventListener('play', () => { // When the audio is played
            if (currentAudio && currentAudio !== audioElement) { // If there is a currently playing audio and it is not the current audio element 
                currentAudio.pause(); // Pause the currently playing audio
                currentAudio.currentTime = 0; // Reset the previously playing audio
            }
            currentAudio = audioElement; // Update the current audio
        });

        songDiv.append(songImg, songTitle, songArtist, songAlbum, audioElement); // Append the elements to the song div 
        mainDiv.append(songDiv); // Append the song div to the main div
    }); 
}; 
