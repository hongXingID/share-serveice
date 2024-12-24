export function toObject(data) {
  if (typeof data === 'object') {
    let result = {};
    for (let key in data) {
      const item = data[key];
      const value = {
        type: typeof item,
        key,
      };
      result[key] = value;
    }
    return result;
  }

  if (typeof data === 'function') {
    return {
      type: 'function',
      data: data.name,
    };
  }

  return {
    type: typeof data,
    data,
  };
}
