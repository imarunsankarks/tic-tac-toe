import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [pname, setPName] = useState(name);
  const [toggleName, setToggleName] = useState(true);
  const handleEdit = () => {
    setToggleName(!toggleName);
  };
  return (
    <li>
      <span className="player">
        {!toggleName && (
          <input
            type="text"
            required
            value={pname}
            onChange={(e) => setPName(e.target.value)}
          />
        )}
        {toggleName && <span className="player-name">{pname}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{toggleName ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
