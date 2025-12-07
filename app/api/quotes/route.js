// app/api/quotes/route.js

export async function GET() {
  try {
    // Public quotes API
    const res = await fetch("https://zenquotes.io/api/random", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await res.json();

    const text = data[0]?.q || "Hope is stronger than fear.";
    const author = data[0]?.a || "Unknown";

    return Response.json({
      quote: `${text} — ${author}`,
    });
  } catch (error) {
    return Response.json(
      {
        quote:
          "Hope is stronger than fear, and together we are stronger than cancer.",
      },
      { status: 200 }
    );
  }
}
