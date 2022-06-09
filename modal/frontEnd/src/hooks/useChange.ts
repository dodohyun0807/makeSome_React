import React, { useCallback, useState, useTransition } from 'react';

const useChange = <T extends { value: string }>(
  initalState: string,
): [string, React.Dispatch<React.SetStateAction<string>>, (e: React.ChangeEvent<T>) => void] => {
  const [value, setValue] = useState(initalState);
  const [isPending, startTransition] = useTransition();
  const onChange = useCallback(
    (e: React.ChangeEvent<T>) => {
      startTransition(() => {
        setValue(e.target.value);
      });
    },
    [value],
  );

  return [value, setValue, onChange];
};

export default useChange;
