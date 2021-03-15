import React from 'react';

const SectionTitle = (props) => {
  const { title, paragraph } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default SectionTitle;