import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from './db/clientSupabase';
import { toast } from 'react-toastify';

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: async ({ taskId, isDone }) => {
      try {
        await supabase
          .from('task_86')
          .update({ is_done: isDone })
          .eq('id', taskId);

      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('Task updated');
    }
  });
  
  const { mutate: deleteTask } = useMutation({
    mutationFn: async (taskId) => {
      try {
        await supabase
          .from('task_86')
          .delete()
          .eq('id', taskId);

      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
      toast.success('Task deleted');
    }
  });

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.is_done}
        onChange={() => editTask({ taskId: item.id, isDone: !item.is_done })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.is_done && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
