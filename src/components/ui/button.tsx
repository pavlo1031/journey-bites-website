import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-base line-height-[28px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'px-5 py-3',
        sm: 'rounded-md px-4 py-2',
        lg: 'rounded-md px-8',
      },
      variant: {
        default: 'bg-primary text-white hover:bg-primary-300 hover:border-primary-300 active:bg-primary-400 active:border-primary-400',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-primary text-primary bg-white hover:bg-primary-300 hover:text-white hover:border-primary-300 active:bg-primary-400 active:border-primary-400',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        fullLink: 'block text-grey-500 w-full py-4 text-center mb-3 rounded-lg',
        link: 'text-primary underline-offset-4 hover:underline',
        pillPrimary: 'border-2 border-primary rounded-full text-primary font-bold hover:bg-primary-300 hover:border-primary-300 active:bg-primary-400  active:border-primary-400 hover:text-white',
        icon: 'flex w-11 h-11 bg-primary-100 color-primary border-none rounded-full hover:bg-primary-300 active:bg-primary-400 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? <Loader2 className='h-6 w-6 animate-spin' /> : children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
