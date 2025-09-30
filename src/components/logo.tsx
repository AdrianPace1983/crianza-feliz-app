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
        <Baby className="h-5 w-5" />
      </div>
      <span>Crianza Feliz</span>
    </div>
  );
}
