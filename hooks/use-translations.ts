"use client";

import { useTranslations as useNextIntlTranslations } from 'next-intl';
import { useLanguage } from '@/components/language-provider';
import { useEffect, useState } from 'react';

export function useTranslations() {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messages = await import(`../messages/${language}.json`);
        setMessages(messages.default);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load messages:', error);
        // Fallback to English
        const fallbackMessages = await import(`../messages/en.json`);
        setMessages(fallbackMessages.default);
        setLoading(false);
      }
    };

    loadMessages();
  }, [language]);

  const t = (key: string) => {
    if (loading || !messages) return key;
    
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return t;
}
