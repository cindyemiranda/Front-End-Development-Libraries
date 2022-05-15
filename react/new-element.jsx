const JSX = <h1>Hello JSX!</h1>;
//Create a Complex JSX Element
const JSX1=<div>
  <h1>This is the title</h1>
  <p>This is the paragraph.</p>
  <ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
  </ul>
</div>;
//Add Comments in JSX
const JSX2 = (
    <div>
      {/*This is a code in react. */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

//Render HTML Elements to the DOM
const JSX3 = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX3, document.getElementById('challenge-node'));

 //Define an HTML Class in JSX
 const JSX4 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );
