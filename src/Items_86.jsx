import SingleItem_86 from './SingleItem_86';

import { useQuery } from '@tanstack/react-query';

import { supabase } from './db/clientSupabase';

const Items_86 = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      try {
        let { data, error } = await supabase.from('task_86').select('*');
        console.log('data', data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  console.log('tasks', data);

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ marginTop: '1rem' }}>{error.response.data}</p>;
  }

  return (
    <div className='items'>
      {data.map((item) => {
        return <SingleItem_86 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_86;