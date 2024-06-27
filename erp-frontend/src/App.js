import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [variables, setVariables] = useState({ orderId: 123, amount: 1000 });
  const [workflowStatus, setWorkflowStatus] = useState(null);

  const startWorkflow = async () => {
    try {
      const response = await axios.post('http://localhost:4000/start-workflow', {
        workflowKey: 'orderApproval',
        variables
      });
      setWorkflowStatus(response.data);
    } catch (error) {
      console.error('Error starting workflow:', error);
    }
  };

  return (
    <div className="App">
      <h1>ERP Solution</h1>
      <button onClick={startWorkflow}>Start Workflow</button>
      {workflowStatus && <pre>{JSON.stringify(workflowStatus, null, 2)}</pre>}
    </div>
  );
}

export default App;
