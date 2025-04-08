import React, { useState, useEffect } from "react";
import "./styles.css";

type Item = {
  id: number;
  name: string;
};

const allData: Item[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const LoadMoreData: React.FC = () => {
  const [visibleData, setVisibleData] = useState<Item[]>([]);
  const [nextIndex, setNextIndex] = useState<number>(0);
  const batchSize = 10;

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    const nextItems = allData.slice(nextIndex, nextIndex + batchSize);
    setVisibleData((prev) => [...prev, ...nextItems]);
    setNextIndex(nextIndex + batchSize);
  };

  return (
    <div className="load-more-wrapper">
      <h2>Load More Demo</h2>
      <ul>
        {visibleData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {nextIndex < allData.length && (
        <button onClick={loadMore}>Load More</button>
      )}
      {nextIndex >= allData.length && <p>All items loaded ✅</p>}
    </div>
  );
};

export default LoadMoreData;
