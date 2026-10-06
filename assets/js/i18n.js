/**
 * EVENTIFY AGENCY — MULTILINGUAL I18N SYSTEM (FR / EN)
 * Copywriting: Fluent, strategic, and high-impact agency brand voice.
 */

(function () {
  'use strict';

  // Master bidirectional translation dictionary
  const DICTIONARY = [
    // -------------------------------------------------------------
    // 1. NAVIGATION & GLOBAL
    // -------------------------------------------------------------
    { fr: 'Accueil', en: 'Home' },
    { fr: 'Nos réalisations', en: 'Our Work' },
    { fr: 'Nos projets', en: 'Featured Projects' },
    { fr: 'Notre expertise', en: 'Our Expertise' },
    { fr: "L'Agence", en: 'The Agency' },
    { fr: 'The legacy', en: 'The Legacy' },
    { fr: 'Eventify Academy', en: 'Eventify Academy' },
    { fr: 'Blog', en: 'Insights' },
    { fr: 'Contact', en: 'Contact Us' },
    { fr: 'Le Prix Ramses', en: 'The Ramses Prize' },
    { fr: 'The Woman King: Sales Edition', en: 'The Woman King: Sales Edition' },
    { fr: 'The Woman king: Sales Edition', en: 'The Woman King: Sales Edition' },
    { fr: 'Smebaf', en: 'Smebaf' },
    { fr: 'Voir plus', en: 'Explore more' },
    { fr: 'En savoir plus', en: 'Learn more' },

    // -------------------------------------------------------------
    // 2. FOOTER
    // -------------------------------------------------------------
    { fr: 'Besoin d’un brin de lumière?', en: 'Ready to illuminate your vision?' },
    { fr: 'Besoin d’un brin de lumière ?', en: 'Ready to illuminate your vision?' },
    { fr: 'Ecrivez-nous', en: 'Get in touch' },
    { fr: 'contact nous', en: 'contact us' },
    { fr: 'Vous recherchez un nouveau challenge ?', en: 'Looking for your next career milestone?' },
    { fr: 'Rejoignez notre équipe', en: 'Join our team' },
    { fr: '@ 2023 - EVENTIFY. All Rights Reserved', en: '© 2023 - EVENTIFY. All Rights Reserved' },

    // -------------------------------------------------------------
    // 3. HOMEPAGE (index.html)
    // -------------------------------------------------------------
    { fr: 'UN BRIN DE LUMIERE', en: 'A SPARK OF BRILLIANCE' },
    { fr: 'Un brin de lumière', en: 'A spark of brilliance' },
    { fr: 'Que votre\nmarque brille', en: 'Let your\nbrand shine' },
    { fr: 'Que votre marque brille', en: 'Let your brand shine' },
    {
      fr: 'L’agence créative business-focused\nqui met en lumière les marques.',
      en: 'The business-focused creative agency\nilluminating iconic brands.'
    },
    {
      fr: 'L’agence créative business-focused qui met en lumière les marques.',
      en: 'The business-focused creative agency illuminating iconic brands.'
    },
    {
      fr: 'Nous sommes une agence 360.\nNous aidons les marques à grandir,\nbriller et impacter le monde.',
      en: 'We are a 360° creative agency.\nWe empower brands to scale,\nshine, and impact the world.'
    },
    {
      fr: 'Nous sommes une agence 360. Nous aidons les marques à grandir, briller et impacter le monde.',
      en: 'We are a 360° creative agency. We empower brands to scale, shine, and impact the world.'
    },
    { fr: 'Nos\nréalisations', en: 'Our\nwork' },
    { fr: 'Ils ont été illuminés', en: 'Brands We’ve Illuminated' },
    { fr: 'ILS ONT ÉTÉ ILLUMINÉS', en: 'BRANDS WE’VE ILLUMINATED' },
    { fr: 'Nos piliers', en: 'Our Pillars' },
    { fr: 'NOS PILIERS', en: 'OUR PILLARS' },

    // -------------------------------------------------------------
    // 4. REALISATIONS HUB & CATEGORIES (nos-realisation.html)
    // -------------------------------------------------------------
    { fr: 'NOS REALISATIONS', en: 'OUR WORK' },
    {
      fr: 'Nous créons des marques et des expériences qui génèrent des changements remarquables.',
      en: 'We build enduring brands and unforgettable experiences that create tangible cultural momentum.'
    },
    { fr: 'INSTITUTIONEL', en: 'INSTITUTIONAL' },
    { fr: 'INSTITUTIONNEL', en: 'INSTITUTIONAL' },
    { fr: 'BANQUE & ASSURANCE', en: 'BANKING & INSURANCE' },
    { fr: 'TELECOM', en: 'TELECOM' },
    { fr: 'INDUSTRIE', en: 'INDUSTRY' },
    { fr: 'BÂTIMENT & CONSTRUCTION', en: 'BUILDING & CONSTRUCTION' },
    { fr: 'BATIMENT & CONSTRUCTION', en: 'BUILDING & CONSTRUCTION' },
    { fr: 'AUTOMOBILE', en: 'AUTOMOTIVE' },
    { fr: 'OIL, PETROL & GAZ', en: 'OIL, PETROL & GAS' },
    { fr: 'SERVICES ET AUTRES', en: 'SERVICES & OTHER' },
    { fr: 'SERVICES & AUTRES', en: 'SERVICES & OTHER' },
    { fr: 'VINS & SPIRITUEUX', en: 'WINES & SPIRITS' },
    { fr: 'LUXE & HOSPITALITY', en: 'LUXURY & HOSPITALITY' },
    { fr: 'E-COMMERCE', en: 'E-COMMERCE' },
    { fr: 'FRAGRANCE & JEWELLERY', en: 'FRAGRANCE & JEWELRY' },
    { fr: 'FOOD & BEVERAGES', en: 'FOOD & BEVERAGES' },

    // Category Brand Cards Details
    {
      fr: 'Guichet Unique des Opérations du Commerce Extérieur : facilitation et dématérialisation.',
      en: 'Single Window for Foreign Trade: process simplification and digital trade enablement.'
    },
    {
      fr: 'Port Autonome de Douala : plateforme portuaire et logistique de référence.',
      en: 'Autonomous Port of Douala: the benchmark maritime trade and logistics hub of Central Africa.'
    },
    {
      fr: 'Ministère de la Santé Publique : campagnes nationales et valorisation institutionnelle.',
      en: 'Ministry of Public Health: national public health campaigns and institutional advocacy.'
    },
    {
      fr: "Ministère des Postes et Télécommunications : développement du numérique et de l'innovation.",
      en: 'Ministry of Posts & Telecommunications: accelerating digital transformation and tech innovation.'
    },
    {
      fr: "Commission Bancaire de l'Afrique Centrale : régulation et stabilité financière en zone CEMAC.",
      en: 'Central African Banking Commission: banking supervision and monetary stability in the CEMAC zone.'
    },
    {
      fr: 'Port Autonome de Kribi : grand hub logistique et portuaire en eau profonde.',
      en: 'Port Authority of Kribi: premier deep-sea maritime logistics platform in West-Central Africa.'
    },
    {
      fr: 'Ministère de la Défense : communication institutionnelle et événements officiels.',
      en: 'Ministry of Defense: strategic civic communication and high-profile state ceremonial events.'
    },
    {
      fr: 'Fédération Camerounaise de Nanbudo : rayonnement sportif et compétitions nationales.',
      en: 'Cameroon Nanbudo Federation: martial arts excellence, youth empowerment, and national championships.'
    },
    {
      fr: 'Accompagnement de marque et valorisation industrielle.',
      en: 'Industrial branding, identity transformation, and market presence development.'
    },
    {
      fr: 'Solutions innovantes et stratégie de visibilité de référence.',
      en: 'Innovative construction solutions paired with high-impact market visibility.'
    },
    {
      fr: 'Déploiement stratégique et dynamisation du secteur automobile.',
      en: 'Strategic market deployment and experiential activation in the automotive sector.'
    },
    {
      fr: "Campagnes d'impact et valorisation des réseaux de distribution.",
      en: 'Impact-driven retail marketing and distribution network visibility.'
    },
    {
      fr: 'Stratégie de communication énergétique et expérience client.',
      en: 'Energy brand communications, customer journey design, and retail presence.'
    },
    {
      fr: 'Accompagnement financier et mobilité étudiante internationale.',
      en: 'International student mobility consulting and specialized financial solutions.'
    },
    {
      fr: 'Prestations de services et solutions sur mesure pour les entreprises.',
      en: 'Bespoke corporate consulting, executive services, and enterprise solutions.'
    },
    {
      fr: 'Solutions de courtage, conseil et couverture des risques sur mesure.',
      en: 'Tailored insurance brokerage, risk advisory, and custom corporate underwriting.'
    },
    {
      fr: 'Banque panafricaine de premier plan et services bancaires innovants.',
      en: 'Premier pan-African financial institution delivering innovative banking services.'
    },

    // -------------------------------------------------------------
    // 5. THE LEGACY (the-legacy.html)
    // -------------------------------------------------------------
    {
      fr: "Il existe des centaines de milliers d'agences dans le monde. Et nous sommes heureux de faire partie de cet univers. Mais au-delà des belles campagnes, des gros budgets, we need more. Dès le départ, nous avons senti que nous aurions besoin de plus, plus que faire de belles choses, plus qu'avoir du succès...nous avons eu soif d'impacter. Entant que PME, quelle que soit la taille de nos moyens, nous nous sommes engagés à laisser une marque.",
      en: 'There are hundreds of thousands of agencies across the world, and we are proud to be part of this vibrant industry. But beyond striking creative campaigns and substantial budgets, we felt a calling for something greater. From day one, our team harbored an ambition that reached beyond aesthetics and commercial acclaim: a relentless passion to forge lasting impact. Regardless of scale, we committed to leaving an enduring legacy.'
    },
    {
      fr: "C'est ainsi qu'est né \"The Legacy\".",
      en: 'And thus, "The Legacy" was born.'
    },
    {
      fr: '"The Legacy" est bien plus qu\'un programme pour nous. Chaque année, nous choisissons une TPE, un projet porté par une femme entrepreneure, et nous l\'accompagnons à chaque étape de son développement. De la définition du business case à la stratégie de marque, de l\'identité visuelle à la gestion des réseaux sociaux, en passant par la création d\'événements mémorables. Nous sommes là, à ses côtés, pour transformer ses ambitions en réalité.\n\nLes besoins de ces entreprises sont uniques, tout comme leur potentiel. C\'est pour cela que nous trouvons une immense satisfaction à les voir grandir, gagner en visibilité, en clients, en reconnaissance.',
      en: '"The Legacy" is far more than an initiative to us; it is a pledge of empowerment. Each year, we select a high-potential female-founded micro-enterprise and accompany her at every critical stage of expansion — from sharpening the business model and shaping the brand identity, to full-funnel digital execution and high-visibility event activations.\n\nThe needs of these enterprises are as unique as their potential. Witnessing them scale, attract new clienteles, and gain market leadership is our greatest reward.'
    },
    {
      fr: 'Pourquoi cibler uniquement les projets portés par des femmes?',
      en: 'Why specifically champion women-led enterprises?'
    },
    {
      fr: 'Pourquoi cibler uniquement les projets portés par des femmes ?',
      en: 'Why specifically champion women-led enterprises?'
    },
    {
      fr: "Parce que nous croyons en l'égalité des chances et en la force de la diversité. Chez Eventify, les femmes représentent 53 % de notre équipe, avec 66 % occupant des postes au sein de notre comité de direction. Ce n'est pas un monde réservé aux femmes, mais nous avons la volonté ardente de voir plus de femmes réussir et s'épanouir à tous les niveaux. A travers \"The Legacy\", nous nous engageons à créer un impact positif et durable. Nous sommes animés par la passion de voir nos bénéficiaires non seulement prospérer, mais aussi devenir des modèles inspirants pour les générations futures. Rejoignez-nous dans cette mission pour un monde des affaires plus inclusif et dynamique.",
      en: 'Because we believe deeply in merit, equity, and the transformative power of diverse leadership. At Eventify, women represent 53% of our workforce and hold 66% of executive board seats. This is not about exclusivity; it is an unwavering dedication to seeing female visionaries thrive and excel at the highest echelons of business. Through "The Legacy", we create enduring, generational impact. We are passionate about seeing our cohort members not only grow profitable ventures, but also become iconic role models for the future.'
    },

    // -------------------------------------------------------------
    // 6. NOTRE EXPERTISE (notre-expertise.html)
    // -------------------------------------------------------------
    { fr: 'Branding', en: 'Branding & Identity' },
    { fr: 'Marketing Digital', en: 'Digital Marketing' },
    { fr: 'Marketing digital', en: 'Digital Marketing' },
    { fr: 'The Studio Box', en: 'The Studio Box' },
    { fr: 'Marketing', en: 'Marketing Strategy' },
    { fr: 'Brand Content', en: 'Brand Content' },
    { fr: 'Communication', en: 'Strategic Communications' },
    { fr: 'The Event Box', en: 'The Event Box' },
    { fr: 'The Event Box ', en: 'The Event Box' },

    // Expertise sub-items
    { fr: 'Naming', en: 'Brand Naming & Verbal Identity' },
    { fr: 'Plateforme de marque', en: 'Brand Platform & Architecture' },
    { fr: 'Identité visuelle', en: 'Visual Identity System' },
    { fr: 'Supports de marque', en: 'Brand Collateral & Assets' },
    { fr: 'Packaging', en: 'Packaging Design' },
    { fr: 'Community management', en: 'Social Media & Community Management' },
    { fr: 'Stratégiede contenu', en: 'Content Strategy & Editorial Planning' },
    { fr: 'Facebook & Instagram Ads', en: 'Targeted Paid Social (Meta Ads)' },
    { fr: 'GoogleAds & Display', en: 'Google Search & Programmatic Display' },
    { fr: 'Création de site web', en: 'Web Design & Digital Experiences' },
    { fr: 'Référencement web', en: 'SEO & Digital Discoverability' },
    { fr: 'Gestion de la reputation', en: 'E-Reputation & Brand Protection' },
    { fr: 'Shooting produit', en: 'Commercial Product Photography' },
    { fr: 'Film produit', en: 'Product Commercials & Video Spots' },
    { fr: 'Film institutionnel', en: 'Corporate & Institutional Films' },
    { fr: 'Motion design', en: 'Motion Design & Visual FX' },
    { fr: 'Motion design ', en: 'Motion Design & Visual FX' },
    { fr: 'Animation 2D & 3Ds', en: '2D & 3D Brand Animation' },
    { fr: 'Mini-série', en: 'Branded Mini-Series & Web Shows' },
    { fr: 'Mini-plateau Interview', en: 'Executive Interview Studio Sets' },
    { fr: 'Emission mini public', en: 'Live Audience Broadcast Shows' },
    { fr: 'Témoignages client', en: 'Client Testimonial Documentaries' },
    { fr: 'Shooting photo indoor & outdoor', en: 'Studio & On-Location Photography' },
    { fr: 'Snack content', en: 'Snackable Short-Form Video Content' },
    { fr: 'Habillage', en: 'Broadcast Graphics & Brand Packaging' },
    { fr: 'Mini-conférence de presse', en: 'Press Conference Management' },
    { fr: 'Diagnostic marketing', en: 'Marketing & Market Diagnostic Audit' },
    { fr: 'Etude d’image de marque', en: 'Brand Perception & Equity Study' },
    { fr: 'Etude de satisfaction clients', en: 'Customer Satisfaction & CX Research' },
    { fr: 'Stratégie de lancement produit', en: 'Go-to-Market & Launch Strategy' },
    { fr: 'Plan de communication', en: 'Comprehensive Communications Plan' },
    { fr: 'Plan médias', en: 'Strategic Media Buying & Planning' },
    { fr: 'Relations Presse', en: 'Press & Media Relations' },
    { fr: 'RP & Sponsoring', en: 'Public Relations & Sponsorship Deals' },
    { fr: 'Campagne d’affiche publicitaire', en: 'Outdoor & Billboards Advertising' },
    { fr: 'Brunch', en: 'Curated Corporate Brunches' },
    { fr: 'Salon', en: 'Trade Fairs & Industry Expos' },
    { fr: 'Dîner', en: 'VIP Gala Dinners & Banquets' },
    { fr: 'Soirée d’entreprise', en: 'Corporate Celebrations & Anniversaries' },
    { fr: 'Expérience immersive', en: 'Immersive Brand Experiences' },
    { fr: 'Photographie et video évenementielle', en: 'Event Live Coverage (Photo & Video)' },

    // -------------------------------------------------------------
    // 7. EVENTIFY ACADEMY (eventify-academy.html & editions)
    // -------------------------------------------------------------
    { fr: 'INCUBATEUR DE TALENTS', en: 'TALENT ACCELERATOR' },
    { fr: 'Incubateur de Talents', en: 'Talent Accelerator' },
    { fr: 'EVENTIFY ACADEMY', en: 'EVENTIFY ACADEMY' },
    {
      fr: "Un programme d'incubation opérationnelle unique conçu pour former, accélérer et propulser la nouvelle génération de leaders événementiels au cœur de productions réelles et de projets d'envergure.",
      en: "A premier experiential talent accelerator designed to train, mentor, and launch the next generation of creative leaders through live, high-impact productions."
    },
    { fr: 'Explorer le programme', en: 'Explore the program' },
    { fr: 'EXPLORER LE PROGRAMME', en: 'EXPLORE THE PROGRAM' },
    { fr: 'ÉDITIONS RÉALISÉES', en: 'COMPLETED EDITIONS' },
    { fr: 'TALENTS FORMÉS', en: 'TALENTS TRAINED' },
    { fr: "TAUX D'INSERTION", en: 'PLACEMENT RATE' },
    { fr: "L'ACADEMY", en: 'THE ACADEMY' },
    { fr: "L'Academy", en: 'The Academy' },
    {
      fr: 'Apprendre en faisant.\nTravailler sur le réel.\nGrandir avec les autres.',
      en: 'Learn by creating.\nWork on the real.\nGrow together.'
    },
    {
      fr: 'Apprendre en faisant. Travailler sur le réel. Grandir avec les autres.',
      en: 'Learn by creating. Work on the real. Grow together.'
    },
    {
      fr: "Eventify Academy est un programme de formation et d'accompagnement qui réunit de jeunes talents autour de projets concrets, de workshops et de rencontres avec des professionnels du secteur événementiel et de la communication.",
      en: 'Eventify Academy is a bespoke residency and mentorship initiative uniting rising visionaries around live client briefs, interactive masterclasses, and executive mentorship from leading industry practitioners.'
    },
    { fr: 'LES ÉDITIONS', en: 'THE EDITIONS' },
    { fr: 'Les Éditions', en: 'The Editions' },
    {
      fr: 'Revivez les moments forts\ndes deux premières éditions.',
      en: 'Relive the defining moments\nof our first two editions.'
    },
    {
      fr: 'Revivez les moments forts des deux premières éditions.',
      en: 'Relive the defining moments of our first two editions.'
    },
    { fr: 'Voir toutes les éditions →', en: 'View all editions →' },
    { fr: 'ÉDITION 02', en: 'EDITION 02' },
    { fr: 'ÉDITION 01', en: 'EDITION 01' },
    { fr: "Voir l'édition", en: "View edition" },
    { fr: 'RETOUR EN IMAGES', en: 'MOMENTS & HIGHLIGHTS' },
    { fr: "L'aventure continue.", en: 'The journey continues.' },
    {
      fr: "Restez connectés pour ne rien manquer de la prochaine édition de l'Eventify Academy.",
      en: 'Stay tuned to discover and join the upcoming edition of Eventify Academy.'
    },
    { fr: "Découvrir l'academy", en: 'Discover the Academy' },
    { fr: "Découvrir l’academy", en: 'Discover the Academy' },
    { fr: "Découvrir l'Academy", en: 'Discover the Academy' },
    { fr: "Découvrir l’Academy", en: 'Discover the Academy' },
    { fr: 'Éditions organisées', en: 'Completed Cohorts' },
    { fr: 'Talents formés & certifiés', en: 'Certified Talents' },
    { fr: 'Immersion pratique', en: 'Hands-on Immersion' },
    { fr: 'Postuler au programme', en: 'Apply for the Cohort' },
    // -------------------------------------------------------------
    // 8. L'AGENCE (agence.html)
    // -------------------------------------------------------------
    { fr: 'Il était une fois….', en: 'Once Upon a Time…' },
    { fr: 'Il était une fois....', en: 'Once Upon a Time…' },
    { fr: 'Notre méthodologie', en: 'Our Methodology' },
    { fr: 'Ils illuminent avec nous', en: 'Brands Illuminating With Us' },
    { fr: 'NOS VALEURS', en: 'OUR VALUES' },
    { fr: 'Nos Engagements RSE', en: 'Our CSR Commitments' },
    { fr: 'The Queen of Silence', en: 'The Queen of Silence' },
    { fr: 'Campagne VBG', en: 'GBV Awareness Campaign' },
    { fr: 'Découvrir le projet →', en: 'Discover the project →' },
    { fr: 'DÉCOUVRIR LE PROJET →', en: 'DISCOVER THE PROJECT →' },
    { fr: 'INSERTION AGENCE', en: 'AGENCY PLACEMENT' },
    { fr: "DÉCOUVRIR L'ACADEMY", en: 'DISCOVER THE ACADEMY' },
    { fr: 'Notre Equipe', en: 'Our Team' },
    { fr: 'Notre Équipe', en: 'Our Team' },
    { fr: 'Directrice générale', en: 'Chief Executive Officer' },
    { fr: 'Directeur stratégique', en: 'Strategic Director' },
    { fr: 'Responsable des projets institutionnels', en: 'Institutional Projects Manager' },
    { fr: 'Comptable', en: 'Accountant' },
    { fr: 'Responsable des achats et de la logistique', en: 'Procurement and Logistics Manager' },
    { fr: 'Responsable RH et Administration générale', en: 'HR and General Administration Manager' },
    { fr: 'Planneur stratégique', en: 'Strategic Planner' },
    { fr: 'Social Media Strategist', en: 'Social Media Strategist' },
    { fr: 'Responsable Événementiel et Activations corporate', en: 'Event and Corporate Activations Manager' },
    { fr: 'Responsable Audiovisuel', en: 'Audiovisual Manager' },
    { fr: 'Cadreur', en: 'Cameraman' },
    { fr: 'Web Designer', en: 'Web Designer' },
    { fr: 'Graphic Designer', en: 'Graphic Designer' },
    { fr: 'Motion Designer', en: 'Motion Designer' },

    // Agency Story Paragraphs
    {
      fr: "Il était une fois, dans un monde où les entreprises naviguaient comme des bateaux sur les flots tumultueux du marketing. Certaines voguaient gracieusement vers le rivage doré de la prospérité, tandis que d'autres luttaient contre les vagues déchaînées, tentant désespérément de suivre le cap vers le succès.",
      en: "Once upon a time, in a world where brands navigated like ships across the turbulent waters of modern marketing. Some sailed effortlessly toward the golden shores of prosperity, while others battled relentless storms, struggling to hold a steady course toward success."
    },
    {
      fr: "Au milieu de cette mer agitée, une légende circulait parmi les capitaines d'entreprise : celle d'une agence exceptionnelle. On racontait qu'elle était comme un phare brillant dans la nuit, guidant les entreprises vers des eaux plus calmes et des rivages prometteurs.",
      en: "Amidst this tempest, a legend echoed among business leaders: the story of an exceptional agency. It was said to shine like a beacon in the darkest night, guiding visionary enterprises toward calmer waters and prosperous horizons."
    },
    {
      fr: "La légende racontait que le phare avait l’art d’orchestrer des événements spectaculaires, à créer des expériences mémorables et à transformer des marques en véritables phares d'attraction pour les consommateurs.",
      en: "This lighthouse possessed the rare artistry of orchestrating monumental events, crafting unforgettable experiences, and transforming brands into magnetic centers of attraction."
    },
    {
      fr: "Les entreprises qui avaient eu le privilège d'être secourues par lui, avaient soudain trouvé une direction claire et une stratégie marketing solide. Comme par magie, leurs bateaux semblaient glisser sur les vagues avec une nouvelle assurance, leurs voiles gonflées parle vent frais de l'innovation et de la créativité.",
      en: "Those who partnered with this guiding light discovered crystal-clear direction and unshakeable strategic clarity. As if transformed, their vessels cut through the waves with renewed mastery, their sails propelled by the fresh winds of innovation and audacious creativity."
    },

    // Agency Methodology Paragraphs
    {
      fr: "Toute collaboration commence par une session de découverte approfondie avec vous, notre client. Nous croyons fermement que comprendre vos besoins, vos objectifs, vos contraintes et vos défis est essentiel pour élaborer une stratégie efficace. Cette étape nous permet de poser les bases solides nécessaires à la réussite de votre projet.",
      en: "Every transformative partnership begins with an in-depth discovery immersion alongside you, our client. We deeply believe that unearthing your core ambitions, market realities, and unique challenges is the cornerstone of building high-impact strategy. This crucial phase establishes the solid foundation essential for lasting success."
    },
    {
      fr: "À la suite de cette session, nous nous mettons au travail pour créer une proposition détaillée. Une particularité de notre approche est que nous ne revendiquons pas toujours la pleine propriété de nos propositions. Nous aimons collaborer avec plusieurs agences et freelances, tirant parti d'une variété de perspectives créatives et d'expériences diversifiées. C'est ainsi que nous sommes en mesure de vous offrir des solutions enrichies par la contribution de plusieurs cerveaux expérimentés.",
      en: "Following this alignment, we engineer a comprehensive roadmap. A signature trait of our philosophy is collective brilliance: we actively co-create with premier agencies and world-class specialized talent, cross-pollinating diverse perspectives to deliver multi-dimensional, category-defining solutions."
    },
    {
      fr: "Que ce soit pour des campagnes audiovisuelles captivantes ou des déploiements événementiels mémorables, chaque projet est une nouvelle aventure à nos yeux, dont vous êtes l'acteur principal. Nous croyons fermement en la co-création, une approche qui nous inspire et nous motive à chaque étape du processus. Ensemble, nous façonnons des solutions innovantes et adaptées qui répondent parfaitement à vos besoins et dépassent vos attentes.",
      en: "From cinematic brand narratives to monumental live experiential activations, every project is an extraordinary journey where your brand takes center stage. We champion co-creation as our guiding force, shaping tailored, high-performance solutions that consistently exceed expectations."
    },

    // Agency Academy Block
    {
      fr: "L’incubateur de talents\nd’Eventify Agency",
      en: "The Talent Accelerator\nof Eventify Agency"
    },
    {
      fr: "L’incubateur de talents d’Eventify Agency",
      en: "The Talent Accelerator of Eventify Agency"
    },
    {
      fr: "Nos académiciens s’immergent directement au cœur des productions en direct, travaillant sur des projets clients réels avec exigence, mentorat continu et responsabilités concrètes.",
      en: "Our fellows immerse themselves directly in live productions, executing real client briefs with high standards, continuous mentorship, and hands-on accountability."
    },

    // Editions Subpages
    { fr: 'Former la Prochaine Génération de Créatifs Événementiels', en: "Forging Africa's Next Generation of Experiential Creators" },
    {
      fr: "Un écosystème d'immersion pratique conçu pour combler le fossé entre la formation académique et les exigences de l'industrie événementielle.",
      en: "An intensive immersion ecosystem engineered to bridge the gap between academic theory and high-stakes experiential production."
    },
    { fr: 'Candidater au Design', en: 'Apply for Creative Design' },
    { fr: 'Candidater aux Projets', en: 'Apply for Project Management' },
    { fr: 'Diplômés Formés', en: 'Graduates Trained' },
    { fr: 'Partenariats Universitaires', en: 'Academic Partnerships' },
    { fr: 'Marques Accompagnées', en: 'Brand Activations' },
    { fr: 'Campagnes Livrées', en: 'Campaigns Delivered' },
    { fr: 'Un écosystème de formation structuré et concret', en: 'A Structured, Real-World Training Ecosystem' },
    {
      fr: "Nos immersifs n'observent pas, ils exécutent. En travaillant sur des projets clients réels dans les secteurs de la finance, du luxe, de la santé et des marques, ils acquièrent une expérience concrète avec des standards agence, du mentorat et de la responsabilisation à chaque étape.",
      en: "Our fellows don’t merely observe — they create and execute. Delivering real client campaigns across banking, luxury, and global institutions, they gain battle-tested mastery with agency rigor, direct executive mentorship, and end-to-end accountability."
    },
    { fr: "Apprentissage par l'exécution réelle, non observationnel", en: 'Hands-on execution on live client productions' },
    { fr: 'Exigences et standards professionnels de niveau agence', en: 'Uncompromising agency-grade professional standards' },
    { fr: 'Mentorat personnalisé et responsabilisation continue', en: 'Direct executive mentorship and end-to-end accountability' },
    { fr: 'Immersion multi-secteurs (finance, luxe, institutionnel)', en: 'Cross-industry immersion (banking, luxury, public sector)' },
    { fr: 'La formation seule ne suffit plus à créer des carrières', en: 'Academic Training Alone No Longer Builds Enduring Careers' },
    {
      fr: "Le décalage entre la formation académique et les exigences de l'industrie s'amplifie. Eventify Academy est le pont qui transforme le potentiel brut en talents d'excellence.",
      en: "The gap between university curriculums and high-velocity agency reality is widening. Eventify Academy serves as the definitive bridge transforming raw talent into industry leaders."
    },
    { fr: "Taux de chômage des jeunes diplômés en quête d'insertion", en: 'Youth graduate underemployment seeking practical career entry' },
    { fr: 'Des diplômés se sentent insuffisamment préparés aux réalités agence', en: 'Of graduates feel unequipped for fast-paced commercial production' },
    { fr: 'Des recruteurs soulignent un déficit de préparation opérationnelle des profils juniors', en: 'Of employers cite a severe lack of hands-on operational readiness' },
    {
      fr: '"Eventify Academy se positionne comme le pont structurant, connectant des diplômés ambitieux à l\'expérience terrain grâce à un mentorat créatif et exigeant."',
      en: '"Eventify Academy acts as the definitive bridge, connecting ambitious minds to battlefield experience through high-caliber creative mentorship."'
    },
    { fr: 'Comment fonctionne le programme', en: 'How the Residency Works' },
    { fr: '8 - 12 Semaines', en: '8 - 12 Weeks' },
    { fr: 'SÉLECTION RIGOUREUSE', en: 'SELECTIVE ADMISSIONS' },
    { fr: 'IMMERSION TOTALE', en: 'DEEP IMMERSION' },
    { fr: 'MENTORAT SUR-MESURE', en: 'BESPOKE MENTORSHIP' },
    { fr: 'LIVRAISON CLIENT', en: 'CLIENT DELIVERY' },
    { fr: 'CERTIFICATION & RÉSEAU', en: 'CERTIFICATION & ALUMNI' }
  ];

  // Build lookup index
  const LOOKUP_MAP = new Map();
  function normalize(str) {
    return str ? str.replace(/\s+/g, ' ').trim() : '';
  }

  DICTIONARY.forEach((item) => {
    LOOKUP_MAP.set(normalize(item.fr), item);
    LOOKUP_MAP.set(normalize(item.en), item);
  });

  function getCurrentLang() {
    return localStorage.getItem('eventify_lang') || 'fr';
  }

  function setLanguage(lang) {
    const targetLang = (lang === 'en' || lang === 'fr') ? lang : 'fr';
    localStorage.setItem('eventify_lang', targetLang);
    document.documentElement.lang = targetLang;
    applyTranslations(targetLang);
    updateDropdownUI(targetLang);
  }

  function applyTranslations(lang) {
    // 1. Elements with explicit data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = normalize(el.getAttribute('data-i18n'));
      const found = LOOKUP_MAP.get(key);
      if (found && found[lang]) {
        el.innerHTML = found[lang];
      }
    });

    // 2. Specific composite elements
    document.querySelectorAll('.nav-link-44').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = 'Our <strong><em class="italic-text">Work</em></strong>';
      } else {
        el.innerHTML = 'Nos <strong><em class="italic-text">réalisations</em></strong>';
      }
    });

    document.querySelectorAll('.ea-about-motto').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = 'Learn by creating.<br>Work on the real.<br>Grow together.';
      } else {
        el.innerHTML = 'Apprendre en faisant.<br>Travailler sur le réel.<br>Grandir avec les autres.';
      }
    });

    document.querySelectorAll('.ea-editions-title').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = 'Relive the defining moments<br>of our first two editions.';
      } else {
        el.innerHTML = 'Revivez les moments forts<br>des deux premières éditions.';
      }
    });

    document.querySelectorAll('.ea-tag-kicker').forEach((el) => {
      const dash = el.querySelector('.dash');
      const text = normalize(el.textContent.replace('—', '').replace('-', ''));
      const found = LOOKUP_MAP.get(text);
      if (found && found[lang]) {
        if (dash) {
          el.innerHTML = `<span class="dash">—</span> ${found[lang]}`;
        } else {
          el.textContent = found[lang];
        }
      }
    });

    // 3. Agence Specific Story and Methodology
    const agenceStory = document.querySelector('.container-agence-home .text-block-7');
    if (agenceStory) {
      if (lang === 'en') {
        agenceStory.innerHTML = "Once upon a time, in a world where brands navigated like ships across the turbulent waters of modern marketing. Some sailed effortlessly toward the golden shores of prosperity, while others battled relentless storms, struggling to hold a steady course toward success.<br><br>Amidst this tempest, a legend echoed among business leaders: the story of an exceptional agency. It was said to shine like a beacon in the darkest night, guiding visionary enterprises toward calmer waters and prosperous horizons.<br><br>This lighthouse possessed the rare artistry of orchestrating monumental events, crafting unforgettable experiences, and transforming brands into magnetic centers of attraction.<br><br>Those who partnered with this guiding light discovered crystal-clear direction and unshakeable strategic clarity. As if transformed, their vessels cut through the waves with renewed mastery, their sails propelled by the fresh winds of innovation and audacious creativity.";
      } else {
        agenceStory.innerHTML = "Il était une fois, dans un monde où les entreprises naviguaient comme des bateaux sur les flots tumultueux du marketing. Certaines voguaient gracieusement vers le rivage doré de la prospérité, tandis que d'autres luttaient contre les vagues déchaînées, tentant désespérément de suivre le cap vers le succès.<br><br>Au milieu de cette mer agitée, une légende circulait parmi les capitaines d'entreprise : celle d'une agence exceptionnelle. On racontait qu'elle était comme un phare brillant dans la nuit, guidant les entreprises vers des eaux plus calmes et des rivages prometteurs.<br><br>La légende racontait que le phare avait l’art d’orchestrer des événements spectaculaires, à créer des expériences mémorables et à transformer des marques en véritables phares d'attraction pour les consommateurs.<br><br>Les entreprises qui avaient eu le privilège d'être secourues par lui, avaient soudain trouvé une direction claire et une stratégie marketing solide. Comme par magie, leurs bateaux semblaient glisser sur les vagues avec une nouvelle assurance, leurs voiles gonflées parle vent frais de l'innovation et de la créativité.";
      }
    }

    const agenceMethod = document.querySelector('.container-agence-home-copy .text-block-7');
    if (agenceMethod) {
      if (lang === 'en') {
        agenceMethod.innerHTML = "Every transformative partnership begins with an in-depth discovery immersion alongside you, our client. We deeply believe that unearthing your core ambitions, market realities, and unique challenges is the cornerstone of building high-impact strategy. This crucial phase establishes the solid foundation essential for lasting success.<br><br>Following this alignment, we engineer a comprehensive roadmap. A signature trait of our philosophy is collective brilliance: we actively co-create with premier agencies and world-class specialized talent, cross-pollinating diverse perspectives to deliver multi-dimensional, category-defining solutions.<br><br>From cinematic brand narratives to monumental live experiential activations, every project is an extraordinary journey where your brand takes center stage. We champion co-creation as our guiding force, shaping tailored, high-performance solutions that consistently exceed expectations.";
      } else {
        agenceMethod.innerHTML = "Toute collaboration commence par une session de découverte approfondie avec vous, notre client. Nous croyons fermement que comprendre vos besoins, vos objectifs, vos contraintes et vos défis est essentiel pour élaborer une stratégie efficace. Cette étape nous permet de poser les bases solides nécessaires à la réussite de votre projet.<br><br>À la suite de cette session, nous nous mettons au travail pour créer une proposition détaillée. Une particularité de notre approche est que nous ne revendiquons pas toujours la pleine propriété de nos propositions. Nous aimons collaborer avec plusieurs agences et freelances, tirant parti d'une variété de perspectives créatives et d'expériences diversifiées. C'est ainsi que nous sommes en mesure de vous offrir des solutions enrichies par la contribution de plusieurs cerveaux expérimentés.<br><br>Que ce soit pour des campagnes audiovisuelles captivantes ou des déploiements événementiels mémorables, chaque projet est une nouvelle aventure à nos yeux, dont vous êtes l'acteur principal. Nous croyons fermement en la co-création, une approche qui nous inspire et nous motive à chaque étape du processus. Ensemble, nous façonnons des solutions innovantes et adaptées qui répondent parfaitement à vos besoins et dépassent vos attentes.";
      }
    }

    document.querySelectorAll('.academy-main-title').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = "The Talent Accelerator<br>of Eventify Agency";
      } else {
        el.innerHTML = "L’incubateur de talents<br>d’Eventify Agency";
      }
    });

    // 4. Homepage Hero & Headings
    document.querySelectorAll('.heading-2').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = "Let your<br>brand shine";
      } else {
        el.innerHTML = "Que votre<br>marque brille";
      }
    });

    document.querySelectorAll('.heading-20').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = "The business-focused creative agency <br>illuminating iconic brands.";
      } else {
        el.innerHTML = "L’agence créative business-focused <br>qui met en lumière les marques.";
      }
    });

    document.querySelectorAll('.heading-3').forEach((el) => {
      if (lang === 'en') {
        el.innerHTML = "We are a 360° creative agency. <br>We empower brands to scale, <br>shine, and impact the world.";
      } else {
        el.innerHTML = "Nous sommes une agence 360. <br>Nous aidons les marques à grandir, <br>briller et impacter le monde.";
      }
    });

    document.querySelectorAll('.heading-4').forEach((el) => {
      const text = el.textContent.trim();
      if (text.includes('réalisations') || text.includes('work') || text.includes('Work')) {
        if (lang === 'en') {
          el.innerHTML = "Our<br>work";
        } else {
          el.innerHTML = "Nos<br>réalisations";
        }
      } else if (text.includes('illuminés') || text.includes('Illuminated')) {
        if (lang === 'en') {
          el.textContent = "Brands We’ve Illuminated";
        } else {
          el.textContent = "Ils ont été illuminés";
        }
      }
    });

    // 5. Text Nodes Walker
    translateTextNodes(document.body, lang);
  }

  function translateTextNodes(root, lang) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (
            parent.hasAttribute('data-no-translate') ||
            parent.classList.contains('eventify-lang-dropdown') ||
            parent.closest('.eventify-lang-dropdown') ||
            parent.classList.contains('nav-link-44') ||
            parent.classList.contains('ea-about-motto') ||
            parent.classList.contains('ea-editions-title') ||
            parent.classList.contains('ea-tag-kicker') ||
            parent.classList.contains('heading-2') ||
            parent.classList.contains('heading-20') ||
            parent.classList.contains('heading-3') ||
            parent.classList.contains('heading-4') ||
            parent.classList.contains('academy-main-title') ||
            (parent.classList.contains('text-block-7') && (parent.closest('.container-agence-home') || parent.closest('.container-agence-home-copy'))) ||
            parent.tagName === 'SCRIPT' ||
            parent.tagName === 'STYLE'
          ) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.nodeValue.trim() === '') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      },
      false
    );

    let textNode = walker.nextNode();
    while (textNode) {
      const originalValue = textNode.nodeValue;
      const normalized = normalize(originalValue);
      const found = LOOKUP_MAP.get(normalized);
      if (found && found[lang]) {
        const leadingSpace = originalValue.startsWith(' ') || originalValue.startsWith('\n') ? ' ' : '';
        const trailingSpace = originalValue.endsWith(' ') || originalValue.endsWith('\n') ? ' ' : '';
        textNode.nodeValue = leadingSpace + found[lang] + trailingSpace;
      }
      textNode = walker.nextNode();
    }
  }

  function createDropdownElement() {
    const currentLang = getCurrentLang().toUpperCase();
    const dropdown = document.createElement('div');
    dropdown.className = 'eventify-lang-dropdown';
    dropdown.innerHTML = `
      <button type="button" class="lang-dropdown-btn" aria-label="Select language">
        <span class="lang-label-text">${currentLang}</span>
        <svg class="lang-arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="lang-dropdown-menu">
        <div class="lang-dropdown-item ${currentLang === 'FR' ? 'active' : ''}" data-lang="fr">FR</div>
        <div class="lang-dropdown-item ${currentLang === 'EN' ? 'active' : ''}" data-lang="en">EN</div>
      </div>
    `;

    const btn = dropdown.querySelector('.lang-dropdown-btn');
    const items = dropdown.querySelectorAll('.lang-dropdown-item');

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('is-open');
    });

    items.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const selectedLang = item.getAttribute('data-lang');
        setLanguage(selectedLang);
        dropdown.classList.remove('is-open');
      });
    });

    return dropdown;
  }

  function updateDropdownUI(lang) {
    const upper = lang.toUpperCase();
    document.querySelectorAll('.eventify-lang-dropdown').forEach((dropdown) => {
      const label = dropdown.querySelector('.lang-label-text');
      if (label) {
        label.textContent = upper;
      }
      dropdown.querySelectorAll('.lang-dropdown-item').forEach((item) => {
        if (item.getAttribute('data-lang') === lang) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    });
  }

  function injectStyles() {
    if (document.getElementById('eventify-i18n-embedded-css')) return;
    const style = document.createElement('style');
    style.id = 'eventify-i18n-embedded-css';
    style.textContent = `
      /* Embedded Self-Healing Styles for Eventify Language Dropdown */
      .eventify-lang-dropdown {
        position: relative !important;
        display: inline-flex !important;
        align-items: center !important;
        margin-left: 14px !important;
        vertical-align: middle !important;
        font-family: Gilroy, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        z-index: 999999 !important;
      }
      .lang-dropdown-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        padding: 5px 12px !important;
        background: #000000 !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        border-radius: 6px !important;
        color: #ffffff !important;
        font-family: inherit !important;
        font-size: 0.85rem !important;
        font-weight: 800 !important;
        letter-spacing: 1px !important;
        cursor: pointer !important;
        user-select: none !important;
        transition: all 0.2s ease !important;
        line-height: 1 !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
        outline: none !important;
        box-sizing: border-box !important;
      }
      .lang-dropdown-btn:hover {
        background: #1e1e1e !important;
        border-color: rgba(255, 255, 255, 0.6) !important;
        transform: translateY(-1px) !important;
      }
      .lang-arrow-icon {
        display: inline-block !important;
        width: 11px !important;
        height: 11px !important;
        stroke: #ffffff !important;
        stroke-width: 2.5 !important;
        transition: transform 0.25s ease !important;
      }
      .eventify-lang-dropdown.is-open .lang-arrow-icon {
        transform: rotate(180deg) !important;
      }
      .lang-dropdown-menu {
        position: absolute !important;
        top: calc(100% + 6px) !important;
        right: 0 !important;
        background: #111111 !important;
        border: 1px solid #2a2a2a !important;
        border-radius: 6px !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45) !important;
        padding: 4px !important;
        min-width: 72px !important;
        z-index: 9999999 !important;
        display: none !important;
        flex-direction: column !important;
        gap: 2px !important;
        box-sizing: border-box !important;
      }
      .eventify-lang-dropdown.is-open .lang-dropdown-menu {
        display: flex !important;
      }
      .lang-dropdown-item {
        padding: 6px 10px !important;
        font-size: 0.82rem !important;
        font-weight: 700 !important;
        letter-spacing: 0.5px !important;
        color: #cccccc !important;
        text-align: center !important;
        cursor: pointer !important;
        border-radius: 4px !important;
        transition: all 0.15s ease !important;
        user-select: none !important;
        line-height: 1.2 !important;
      }
      .lang-dropdown-item:hover {
        background: #252525 !important;
        color: #ffffff !important;
      }
      .lang-dropdown-item.active {
        background: #c88321 !important;
        color: #ffffff !important;
        font-weight: 800 !important;
      }
      @media screen and (max-width: 991px) {
        .eventify-lang-dropdown {
          margin: 10px 0 10px 16px !important;
        }
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }

  function injectNavDropdowns() {
    injectStyles();

    // Remove old toggle if any
    document.querySelectorAll('.eventify-lang-toggle').forEach(el => el.remove());

    // Inject into desktop nav-menu
    document.querySelectorAll('.nav-menu.w-nav-menu').forEach((nav) => {
      if (!nav.querySelector('.eventify-lang-dropdown')) {
        const dd = createDropdownElement();
        nav.appendChild(dd);
      }
    });

    // Inject into mobile menu
    document.querySelectorAll('.menu.w-nav-menu').forEach((menu) => {
      if (!menu.querySelector('.eventify-lang-dropdown')) {
        const dd = createDropdownElement();
        menu.appendChild(dd);
      }
    });

    // Global click listener to close open dropdowns
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.eventify-lang-dropdown')) {
        document.querySelectorAll('.eventify-lang-dropdown.is-open').forEach((dd) => {
          dd.classList.remove('is-open');
        });
      }
    });
  }

  function init() {
    injectStyles();
    injectNavDropdowns();
    const activeLang = getCurrentLang();
    setLanguage(activeLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external control if needed
  window.EventifyI18n = {
    setLanguage: setLanguage,
    getLanguage: getCurrentLang
  };
})();
