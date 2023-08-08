import './styles.css'
import * as vars from "./constants";
import {letters} from "./constants";
function MyButton(){
    let content;

    if(vars.borderCurve === "border") {
        content = <section>Hello</section>;
    } else {
        content = <section>Hi</section>;
    }

    return (
        <div>
            {content}
            <p>Placeholder {vars.borderCurve==='border-curve'?("Yes"):('No')}</p>
            <button className={vars.borderCurve}>Button Component</button>
        </div>
    );
}

function Letters(){
    const listItems = letters.map(iterate =>
        <li
            key = {iterate.id}
            style = {{
                color: iterate.show ? 'red' : 'blue'
            }}
        >
            {iterate.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}

function AlertButton(){
    function handleClick(){
        alert('Working...');
    }

    return (
        <button className={vars.borderCurve} onClick={handleClick}>
            Is it Working?
        </button>
    )
}

export default function MyApp(){
  return (
      <div>
        <h1>
          Welcome
        </h1>
        <MyButton />
          {vars.borderCurve}
          <Letters />
          <AlertButton />
      </div>
  );
}
