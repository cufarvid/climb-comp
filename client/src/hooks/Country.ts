import { useQuery } from '@apollo/client';
import { Country, Query } from '../types/__generated__';
import { LIST_COUNTRIES } from '../apollo/queries';
import { QueryHookBase } from '../types';

interface UseCountries extends QueryHookBase {
  countries: Country[] | undefined;
}

export const useCountries = (): UseCountries => {
  const { data, error, loading } = useQuery<Query>(LIST_COUNTRIES);

  return { countries: data?.countries, error, loading };
};
