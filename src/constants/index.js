import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from '../assets';

export const navigation = [
  {
    id: '0',
    title: 'Features',
    url: '#features',
  },

  {
    id: '1',
    title: 'How to use',
    url: '#how-to-use',
  },
  {
    id: '2',
    title: 'Documentation',
    url: '#documentation',
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const hyvveServices = [
  'Create a new data collection campaign',
  'Define exactly what data you need',
  'Set a token reward budget to incentivize contributions.',
  'Monitor in Real-Time',
];

export const hyvveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: '0',
    title: 'Voice recognition',
    text: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: '1',
    title: 'Gamification',
    text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'Chatbot customization',
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap3,
  },
  {
    id: '3',
    title: 'Integration with APIs',
    text: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: '0',
    title: 'Seamless Integration',
    text: collabText,
  },
  {
    id: '1',
    title: 'Smart Automation',
  },
  {
    id: '2',
    title: 'Top-notch Security',
  },
];

export const collabApps = [
  {
    id: '0',
    title: 'Figma',
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Notion',
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'Discord',
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'Slack',
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Photoshop',
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Protopie',
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Framer',
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Raindrop',
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: '0',
    title: 'Basic',
    description: 'AI chatbot, personalized recommendations',
    price: '0',
    features: [
      'An AI chatbot that can understand your queries',
      'Personalized recommendations based on your preferences',
      'Ability to explore the app and its features without any cost',
    ],
  },
  {
    id: '1',
    title: 'Premium',
    description: 'Advanced AI chatbot, priority support, analytics dashboard',
    price: '9.99',
    features: [
      'An advanced AI chatbot that can understand complex queries',
      'An analytics dashboard to track your conversations',
      'Priority support to solve issues quickly',
    ],
  },
  {
    id: '2',
    title: 'Enterprise',
    description: 'Custom AI chatbot, advanced analytics, dedicated account',
    price: null,
    features: [
      'An AI chatbot that can understand your queries',
      'Personalized recommendations based on your preferences',
      'Ability to explore the app and its features without any cost',
    ],
  },
];

export const benefits = [
  {
    id: '0',
    title: 'Text & Image Verification with AI & Vision Model',
    text: 'Automated checks on text and image submissions using advanced AI algorithms and Optical Character Recognition to ensure each data point is authentic and accurate.',
    backgroundUrl: './src/assets/benefits/card-1.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '1',
    title: 'Multimodal Data Support',
    text: 'Upload and request multiple types of data (text, images, and more) within the same platform, enabling richer, more comprehensive AI-ready datasets.',
    backgroundUrl: './src/assets/benefits/card-2.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '2',
    title: 'Advanced Campaign Dashboard & Analytics',
    text: 'Launch and manage data collection campaigns with an intuitive dashboard that provides real-time analytics on contributions, quality metrics, and progress.',
    backgroundUrl: './src/assets/benefits/card-3.svg',
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: '3',
    title: 'Detailed Contributor Profile Pages',
    text: 'Build trust with transparent contributor profiles showcasing reputation scores, past contributions, and earned rewards, so data buyers can identify reliable contributors at a glance.',
    backgroundUrl: './src/assets/benefits/card-4.svg',
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: '4',
    title: 'Hybrid Encryption (RSA + AES)',
    text: 'All data is secured with a blend of RSA and AES encryption, combining the strength of public-key security with fast symmetric encryption for robust, high-performance protection​',
    backgroundUrl: './src/assets/benefits/card-5.svg',
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: '5',
    title: 'Bulk Data Export',
    text: 'Easily export entire datasets in bulk once a campaign is completed. Download your collected data in convenient formats, ready to be used for training AI models without extra processing.',
    backgroundUrl: './src/assets/benefits/card-6.svg',
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram,
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram,
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
];
