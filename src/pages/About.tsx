import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Hi there! 👋</h1>
      <p className="text-xl mb-4">
        I have 14 years of experience in Software Development, focused on
        frontend development since 8 years!
      </p>
      <div className="space-y-2">
        <p>🚀 Learning React and TypeScript</p>
        <p>💻 Coding cool websites</p>
        <p>🎮 Gamer in my free time</p>
        <p>🌟 Dreaming big about tech!</p>
      </div>
    </div>
  );
};

export default About;
