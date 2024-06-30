import TweetEmbed from "./tweet-card";
const tweetIds = [
  "1763195157870948671",
  "1765280229872873541",
  "1784981981630959917",
  "1796562075243999405",
  "1691398454256304128",
  "1753759985450815770",
  "1800135913164403173",
  "1798742420047253910",
];

const WorksSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Some of our work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tweetIds.map((tweetId) => (
            <TweetEmbed key={tweetId} tweetId={tweetId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;