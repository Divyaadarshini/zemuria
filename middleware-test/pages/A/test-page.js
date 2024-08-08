//A-test-page
import { useEffect, useState } from 'react';


export default function TestPageA() {
  const [divColor, setDivColor] = useState('blue');

  useEffect(() => {
    setDivColor('blue');
  }, []);

  return (
    <div>
      <h1  style={{ color: divColor }}>This is version A of the test page.</h1>
    </div>
  );
}
