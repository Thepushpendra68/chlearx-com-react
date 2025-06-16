# Center Alignment Solution - Usage Examples

## Quick Reference

### Import the utility component:
```tsx
import CenteredText, { useForceCenterStyle, withCenterAlignment } from '@/components/utils/CenteredText';
```

### Or use the manual approach:
```tsx
// Add at component level
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};
```

## Method 1: Using the CenteredText Component (Recommended)

### Basic Usage
```tsx
<CenteredText className="text-xl text-gray-600 max-w-3xl leading-relaxed">
  Three powerful service pillars designed specifically for online retailers looking to 
  <span className="text-emerald-600 font-semibold"> dominate their market</span> and achieve sustainable growth.
</CenteredText>
```

### With Different HTML Elements
```tsx
{/* For headings */}
<CenteredText 
  as="h2" 
  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
>
  Your Centered Heading
</CenteredText>

{/* For div containers */}
<CenteredText 
  as="div" 
  className="text-lg text-gray-700"
>
  <span>Complex content with </span>
  <strong>multiple elements</strong>
</CenteredText>
```

### With Motion.div Wrapper
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <CenteredText className="text-xl text-gray-600 max-w-3xl leading-relaxed">
    We specialize exclusively in e-commerce marketing, understanding the unique challenges 
    and opportunities of online retail. Here's what sets us apart.
  </CenteredText>
</motion.div>
```

## Method 2: Using the Hook

```tsx
import { useForceCenterStyle } from '@/components/utils/CenteredText';

function MyComponent() {
  const forceCenter = useForceCenterStyle();
  
  return (
    <div className="w-full flex justify-center" style={forceCenter}>
      <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={forceCenter}>
        Your text content here
      </p>
    </div>
  );
}
```

## Method 3: Using the HOC (Higher-Order Component)

```tsx
import { withCenterAlignment } from '@/components/utils/CenteredText';

const MyParagraph = ({ children, className }) => (
  <p className={className}>{children}</p>
);

const CenteredParagraph = withCenterAlignment(MyParagraph);

// Usage
<CenteredParagraph className="text-xl text-gray-600">
  Your centered text
</CenteredParagraph>
```

## Method 4: Manual Implementation (Original Approach)

```tsx
// At component level
const forceCenter = {
  textAlign: 'center' as const,
  display: 'block' as const,
  width: '100%',
  margin: '0 auto',
  textAlignLast: 'center' as const
};

// In JSX
<div className="w-full flex justify-center" style={forceCenter}>
  <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={forceCenter}>
    Your text content
  </p>
</div>
```

## Real-World Examples

### Landing Page Hero Section
```tsx
<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <CenteredText 
        as="h1" 
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
      >
        Transform Your Business
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          With Our Solutions
        </span>
      </CenteredText>
      
      <CenteredText className="text-xl text-gray-600 max-w-4xl mb-8 leading-relaxed">
        We help businesses scale efficiently with cutting-edge technology and proven strategies 
        that deliver measurable results for your bottom line.
      </CenteredText>
    </motion.div>
  </div>
</section>
```

### Services Grid Section
```tsx
<section className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <CenteredText 
        as="h2" 
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Our Services
      </CenteredText>
      
      <CenteredText className="text-xl text-gray-600 max-w-3xl leading-relaxed">
        Comprehensive solutions designed to accelerate your growth and maximize your potential 
        in today's competitive marketplace.
      </CenteredText>
    </div>
    
    {/* Services grid here */}
  </div>
</section>
```

### Testimonials Section
```tsx
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <CenteredText 
      as="h2" 
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
    >
      What Our Clients Say
    </CenteredText>
    
    <CenteredText className="text-lg text-gray-600 mb-16">
      Don't just take our word for it - hear from the businesses we've helped transform.
    </CenteredText>
    
    {/* Testimonials grid here */}
  </div>
</section>
```

### Contact Section with Form
```tsx
<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <CenteredText 
        as="h2" 
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Ready to Get Started?
      </CenteredText>
      
      <CenteredText className="text-xl text-indigo-100 mb-12 leading-relaxed">
        Let's discuss how we can help transform your business with our proven strategies 
        and cutting-edge solutions.
      </CenteredText>
      
      {/* Contact form here */}
    </div>
  </div>
</section>
```

## Common Patterns

### 1. Section Headers with Descriptions
```tsx
<div className="text-center mb-16">
  <CenteredText as="h2" className="text-4xl font-bold text-gray-900 mb-6">
    Section Title
  </CenteredText>
  <CenteredText className="text-xl text-gray-600 max-w-3xl">
    Section description that explains what this section is about.
  </CenteredText>
</div>
```

### 2. Feature Cards with Centered Text
```tsx
<div className="bg-white rounded-lg p-8 shadow-lg">
  <CenteredText as="h3" className="text-2xl font-bold text-gray-900 mb-4">
    Feature Title
  </CenteredText>
  <CenteredText className="text-gray-600 leading-relaxed">
    Feature description that explains the benefits and value proposition.
  </CenteredText>
</div>
```

### 3. Call-to-Action Sections
```tsx
<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white">
  <CenteredText as="h3" className="text-3xl font-bold mb-6">
    Ready to Transform Your Business?
  </CenteredText>
  <CenteredText className="text-xl mb-8 opacity-90">
    Join thousands of businesses that have already transformed their operations.
  </CenteredText>
  {/* CTA button here */}
</div>
```

## Migration Guide

### Before (Standard Approach)
```tsx
<div className="text-center">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Text that might not center properly
  </p>
</div>
```

### After (Using CenteredText)
```tsx
<CenteredText className="text-xl text-gray-600 max-w-3xl">
  Text that will definitely center properly
</CenteredText>
```

## Performance Considerations

- The CenteredText component adds minimal overhead
- Inline styles are optimized by React
- No additional CSS bundle size
- Reusable across all components
- Type-safe with TypeScript support 