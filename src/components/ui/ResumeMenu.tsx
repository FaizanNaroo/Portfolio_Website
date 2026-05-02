'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const RESUME_OPTIONS = [
  {
    label: 'Backend Resume',
    description: 'PDF',
    href: '/Fezaan%20Backend_Resume.pdf',
    downloadName: 'Fezaan Backend_Resume.pdf',
  },
  {
    label: 'AI/ML Resume',
    description: 'PDF',
    href: '/Fezaan%20AI_Resume.pdf',
    downloadName: 'Fezaan AI_Resume.pdf',
  },
];

type ResumeMenuVariant = 'nav' | 'heroDownload' | 'heroPreview' | 'footerLink' | 'mobile';

type ResumeMenuProps = {
  label: string;
  variant?: ResumeMenuVariant;
  align?: 'left' | 'center' | 'right';
  download?: boolean;
  leadingIcon?: LucideIcon;
  subtitle?: string;
};

const getVariantStyles = (variant: ResumeMenuVariant) => {
  switch (variant) {
    case 'heroDownload':
      return {
        buttonClassName:
          'group flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-[#0a0e27] font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_22px_#00b8ff55] active:scale-95',
        iconClassName: 'w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5',
        chevronClassName: 'w-3 h-3 transition-transform group-hover:rotate-180',
        showDecorations: false,
      };
    case 'heroPreview':
      return {
        buttonClassName:
          'group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 text-foreground font-semibold text-sm transition-all duration-300 hover:from-primary/25 hover:to-secondary/25 hover:border-secondary/60 hover:shadow-[0_0_18px_#00b8ff30] active:scale-95',
        iconClassName:
          'w-4 h-4 text-secondary transition-transform duration-300 group-hover:scale-110',
        chevronClassName: 'w-3 h-3 transition-transform group-hover:rotate-180',
        showDecorations: false,
      };
    case 'footerLink':
      return {
        buttonClassName:
          'group text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2',
        iconClassName: 'w-4 h-4',
        chevronClassName: 'w-3 h-3 transition-transform group-hover:rotate-180',
        showDecorations: false,
      };
    case 'mobile':
      return {
        buttonClassName:
          'flex items-center justify-between w-full p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 mb-4 group',
        iconClassName: 'w-4 h-4 text-primary',
        chevronClassName: 'w-4 h-4 text-primary rotate-270 group-hover:translate-x-1 transition-transform',
        showDecorations: false,
      };
    case 'nav':
    default:
      return {
        buttonClassName: 'group relative px-4 py-2 overflow-hidden',
        iconClassName: 'w-4 h-4',
        chevronClassName: 'w-3 h-3 group-hover:rotate-180 transition-transform',
        showDecorations: true,
      };
  }
};

const getMenuAlignment = (align: ResumeMenuProps['align']) => {
  switch (align) {
    case 'left':
      return 'left-0';
    case 'center':
      return 'left-1/2 -translate-x-1/2';
    case 'right':
    default:
      return 'right-0';
  }
};

const ResumeMenu = ({
  label,
  variant = 'nav',
  align = 'right',
  download = false,
  leadingIcon: LeadingIcon = FileText,
  subtitle = 'PDF · Updated 2024',
}: ResumeMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const styles = getVariantStyles(variant);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const renderButtonContent = () => {
    if (variant === 'mobile') {
      return (
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform">
            <LeadingIcon className={styles.iconClassName} />
          </div>
          <div>
            <p className="font-medium text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex items-center gap-2">
        <LeadingIcon className={styles.iconClassName} />
        <span className="text-sm font-medium">{label}</span>
        <ChevronDown className={styles.chevronClassName} />
      </div>
    );
  };

  return (
    <div ref={menuRef} className="relative inline-flex">
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: variant === 'footerLink' ? 1 : 1.05 }}
        whileTap={{ scale: variant === 'footerLink' ? 1 : 0.95 }}
        className={styles.buttonClassName}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {styles.showDecorations && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            <div className="absolute inset-0 bg-primary/10 rounded-lg group-hover:bg-transparent transition-colors" />
          </>
        )}
        <div className={variant === 'nav' ? 'relative flex items-center gap-2 text-foreground group-hover:text-primary-foreground transition-colors z-10' : ''}>
          {renderButtonContent()}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${getMenuAlignment(align)} mt-2 min-w-[220px] rounded-lg border border-primary/20 bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/10 z-50`}
            role="menu"
          >
            <div className="py-2">
              {RESUME_OPTIONS.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={download ? undefined : '_blank'}
                  rel={download ? undefined : 'noopener noreferrer'}
                  download={download ? option.downloadName : undefined}
                  className="flex flex-col px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium text-foreground">{option.label}</span>
                  <span className="text-xs text-muted-foreground">{option.description}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeMenu;
