import React from "react";

interface WheelOfFortuneProps {
  options: string[];
}

const WheelOfFortune: React.FC<WheelOfFortuneProps> = ({ options }) => {
  const sliceAngle = 360 / options.length;
  const radius = 100; // Adjust as needed
  const centerX = radius + 10; // Add some padding for text
  const centerY = radius + 10; // Add some padding for text

  const renderSlices = () => {
    return options.map((option, index) => {
      const startAngle = index * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);

      // Calculate the position for the text
      const textX = centerX + radius * 0.75 * Math.cos((startRad + endRad) / 2);
      const textY = centerY + radius * 0.75 * Math.sin((startRad + endRad) / 2);

      return (
        <g key={index}>
          <path
            d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
            fill={`hsl(${(index * (360 / options.length)) % 360}, 70%, 70%)`}
          >
            <title>{option}</title>
          </path>
          <text x={textX} y={textY} dominantBaseline="middle" textAnchor="middle" fill="white">
            {option}
          </text>
        </g>
      );
    });
  };

  // Calculate the position for the triangle
  const triangleX = centerX;
  const triangleY = centerY - radius;

  return (
    <svg width={2 * (radius + 10)} height={2 * (radius + 10)}>
      <g transform={`translate(${0}, ${0})`}>{renderSlices()}</g>
      <polygon
        points={`${triangleX},${triangleY - 10} ${triangleX - 10},${triangleY + 10} ${triangleX + 10},${
          triangleY + 10
        }`}
        fill="black"
      />
    </svg>
  );
};

export default WheelOfFortune;
