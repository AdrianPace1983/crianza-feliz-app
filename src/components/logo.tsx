import { Baby } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 text-lg font-semibold tracking-tight',
        className
      )}
    >
      <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2Z" />
          <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
          <path d="M12 12a10 10 0 0 0-10 10" />
          <path d="M22 12a10 10 0 0 0-10 10" />
        </svg>
      </div>
      <span>Crianza Feliz</span>
    </div>
  );
}
