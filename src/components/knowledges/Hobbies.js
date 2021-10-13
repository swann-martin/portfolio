import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-mountain"></i>
          <span>Escalade</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i> <span>Randonnées</span>
        </li>

        <li className="hobby">
          <i className="fab fa-bitcoin"></i> <span>Blockchain, Web3</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i> <span>Ecologie</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book"></i> <span>Science-fiction, Fantasy</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
