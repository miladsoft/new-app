import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
          <div className="mb-10 md:mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <motion.h2 
                className={cn("text-3xl md:text-4xl font-bold mb-4 relative inline-block", titleClassName)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {title}
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                className={cn("text-lg text-muted-foreground", subtitleClassName)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
}