//B-test-page
import { useEffect, useState } from 'react';


export default function TestPageB() {
  const [divColor, setDivColor] = useState('orange');

  useEffect(() => {
    setDivColor('orange');
  }, []);

  return (
    <div>
      <h1  style={{ color: divColor }}>This is version B of the test page.</h1>
    </div>
  );
}
