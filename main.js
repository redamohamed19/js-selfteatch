function truthCheck(collection, pre) {
  for (let col of collection) {
    if (!col[pre]) {
      return false;
    }

    console.log(col[pre]);
  }
  return true;
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' }
  ],
  'sex'
);
