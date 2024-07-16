import React, { useState } from 'react';
import axios from 'axios';

const Userinput = ({ onResult }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/submit", formData);
      onResult(response.data);
    } catch (err) {
      setError('Error occurred while sending data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Input 1:
          <input type="text" name="input1" value={formData.input1} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Input 2:
          <input type="text" name="input2" value={formData.input2} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <button type="submit" disabled={loading}>Submit</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default Userinput;
