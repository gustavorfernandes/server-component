import { Stock } from './types';

export async function getStocks(): Promise<Stock[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL as string, {
    next: { revalidate: 1440 },
  });
  return response.json();
}
