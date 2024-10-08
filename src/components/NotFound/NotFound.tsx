import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>
        If you are not redirected automatically,{" "}
        <a href="/Portfolio/">click here</a>.
      </p>
    </div>
  );
};

export default NotFound;
