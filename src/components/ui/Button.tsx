import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none rounded-xl active:scale-[0.98]';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[38px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
      lg: 'text-base px-6 py-3 min-h-[50px] gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md hover:shadow-blue-600/15 border border-blue-600',
      secondary:
        'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80',
      outline:
        'border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 shadow-sm',
      ghost:
        'text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading && (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
