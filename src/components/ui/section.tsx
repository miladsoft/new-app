import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function Section({ 
  id,
  title, 
  subtitle, 
  children, 
  className,
  containerClassName,
  titleClassName,
  subtitleClassName
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-12 md:py-16 lg:py-20 w-full", className)}
    >
      <div className={cn("container px-4 mx-auto max-w-7xl", containerClassName)}>
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className={cn("text-2xl md:text-3xl font-semibold tracking-tight mb-3", titleClassName)}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn("text-muted-foreground", subtitleClassName)}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}