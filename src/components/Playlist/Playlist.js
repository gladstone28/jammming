import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, onRemove, onNameChange, onSave }) => {
  const handleNameChange = (event) => {
    onNameChange(event.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
