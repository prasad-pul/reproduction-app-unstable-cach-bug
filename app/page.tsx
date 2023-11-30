/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
    
  <pre>This is a test to report a <em>bug in the <b>unstable_cache</b></em></pre>
  <br></br>
  <pre>To experience the bug, follow these steps:</pre>
  <ul>
    <li><pre><b>Navigate to <em>localhost:3000/1</em></b></pre></li>
    <li style={{paddingLeft: "10px"}}><pre>Expected:  <em>Output: <b>1</b></em></pre></li>
    <li><pre><b>Refresh Page</b></pre></li>
    <li style={{paddingLeft: "10px"}}><pre>Expected:  <em>Output: <b>1</b></em></pre></li>
    <li><pre><b>Navigate to <em>localhost:3000/2</em></b></pre></li>
    <li style={{paddingLeft: "10px"}}><pre>Expected:  <em>Output: <b>undefined</b></em></pre></li>
    <li><pre><b>Refresh Page</b></pre></li>
    <li style={{paddingLeft: "10px"}}><pre>Expected:  <em>Output: <b>undefined</b></em></pre></li>
    <li style={{paddingLeft: "10px"}}><pre>Actual:  <em style={{color:"red"}}>Error: Unexpected token u in JSON at position 0</em></pre></li>
  </ul>
  </>
  )
}
