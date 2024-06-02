import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DropdownMenuComponent({ triggerButton, children }: { triggerButton: React.ReactNode, children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='focus-visible:outline-none'>
        {triggerButton}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[196px] p-4' align='start'>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
