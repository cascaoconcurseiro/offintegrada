import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:shadow-lg hover:bg-destructive/90 active:scale-95",
        outline:
          "border border-border bg-background/60 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:shadow-md hover:bg-secondary/80 active:scale-95",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-95",
        link: 
          "text-primary underline-offset-4 hover:underline",
        
        // Enhanced Premium Variants
        gradient:
          "bg-gradient-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-accent-red/20 hover:scale-105 active:scale-95 font-semibold",
        "gradient-accent":
          "bg-gradient-accent text-accent-red-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:scale-105 active:scale-95 font-semibold",
        glow:
          "bg-accent-red text-accent-red-foreground shadow-lg hover:shadow-glow hover:scale-105 active:scale-95 font-semibold animate-pulse-glow",
        premium:
          "bg-gradient-to-r from-primary via-primary-light to-accent-red text-primary-foreground shadow-xl border border-accent-red/20 hover:shadow-2xl hover:border-accent-red/40 hover:scale-105 active:scale-95 font-bold",
        glass:
          "glass-effect text-foreground hover:bg-white/20 hover:shadow-lg hover:scale-105 active:scale-95 backdrop-blur-md",
        success:
          "bg-success text-success-foreground shadow-md hover:shadow-lg hover:bg-success/90 active:scale-95",
        warning:
          "bg-warning text-warning-foreground shadow-md hover:shadow-lg hover:bg-warning/90 active:scale-95",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {leftIcon && !loading && (
          <span className="mr-2 flex items-center">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="ml-2 flex items-center">{rightIcon}</span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }