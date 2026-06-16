import { SectionWrapper, SectionHeading, Card, IconBox } from './ui';
import { useInView } from '../hooks/useInView';

const riskCards = [
  {
    title: 'Recruiting & Talent',
    description:
      'A junior recruiter touches candidate data through AI-automated pipelines. One bad decision cascades across the hiring funnel.',
    riskLabel: 'High Risk',
    variant: 'electric',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Financial Analysis',
    description:
      'An analyst works with financial context in AI-assisted reports. Unchecked outputs create compliance exposure.',
    riskLabel: 'Unmanaged Risk',
    variant: 'teal',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Customer Communication',
    description:
      'A sales rep creates external-facing messages with AI agents. Unverified content reaches clients.',
    riskLabel: 'High Risk',
    variant: 'purple',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Operations',
    description:
      'An operations user updates core systems through AI workflows. Unvalidated changes propagate downstream.',
    riskLabel: 'Unmanaged Risk',
    variant: 'navy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
];

function RiskBadge({ label }) {
  const isHigh = label === 'High Risk';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${
        isHigh
          ? 'bg-red-50 text-red-600 border border-red-200/80'
          : 'bg-amber-50 text-amber-600 border border-amber-200/80'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isHigh ? 'bg-red-500' : 'bg-amber-500'
        } animate-pulse`}
      />
      {label}
    </span>
  );
}

function RiskCard({ card, index }) {
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Card hover className="h-full flex flex-col">
        {/* Top row: icon + risk badge */}
        <div className="flex items-start justify-between mb-5">
          <IconBox variant={card.variant} size="lg">
            {card.icon}
          </IconBox>
          <RiskBadge label={card.riskLabel} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy-900 mb-3 tracking-tight">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Bottom accent line */}
        <div
          className={`mt-6 h-0.5 w-full rounded-full opacity-40 ${
            {
              electric: 'bg-electric-400',
              teal: 'bg-teal-400',
              purple: 'bg-purple-400',
              navy: 'bg-navy-400',
            }[card.variant]
          }`}
        />
      </Card>
    </div>
  );
}

export default function Problem() {
  return (
    <SectionWrapper id="problem" bg="white">
      <SectionHeading
        id="problem"
        badge="The Problem"
        title="Enterprises Cannot Safely Scale AI-Agent Work Without Knowing Who Is Ready"
        subtitle="The risk is not that employees lack AI training. The sharper risk is that enterprises cannot tell who can be trusted with which AI workflow."
      />

      {/* 2×2 Risk Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {riskCards.map((card, index) => (
          <RiskCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
