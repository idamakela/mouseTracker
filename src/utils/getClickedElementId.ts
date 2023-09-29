import React from 'react'

type getClickedElementIdParams = {
  e: React.MouseEvent;
  refObject?: React.RefObject<T>;
};

const getClickedElementId = ({ e, refObject }: getClickedElementIdParams): string => {
  const targetId: string = e.target.id;

  if (targetId === '' && refObject) {
    const currentId: string = refObject.id;
    return currentId;
  }

  return targetId;
};

export default getClickedElementId;
