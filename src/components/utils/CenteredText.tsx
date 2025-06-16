import React from 'react';

// Custom styles to force center alignment
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};

interface CenteredTextProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  style?: React.CSSProperties;
}

/**
 * CenteredText Component
 * 
 * A utility component that forces text to be center-aligned even when 
 * standard Tailwind classes fail due to CSS specificity conflicts,
 * Motion.div wrappers, or complex layouts.
 * 
 * @param children - The text content to be centered
 * @param className - Additional CSS classes for the text element
 * @param containerClassName - Additional CSS classes for the container div
 * @param as - HTML element type (default: 'p')
 * @param style - Additional inline styles for the text element
 * 
 * Usage:
 * <CenteredText className="text-xl text-gray-600">
 *   Your text content here
 * </CenteredText>
 */
export const CenteredText: React.FC<CenteredTextProps> = ({
  children,
  className = '',
  containerClassName = '',
  as: Component = 'p',
  style = {}
}) => {
  const combinedStyle = { ...forceCenter, ...style };
  
  return (
    <div 
      className={`w-full flex justify-center ${containerClassName}`} 
      style={forceCenter}
    >
      <Component 
        className={className} 
        style={combinedStyle}
      >
        {children}
      </Component>
    </div>
  );
};

/**
 * Hook version - returns the forceCenter style object
 * Use this when you need more control over the JSX structure
 */
export const useForceCenterStyle = () => forceCenter;

/**
 * Higher-order component version
 * Wraps any component with the force center alignment
 */
export const withCenterAlignment = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithCenterAlignmentComponent = (props: P) => (
    <div className="w-full flex justify-center" style={forceCenter}>
      <WrappedComponent {...props} style={forceCenter} />
    </div>
  );
  
  WithCenterAlignmentComponent.displayName = `withCenterAlignment(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithCenterAlignmentComponent;
};

export default CenteredText; 