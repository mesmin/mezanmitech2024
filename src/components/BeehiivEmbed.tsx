import React from 'react';

interface SlimBeehiivEmbedProps {
  embedId: string;
  height?: number;
  width? : number;
  className?: string;
}

const SlimBeehiivEmbed: React.FC<SlimBeehiivEmbedProps> = ({
  embedId,
  height = 52,
  width = "60%",
  className = '',
}) => {
  return (
    <iframe
      src={`https://embeds.beehiiv.com/${embedId}?slim=true`}
      data-test-id="beehiiv-embed"
      height={height}
      frameBorder="0"
      scrolling="no"
      width={width}
      className={`m-0 bg-transparent ${className}`}
      style={{ borderRadius: 0 }}
    />
  );
};

export default SlimBeehiivEmbed;