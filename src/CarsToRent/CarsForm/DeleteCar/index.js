import React from 'react';
import {Button} from '../AddCar/style'
import actions_b from '../../duck/actions'
import actions_d from '../../Description/duck/actions'
import {connect} from 'react-redux';


const DelButton = props =>{

    const Delete = props =>{
        props.del_brand(props.brand);
        props.del_desc(props.desc);
        window.alert(`deleted ${props.brand}`);
    };

    return(
        <div>
            <Button onClick={() => Delete(props)}>Delete car</Button>
        </div>
    )
};

const mapDispatchToProps = dispatch =>({
   del_brand: brand => dispatch(actions_b.remove(brand)),
   del_desc: desc => dispatch(actions_d.remove(desc))
});

export default connect(null,mapDispatchToProps)(DelButton);