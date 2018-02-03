import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            totalPages: 0,
            content: []
        };
    }

    componentDidMount() {
        this.fetchData(this.state.page);
    }

    fetchData = async (page) => {
        const result = await this.props.rowGetter(page);
        const content = result.data.content;
        this.setState({ content: content, totalPages: result.data.totalPages });
    }

    onPageChange = (event, data) => {
        this.fetchData(data.activePage);
    }

    render() {
        return (
            <div>
                <Table celled fixed size='small'>
                    <Table.Header>
                        <Table.Row>
                            {this.props.columns.map((column, index) => {
                                return (
                                    <Table.HeaderCell width={column.width}>{column.name}</Table.HeaderCell>
                                );
                            })}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.content.map((row, index) => {
                            return (
                                <Table.Row>
                                    {this.props.columns.map((column, index) => {
                                        return (
                                            <Table.Cell>{row[column.data]}</Table.Cell>
                                        );
                                    })}
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
                <Pagination
                    defaultActivePage='1'
                    boundaryRange='3'
                    onPageChange={this.onPageChange.bind(this)}
                    totalPages={this.state.totalPages}
                />
            </div>
        )
    }
}

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rowGetter: PropTypes.func.isRequired
}

export default DataTable;