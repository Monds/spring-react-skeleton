import React, {Component} from 'react';
// import DataTable from './DataTable';
import { Header } from 'semantic-ui-react';
// import * as service from '../services/taxonomy';

class TaxonomyContainer extends Component {

    constructor(props) {
        super();
    }

    render() {
        const divStyle = {
            padding: '5%'
        };

        // const columns = [
        //     { data: 'code', name: '텍사노미코드', width: '2' },
        //     { data: 'name', name: '텍사노미명', width: '8' }
        // ];

        return (
            <div style={divStyle}>
                <Header as='h1' textAlign='left'>Grid Template</Header>
                {/* <DataTable 
                    rowGetter={service.getOntologyList}
                    columns={columns} 
                /> */}
            </div>
        )
    }
}

export default TaxonomyContainer;