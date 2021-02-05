import React from 'react';
import Headers from 'comps/Header';
import iconLeft from 'images/back.png';
import TransTitle from 'comps/TransTitle';
import Buttons from 'comps/Button';
import RadioButtons from 'comps/RadioButtons';

import {useHistory, useLocation} from "react-router-dom";

const AddTransaction = () => {

    const history = useHistory();
    const location = useLocation();
    console.log(location);

    return <div className="addtransaction">
        <Headers headText={'Add/Edit Transaction'} iconLeft={iconLeft} />
        <div className='radiobuttons'>
            <RadioButtons />
        </div>
        <div className='input1'>
            <TransTitle text={'Transaction Title'}/>
        </div>
        <div className='input2'>
            <TransTitle text={'Amount'}/>
        </div>
        <div className='input3'>
            <TransTitle text={'Description'} height={'140px'}/>
        </div>
        <div className='button' onClick={()=>history.push('/trans')}>
            <Buttons width={'308px'} height={'52px'} fontSize={'22px'} text={'Add'}/>
        </div>        
    </div>
}
export default AddTransaction;