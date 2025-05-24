const moviesArr = [
  { key: "Pavan Marriage", value: "xQsmfcAW8mQ" },
  { key: "Luca Telugu Trailer", value: "sQ23XPNKQNw" }
];




const heroVideos = [{
        src: "Videos/pavanPelliHighlights.mp4",
        title: "Pavan Pelli Highlights",
        image: "Videos/pavanPelliHighlights.jpg",
        subtitle: "When wedding chaos met cinematic comedy",
        desc: "A hilarious mashup of real-life chaos and reel-life drama from Pavan’s 2025 wedding — edited with heart, humor, and hidden cameras.",
        meta: "2025 | Wedding Highlights | Telugu | Comedy Edit",
        info: `Captured in May 2025, this lighthearted edit turns the emotional and chaotic moments of Pavan's wedding into a mini movie of laughter and love.<br>
		With unexpected entries, playful banter, and moments straight out of a sitcom, this surprise edit captures the true spirit of the celebration.<br><br>
		<strong>Editor & Concept:</strong> Eswar<br>
		<strong>Genres:</strong> Comedy, Wedding, Real Moments`,
        tags: "Pavan, Vaishnavi, wedding, 2025, fun, emotional, kavya, bhargav, eswar, edit, charan, leela, sowjanya, kranthi, durga rao, comedy, pelli",
        section: "FriendFlix Originals, Wedding Season",
        status: "Recently added"
    },
	{
  src: "Videos/KavyaBhargavMarriageLife.mp4",
  title: "The Perfect Couple",
  image: "Videos/PerfectCouple.png",
  subtitle: "When love meets… supreme understanding",
  desc: "Dive into a beautifully crafted journey of two soulmates who never argue, never shout, and definitely never blame each other. Ever.",
  meta: "2023 | Love Marriage Chronicles | Telugu | Sarcasm Edit",
  info: `A cinematic masterpiece where every argument is proof of affection and every misunderstanding is a sign of deep connection.<br>
         Taken straight from a blockbuster fight scene, this parody shows just how 'peaceful' love marriages can be.<br><br>
         <strong>Starring:</strong> Kavya & Bhargav<br>
         <strong>Editor & Satire Concept:</strong> Eswar<br>
         <strong>Genres:</strong> Sarcasm, Relationship Roast, Comedy Edit`,
  tags: "Kavya, Bhargav, love marriage, sarcasm, fight, edit, fun, emotional roast, Eswar, relationship goals",
  section: "FriendFlix Originals, Wedding Season"
},
	{
        src: "Videos/invitation.mp4",
        title: "The Invitation",
        image: "Videos/invitation.jpg",
        subtitle: "A prelude to love, filmed in the heart of Araku",
        desc: "Shot in the serene hills of Araku, Kavya and Bhargav's pre-wedding journey unfolds like a dream — a celebration of love, laughter, and the promise of always.",
        meta: "2022 | Pre-Wedding Short Film | Telugu | Araku",
        info: `Kavya and Bhargav’s love story unfolds in this intimate pre-wedding shoot, filmed in the serene landscapes of Araku.<br>
        Shot exclusively for their wedding invitation, this cinematic journey captures the joy, charm, and timeless bond of two hearts becoming one.<br><br>
        <strong>Cast:</strong> Kavya, Bhargav<br>
        <strong>Direction Supervision:</strong> Eswar<br>
        <strong>Genres:</strong> Romance, Nature, Telugu Wedding Films`,
        tags: "Kavya, Bhargav, Romance, Love, bhaavyam, PreWedding, Invitation, Araku, Nature, Vizag, pelli",
        section: "Wedding Season"
    },
    {
        src: "Videos/bgmi.mp4",
        title: "BGMI Beats",
        image: "Videos/bgmi.jpg",
        subtitle: "Game of Hearts",
        desc: "Bhargav’s favorite game became Kavya’s secret mission. What started as gameplay turned into a celebration of love and laughter.",
        meta: "2024 | Surprise Anniversary Video | Telugu | BGMI",
        info: `Kavya secretly learned BGMI to surprise Bhargav and spend more time with him in the game he enjoys.<br>
      This video is made from their actual gameplay moments, edited as a lighthearted anniversary gift showing them dancing together in-game.<br><br>
      <strong>Cast:</strong> Kavya, Bhargav (In-Game)<br>
      <strong>Edit:</strong> Eswar<br>
      <strong>Genres:</strong> Gaming, Edit, Romance`,
        tags: "Kavya, Bhargav, Edit, Eswar, Gaming, Romance, Love, bhaavyam, BGMI",
        section: "Rewind Romance"
    },
    {
        src: "Videos/anniversary.mp4",
        title: "The Anniversary",
        image: "Videos/anniversary.jpg",
        subtitle: "A love story, retold with smiles and surprise",
        desc: "Eswar’s surprise edit for Kavya and Bhargav — their wedding moments woven with emotion, music, and a touch of humor.",
        meta: "2024 | Anniversary Special | Telugu | Emotional & Fun",
        info: `For their anniversary, Eswar created a special surprise video for Kavya and Bhargav.<br>
    Using their wedding footage, he crafted a heartfelt edit filled with nostalgic moments, music, and a funny twist at the end.<br><br>
    <strong>Cast:</strong> Kavya, Bhargav<br>
    <strong>Edit & Surprise Concept:</strong> Eswar<br>
    <strong>Genres:</strong> Wedding, Emotion, Fun, Celebration`,
        tags: "Kavya, Bhargav, anniversary, wedding, edit, eswar, emotion, surprise, fun, song, comedy",
        section: "Rewind Romance"
    },
    {
        src: "Videos/marryMe.mp4",
        title: "Marry Me",
        image: "Videos/marryMe.jpg",
        subtitle: "A reel that captured a real love story",
        desc: "During the Marry Me trend on Instagram, Kavya and Bhargav recreated the reel as part of their 2022 pre-wedding shoot — blending trend with tenderness.",
        meta: "2022 | Pre-Wedding Reel | Telugu | Trending Love",
        info: `Back in 2022, the “Marry Me” reel trend was viral on Instagram. Kavya and Bhargav, amidst their pre-wedding shoot, recreated this beautiful reel.<br>
    It not only followed the trend but also perfectly captured their chemistry and celebration of love.<br><br>
    <strong>Cast:</strong> Kavya, Bhargav<br>
    <strong>Direction Supervision:</strong> Eswar<br>
    <strong>Genres:</strong> Pre-Wedding, Trend, Romance, Reel`,
        tags: "Kavya, Bhargav, prewedding, reel, trend, marry me, 2022, romance",
        section: "Rewind Romance"
    },
	{
  src: "Videos/Batch Intro.mp4",
  title: "The Introduction",
  image: "Videos/Batch.png",
  subtitle: "An unnecessarily honest intro of our batch",
  desc: "No acting. No filters. Just raw footage of how our batch really is!!",
  meta: "2024 | Realistic Batch Edit | Telugu | Fun Roast",
  info: `This is not a batch intro. It’s a full-on roast disguised as an edit.<br>
  Each person got matched with a movie scene — not because it fits, but because it hurts (in a funny way).<br><br>
  <strong>Cast:</strong> Batch<br>
  <strong>Concept & Edit:</strong> Eswar<br>
  <strong>Genres:</strong> Real Moments, Friendship, Sarcastic Fun`,
  tags: "batch, friendship, roast, funny, comedy, chaos, edit, eswar, kavya, bhargav, charan, pavan, sowjanya",
  section: "FriendFlix Originals"
},{
  src: "Videos/CharanFunnyEdit.mp4",
  title: "Life of Charan",
  image: "Videos/charan.png",
  subtitle: "A 15secs documentary on one unpredictable person",
  desc: "You know why this video had to exist.",
  meta: "2024 | Batch Highlight | Telugu | Humor Edit",
  info: `Charan doesn’t act. He just exists.<br>
  <strong>Subject:</strong>Roast Charan<br>
  <strong>Genres:</strong> Friendship, Humor, Observational Comedy`,
  tags: "charan, funny, edit, natural comedy",
  section: "FriendFlix Originals"
},
{
  src: "Videos/BGMI Squad.mp4",
  title: "BGMI Batch GamePlay",
  image: "Videos/BgmiSquad.jpg",
  subtitle: "Revive, Recall, Reload",
  desc: "Our batch’s unforgettable BGMI gameplay moments, recreated with funny Telugu movie reactions and over-the-top drama.",
  meta: "2024 | Gaming Parody | Telugu | BGMI Edit",
  info: `A hilarious recreation of real in-game fails, savage kills, and dramatic reactions — all matched with perfect film scenes.<br><br>
  <strong>Players:</strong> Our Batch<br>
  <strong>Editor:</strong> Eswar<br>
  <strong>Genres:</strong> Gaming, Fun, Friendship, Meme`,
  tags: "BGMI, batch, gaming, fail moments, savage, fun, telugu edit, comedy, eswar, kavya, bhargav, charan, yuvraj, medasani",
  section: "FriendFlix Originals"
},{
  src: "Videos/CurrentPhase.mp4",
  title: "Idhi Mana Phase Ra",
  image: "Videos/CurrentPhase.png",
  subtitle: "The drama never ends, just like our lives",
  desc: "A cinematic comparison between iconic movie scenes and the current phase of our batch — funny, exaggerated, and way too real.",
  meta: "2024 | Batch Life Edit | Telugu | Satire",
  info: `From job pressure to wedding confusion, this edit packs every emotion the batch is going through today.<br>
  Matched with blockbuster scenes and punchlines, it's a reel of relatable chaos.<br><br>
  <strong>Starring:</strong> Batch Members<br>
  <strong>Editor:</strong> Eswar<br>
  <strong>Genres:</strong> Friendship, Reality Roast, Satire`,
  tags: "batch, friendship, drama, job life, marriage confusion, satire, eswar, kavya, bhargav, charan, pavan, sowjanya, fun",
  section: "FriendFlix Originals"
}

   ];