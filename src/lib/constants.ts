export const steps = [
    {
        greeting: "Hi Arjun!",
        question: "What do you feel your heart needs right now?",
        options: [
    { id: "sleep", emoji: "🌙", text: "Sleep better" },
    { id: "anxiety", emoji: "🌿", text: "Manage anxiety" },
    { id: "spiritual", emoji: "✨", text: "Reconnect spiritually" },
    { id: "emotional", emoji: "💗", text: "Heal emotionally" },
], 
  card: {
            title: "Soulful Soundscapes, Not Lessons",
            description: "We give you calming, immersive sounds to help you relax instantly.",
            image:"/icons/group.png"
        }
    },
    {
        greeting: "Time preference",
        question: "When do you prefer to take a moment for yourself?",
        options:[
  { id: "morning", emoji: "🌅", text: "In the morning" },
  { id: "midday", emoji: "🌞", text: "Midday" },
  { id: "bedtime", emoji: "🌙", text: "Before bed" },
  { id: "varies", emoji: "🔄", text: "It varies" },
],
        card: {
            title: "Breathe With Intention",
            description: "Try guided breathing to feel more grounded in minutes.",
            image:"/icons/meditation.png"
        }
    },
    {

        card: {
            title: "Calm Voices That Truly Soothe",
            description: "Our audio is crafted with therapeutic voices and tones designed to emotionally ease your mind.",
            image:"/icons/meditation-2.png"

        }
    },
]


export const categories = [
    {
        line1: 'Breathe &',
        line2: 'Begin',
        bgColor: '#FFF9FF',
        textColor: '#8E4692',
        icon: '/icons/leaves.png',
        alt: 'Leaves icon',
    },
    {
        line1: 'Sleep &',
        line2: 'Rest',
        bgColor: '#F8F9FF',
        textColor: '#545C90',
        icon: '/icons/moon.png',
        alt: 'Moon icon',

    },
    {
        line1: 'Focus & Mind',
        line2: 'Support',
        bgColor: '#F1F9F4',
        textColor: '#2B7272',
        icon: '/icons/human-brain.png',
        alt: 'Human brain icon',
    },
    {
        line1: 'Healing &',
        line2: 'Connection',
        bgColor: '#FFF7F6',
        textColor: '#A2605B',
        icon: '/icons/meditation-3.png',
        alt: 'Mediatation icon',
    },
];
