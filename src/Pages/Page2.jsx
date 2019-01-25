import * as React from 'react';
import {Link} from "react-router-dom";
import TestComponent from "../components/TestComponent";
import {MdKeyboardBackspace} from 'react-icons/md'
import {Icon} from 'react-fa';

const Page2 = () => (
  <div className='page2'>
    <TestComponent/>
    <Link to={'/'}>Go back home</Link><MdKeyboardBackspace/><Icon spin name={'spinner'}/>
  </div>
);

export default Page2
