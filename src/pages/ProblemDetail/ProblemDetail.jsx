import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './ProblemDetail.css';

const ProblemDetail = ({ problem }) => {
  const [code, setCode] = useState('# Write your Python code here\n\ndef solve(nums, target):\n    # Your logic goes here\n    pass');
  const [output, setOutput] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const solutionCode = `# Official Solution\ndef solve(nums, target):\n    prevMap = {} # val : index\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap:\n            return [prevMap[diff], i]\n        prevMap[n] = i\n    return`;

  const runCode = () => {
    setIsRunning(true);
    setOutput('Starting Python 3 runtime...');
    
    setTimeout(() => {
      // Simulate real checking
      if (code.includes('prevMap') && code.includes('enumerate') && code.includes('target - n')) {
        setOutput('Running test cases...\nTest Case 1: Passed ✅\nTest Case 2: Passed ✅\nTest Case 3: Passed ✅\n\nAll tests passed! Your solution is optimal.');
      } else {
        setOutput('Running test cases...\nTest Case 1: Passed ✅\nTest Case 2: Passed ✅\nTest Case 3: Failed (Unexpected output)');
      }
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="problem-detail-page">
      <Navbar />
      <div className="detail-container container">
        <div className="problem-description glass">
          <div className="desc-header">
            <h1>1. Two Sum</h1>
            <span className="difficulty diff-easy">Easy</span>
          </div>
          <div className="desc-content">
            <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.</p>
            <p>You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
            <div className="example">
              <h4>Example 1:</h4>
              <pre>
                Input: nums = [2,7,11,15], target = 9{"\n"}
                Output: [0,1]{"\n"}
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </pre>
            </div>
          </div>
        </div>

        <div className="editor-section glass">
          <div className="editor-header">
            <select className="lang-select" defaultValue="Python">
              <option>Python</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
            <div className="editor-actions">
              <button className="btn-help" onClick={() => setShowHelp(!showHelp)}>
                {showHelp ? 'Hide Help' : 'Help?'}
              </button>
              <button 
                className="btn-run" 
                onClick={runCode} 
                disabled={isRunning}
              >
                {isRunning ? 'Running...' : 'Run'}
              </button>
              <button className="btn-primary">Submit</button>
            </div>
          </div>
          <textarea 
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          
          {showHelp && (
            <div className="solution-overlay glass">
              <div className="solution-content">
                <h3>💡 Solution Hint</h3>
                <pre>{solutionCode}</pre>
                <button className="btn-copy" onClick={() => setCode(solutionCode)}>Copy to Editor</button>
              </div>
            </div>
          )}
          <div className="output-panel">
            <h4>Output:</h4>
            <pre className={output.includes('Failed') ? 'text-error' : 'text-success'}>
              {output || 'No output yet. Click "Run" to test your code.'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
