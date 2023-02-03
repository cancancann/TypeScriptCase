import React from 'react';

interface Props {
  body: string;
}

const Card: React.FC<Props> = ({ body }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {body}
    </div>
  );
};

export default Card;