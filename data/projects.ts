export interface ProjectVenue {
  name: string;
  tagline: string;
  image: string;
  details: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  isLogo?: boolean;
  logoSrc?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  partnerBadge: string;
  partnerLogo?: string;
  partnerName: string;
  description: string;
  detailedOverview: string[];
  keyHighlights: string[];
  venues?: ProjectVenue[];
  gallery: {
    src: string;
    caption: string;
  }[];
  metrics: ProjectMetric[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'hennessy-club-tour',
    title: 'The Hennessy Club Tour Activation',
    subtitle: 'Regional Multi-Venue Nightlife Takeover',
    date: 'Oct – Nov 2025',
    coverImage: '/images/NEXGEN-8104.jpg',
    partnerBadge: 'Hennessy Global Alliance',
    partnerLogo: '/images/logos/hennessy.svg',
    partnerName: 'Hennessy Cognac',
    description:
      'M&G successfully conceptualized and executed a massive, multi-venue regional club tour in partnership with global cognac giant Hennessy. Across a two-month activation phase, we fully dominated the nightlife circuit by executing premium takeovers at four of the region’s most exclusive venues.',
    detailedOverview: [
      'In late 2025, Marshall & The Gypsies Entertainment partnered with Moët Hennessy to orchestrate a high-energy nightlife tour designed to reinforce Hennessy’s leadership in experiential lifestyle culture.',
      'Our team handled end-to-end production: acoustic calibration, custom lighting rigs, DJ booking, media coverage, and VIP bottle service rituals across four premier nightlife destinations.',
    ],
    keyHighlights: [
      'Turnkey multi-venue tour management & stage production',
      'Exclusive VIP bottle service & branded tasting lounges',
      'Curated artist & DJ roster headline sets',
      '100% capacity crowd turnout across all activation dates',
    ],
    venues: [
      {
        name: 'Casoni Premium Club',
        tagline: 'Opening Leg • High-Energy Launch',
        image: '/images/NEXGEN-8104.jpg',
        details: 'High-octane opening night featuring laser arrays, VIP booth curation, and signature Hennessy cocktail vaults.',
      },
      {
        name: 'Club TJL',
        tagline: 'Mid-Tour Showcase • Sound Immersion',
        image: '/images/NEXGEN-8118.jpg',
        details: 'Acoustic architecture and heavy bass sound design with custom-built staging and dynamic light sequences.',
      },
      {
        name: 'The Hideout By Yugo Boss',
        tagline: 'Exclusive Night • Celebrity & Tastemaker Hub',
        image: '/images/NEXGEN-8186.jpg',
        details: 'Intimate, luxury VIP environment hosting regional influencers, fashion icons, and top-tier brand executives.',
      },
      {
        name: 'D’ Luxe Premium Club',
        tagline: 'Tour Finale • Grand Stage Climax',
        image: '/images/NEXGEN-8205.jpg',
        details: 'Massive celebratory tour finale complete with confetti blasts, live talent integration, and high-impact visual production.',
      },
    ],
    gallery: [
      { src: '/images/NEXGEN-8104.jpg', caption: 'Hennessy Lounge Activation at Casoni' },
      { src: '/images/NEXGEN-8118.jpg', caption: 'Stage & Laser Immersion at Club TJL' },
      { src: '/images/NEXGEN-8186.jpg', caption: 'VIP Backstage Production' },
      { src: '/images/NEXGEN-8205.jpg', caption: 'D’ Luxe Tour Finale Staging' },
      { src: '/images/NEXGEN-8243.jpg', caption: 'Peak Hour Audience Euphoria' },
      { src: '/images/NEXGEN-8262.jpg', caption: 'Headline DJ Set & Bottle Ritual' },
    ],
    metrics: [
      { label: 'Exclusive Venues', value: '4' },
      { label: 'Activation Window', value: '2 Months' },
      { label: 'Sold-Out Turnout', value: '100%' },
      { label: 'Brand Partner', value: 'Hennessy', isLogo: true, logoSrc: '/images/logos/hennessy.svg' },
    ],
  },
  {
    slug: 'gypsy-night-main',
    title: 'Gypsy Night: The Main Establishment',
    subtitle: 'Cultural Staple & Mega Lifestyle Movement',
    date: 'July 4, 2026',
    coverImage: '/images/NEXGEN-8083.jpg',
    partnerBadge: 'Red Bull & Budweiser Dual Partnership',
    partnerLogo: '/images/logos/redbull.svg',
    partnerName: 'Red Bull & Budweiser',
    description:
      'Following the runaway success of our debut, we fully established Gypsy Night as an unrivaled cultural staple on July 4, 2026. This premium lifestyle movement was fueled and backed by global giants Red Bull and Budweiser, drawing fashion icons, nightlife enthusiasts, and tastemakers from across the country.',
    detailedOverview: [
      'July 4th marked the institutionalization of Gypsy Night as the defining youth and luxury nightlife experience in the region.',
      'Integrating the high-octane energy of Red Bull with the classic festival presence of Budweiser, the event delivered an immersive stage arena, fashion red carpets, and transcendent live musical sets.',
    ],
    keyHighlights: [
      'Dual global sponsorship integration (Red Bull & Budweiser)',
      'High-fashion aesthetic converging with raw street energy',
      'Massive main stage arena with kinetic lighting arrays',
      'Nationwide attendance with top-tier cultural influencers',
    ],
    gallery: [
      { src: '/images/NEXGEN-8083.jpg', caption: 'Main Arena Headline Entrance' },
      { src: '/images/NEXGEN-8096.jpg', caption: 'Gypsy Night Fashion & Street Style' },
      { src: '/images/NEXGEN-8158.jpg', caption: 'Live Performance Synergy' },
      { src: '/images/NEXGEN-8198.jpg', caption: 'Full Arena Crowd Atmosphere' },
      { src: '/images/NEXGEN-8210.jpg', caption: 'Red Carpet Arrivals & Media Wall' },
      { src: '/images/NEXGEN-8270.jpg', caption: 'Midnight Drop & Laser Climax' },
    ],
    metrics: [
      { label: 'Major Brand Sponsors', value: '2 Global' },
      { label: 'Audience Footfall', value: '3,500+' },
      { label: 'Industry Status', value: 'Iconic' },
      { label: 'Lead Partner', value: 'Red Bull', isLogo: true, logoSrc: '/images/logos/redbull.svg' },
    ],
  },
  {
    slug: 'gypsy-night-debut',
    title: 'The Gypsy Night Debut (Soft Launch)',
    subtitle: 'High-Fashion Concept Introduction',
    date: 'June 2025',
    coverImage: '/images/NEXGEN-8202.jpg',
    partnerBadge: 'Fercullen Irish Whiskey Alliance',
    partnerLogo: '/images/logos/fercullen.svg',
    partnerName: 'Fercullen Irish Whiskey',
    description:
      'We introduced the Gypsy Night concept to the public in an exclusive, high-fashion soft launch sponsored by the ultra-premium Fercullen Irish Whiskey. The invite-only gathering set a new benchmark for concept ideation, proving that nightlife can be an elevated artistic runway.',
    detailedOverview: [
      'The Gypsy Night debut introduced the core DNA of the Marshall & The Gypsies movement: uncompromising fashion, elevated mixology, and carefully curated audio journeys.',
      'Partnering with Fercullen Irish Whiskey, the launch hosted taste-makers, creative directors, and nightlife leaders, establishing the creative blueprint for future stadium-scale activations.',
    ],
    keyHighlights: [
      'Curated soft launch for industry tastemakers & media',
      'Ultra-premium whiskey tasting & signature cocktail design',
      'Bespoke staging and ambient lighting design',
      'Paved the pathway for the nationwide Gypsy Night movement',
    ],
    gallery: [
      { src: '/images/NEXGEN-8202.jpg', caption: 'Sensory Lounge & Cocktail Vault' },
      { src: '/images/NEXGEN-8212.jpg', caption: 'Curated Soundscapes & DJ Sets' },
      { src: '/images/NEXGEN-8225.jpg', caption: 'High-Fashion VIP Atmosphere' },
      { src: '/images/NEXGEN-8244.jpg', caption: 'Intimate Debut Gathering' },
    ],
    metrics: [
      { label: 'Concept Launch', value: 'June 2025' },
      { label: 'Format', value: 'VIP Debut' },
      { label: 'Status', value: 'Benchmark' },
      { label: 'Title Sponsor', value: 'Fercullen', isLogo: true, logoSrc: '/images/logos/fercullen.svg' },
    ],
  },
];
