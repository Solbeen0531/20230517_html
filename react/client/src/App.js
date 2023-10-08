/* 실습 095
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import reactThrottle from './R095_reactThrottle';

class App extends Component() {
  render(){
  return (
    <div className='App'>
      <HeaderAdmin />
      <Route exact path='/' Component={LoginForm}/>
      <Route exact path='/Throttle' Component={reactThrottle}/>
    </div>
  );
}}

export default App;
*/

/* 실습 089
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';

class App extends Component() {
  render(){
  return (
    <div className='App'>
      <Route exact path='/' Component={reactRouter}/>
      <Route exact path='/reactRouter2' Component={reactRouter2}/>
    </div>
  );
}}

export default App;
*/

import React from 'react';
import './App.css';
import FunctionComponent from './R030_FunctionComponent';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <FunctionComponent contents="[THIS IS FunctionComponent ]" />
    </div>
  );
}

export default App;

/* 실습 030
import React from 'react';
import './App.css';
import FunctionComponent from './R030_FunctionComponent';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <FunctionComponent contents="[THIS IS FunctionComponent ]" />
    </div>
  );
}

export default App;
*/

//////////////////////////////////////////////////////

/* 실습 028
import React from 'react';
import './App.css';
import PureComponentClass from './R028_PureComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PureComponentClass/>
    </div>
  );
}

export default App;
*/

/* 실습 027
import React from 'react';
import './App.css';
import ComponentClass from './R027_ComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ComponentClass/>
    </div>
  );
}

export default App;
*/

/* 실습 026
import React from 'react';
import './App.css';
import ForceUpdate from './R026_ForceUpdate'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ForceUpdate/>
    </div>
  );
}

export default App;
*/

/* 실습 025
import React from 'react';
import './App.css';
import SetState from './R025_SetState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <SetState/>
    </div>
  );
}

export default App;
*/

/* 실습 024
import React from 'react';
import './App.css';
import ReactState from './R024_ReactState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactState reactString={"react"}/>
    </div>
  );
}

export default App;
*/

/* 실습 023
import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
*/

/* 실습 022
import React from 'react';
import './App.css';
import PropsDefault from './R022_PropsDefault'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDefault ReactNumber={200}/>
    </div>
  );
}

export default App;
*/

/* 실습 021
import React from 'react';
import './App.css';
import PropsRequired from './R021_PropsRequired'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsRequired ReactNumber={200}/>
    </div>
  );
}

export default App;
*/

/* 실습 020
import React from 'react';
import './App.css';
import PropsObjVal from './R020_PropsObjVal'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
    </div>
  );
}

export default App;
*/

/* 실습 019
import React from 'react';
import './App.css';
import PropsBoolean from './R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/>
    </div>
  );
}

export default App;
*/

/* 실습 018
import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;
*/

/* 실습 017
import React from 'react';
import './App.css';
import Props from './R017_Props'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Props props_val="THIS IS PROPS"/>
    </div>
  );
}

export default App;
*/

/* 실습 016

import React from 'react';
import './App.css';
import Jquery from './R016_Jquery'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Jquery/>
    </div>
  );
}

export default App;
*/

/* 실습 015
import React from 'react';
import './App.css';
import Map from './R015_Map'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Map/>
    </div>
  );
}

export default App;
*/

/* 실습 014
import React from 'react';
import './App.css';
import ForEach from './R014_ForEach'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ForEach/>
    </div>
  );
}

export default App;
*/

/* 실습 013
import React from 'react';
import './App.css';
import ArrowFunc from './R013_ArrowFunction'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ArrowFunc/>
    </div>
  );
}

export default App;
*/

/* 실습 012
import React from 'react';
import './App.css';
import ClassPrototype from './R012_Class&Prototype'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ClassPrototype/>
    </div>
  );
}

export default App;
*/

/* 실습 011
import React from "react";
import './App.css'
import SpreadOperator from './R011_SpreadOperator';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <SpreadOperator/>
    </div>
  );
}

export default App;
*/

/* 실습 010
import React from "react";
import './App.css'
import Variable from './R010_Variable';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <Variable/>
    </div>
  );
}

export default App;
*/

/* 실습 009
import React from "react";
import './App.css'
import ES6 from './R009_Es6';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <ES6/>
    </div>
  );
}

export default App;
*/

/* 실습 008
import React from "react";
import './App.css'
import LifecycleEx from './R008_LifecycleEx';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <LifecycleEx
        prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
*/

/* 실습 007
import React from "react";
import './App.css'
import LifecycleEx from './R007_LifecycleEx';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <LifecycleEx
        prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
*/

/* 실습 006
import React from "react";
import './App.css'
import LifecycleEx from './R006_LifecycleEx';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <LifecycleEx
        prop_value = 'FromApp.js'/>
    </div>
  );
}

export default App;
*/

/* 실습 005
import React from "react";
import './App.css'
import LifecycleEx from './R005_LifecycleEx';

function App () {
  return (
    <div>
      <h1> Start React 200! </h1>
      <p> CSS 적용하기 </p>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;
*/

/* 실습 004 
import React from 'react';
import './App.css';
import LifecycleEx from './R004_LifecycleEx';

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;
*/