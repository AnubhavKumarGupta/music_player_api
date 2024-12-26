# music_player_api  [👉 Explore Music Player](https://music-player-api-azure.vercel.app/)


## 👨🏻‍🏫 Overview
- This is a **web-based Music Player application** that allows users to search for songs and play song previews using the iTunes API.
- The project focuses on fetching music data dynamically and providing a user-friendly interface for discovering and listening to music.

## 🌟 Features

- **Search Functionality**: Users can search for songs by entering keywords (e.g., song title, artist name, etc.).
- **Dynamic Song Display**: Fetches data from the iTunes API and dynamically displays songs on the webpage.
- **Song Previews**: Allows users to listen to a 30-second preview of the song.
- **Responsive Design**: The application works seamlessly across all devices (desktop, tablet, and mobile).
- **Hover Effects**: Stylish hover effects on the song cards for an enhanced user experience.
- **Stop Audio on Play**: If a new song is played, the previously playing song automatically stops.


## 🛠️ Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling and making the design responsive.
- **JavaScript**: For handling user interactions and fetching data from the API.
- **iTunes API**: To fetch song data (track name, artist, album, and preview URL).

## 📂 Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the project
├── script.js           # JavaScript logic for fetching and displaying songs
└── README.md           # Project documentation
```

## 📸 Screenshots

### 1. Initial Search Interface
The application allows users to input keywords to search for songs.

<img width="608" alt="demo1" src="https://github.com/user-attachments/assets/0a699e4f-3d67-44aa-a5e6-6a5f1b409339" />


### 2. Displaying Songs
After searching, the app displays a grid of song cards showing the song name, artist, album, and preview.

<img width="943" alt="demo2" src="https://github.com/user-attachments/assets/e3664e24-4305-4974-8d29-cda0c3a799ea" />


## 🔄 How It Works

1. **Search for Songs**: 
   - Enter a keyword in the search bar and click on the "Search" button.
   - The app sends a request to the iTunes API to fetch songs matching the search term.

2. **View and Play Songs**: 
   - The app dynamically displays the search results in a grid format.
   - Each song card shows the album artwork, song title, artist name, album name, and an audio player for the preview.

3. **Audio Playback**: 
   - You can play a 30-second preview of any song using the audio player.
   - If a new song is played, the previously playing song stops automatically.

## 📚 API Used

This project uses the [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/).  
The API provides the following data for each song:
- **Track Name**: Name of the song.
- **Artist Name**: Name of the artist.
- **Collection Name**: Name of the album.
- **Preview URL**: 30-second audio preview of the song.
- **Artwork URL**: Album artwork image.

## 🤔 Challenges Faced

1. **API Integration**:
   - Understanding the structure of the iTunes API response was a challenge.  
   - Solution: Debugged using the browser console and explored API documentation to fetch the required fields.

2. **Audio Playback Control**:
   - Handling multiple audio players and ensuring only one song plays at a time.  
   - Solution: Used a global variable (`currentAudio`) to keep track of the currently playing audio and stop the previous one.

3. **Responsive Design**:
   - Ensuring the app looks good on all devices (desktop, tablet, mobile).  
   - Solution: Used CSS Grid and media queries for a responsive layout.

4. **Error Handling**:
   - Handling scenarios where no results were found or there was an issue with the API call.  
   - Solution: Displayed an appropriate message when the API call failed or returned empty results.


## 📦 Future Enhancements

- **Playlist Creation**: Allow users to create and save playlists.
- **Song Details Page**: Add a dedicated page for detailed song/artist information.
- **Better Error Handling**: Show user-friendly messages for API errors or empty results.
- **Dark/Light Mode**: Add a theme switcher for better user experience.
- **Deployed Application**: Deploy the app using GitHub Pages or other platforms for easy access.

## 🙏 Acknowledgements

- Thanks to [Apple iTunes API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/) for providing the song data.
- UI inspirations from modern music players.

## 🖋️ Author

**Anubhav Kumar Gupta**  
- [LinkedIn](https://www.linkedin.com/in/anubhav2109/)  
- [GitHub](https://github.com/AnubhavKumarGupta)

---

Feel free to contribute to this project by submitting issues or pull requests! 😄
