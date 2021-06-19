import { QueryHookBase } from '../types';
import { Query, Region } from '../types/__generated__';
import { useQuery } from '@apollo/client';
import { LIST_REGIONS } from '../apollo/queries';

interface UseRegions extends QueryHookBase {
  regions: Region[] | undefined;
}

export const useRegions = (): UseRegions => {
  const { data, error, loading } = useQuery<Query>(LIST_REGIONS);

  return { regions: data?.regions, error, loading };
};
