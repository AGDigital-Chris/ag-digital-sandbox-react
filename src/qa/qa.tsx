import React, { createContext, useContext, useMemo } from 'react';

type QaContextValue = {
  prefixParts: string[];
};

const QaContext = createContext<QaContextValue>({ prefixParts: [] });

function toKebab(input: string): string {
  return input
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const QaProvider: React.FC<{ prefix?: string | string[]; children: React.ReactNode }> = ({ prefix, children }) => {
  const prefixParts = useMemo(() => {
    if (!prefix) return [];
    return Array.isArray(prefix) ? prefix.map(toKebab) : [toKebab(prefix)];
  }, [prefix]);

  return (
    <QaContext.Provider value={{ prefixParts }}>
      {children}
    </QaContext.Provider>
  );
};

export function useQa() {
  const { prefixParts } = useContext(QaContext);

  function qa(...parts: Array<string | undefined | null>): string {
    const cleanedParts = parts.filter(Boolean).map(p => toKebab(String(p)));
    // Format: scope1--scope2--part-subpart
    if (prefixParts.length === 0 && cleanedParts.length === 0) return '';
    if (prefixParts.length === 0) return cleanedParts.join('-');
    if (cleanedParts.length === 0) return prefixParts.join('--');
    return `${prefixParts.join('--')}--${cleanedParts.join('-')}`;
  }

  return { qa };
}

export function buildQa(prefix?: string | string[], ...parts: string[]): string {
  const prefixParts = Array.isArray(prefix) ? prefix : prefix ? [prefix] : [];
  const { qa } = { qa: (...p: string[]) => {
    const ctx: QaContextValue = { prefixParts: prefixParts.map(toKebab) };
    if (ctx.prefixParts.length === 0) return toKebab(p.join('-'));
    return `${ctx.prefixParts.join('--')}--${toKebab(p.join('-'))}`;
  }};
  return qa(...parts);
}


