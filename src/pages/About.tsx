import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Hi there! 👋</h1>
      <p className="text-xl mb-4">
        I have 14 years experience in Software Development, focused on frontend
        development since 8 years!
      </p>
      <div className="space-y-2">
        <p>🚀 Learning React and TypeScript</p>
        <p>💻 Coding cool websites</p>
        <p>🎮 Gamer in my free time</p>
        <p>🌟 Dreaming big about tech!</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">My Skills:</h2>
        <div className="flex space-x-2">
          <span className="bg-blue-500 px-2 py-1 rounded">Theia</span>
          <span className="bg-yellow-500 px-2 py-1 rounded">TypeSCript</span>
          <span className="bg-green-500 px-2 py-1 rounded">JavaScript</span>
          <span className="bg-red-500 px-2 py-1 rounded">React</span>
        </div>
      </div>
    </div>
  );
};

export default About;
