import { SectionWrapper, SectionHeading, Card, IconBox, Badge } from './ui';
import { useInView } from '../hooks/useInView';

/* ── Icon components ───────────────────────────────────────────── */

function ShieldIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function SimulationIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M10 9l5 3-5 3V9z" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function LadderIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M7 6h10" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
      <path d="M7 18h10" />
      <path d="M4 22l3-3 3 3" />
      <path d="M14 2l3 3 3-3" />
    </svg>
  );
}

function GraphIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <circle cx="19" cy="11" r="2" />
      <circle cx="5" cy="11" r="2" />
      <path d="M12 7.5V12" />
      <path d="M7 11l3.5-4.5" />
      <path d="M17 11l-3.5-4.5" />
      <path d="M5 13v3.5" />
      <path d="M19 13v3.5" />
      <path d="M7.5 18.5l4-6.5" />
      <path d="M16.5 18.5l-4-6.5" />
    </svg>
  );
}

function DashboardIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="4" rx="1.5" />
      <rect x="14" y="10" width="7" height="11" rx="1.5" />
      <rect x="3" y="13" width="7" height="8" rx="1.5" />
    </svg>
  );
}

/* ── Product data ──────────────────────────────────────────────── */

const productLayers = [
  {
    title: 'AI Work Passport',
    description:
      'The credential layer. Stores verified proof of what a person can safely do with AI agents.',
    icon: ShieldIcon,
    variant: 'electric',
    badge: 'Core Credential',
  },
  {
    title: 'Simulation Engine',
    description:
      'The evidence layer. Creates realistic AI-agent work simulations that test judgment, verification, and escalation.',
    icon: SimulationIcon,
    variant: 'teal',
    badge: 'Evidence',
  },
  {
    title: 'Autonomy Ladder',
    description:
      'The capability layer. Translates proof into permitted levels of AI work, from personal use to workflow leadership.',
    icon: LadderIcon,
    variant: 'purple',
    badge: 'Levels',
  },
  {
    title: 'Workforce Authority Graph',
    description:
      'The mapping layer. Connects people, roles, workflow domains, and readiness into a deployable intelligence graph.',
    icon: GraphIcon,
    variant: 'navy',
    badge: 'Intelligence',
  },
  {
    title: 'Employer Readiness Dashboard',
    description:
      'The command layer. Shows where talent can be deployed now, where training is needed, and where autonomy should be restricted.',
    icon: DashboardIcon,
    variant: 'electric',
    badge: 'Deployment',
  },
];

/* ── Layer card ─────────────────────────────────────────────────── */

function LayerCard({ layer, index, isHero = false, isVisible }) {
  const Icon = layer.icon;

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Card
        gradient={isHero}
        hover
        className={`h-full ${isHero ? 'md:p-10 lg:p-12' : ''}`}
      >
        {/* Top row: icon + badge */}
        <div className="flex items-start justify-between mb-5">
          <IconBox variant={layer.variant} size={isHero ? 'lg' : 'md'}>
            <Icon className={isHero ? 'w-7 h-7' : 'w-6 h-6'} />
          </IconBox>
          <Badge variant={layer.variant === 'electric' ? 'default' : layer.variant}>
            {layer.badge}
          </Badge>
        </div>

        {/* Layer number */}
        <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
          Layer {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3
          className={`font-bold tracking-tight text-navy-900 mb-3 ${
            isHero ? 'text-xl md:text-2xl' : 'text-lg'
          }`}
        >
          {layer.title}
        </h3>

        {/* Description */}
        <p className={`leading-relaxed text-slate-600 ${isHero ? 'text-base md:text-lg max-w-2xl' : 'text-sm'}`}>
          {layer.description}
        </p>

        {/* Decorative accent line */}
        <div
          className={`mt-6 h-0.5 w-12 rounded-full ${
            {
              electric: 'bg-electric-400',
              teal: 'bg-teal-400',
              purple: 'bg-purple-400',
              navy: 'bg-navy-400',
            }[layer.variant]
          }`}
        />
      </Card>
    </div>
  );
}

/* ── Main section ──────────────────────────────────────────────── */

export default function ProductOverview() {
  const [cardsRef, cardsVisible] = useInView({ threshold: 0.05 });

  const heroLayer = productLayers[0];
  const gridLayers = productLayers.slice(1);

  return (
    <SectionWrapper id="product" bg="white">
      <SectionHeading
        id="product"
        badge="Product"
        title="Workforce Infrastructure, Not a Course Platform"
        subtitle="The product architecture is deliberately not a training platform. It is workforce infrastructure that proves readiness and enables deployment."
      />

      <div ref={cardsRef}>
        {/* Hero card — full width */}
        <LayerCard
          layer={heroLayer}
          index={0}
          isHero
          isVisible={cardsVisible}
        />

        {/* 2×2 grid for layers 2–5 */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6">
          {gridLayers.map((layer, i) => (
            <LayerCard
              key={layer.title}
              layer={layer}
              index={i + 1}
              isVisible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
