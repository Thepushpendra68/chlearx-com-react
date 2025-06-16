/**
 * ===============================================
 * CONTRAST ENHANCER UTILITY
 * ===============================================
 * 
 * A systematic solution for text contrast issues across the website.
 * 
 * PROBLEM SOLVED: Dark text on dark backgrounds and light text with opacity issues
 * causing poor readability across the website.
 * 
 * USAGE: Import and apply the appropriate style objects to fix contrast issues.
 * 
 * @author ContrastEnhancer
 * @version 1.0.0
 */

export interface ContrastStyle {
  color?: string;
  textShadow?: string;
  fontWeight?: string;
  opacity?: string;
  textAlign?: 'center' | 'left' | 'right';
  display?: string;
  width?: string;
  margin?: string;
  textAlignLast?: 'center' | 'left' | 'right';
}

export class ContrastEnhancer {
  
  /**
   * Center alignment fix for text alignment issues
   */
  static forceCenter: ContrastStyle = {
    textAlign: 'center',
    display: 'block',
    width: '100%',
    margin: '0 auto',
    textAlignLast: 'center'
  };

  /**
   * High contrast white text for dark backgrounds (headings, important text)
   * Best for: Dark gradient backgrounds, bg-gray-900, bg-black
   */
  static forceHighContrast: ContrastStyle = {
    color: '#ffffff !important',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    fontWeight: '600',
    opacity: '1 !important'
  };

  /**
   * Light gray text for dark backgrounds (descriptions, body text)
   * Best for: bg-white/10, bg-white/20, backdrop-blur sections
   */
  static forceDescriptionContrast: ContrastStyle = {
    color: '#e5e7eb !important',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)',
    fontWeight: '500',
    opacity: '1 !important'
  };

  /**
   * Very light text for extremely dark backgrounds
   * Best for: Very dark gradients, overlays with bg-black/50+
   */
  static forceLightContrast: ContrastStyle = {
    color: '#f3f4f6 !important',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)',
    opacity: '1 !important'
  };

  /**
   * White text with strong shadow for dark backgrounds
   * Best for: Hero sections, CTA sections on dark backgrounds
   */
  static forceWhiteContrast: ContrastStyle = {
    color: '#ffffff !important',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
    fontWeight: '600',
    opacity: '1 !important'
  };

  /**
   * Dark text for light backgrounds (about page pattern)
   * Best for: White backgrounds, light gradients
   */
  static forceDarkContrast: ContrastStyle = {
    color: '#000000 !important',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
    fontWeight: '600',
    opacity: '1 !important'
  };

  /**
   * Medium dark text for light backgrounds (descriptions)
   * Best for: White/light backgrounds for body text
   */
  static forceDarkDescriptionContrast: ContrastStyle = {
    color: '#1f2937 !important',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
    opacity: '1 !important'
  };

  /**
   * Enhanced card background styles
   */
  static cardBackgroundStyles = {
    /**
     * Enhanced glass effect for better text visibility
     */
    enhancedGlass: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    },

    /**
     * Light glass effect for light backgrounds
     */
    lightGlass: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    }
  };

  /**
   * Detect and fix contrast issues automatically
   * @param textClass - The current text class to analyze
   * @param backgroundContext - Description of the background context
   * @returns Recommended style object
   */
  static detectAndFix(textClass: string, backgroundContext: 'dark' | 'light' | 'glass' | 'gradient-dark' | 'gradient-light'): ContrastStyle {
    const isDarkBackground = ['dark', 'glass', 'gradient-dark'].includes(backgroundContext);
    const isLightBackground = ['light', 'gradient-light'].includes(backgroundContext);

    // Check for problematic patterns
    const isGrayText = /text-gray-[3-6]/.test(textClass);
    const isWhiteWithOpacity = /text-white\/[0-9]/.test(textClass);
    const isLowOpacity = /\/[1-7]0/.test(textClass); // opacity 10-70%

    if (isDarkBackground) {
      if (isGrayText) {
        return this.forceDescriptionContrast;
      }
      if (isWhiteWithOpacity || isLowOpacity) {
        return this.forceHighContrast;
      }
      return this.forceWhiteContrast;
    }

    if (isLightBackground) {
      if (isGrayText && backgroundContext === 'light') {
        return this.forceDarkDescriptionContrast;
      }
      return this.forceDarkContrast;
    }

    // Default to high contrast for safety
    return this.forceHighContrast;
  }

  /**
   * Apply contrast enhancement to multiple elements
   * @param elements - Array of element selectors and their contexts
   */
  static enhanceMultiple(elements: Array<{selector: string; context: 'dark' | 'light' | 'glass' | 'gradient-dark' | 'gradient-light'; textClass?: string}>) {
    return elements.map(element => ({
      selector: element.selector,
      style: element.textClass 
        ? this.detectAndFix(element.textClass, element.context)
        : (element.context.includes('dark') ? this.forceHighContrast : this.forceDarkContrast)
    }));
  }

  /**
   * Get search patterns for finding contrast issues
   */
  static getAuditPatterns() {
    return {
      problematicGrayText: [
        'text-gray-300',
        'text-gray-400', 
        'text-gray-500',
        'text-gray-600'
      ],
      lowOpacityText: [
        'text-white/70',
        'text-white/80', 
        'text-white/90',
        'text-black/70',
        'text-black/80'
      ],
      transparentBackgrounds: [
        'bg-white/10',
        'bg-white/20',
        'bg-black/10',
        'bg-black/20'
      ],
      backdropBlurSections: [
        'backdrop-blur-sm',
        'backdrop-blur-md',
        'backdrop-blur-lg'
      ]
    };
  }

  /**
   * Generate comprehensive style combinations
   */
  static createStyleCombination(baseStyle: ContrastStyle, additionalStyles: Partial<ContrastStyle> = {}): ContrastStyle {
    return {
      ...baseStyle,
      ...additionalStyles
    };
  }

  /**
   * Centered high contrast text (common pattern)
   */
  static get centeredHighContrast(): ContrastStyle {
    return this.createStyleCombination(this.forceHighContrast, this.forceCenter);
  }

  /**
   * Centered description contrast (common pattern)
   */
  static get centeredDescriptionContrast(): ContrastStyle {
    return this.createStyleCombination(this.forceDescriptionContrast, this.forceCenter);
  }

  /**
   * Centered dark text (for light backgrounds)
   */
  static get centeredDarkContrast(): ContrastStyle {
    return this.createStyleCombination(this.forceDarkContrast, this.forceCenter);
  }

  /**
   * Centered dark description (for light backgrounds)
   */
  static get centeredDarkDescriptionContrast(): ContrastStyle {
    return this.createStyleCombination(this.forceDarkDescriptionContrast, this.forceCenter);
  }
}

/**
 * ===============================================
 * USAGE EXAMPLES
 * ===============================================
 * 
 * // Import the utility
 * import { ContrastEnhancer } from '@/utils/contrastEnhancer';
 * 
 * // Apply to JSX elements
 * <h1 style={ContrastEnhancer.forceHighContrast}>White text on dark background</h1>
 * <p style={ContrastEnhancer.forceDescriptionContrast}>Description on dark background</p>
 * <h2 style={ContrastEnhancer.centeredHighContrast}>Centered white heading</h2>
 * 
 * // Detect and fix automatically
 * const style = ContrastEnhancer.detectAndFix('text-gray-400', 'dark');
 * 
 * // Enhanced backgrounds
 * <div style={ContrastEnhancer.cardBackgroundStyles.enhancedGlass}>
 *   Better visibility card
 * </div>
 * 
 * // Audit existing code
 * const patterns = ContrastEnhancer.getAuditPatterns();
 * // Use patterns.problematicGrayText to search for issues
 * 
 * ===============================================
 * SYSTEMATIC AUDIT CHECKLIST
 * ===============================================
 * 
 * 1. 🔍 Search for text-gray-[300-600] classes
 * 2. 🔍 Search for text-white/[opacity] classes
 * 3. 🔍 Search for bg-white/[low-opacity] with dark text
 * 4. 🔍 Search for backdrop-blur sections
 * 5. 🎯 Check dark gradient backgrounds
 * 6. 🎯 Check transparent card backgrounds
 * 7. 🚀 Apply appropriate ContrastEnhancer styles
 * 8. ✅ Test on actual dark/light backgrounds
 * 
 * QUICK FIX FORMULA:
 * - Dark background + gray text = forceDescriptionContrast
 * - Dark background + white text with opacity = forceHighContrast  
 * - Light background + dark text issues = forceDarkContrast
 * - Need centering + contrast = use centered combinations
 */ 