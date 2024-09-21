// import { Star } from "lucide-react";
// import React from "react";
// type IRating = {
//   value: number;
// };
// const Rating = ({ value }: IRating) => {
//   const starts = Array(value).fill(
//     <Star width={"14"} height={"14"} className="text-primary" fill="#ff9900" />
//   );
//   return (
//     <div className="flex items-center space-x-1">
//       {starts.map((star, index) => (
//         <span key={index}>{star}</span>
//       ))}
//     </div>
//   );
// };

// export default Rating;


import { Star } from "lucide-react";
import React from "react";

type IRating = {
  value: number; // The rating value, e.g., 4.5
};

const Rating = ({ value }: IRating) => {
  const fullStars = Math.floor(value); // Number of full stars
  const hasHalfStar = value % 1 >= 0.5; // Check if we need a half star
  const totalStars = 5; // Maximum number of stars

  return (
    <div className="flex items-center space-x-1">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={index}
          width="30"
          height="30"
          className="text-primary"
          fill="#FFD700" // Full star
        />
      ))}

      {/* Render half star if necessary */}
      {hasHalfStar && (
        <Star
          width="30"
          height="30"
          className="text-primary"
          fill="url(#half-gradient)" // Placeholder for a half star
          stroke="#FFD700"
        />
      )}

      {/* Render empty stars */}
      {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
        (_, index) => (
          <Star
            key={index + fullStars} // To ensure unique keys
            width="30"
            height="30"
            className="text-primary"
            fill="none" // Empty star
            stroke="#FFD700"
          />
        )
      )}
    </div>
  );
};

export default Rating;
