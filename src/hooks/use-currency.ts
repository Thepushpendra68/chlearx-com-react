import { useState, useEffect } from 'react';

interface CurrencyInfo {
  symbol: string;
  code: string;
  isIndia: boolean;
  conversionRate: number; // USD to INR approximate rate
}

export const useCurrency = () => {
  const [currencyInfo, setCurrencyInfo] = useState<CurrencyInfo>({
    symbol: '$',
    code: 'USD',
    isIndia: false,
    conversionRate: 86.24 // Current USD to INR rate
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // First try to get location from IP
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'IN') {
          setCurrencyInfo({
            symbol: '₹',
            code: 'INR',
            isIndia: true,
            conversionRate: 86.24
          });
        } else {
          setCurrencyInfo({
            symbol: '$',
            code: 'USD',
            isIndia: false,
            conversionRate: 1
          });
        }
      } catch (error) {
        // Fallback: try timezone detection
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta')) {
            setCurrencyInfo({
              symbol: '₹',
              code: 'INR',
              isIndia: true,
              conversionRate: 86.24
            });
          }
        } catch (timezoneError) {
          // Default to USD if all detection methods fail
          console.log('Location detection failed, defaulting to USD');
        }
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const formatCurrency = (amount: number, options?: { includeSymbol?: boolean }) => {
    const { includeSymbol = true } = options || {};
    const convertedAmount = currencyInfo.isIndia ? amount * currencyInfo.conversionRate : amount;
    
    const formattedNumber = currencyInfo.isIndia 
      ? convertedAmount.toLocaleString('en-IN') 
      : convertedAmount.toLocaleString('en-US');
    
    return includeSymbol ? `${currencyInfo.symbol}${formattedNumber}` : formattedNumber;
  };

  const convertToUSD = (amount: number) => {
    return currencyInfo.isIndia ? amount / currencyInfo.conversionRate : amount;
  };

  const convertFromUSD = (amount: number) => {
    return currencyInfo.isIndia ? amount * currencyInfo.conversionRate : amount;
  };

  const formatCurrencyRange = (minAmount: number, maxAmount: number) => {
    const minConverted = currencyInfo.isIndia ? minAmount * currencyInfo.conversionRate : minAmount;
    const maxConverted = currencyInfo.isIndia ? maxAmount * currencyInfo.conversionRate : maxAmount;
    
    const minFormatted = currencyInfo.isIndia 
      ? minConverted.toLocaleString('en-IN') 
      : minConverted.toLocaleString('en-US');
      
    const maxFormatted = currencyInfo.isIndia 
      ? maxConverted.toLocaleString('en-IN') 
      : maxConverted.toLocaleString('en-US');
    
    return `${currencyInfo.symbol}${minFormatted} - ${currencyInfo.symbol}${maxFormatted}`;
  };

  return {
    currencyInfo,
    isLoading,
    formatCurrency,
    formatCurrencyRange,
    convertToUSD,
    convertFromUSD
  };
}; 