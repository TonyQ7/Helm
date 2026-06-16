import { useInView } from '../hooks/useInView';

export function SectionWrapper({ id, children, className = '', bg = 'white', pattern = '' }) {
  const [ref, isVisible] = useInView();

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-slate-50',
    navy: 'bg-navy-900 text-white',
    gradient: 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white',
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 overflow-hidden ${bgClasses[bg] || bgClasses.white} ${pattern} ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ id, badge, title, subtitle, center = true, dark = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16 md:mb-20`}>
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 ${dark
          ? 'bg-white/10 text-electric-300 border border-white/10'
          : 'bg-electric-50 text-electric-600 border border-electric-100'
          }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        id={id ? `${id}-heading` : undefined}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 ${dark ? 'text-white' : 'text-navy-900'
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500 cursor-pointer';

  const variants = {
    primary: 'bg-electric-500 text-white hover:bg-electric-600 shadow-lg shadow-electric-500/25 hover:shadow-xl hover:shadow-electric-500/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-navy-800 border-2 border-navy-200 hover:border-electric-400 hover:text-electric-600 hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'text-electric-500 hover:bg-electric-50 hover:text-electric-600',
    dark: 'bg-white text-navy-900 hover:bg-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
    outline_light: 'border-2 border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return <button className={classes} onClick={onClick} {...props}>{children}</button>;
}

export function Card({ children, className = '', hover = true, gradient = false }) {
  return (
    <div className={`
      relative rounded-2xl bg-white border border-slate-200/80 p-6 md:p-8
      ${hover ? 'card-hover' : ''}
      ${gradient ? 'gradient-border' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-electric-50 text-electric-600 border-electric-100',
    teal: 'bg-teal-50 text-teal-600 border-teal-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    navy: 'bg-navy-50 text-navy-600 border-navy-100',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    warning: 'bg-amber-50 text-amber-600 border-amber-200',
    danger: 'bg-red-50 text-red-600 border-red-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function IconBox({ children, variant = 'electric', size = 'md', className = '' }) {
  const variants = {
    electric: 'bg-electric-50 text-electric-500',
    teal: 'bg-teal-50 text-teal-500',
    purple: 'bg-purple-50 text-purple-500',
    navy: 'bg-navy-50 text-navy-600',
    gradient: 'bg-gradient-to-br from-electric-50 to-teal-50 text-electric-500',
  };

  const sizes = {
    sm: 'w-10 h-10 rounded-lg',
    md: 'w-12 h-12 rounded-xl',
    lg: 'w-14 h-14 rounded-xl',
  };

  return (
    <div className={`flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}

export function Divider({ className = '' }) {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent ${className}`} />
  );
}
