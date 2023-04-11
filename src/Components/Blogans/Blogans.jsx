import React from 'react';

const Blogans = () => {
    return (
        <div className='w-10/12 mx-auto '>
              {/* first question */}
              <div className="card w-full my-10 shadow-lg bg-amber-100 hover:bg-violet-500 hover:text-white  hover:shadow-teal-200 transform duration-700 hover:scale-110 ease-in-out">
            <div className="card-body">
              <h2 className="text-2xl font-bold">a. When should you use context API?</h2>
              <p>i.want to share data with many components at different nesting levels. (Like a theme, for example, when you change from white to black, all components need to switch their colors, icon, and so on)</p>
              <p>ii.
              When the same prop (data) is passed through several components as an intermediate:
              </p>
              <p>
                iii.When the state is changed by many components, in this case, it's complicated for each change to deliver the new data to other components manually. Making them connected to the same global state (one source of truth) will make the code cleaner and easy to maintain and debug.
              </p>
            </div>
           </div> 
           {/* question 2 */}
           <div className="card my-10 w-full shadow-lg bg-amber-100 hover:bg-green-500 hover:text-white  hover:shadow-teal-200 transform duration-700 hover:scale-110 ease-in-out">
            <div className="card-body">
              <h2 className="text-2xl font-bold">b. What is a custom hook?</h2>
              <p>From version 16.8, React Hooks are officially added to React.js. Besides built-in Hooks such as: useState, useEffect, useCallback…, we can define our own hooks to use state and other React features without writing a class.</p>
            </div>
           </div>
           {/* q3 */}
           <div className="card my-10 w-full shadow-lg bg-amber-100 hover:bg-blue-500 hover:text-white  hover:shadow-teal-200 transform duration-700 hover:scale-110 ease-in-out">
            <div className="card-body">
              <h2 className="text-2xl font-bold">c. What is useRef?</h2>
              <p>One of the various hooks included in React is the useRef hook; it is used to reference an object inside a functional component and preserves the referenced object's state between re-renders.

useRef has a property called "current" used to retrieve the value of the referenced object at any time while also accepting an initial value as an argument. You can change the value of a referenced object by updating the current value.</p>
            </div>
           </div>
           {/* q-4  */}
           <div className="card my-10 w-full shadow-lg bg-amber-100 hover:bg-red-500 hover:text-white  hover:shadow-teal-200 transform duration-700 hover:scale-110 ease-in-out">
            <div className="card-body">
              <h2 className="text-2xl font-bold">d. What is useMemo?</h2>
              <p>The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs.</p>
            </div>
           </div>
        </div>
    );
};

export default Blogans;