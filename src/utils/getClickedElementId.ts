type getClickedElementIdParams = {
  target: any;
  refObject?: any;
};

const getClickedElementId = ({
  target,
  refObject,
}: getClickedElementIdParams): string => {
  const targetId: string = target.id;

  if (targetId === '' && refObject) {
    const currentId: string = refObject.id;
    return currentId;
  }

  return targetId;
};

export default getClickedElementId;
