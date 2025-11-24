export async function getSocialStats() {
    // Default mock data (fallback)
    const stats = {
        youtube: { subscribers: "15K+", views: "1.2M+" },
        instagram: { followers: "25K+" },
        tiktok: { followers: "50K+" }
    };

    try {
        // 1. YouTube Data API
        if (process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_CHANNEL_ID) {
            const ytResponse = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.YOUTUBE_CHANNEL_ID}&key=${process.env.YOUTUBE_API_KEY}`,
                { next: { revalidate: 3600 } } // Cache for 1 hour
            );

            if (ytResponse.ok) {
                const ytData = await ytResponse.json();
                if (ytData.items && ytData.items.length > 0) {
                    const ytStats = ytData.items[0].statistics;
                    stats.youtube.subscribers = formatNumber(ytStats.subscriberCount);
                    stats.youtube.views = formatNumber(ytStats.viewCount);
                }
            }
        }

        // 2. Instagram & TikTok
        // These APIs are complex and require OAuth tokens that expire.
        // For a static/personal site, we often use a third-party service or manual update.
        // If the user provides a token in .env, we could implement a fetch here.
        if (process.env.INSTAGRAM_ACCESS_TOKEN) {
            // Placeholder for Instagram Graph API logic
            // const igResponse = await fetch(...)
        }

    } catch (error) {
        console.error("Error fetching social stats:", error);
    }

    return stats;
}

function formatNumber(num) {
    if (!num) return "0";
    const n = parseInt(num);
    if (n >= 1000000) {
        return (n / 1000000).toFixed(1) + "M";
    }
    if (n >= 1000) {
        return (n / 1000).toFixed(1) + "K";
    }
    return n.toString();
}
