import { useEffect, useState } from "react";
import "./Loader.css";
import Image from "next/image";
import logo from "../../../public/images/edumeet-yellow-logo-removebg-preview.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 80) {
      setShowWelcome(true); // Show "Welcome to EduMeet!" at 80%
    }
    if (progress === 100) {
      onComplete(); // Show main content at 100%
    }
  }, [progress, onComplete]);

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Progress Line */}
        <div className="progress-line" style={{ width: `${progress}%` }}></div>

        {/* Percentage Number */}
        <span className="progress-number">{progress}%</span>

        {/* Logo (Grows as Progress Increases) */}
        <div
          className="logo-wrapper"
          style={{ transform: `scale(${1 + progress / 150})` }}
        >
          <Image
            src={logo}
            alt="EduMeet Logo"
            width={100}
            height={100}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>

      {/* Welcome Message Appears at 80% */}
      {showWelcome && <p className="welcome-text">Welcome to EduMeet!</p>}
    </div>
  );
};

export default Loader;
