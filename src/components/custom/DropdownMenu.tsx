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
      <DropdownMenuContent className='p-4 min-w-[196px]' align='start'>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
