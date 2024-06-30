'use client'
import { useEffect } from 'react';

interface TweetEmbedProps {
  tweetId: string;
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ tweetId }) => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        window.twttr.widgets.load();
      };
      document.body.appendChild(script);
    }
  }, [tweetId]);

  return (
    <blockquote className="twitter-tweet">
      <a href={`https://twitter.com/i/status/${tweetId}`}></a>
    </blockquote>
  );
};

export default TweetEmbed;