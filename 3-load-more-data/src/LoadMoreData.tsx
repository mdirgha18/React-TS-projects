import React, { useState, useEffect } from "react";
import "./styles.css";

// Define the type for each item
type Item = {
    id: number;
    name: string;
};

// Generate an array of 50 items (Item 1 to Item 50)
const allData: Item[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
}));

const LoadMoreData: React.FC = () => {
    // State to keep track of currently visible data
    const [visibleData, setVisibleData] = useState<Item[]>([]);

    // State to track the next index to load from
    const [nextIndex, setNextIndex] = useState<number>(0);

    // Number of items to load per batch
    const batchSize = 10;

    // Load the initial batch on component mount
    useEffect(() => {
        loadMore();
    }, []);

    // Function to load the next batch of items
    const loadMore = () => {
        // Slice out the next set of items
        const nextItems = allData.slice(nextIndex, nextIndex + batchSize);

        // Append the new items to the visible list
        setVisibleData((prev) => [...prev, ...nextItems]);

        // Update the index to load the next batch next time
        setNextIndex(nextIndex + batchSize);
    };

    return (
        <div className="load-more-wrapper">
            <h2>Load More Demo</h2>

            {/* Render visible items */}
            <ul>
                {visibleData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* Load more button, shown only if more items are available */}
            {nextIndex < allData.length && (
                <button onClick={loadMore}>Load More</button>
            )}

            {/* Message displayed when all items are loaded */}
            {nextIndex >= allData.length && <p>All items loaded</p>}
        </div>
    );
};

export default LoadMoreData;
