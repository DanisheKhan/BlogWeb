import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 transition-transform transform hover:scale-105">
        {" "}
        {/* Added hover effect */}
        <div className="w-full flex justify-center mb-4">
          {" "}
          {/* Changed to flex justify-center */}
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full object-cover aspect-video" // Added width, object-cover, and aspect ratio
          />
        </div>
        <h2 className="text-xl font-bold truncate">{title}</h2>{" "}
        {/* Added truncate */}
      </div>
    </Link>
  );
}

export default PostCard;
