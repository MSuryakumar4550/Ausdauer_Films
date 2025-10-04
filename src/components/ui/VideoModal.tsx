import React from 'react';

// Define the types for the component's props
interface VideoModalProps {
  videoSrc: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose }) => {
  return (
    // Backdrop
    <div 
      onClick={onClose} 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    >
      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the video
        className="relative bg-black w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-4xl leading-none bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          &times; {/* This is an 'X' symbol */}
        </button>
        
        {/* Video Player */}
        <video 
          src={videoSrc}
          className="w-full h-full"
          controls // Show play/pause, volume, etc.
          autoPlay // Start playing immediately
        />
      </div>
    </div>
  );
};

export default VideoModal;